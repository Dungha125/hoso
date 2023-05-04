const image = document.querySelector("img")
const input = document.querySelector("input")

input.addEventListener("change", () => {
    image.src = URL.createObjectURL(input.file[0])
})