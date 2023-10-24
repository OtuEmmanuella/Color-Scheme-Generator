const inputColor = document.getElementById("seed-color");
const generateColorBtn = document.getElementById("generate-color-btn");
const colorSchemeSelect = document.getElementById("colorScheme");
const colorPaletteContainer = document.getElementById(
  "color-palette-container"
);
const copyColorsBtn = document.getElementById("copy-colors-btn");

function handleGenerateColor() {
  let seedColor = inputColor.value.replace("#", "");

  const selectedScheme = colorSchemeSelect.value;

  getColors(seedColor, selectedScheme);
}

function removeChildNodes(parent) {
  while (parent.hasChildNodes()) {
    parent.firstChild.remove();
  }
}

function getColors(seedColor, selectedScheme) {
  const queryParam = "hex";

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const apiURL = `https://www.thecolorapi.com/scheme?${queryParam}=${seedColor}&mode=${selectedScheme}&count=5`;

  fetch(apiURL, options)
    .then((response) => response.json())
    .then(({ colors }) => {
      const colorsContainer = document.querySelector(".color-palette");

      removeChildNodes(colorsContainer); //clear the previous colors

      const colorArray = colors.map((color) => color.hex.value);

      colorArray.forEach((color) => {
        const colorBox = document.createElement("div");
        colorBox.className = "color";
        colorBox.style.backgroundColor = color;

        colorsContainer.appendChild(colorBox);

        /**
        * Another way to do it  
        * 
       colorBox.setAttribute("style", `background-color: ${color};`)
        * */
      });
    })

    .catch((error) => {
      console.error("Error:", error);
    });
}

generateColorBtn.addEventListener("click", handleGenerateColor);
