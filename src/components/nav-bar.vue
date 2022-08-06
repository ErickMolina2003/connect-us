<template>
  <v-app-bar color="var(--v-primary-base)" dense dark flat class="mt-4 ml-4">
    <v-row>
      <v-toolbar-title>
        <h2>Tus Proyectos</h2>
      </v-toolbar-title>
    </v-row>

    <v-spacer></v-spacer>

    <v-row class="mt-4" justify="end">
      <v-spacer></v-spacer>
      <v-col class="" lg="4" md="4" cols="4">
        <h3 class="mt-2 text-right">Erick Molina</h3>
      </v-col>
      <v-col lg="2" md="2" cols="2">
        <v-img
          src="../assets/usuarios/perfil.svg"
          max-height="45px"
          max-width="45px"
        ></v-img>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "NavBar",
})
export default class NavBar extends Vue {}
</script>

<style scoped></style>
