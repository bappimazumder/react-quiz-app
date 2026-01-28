import { useContext } from "react";
import AuthContext from "./AuthContext";

export default function UseAuth() {
  return useContext(AuthContext);
}
