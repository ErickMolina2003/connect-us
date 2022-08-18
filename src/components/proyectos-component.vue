<template>
  <v-row class="ma-5">
    <v-col
      md="2"
      lg="2"
      cols="2"
      v-for="proyecto in proyectos"
      :key="proyecto.id"
    >
      <proyecto-card
        :proyectoId="proyecto.id"
        :proyectoNombre="proyecto.nombre"
        :proyectoMiembros="proyecto.miembros"
        :proyectoTickets="proyecto.tickets"
        :ticketsPorcentaje="proyecto.porcentaje_proyecto"
      ></proyecto-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { Component } from "vue-property-decorator";
import ProyectoCard from "./proyectos-card.vue";

@Component({
  name: "ProyectosCard",
  components: { ProyectoCard },
})
export default class ProyectosCard extends Vue {
  proyectos = [];

  async mounted() {
    const response = await axios({
      method: "GET",
      url: "http://localhost:3000/proyectos",
      responseType: "json",
    });

    this.proyectos = response.data;
  }
}
</script>
