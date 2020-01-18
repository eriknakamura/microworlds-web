<template>
  <div id="mw-slidein" class="z-0 fixed top-0 left-0 w-screen">
    <div v-if="shoudSlideOut" @click="slideOut" class="fixed z-10 top-0 left-0 w-screen h-screen cursor-pointer"></div>
    <div v-if="shoudSlideOut" class="fixed z-20 top-0 left-0 h-screen w-1/3 bg-black p-16 text-white text-2xl">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Slidein extends Vue {
  isOut: boolean = this.$store.state.Nav.slidein;

  get shoudSlideOut() {
    return this.$store.state.Nav.slidein;
  }
  slideOut() {
    this.$store.commit("Nav/toggleSlidein");
  }
}
</script>