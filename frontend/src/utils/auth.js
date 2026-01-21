export const loginUser = (user) => {
  localStorage.setItem("auth_user", JSON.stringify(user))
}

export const getUser = () => {
  const user = localStorage.getItem("auth_user")
  return user ? JSON.parse(user) : null
}

export const logoutUser = () => {
  localStorage.removeItem("auth_user")
}
