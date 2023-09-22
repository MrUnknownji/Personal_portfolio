"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-[100vh] flex items-center justify-center text-center flex-col gap-5 text-white">
      <h2 className="text-lg">
        Oh no 😕 Something went wrong!
        <br /> {`Please try to reset page, if it won't work send me mail.`}
        <br />
        Really sorry for that experiece 😔
      </h2>
      <div className="flex gap-10 items-center justify-center">
        <button
          className="rounded-full px-4 py-1 border border-white text-white hover:border-green-500 hover:text-green-500 duration-300"
          onClick={() => reset()}
        >
          Reset
        </button>
        <button className="rounded-full px-4 py-1 border border-white text-white hover:border-green-500 hover:text-green-500 duration-300">
          Email
        </button>
      </div>
    </div>
  );
}
