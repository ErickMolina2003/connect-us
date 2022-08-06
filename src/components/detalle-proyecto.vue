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
              >
                <v-row justify="space-around">
                  <v-col cols="8" md="8" lg="8">
                    <v-row>
                      <v-col cols="12" md="12" lg="12">
                        <h4>SideBar 1 - Create component for main sidebar</h4>
                      </v-col>
                      <v-col cols="12" md="12" lg="12">
                        <h4>12h - Por hacer</h4>
                      </v-col>
                    </v-row>
                  </v-col>

                  <v-col cols="3" md="3" lg="3" align-self="center">
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
                            <h4>1110</h4>
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
                            <h4>12h</h4>
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

              <v-col class="miembro-container mb-4" lg="5" md="5" cols="5">
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
                        <h3>Erick Molina (eralejo2003@gmail.com)</h3>
                      </v-col>
                      <v-col cols="12" md="12" lg="12">
                        <h3>Jr. Front-end developer</h3>
                      </v-col>
                      <v-col cols="12" md="12" lg="12">
                        <h3>69 tickets</h3>
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
import { Component } from "vue-property-decorator";

@Component({
  name: "UsuarioCuenta",
})
class UsuarioCuenta extends Vue {
  text = "moremdsamdsa";
  tabs = null;
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
