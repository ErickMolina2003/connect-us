<template>
  <v-row class="ma-5">
    <v-col class="px-1" v-for="i in items" :key="i">
      <proyecto-card></proyecto-card>
      <!-- <proyecto-card :proyectoId="i"></proyecto-card> -->
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import ProyectoCard from "./proyectos-card.vue";

@Component({
  name: "ProyectosCard",
  components: { ProyectoCard },
})
export default class ProyectosCard extends Vue {
  items = [1, 2, 3, 4, 5];
}
</script>
