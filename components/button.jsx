'use client';
import { useState } from 'react';

export default function TeeTimesButton() {
  const [btnClick, setBtnClick] = useState();

  const buttonHandler = () => {
    console.log('clicked');
  };

  return (
    <button
      onClick={buttonHandler}
      className="self-center rounded bg-green-700 py-2 px-4 my-4 text-sm text-white data-[hover]:bg-sky-500 data-[hover]:data-[active]:bg-sky-700"
    >
      Book Now
    </button>
  );
}
