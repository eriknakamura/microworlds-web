<template>
  <div id="mw-slidein" class="absolute top-0 left-0 w-screen">
<!--     <div class="h-screen w-screen" @click.prevent="slideBack" v-if="shoudSlideOut"></div>
 -->            <div v-if="shoudSlideOut"
                 class="h-screen w-1/3 bg-black p-16 text-white text-2xl">
                <slot></slot>
            </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Slidein extends Vue {
    isOut:boolean = this.$store.state.Nav.slidein;

    get shoudSlideOut() {
        console.log("should slide out");
        return this.$store.state.Nav.slidein;
    }
    slideOut() {
        this.isOut = false;
    }
}
</script>