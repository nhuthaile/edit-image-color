// SUBMIT URL AND CHANGE IMAGE
document.getElementById("urlSubmit_btn").onclick = function () {
  let newImgUrl = document.getElementById("urlImg").value;

  document.getElementById("img").src = newImgUrl;
  document.getElementById("img_origin").src = newImgUrl;
};

// Update image with bar value changes
let brightness = document.getElementById("brightness_bar");
let contrast = document.getElementById("contrast_bar");
let hue = document.getElementById("hue_bar");
let blurr = document.getElementById("blur_bar");
let saturation = document.getElementById("saturation_bar");
let sepia = document.getElementById("sepia_bar");
let invert = document.getElementById("invert_bar");

let imageStyle = document.getElementById("img");

function updateImgeFilter() {
  let brightnessValue = brightness.value * 1;
  let contrastValue = contrast.value * 1;
  let hueValue = hue.value * 1;
  let blurValue = (blurr.value * 1) / 40;
  let saturationValue = saturation.value * 1;
  let sepiaValue = sepia.value * 1;
  let invertValue = invert.value * 1;
  imageStyle.style.filter = `brightness(${brightnessValue}%) contrast(${contrastValue}%) hue-rotate(${hueValue}deg) blur(${blurValue}px) saturate(${saturationValue}%) sepia(${sepiaValue}%) invert(${invertValue}%)`;

  document.getElementById(
    "saturation_label"
  ).innerHTML = `Saturation (${saturationValue})`;
  document.getElementById(
    "contrast_label"
  ).innerHTML = `Contrast (${contrastValue})`;
  document.getElementById("hue_label").innerHTML = `Hue (${hueValue})`;
  document.getElementById("blur_label").innerHTML = `Blur (${blurValue})`;
  document.getElementById("sepia_label").innerHTML = `Sepia (${sepiaValue})`;
  document.getElementById("invert_label").innerHTML = `Invert (${invertValue})`;
  document.getElementById(
    "brightness_label"
  ).innerHTML = `Brightness (${brightnessValue})`;

  // updateImgeFilter();
}

// BRIGHTNESS
brightness.addEventListener("change", updateImgeFilter);
// CONTRAST
contrast.addEventListener("change", updateImgeFilter);

// HUE
hue.addEventListener("change", updateImgeFilter);

// BLUR
blurr.addEventListener("change", updateImgeFilter);

// Saturation
saturation.addEventListener("change", updateImgeFilter);

// Sepia
sepia.addEventListener("change", updateImgeFilter);

// Invert
invert.addEventListener("change", updateImgeFilter);
