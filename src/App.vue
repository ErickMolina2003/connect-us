<template>
  <v-app>
    <v-main class="main-background">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import MainSideBar from "@/components/main-side-bar.vue";

@Component({
  components: {
    MainSideBar,
  },
})
class App extends Vue {}

export default App;
</script>

<style>
.main-background {
  background-color: var(--v-primary-base);
}
</style>