"use client";
import { useState } from "react";
import UseTesting from "@hooks/UseTesting";

export default function App() {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const { data } = UseTesting();
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-black"
          value={name}
        />
        <button type="submit">send</button>
      </form>
    </div>
  );
}
