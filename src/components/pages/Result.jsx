import Analysis from "../Analysis";
import Summary from "../Summary";
import { useLocation } from "react-router-dom";

export default function Result() {
  return (
    <>
      <Summary />
      <Analysis />
    </>
  );
}
