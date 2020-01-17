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
  }

}

export default Nav;
