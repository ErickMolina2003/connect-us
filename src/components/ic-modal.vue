<template>
  <v-card color="#3b5982" rounded="xl" width="800px">
    <v-container>
      <v-row justify="center" class="mt-2">
        <v-col class="text-container" lg="12" md="12" cols="12">
          <h1 class="text-center white--text">
            {{ ticket.ticket_nombre }}
          </h1>
        </v-col>
      </v-row>

      <v-row justify="space-around" class="text-container">
        <v-col cols="5" lg="5" md="5">
          <h3 class="text-center white--text">Tiempo estimado:</h3>
        </v-col>
        <v-col cols="5" lg="5" md="5">
          <h3 class="text-center white--text">
            {{ new Date(ticket.tiempo_estimado).getMinutes() }}h
          </h3>
        </v-col>
      </v-row>

      <v-row justify="space-around" class="text-container">
        <v-col cols="5" lg="5" md="5">
          <h3 class="text-center white--text">Prioridad:</h3>
        </v-col>
        <v-col cols="5" lg="5" md="5">
          <h3 class="text-center white--text">
            {{ ticket.prioridad_descripcion }}
          </h3>
        </v-col>
      </v-row>

      <v-row justify="space-around" class="text-container">
        <v-col cols="5" lg="5" md="5">
          <h3 class="text-center white--text">Estado:</h3>
        </v-col>
        <v-col cols="5" lg="5" md="5">
          <h3 class="text-center white--text">{{ ticket.estado }}</h3>
        </v-col>
      </v-row>

      <v-row justify="space-around" class="text-container">
        <v-col cols="5" lg="5" md="5">
          <h3 class="text-center white--text">Descipcion:</h3>
        </v-col>
        <v-col cols="5" lg="5" md="5">
          <h3 class="text-center white--text">
            {{ ticket.ticket_descripcion }}
          </h3>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
interface Ticket {
  id_proyecto: number;
  id_ticket: number;
  nombre_ticket: string;
  descripcion_ticket: string;
  tiempo_ticket: Date;
  estado: string;
  prioridad: string;
  empleado_id: number;
}
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
  name: "IcModal",
})
export default class ProyectosCard extends Vue {
  @Prop({ type: Object })
  ticket: Ticket | undefined;
}
</script>

<style scoped>
.text-container {
  background-color: var(--v-primary-darken4) !important;
  border-radius: 20px;
  margin-bottom: 0.5rem;
}
</style>
