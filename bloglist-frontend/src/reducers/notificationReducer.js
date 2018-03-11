const initialState = null

const notificationReducer = (store = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action
    case 'HIDE_NOTIFICATION':
      return initialState
    default:
      return store
  }
}

export const notify = (message, kind = 'info', timeout = 10) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_NOTIFICATION',
      message,
      kind
    })
    setTimeout(() => {
      dispatch({
        type: 'HIDE_NOTIFICATION'
      })
    }, timeout*1000)
  }
}

export default notificationReducer