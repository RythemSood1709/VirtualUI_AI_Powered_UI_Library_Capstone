"use client";
import React, { useState } from "react";
import Auth from "../components/Auth";

const Home = () => {
  const [showAuth, setShowAuth] = useState(false);
  return (
    <div>
      <button className="px-4 py-2 bg-black text-white" onClick={() => setShowAuth(true)}>open</button>
      {showAuth && <Auth onClose={() => setShowAuth(false)} />}
    </div>
  );
};

export default Home;
