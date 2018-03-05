const MARKED_CALLS = ['MENU_TOGGLE']

const isSilentCall = (action) => action && action.silent
const isActiveCall = (state, type) => state.find((call) => type.indexOf(call) !== -1)

const isMarkedCall = (type) => !!MARKED_CALLS.find((call) => {
  const isMarked = type.indexOf(call) !== -1
  const isUnload = type.indexOf('_UNLOAD') !== -1
  return isMarked && !isUnload
})

const makeCallName = (type) => {
  return type
    .replace('_START', '')
    .replace('_SUCCESS', '')
    .replace('_FAILURE', '')
}

export default (state = [], action) => {
  const { type } = action
  if (isMarkedCall(type) && !isSilentCall(action)) {
    const call = makeCallName(type)
    if(isActiveCall(state, type)) {
      return state.filter((item) => call !== item)
    } else {
      state.push(call)
      return [...state]
    }
  } else {
    return state
  }
}
