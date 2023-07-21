"use client";

import { useState } from "react";
import ErrorFix from "@components/checkoutPage/addressPageCheckout/ErrorFix";
export default function App() {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ok");
    setName("");
  };
  return (
    <div>
      <ErrorFix />
      <form onSubmit={handleSubmit}>
        <input
          className="border-2 border-white "
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">send</button>
      </form>
    </div>
  );
}
