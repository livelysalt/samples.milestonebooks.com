export default {

  //--------------------------------------------------------------------------------------------------------------------

  set(module, data) {
    if (!data) {
      data   = module;
      module = null;
    }

    this.$store.commit(`${module ? module + '/' : ''}set`, data);
  }, // set()

  //--------------------------------------------------------------------------------------------------------------------

};