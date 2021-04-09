import { getToken } from "./Token";

console.log(getToken('login_Token'))
export const authenticated = getToken('login_Token') !==''  ? true : false

