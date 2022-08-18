<template>
  <v-container class="mt-10">
    <v-row justify="space-around">
      <v-col cols="4" md="3" lg="3" class="title-container">
        <h1 class="white--text text-center">Por Hacer</h1>
      </v-col>
      <v-col cols="4" md="3" lg="3" class="title-container">
        <h1 class="white--text text-center">Haciendo</h1>
      </v-col>
      <v-col cols="4" md="3" lg="3" class="title-container">
        <h1 class="white--text text-center">Hecho</h1>
      </v-col>
    </v-row>
    <v-row justify="space-around" class="mt-10">
      <v-col cols="4" md="3" lg="3" class="title-container">
        <v-row
          class="pa-2"
          v-for="ticket in ticketsPorHacer"
          :key="ticket.id_ticket"
        >
          <v-card class="mx-auto" width="100%" color="#414883" rounded="xl">
            <v-card-text>
              <p class="text-h4 white--text">{{ ticket.ticket_nombre }}</p>
              <v-btn
                color="var(--v-primarybright-base)"
                class="white--text"
                width="100%"
                readonly
                >{{ ticket.proyecto_nombre }}</v-btn
              >
            </v-card-text>
            <v-card-text>
              <v-row>
                <v-col cols="2" md="2" lg="2" class="pr-0">
                  <v-icon class="white--text">mdi-clock</v-icon>
                </v-col>
                <v-col cols="2" md="7" lg="7" class="pl-0">
                  <p class="white--text">
                    {{ new Date(ticket.tiempo_estimado).getMinutes() }}h
                  </p>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="2" md="2" lg="2" class="pr-0">
                  <v-icon class="white--text">mdi-arrow-up-thick</v-icon>
                </v-col>
                <v-col cols="6" md="6" lg="6" class="pl-0">
                  <p class="white--text">{{ ticket.prioridad_descripcion }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="2" md="2" lg="2" class="pr-0">
                  <v-icon class="white--text">mdi-ticket</v-icon>
                </v-col>
                <v-col cols="2" md="7" lg="7" class="pl-0">
                  <p class="white--text">{{ ticket.id }}</p>
                </v-col>
              </v-row>
            </v-card-text>

            <v-card-text>
              <v-row justify="center">
                <v-col cols="6" lg="6" md="6">
                  <v-dialog transition="dialog-top-transition" max-width="800">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="var(--v-success-base)"
                        rounded
                        v-bind="attrs"
                        v-on="on"
                        >Ver Informacion</v-btn
                      >
                    </template>
                    <template>
                      <ic-modal :ticket="ticket"></ic-modal>
                    </template>
                  </v-dialog>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>
      <v-col cols="4" md="3" lg="3" class="title-container">
        <v-row
          class="pa-2"
          v-for="ticket in ticketsHaciendo"
          :key="ticket.id_ticket"
        >
          <v-card class="mx-auto" width="100%" color="#414883" rounded="xl">
            <v-card-text>
              <p class="text-h4 white--text">{{ ticket.ticket_nombre }}</p>
              <v-btn
                color="var(--v-primarybright-base)"
                class="white--text"
                width="100%"
                readonly
                >{{ ticket.proyecto_nombre }}</v-btn
              >
            </v-card-text>
            <v-card-text>
              <v-row>
                <v-col cols="2" md="2" lg="2" class="pr-0">
                  <v-icon class="white--text">mdi-clock</v-icon>
                </v-col>
                <v-col cols="2" md="7" lg="7" class="pl-0">
                  <p class="white--text">
                    {{ new Date(ticket.tiempo_estimado).getMinutes() }}h
                  </p>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="2" md="2" lg="2" class="pr-0">
                  <v-icon class="white--text">mdi-arrow-up-thick</v-icon>
                </v-col>
                <v-col cols="6" md="6" lg="6" class="pl-0">
                  <p class="white--text">{{ ticket.prioridad_descripcion }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="2" md="2" lg="2" class="pr-0">
                  <v-icon class="white--text">mdi-ticket</v-icon>
                </v-col>
                <v-col cols="2" md="7" lg="7" class="pl-0">
                  <p class="white--text">{{ ticket.id }}</p>
                </v-col>
              </v-row>
            </v-card-text>

            <v-card-text>
              <v-row justify="center">
                <v-col cols="6" lg="6" md="6">
                  <v-dialog transition="dialog-top-transition" max-width="800">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="var(--v-success-base)"
                        rounded
                        v-bind="attrs"
                        v-on="on"
                        >Ver Informacion</v-btn
                      >
                    </template>
                    <template>
                      <ic-modal :ticket="ticket"></ic-modal>
                    </template>
                  </v-dialog>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>
      <v-col cols="4" md="3" lg="3" class="title-container">
        <v-row
          class="pa-2"
          v-for="ticket in ticketsHechos"
          :key="ticket.id_ticket"
        >
          <v-card class="mx-auto" width="100%" color="#414883" rounded="xl">
            <v-card-text>
              <p class="text-h4 white--text">{{ ticket.ticket_nombre }}</p>
              <v-btn
                color="var(--v-primarybright-base)"
                class="white--text"
                width="100%"
                readonly
                >{{ ticket.proyecto_nombre }}</v-btn
              >
            </v-card-text>
            <v-card-text>
              <v-row>
                <v-col cols="2" md="2" lg="2" class="pr-0">
                  <v-icon class="white--text">mdi-clock</v-icon>
                </v-col>
                <v-col cols="2" md="7" lg="7" class="pl-0">
                  <p class="white--text">
                    {{ new Date(ticket.tiempo_estimado).getMinutes() }}h
                  </p>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="2" md="2" lg="2" class="pr-0">
                  <v-icon class="white--text">mdi-arrow-up-thick</v-icon>
                </v-col>
                <v-col cols="6" md="6" lg="6" class="pl-0">
                  <p class="white--text">{{ ticket.prioridad_descripcion }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="2" md="2" lg="2" class="pr-0">
                  <v-icon class="white--text">mdi-ticket</v-icon>
                </v-col>
                <v-col cols="2" md="7" lg="7" class="pl-0">
                  <p class="white--text">{{ ticket.id }}</p>
                </v-col>
              </v-row>
            </v-card-text>

            <v-card-text>
              <v-row justify="center">
                <v-col cols="6" lg="6" md="6">
                  <v-dialog transition="dialog-top-transition" max-width="800">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="var(--v-success-base)"
                        rounded
                        v-bind="attrs"
                        v-on="on"
                        >Ver Informacion</v-btn
                      >
                    </template>
                    <template>
                      <ic-modal :ticket="ticket"></ic-modal>
                    </template>
                  </v-dialog>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
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
import { Component } from "vue-property-decorator";
import axios from "axios";
import IcModal from "./ic-modal.vue";

@Component({
  name: "TicketsComponent",
  components: { IcModal },
})
export default class TicketsComponent extends Vue {
  tickets = [];
  ticketsPorHacer: Ticket[] = [];
  ticketsHechos: Ticket[] = [];
  ticketsHaciendo: Ticket[] = [];

  async mounted() {
    const empleado_id = window.localStorage.getItem("idEmpleado");
    const tickets = await axios({
      method: "GET",
      url: `http://localhost:3000/ticket/${empleado_id}`,
      responseType: "json",
    });
    this.filtrarTickets(tickets.data);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filtrarTickets(tickets: Array<Ticket>) {
    tickets.filter((ticket) => {
      if (ticket.estado == "Por hacer") {
        this.ticketsPorHacer.push(ticket);
      }
      if (ticket.estado == "Haciendo") {
        this.ticketsHaciendo.push(ticket);
      }
      if (ticket.estado == "Hecho") {
        this.ticketsHechos.push(ticket);
      }
    });
  }
}
</script>

<style scoped>
.title-container {
  background-color: var(--v-primary-darken3) !important;
  border-radius: 25px;
}
</style>
