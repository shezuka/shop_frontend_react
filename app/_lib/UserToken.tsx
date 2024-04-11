export function StoreAccessToken(accessToken: string) {
  localStorage.setItem("access_token", accessToken);
}

export function GetAccessToken() {
  return localStorage.getItem("access_token");
}

export function DeleteAccessToken() {
  localStorage.removeItem("access_token");
}
