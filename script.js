const inputColor = document.getElementById("seed-color")
const generateColorBtn = document.getElementById("generate-color-btn")
const colorSchemeSelect = document.getElementById("colorScheme")
const colorContainers = document.querySelectorAll(".color")
const copyColorsBtn = document.getElementById("copy-colors-btn");


generateColorBtn.addEventListener("click", function () {
  let seedColor = inputColor.value.replace("#", "")

  const selectedScheme = colorSchemeSelect.value
  const queryParam = "hex"

  console.log("seedColor:", seedColor)


  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }

  const apiURL = `https://www.thecolorapi.com/scheme?${queryParam}=${seedColor}&mode=${selectedScheme}&count=5`

  console.log(apiURL)

  fetch(apiURL, options)
    .then((response) => response.json())
    .then((data) => console.log(data))
    
  .catch((error) => {
    console.error("Error:", error);
  })
})










