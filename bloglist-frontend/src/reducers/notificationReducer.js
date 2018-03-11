const initialState = null

const notificationReducer = (store = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.message
    case 'HIDE_NOTIFICATION':
      return initialState
    default:
      return store
  }
}

export const notify = (message, timeout = 10) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_NOTIFICATION',
      message
    })
    setTimeout(() => {
      dispatch({
        type: 'HIDE_NOTIFICATION'
      })
    }, timeout*1000)
  }
}

export default notificationReducer