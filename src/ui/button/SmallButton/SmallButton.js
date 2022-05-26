import React from 'react'

export const SmallButton = ({ buttonText }) => {
  return (
    <div>
      <button type="submit" class="btn btn-primary rounded-pill btn-sm font-size:smaller">
        {buttonText}
      </button>
    </div>
  )
}
