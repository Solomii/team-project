import React from "react";

export const LargeButton  = ({ buttonText }) => {
  return (
    <div>
      <button type="submit"  class="btn btn-primary rounded-pill btn-lg fs-6">
       {buttonText}
      </button>
    </div>
  );
}