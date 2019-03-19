import mixins from '~/plugins/mixins.store';

//======================================================================================================================

export const state = () => ({
  isLoading:     true,

  id:            null,
  items:         [],
  firstCode:     '',
  lastCode:      '',
  currentIndex:  null,

  hasScrollbarX: false,
  hasScrollbarY: false,

  currentWScale: 1,
  maxH:          null, // tallest slide image
  maxHRatio:     null, // height / width
});

//======================================================================================================================

export const getters = {

  getSlide: mixins.getters.getSlide,

  //------------------------------------------------------------------------------------------------------------------

  //--------------------------------------------------------------------------------------------------------------------

}; // getters {}

//======================================================================================================================

export const mutations = {

  set: mixins.mutations.set,

  setImageWScale: mixins.mutations.setImageWScale,

  //--------------------------------------------------------------------------------------------------------------------

}; // mutations {}

//======================================================================================================================

export const actions = {

  initSettings: mixins.actions.initSettings,

  //--------------------------------------------------------------------------------------------------------------------

}; // actions {}
