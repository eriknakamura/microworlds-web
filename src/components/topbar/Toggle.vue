<template>
  <div id="mw-topbar-toggle" class="z-10">
    <button type="button" v-on:click="handelClick" class="w-12 h-12 flex flex-col nowrap justify-between" title="Menu">
      <span class="h-2 w-12" :class="{'bg-white point-down' : isToggled , 'bg-black' : !isToggled}"></span>
      <span class="h-2 w-12" :class="{'bg-white' : isToggled , 'bg-black' : !isToggled}"></span>
      <span class="h-2 w-12" :class="{'bg-white point-up' : isToggled , 'bg-black' : !isToggled}"></span>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Toggle extends Vue {
    isToggled:boolean = false;

    handelClick() {
        this.isToggled = !this.isToggled;
        this.$store.commit('Nav/toggleSlidein');
    }
}
</script>