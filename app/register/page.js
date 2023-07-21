// import dynamic from "next/dynamic";
// const RegisterComponent = dynamic(
//   () => import("@components/register/Register"),
//   {
//     ssr: false,
//   }
// );
import RegisterComponent from "@components/register/RegisterComponent";
export default function App() {
  return <RegisterComponent />;
}
