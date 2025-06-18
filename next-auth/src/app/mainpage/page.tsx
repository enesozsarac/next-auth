"use client";

import { signOut } from "next-auth/react";

const Mainpage = () => {
  return (
    <>
      <div className="text-center text-6xl mt-20">Welcome</div>
      <div className="flex items-center justify-center mt-10">
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700
        "
        >
          LOGOUT
        </button>
      </div>
    </>
  );
};

export default Mainpage;
