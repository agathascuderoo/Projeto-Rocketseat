function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.jpg")
  } else {
    img.setAttribute("src", "./assets/avatar-dark.jpg")
  }

  if (html.classList.contains("dark")) {
    img.setAttribute("alt", "Uma foto dark.")
  } else {
    img.setAttribute("alt", "Minha foto de perfil profissional.")
  }
}
{
}
