import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  console.log(props)

  const { notification } = props

  if (notification === null) {
    return null
  }

  return (
    <div className={notification.kind}>
      {notification.message}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

export default connect(
  mapStateToProps,
  null
)(Notification)