import settings from '~/assets/settings';

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

  throttleKey(e, ms_ignore = settings.TRANSITION_TIME_MS) {
    if (this.$_keyActive) {
      e.preventDefault();
      e.stopPropagation();
      return true;
    }

    this.$_keyActive = true;

    setTimeout(() => {
      this.$_keyActive = false;
    }, ms_ignore);

  }, // throttleKey()

  //--------------------------------------------------------------------------------------------------------------------

};
