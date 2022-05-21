import React from "react";

export const ProfileButtonChangeAvatar = ({buttonText}) => {
  return (
    <div>
      <button type="submit" class="btn btn-primary rounded-pill btn-sm font-size:smaller">
       {buttonText}
      </button>
    </div>
  );
}