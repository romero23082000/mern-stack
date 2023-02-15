import React from 'react'
import Note from '../components/Notes'

const Notes = (props) => {
  return (
    <div>
      <Note user={props.user} notes={props.notes} />
    </div>
  )
}

export default Notes