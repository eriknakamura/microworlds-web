<template>
  <div id="mw-topbar-toggle" class="z-10">
      <button type="button" v-on:click="handelClick" class="w-12 h-12 inline-block" title="Menu">
        <div
          class="tog-bar"
          :class="{'bg-white tog-bar-1-open' : checkTog() , 'bg-black' : !checkTog()}"
        ></div>
        <div
          class="tog-bar"
          :class="{'bg-white tog-bar-2-open' : checkTog() , 'bg-black' : !checkTog()}"
        ></div>
        <div
          class="tog-bar"
          :class="{'bg-white tog-bar-3-open' : checkTog() , 'bg-black' : !checkTog()}"
        ></div>
      </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Toggle extends Vue {
  isToggled: boolean = false;

  checkTog() {
    return this.$store.state.Nav.slidein;
  }

  handelClick() {
    this.isToggled = !this.isToggled;
    this.$store.commit("Nav/toggleSlidein");
  }
}
</script>