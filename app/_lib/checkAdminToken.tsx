import { GetAccessToken } from "@/app/_lib/UserToken";
import axios from "@/app/_utils/axios";

export default async function checkAdminToken() {
  const token = GetAccessToken();
  if (!token) {
    return false;
  }

  return axios
    .post("/auth/validate_token", { token })
    .then((res) => res.status === 200)
    .catch((err) => false);
}
