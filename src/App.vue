<template>
  <div id="app">
    <TopBar />
    <router-view class="pt-16"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TopBar from "@/components/topbar/TopBar.vue";

export default {
  components: {
    TopBar,
  }
};
</script>