import { useEffect } from "react";

export default function UseTesting() {
  const data = "hello this is my name";
  useEffect(() => {
    console.log("hello i am my name");
  }, []);
  return {
    user: data,
  };
}
