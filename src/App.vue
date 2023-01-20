<template>
  <v-app>
    <v-container class="d-flex flex-column  justify-center w-75">

    
    <!-- <v-app-bar>
      <h2>ヘッダー</h2>
    </v-app-bar> -->
    <div class="d-flex justify-center">
    <nav>
      <v-button-navigation>
        <v-btn>
          <router-link to="/concept">Concept</router-link>
        </v-btn>
        <v-btn>
          <router-link to="/plan">Plan</router-link>
        </v-btn>
        <v-btn>
          <router-link to="/fair">Fair</router-link>
        </v-btn>
        <v-btn>
          <router-link to="/contact">Contact</router-link>
        </v-btn>
      </v-button-navigation>

    </nav>
  </div>
    <!-- ページごとに違う部分 -->
    <router-view />

    <v-footer>
      <h2>フッター</h2>
    </v-footer>
  </v-container>
  </v-app>
</template>
<script>
export default {
  name: "App",

}
</script>
<style>
/* cssを書く */
</style>