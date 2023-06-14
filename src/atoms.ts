import { atom } from "recoil";

//default: false (로그인상태X)
export const LoginState = atom({
  key: "login",
  default: false,
});
