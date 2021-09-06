import React from "react";

function FavButton({ onButtonClick, poster, title }) {
  return (
    <>
      <button onClick={onButtonClick(poster, title)}>Add to favourite</button>
    </>
  );
}

export default FavButton;
