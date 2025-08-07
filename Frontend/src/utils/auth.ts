export const getToken = () => localStorage.getItem("token");
export const getName = () => localStorage.getItem("name");

export const logout = () => {
  localStorage.clear();
  window.location.href = "/";
};

export function getRole(): string {
  return localStorage.getItem("role") || "";
}
