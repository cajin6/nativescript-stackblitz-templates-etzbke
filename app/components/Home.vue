<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <Label class="action-bar-title" text="Lista de Estudiantes"></Label>
    </ActionBar>

    <StackLayout class="layout">
      <Button text="Agregar Estudiante" @tap="showAddStudentDialog"></Button>

      <ListView class="list" for="student in students">
        <v-template>
          <StackLayout class="student-item">
            <Label :text="student.name" class="student-name"></Label>
            <Label :text="'Edad: ' + student.age" class="student-age"></Label>
          </StackLayout>
        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>

<script>
import { Page, StackLayout, Button, Label, ListView, confirm } from '@nativescript/core';

export default {
  data() {
    return {
      students: [
        { name: 'Juan', age: 20 },
        { name: 'María', age: 22 },
        { name: 'Carlos', age: 19 },
      ],
    };
  },
  methods: {
    showAddStudentDialog() {
      confirm({
        title: 'Agregar Estudiante',
        message: 'Ingrese el nombre y la edad del estudiante:',
        okButtonText: 'Agregar',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result) {
          const name = result.text.trim();
          const age = parseInt(result.text.trim());

          if (name !== '' && !isNaN(age)) {
            this.students.push({ name, age });
          }
        }
      });
    },
  },
};
</script>
