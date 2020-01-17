import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import router from "@/router/index";
@Module({
  namespaced: true
})
class Nav extends VuexModule {
  // Define states
  public slidein: boolean = false;

  // Sets the workspace
  @Mutation
  toggleSlidein() {
    this.slidein = !this.slidein;
    console.log("Toggling slide");
  }

}

export default Nav;
