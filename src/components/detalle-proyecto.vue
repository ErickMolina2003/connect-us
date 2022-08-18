<template>
  <v-container class="contenedor mt-4">
    <v-card class="pa-5 rounded-xl" color="var(--v-primary-darken4)" dark>
      <v-tabs background-color="var(--v-primary-darken4)" v-model="tabs">
        <v-tab> Tickets </v-tab>
        <v-tab> Miembros </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <v-card color="var(--v-primary-darken4)" dark flat>
            <v-row class="pt-4">
              <v-col
                class="ticket-container mx-5 my-2"
                lg="12"
                md="12"
                cols="12"
                v-for="ticket in proyectoTickets"
                :key="ticket.id_ticket"
              >
                <v-row justify="space-around">
                  <v-col cols="7" md="7" lg="7">
                    <v-row>
                      <v-col cols="12" md="12" lg="12">
                        <h4>{{ ticket.nombre_ticket }}</h4>
                      </v-col>
                      <v-col cols="12" md="12" lg="12">
                        <h4>
                          {{ new Date(ticket.tiempo_ticket).getMinutes() }}h -
                          {{ ticket.estado }}
                        </h4>
                      </v-col>
                    </v-row>
                  </v-col>

                  <v-col cols="4" md="4" lg="4" align-self="center">
                    <v-row>
                      <v-col>
                        <v-row justify="end">
                          <v-col cols="4" md="4" lg="4" class="pr-0">
                            <v-img
                              src="../assets/usuarios/perfil.svg"
                              max-height="45px"
                              max-width="45px"
                            ></v-img>
                          </v-col>
                          <v-col
                            align-self="center"
                            cols="4"
                            md="4"
                            lg="4"
                            class="pl-0"
                          >
                            <h4>{{ ticket.id_ticket }}</h4>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col align-self="center">
                        <v-row>
                          <v-col cols="2" md="2" lg="2" class="pr-0">
                            <v-icon color="var(--v-success-lighten1)"
                              >mdi-clock-time-eight</v-icon
                            >
                          </v-col>
                          <v-col cols="4" md="4" lg="4" class="pl-1">
                            <h4>
                              {{ new Date(ticket.tiempo_ticket).getMinutes() }}h
                            </h4>
                          </v-col>
                          <v-col cols="3" md="3" lg="3" class="pl-1">
                            <v-icon
                              class="red--text"
                              @click="deleteTicket(ticket.id_ticket)"
                              >mdi-delete</v-icon
                            >
                          </v-col>
                          <v-col cols="3" md="3" lg="3" class="pl-1">
                            <v-icon
                              color="var(--v-success-base)"
                              @click="edit(ticket.id_ticket)"
                              >mdi-pencil</v-icon
                            >
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card color="var(--v-primary-darken4)" dark flat>
            <v-row class="pt-4" justify="space-around">
              <v-col
                class="miembro-container mb-4"
                lg="5"
                md="5"
                cols="5"
                v-for="miembro in proyectoMiembros"
                :key="miembro.id"
              >
                <v-row>
                  <v-col lg="4" md="4" cols="4" class="mb-2">
                    <v-img
                      class="ml-auto mr-auto"
                      contain
                      src="../assets/usuarios/perfil.svg"
                      max-height="9rem"
                      max-width="9rem"
                    ></v-img>
                  </v-col>
                  <v-col lg="6" md="6" cols="6">
                    <v-row>
                      <v-col cols="12" md="12" lg="12">
                        <h3>
                          {{ miembro.nombre }} {{ miembro.apellido }} ({{
                            miembro.correo
                          }})
                        </h3>
                      </v-col>
                      <v-col cols="12" md="12" lg="12">
                        <h3>{{ miembro.rol }}</h3>
                      </v-col>
                      <v-col cols="12" md="12" lg="12">
                        <h3>{{ miembro.total_tickets }} tickets</h3>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { Component } from "vue-property-decorator";

@Component({
  name: "UsuarioCuenta",
})
class UsuarioCuenta extends Vue {
  tabs = null;

  proyectoId = 0;

  proyectoTickets = [];

  proyectoMiembros = [];

  async mounted() {
    this.proyectoId = parseInt(this.$route.params.pathMatch);

    const responseTickets = await axios({
      method: "GET",
      url: `http://localhost:3000/proyecto/${this.proyectoId}/tickets`,
      responseType: "json",
    });

    const responseMiembros = await axios({
      method: "GET",
      url: `http://localhost:3000/proyecto/${this.proyectoId}/miembros`,
      responseType: "json",
    });

    this.proyectoTickets = responseTickets.data;
    this.proyectoMiembros = responseMiembros.data;
  }

  deleteTicket(idTicket: number) {
    console.log(idTicket);
  }

  edit(idTicket: number) {
    console.log(idTicket);
  }
}

export default UsuarioCuenta;
</script>

<style scoped>
.ticket-container,
.miembro-container {
  background-color: var(--v-primary-lighten1);
  border-radius: 20px 20px 20px !important;
}
</style>
