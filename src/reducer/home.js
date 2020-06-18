const initialState = {
  list: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_CHECKBOX':
      return { ...state, list: payload }
    case 'SET_TAG':
      return { ...state, list: payload }
    default:
      return state
  }
}
