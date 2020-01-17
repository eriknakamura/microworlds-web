<template>
  <div id="mw-topbar" class="fixed w-screen flex flex-row nowrap justify-between p-4 h-16 items-center bg-green">
    <Toggle />
    <Slidein>
      <ul class="mt-8">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </Slidein>
    <h1 class="text-xl">microworlds.<span class="italic">live</span></h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Toggle from "./Toggle.vue";
import Slidein from "./Slidein.vue";

@Component({
  name: "topbar",
  components: {
    Toggle,
    Slidein
  }
})
export default class TopBar extends Vue {}
</script>
