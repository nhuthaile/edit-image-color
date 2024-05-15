// SUBMIT URL AND CHANGE IMAGE
document.getElementById("urlSubmit_btn").onclick = function () {
  let newImgUrl = document.getElementById("urlImg").value;

  document.getElementById("img").src = newImgUrl;
};

// Update image with bar value changes
let brightness = document.getElementById("brightness_bar");
let contrast = document.getElementById("contrast_bar");
let hue = document.getElementById("hue_bar");
let blurr = document.getElementById("blur_bar");
let saturation = document.getElementById("saturation_bar");
let sepia = document.getElementById("sepia_bar");

let imageStyle = document.getElementById("img");

function updateImgeFilter() {
  let brightnessValue = brightness.value * 1 * 2;
  let contrastValue = (contrast.value * 1) / 50;
  let hueValue = hue.value * 1;
  let blurValue = (blurr.value * 1) / 50;
  let saturationValue = saturation.value * 1;
  let sepiaValue = sepia.value * 1;

  imageStyle.style.filter = `brightness(${brightnessValue}%) contrast(${contrastValue}) hue-rotate(${hueValue}deg) blur(${blurValue}px) saturate(${saturationValue}%) sepia(${sepiaValue}%)`;
}

// BRIGHTNESS
brightness.addEventListener("input", updateImgeFilter);
// CONTRAST
contrast.addEventListener("input", updateImgeFilter);

// HUE
hue.addEventListener("input", updateImgeFilter);

// BLUR
blurr.addEventListener("input", updateImgeFilter);

// Saturation
saturation.addEventListener("input", updateImgeFilter);

// Sepia
sepia.addEventListener("input", updateImgeFilter);
