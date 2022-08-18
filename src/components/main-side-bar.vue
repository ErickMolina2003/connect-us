<template>
  <v-navigation-drawer
    color="var(--v-primary-darken1)"
    v-model="drawer"
    :mini-variant.sync="mini"
    permanent
    app
  >
    <v-list-item class="px-2 mt-6">
      <v-row justify="center">
        <v-img
          contain
          src="../assets/connect-us-logo.png"
          width="3rem"
          height="3rem"
        ></v-img>
      </v-row>
    </v-list-item>

    <v-list-item v-if="!mini" class="py-2">
      <v-row justify="center">
        <h4 class="white--text">Connect Us</h4>
      </v-row>
    </v-list-item>

    <v-divider class="my-2" color="var(--v-white)"></v-divider>

    <v-list dense>
      <v-list-item
        class="py-1"
        v-for="item in items"
        :key="item.title"
        link
        :to="item.to"
        @click="active(item)"
      >
        <v-list-item-icon>
          <v-icon :class="item.color">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title :class="item.color">{{
            item.title
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <v-list-item link to="/">
        <v-list-item-icon>
          <v-icon color="var(--v-error-base)">mdi-account-cancel</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="error--text base--text" @click="logOut"
            >Salir</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "MainSideBar",
})
export default class MainSideBar extends Vue {
  drawer = true;
  items = [
    {
      title: "Mis Tickets",
      icon: "mdi-ticket",
      to: "/ticket",
      color: "white--text",
    },
    {
      title: "Mis Proyectos",
      icon: "mdi-sitemap-outline",
      to: "/proyectos",
      color: "white--text",
    },
  ];

  mini = false;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  active(item: any) {
    this.items.forEach((i) => {
      i.title != "Eventos"
        ? (i.color = "white--text")
        : (i.color = "success--text text--lighten-1");

      i == item ? (i.color = "success--text text--base") : "";
    });
  }

  logOut() {
    window.localStorage.clear();
    this.$router.push("/");
  }
}
</script>

<style scoped></style>
