import { MENU_TOGGLE } from '../constants';

export default (state = { menuIsOpen: false }, action) => {
  switch (action.type) {
    case MENU_TOGGLE:
      return { menuIsOpen: !state.menuIsOpen };
    default:
      return state;
  }
};
