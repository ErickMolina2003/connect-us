<template>
  <v-card class="chat-card mx-auto my-6" max-width="250" max-height="400">
    <v-img height="124" src="../assets/chats-img/chat-default.svg"></v-img>

    <h4 class="white--text text-center mt-3">{{ proyectoNombre }}</h4>

    <v-card-text class="pt-0">
      <h5 class="white--text text-center">{{ ticketsPorcentaje }}%</h5>
    </v-card-text>

    <v-row justify="center" class="pt-2">
      <v-col lg="2" md="2" cols="2">
        <v-icon class="white--text">mdi-account-group</v-icon>
      </v-col>
      <v-col lg="8" md="8" cols="8">
        <h5 class="white--text">{{ proyectoMiembros }} Miembros</h5>
      </v-col>
    </v-row>

    <v-row justify="center" class="pt-2">
      <v-col lg="2" md="2" cols="2">
        <v-icon class="white--text">mdi-ticket</v-icon>
      </v-col>
      <v-col lg="8" md="8" cols="8">
        <h5 class="white--text">{{ proyectoTickets }} Tickets</h5>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col lg="9" md="9" cols="9">
        <v-btn rounded color="var(--v-success-base)" @click="verInformacion"
          >Ver Informacion</v-btn
        >
      </v-col>
    </v-row>
  </v-card>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
  name: "ChatCard",
})
export default class ChatCard extends Vue {
  /**
   * prop typed through the decorators arguments
   */
  @Prop({ type: Number, default: null })
  proyectoId: number | undefined;

  @Prop({ type: String, default: "" })
  proyectoNombre: string | undefined;

  @Prop({ type: Number, default: "" })
  proyectoMiembros: number | undefined;

  @Prop({ type: Number, default: "" })
  proyectoTickets: number | undefined;

  @Prop({ type: Number, default: "" })
  ticketsPorcentaje: number | undefined;

  verInformacion() {
    this.$router.push(`/detalle/${this.proyectoId}`);
  }
}
</script>

<style scoped>
.chat-card {
  background-color: var(--v-primary-darken2);
  border-radius: 30px;
}
</style>
