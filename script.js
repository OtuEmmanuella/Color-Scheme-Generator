const inputColor = document.getElementById("seed-color")
const getColorBtn = document.getElementById("get-color-btn")
const colorSchemeSelect = document.getElementById("colorScheme")

inputColor.addEventListener("input", function () {
  let seedColor = inputColor.value.replace("#", "")

  const selectedScheme = colorSchemeSelect.value
  const queryParam = "hex"

  console.log("seedColor:", seedColor)
  //sconsole.log("selectedScheme:", selectedScheme)

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
      console.error("Error:", error)
    })
})