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
let downloadImg = document.getElementById("btn_img");

// Function update image filter

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
}

// Take change value as input for update image filter funtion

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

// Download Image

document.getElementById("btn_download_img").onclick = function () {
  // Create canvas
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");

  // Set width and height for cavas
  canvas.width = imageStyle.naturalWidth;
  canvas.height = imageStyle.naturalHeight;

  // Apply filter for canvas
  let filters = `brightness(${brightness.value}%) contrast(${contrast.value}%) hue-rotate(${hue.value}deg) blur(${blurr.value}px) saturate(${saturation.value}%) sepia(${sepia.value}%) invert(${invert.value}%)`;

  ctx.filter = filters;

  // Load image
  let tempImage = new Image();
  tempImage.crossOrigin = "anonymous";
  tempImage.src = imageStyle.src;
  tempImage.onload = function () {
    // Daw image onto canvas
    ctx.drawImage(tempImage, 0, 0, canvas.width, canvas.height);

    // Create link to download

    let downloadLink = document.createElement("a");
    downloadLink.href = canvas.toDataURL("image/png", 1);
    downloadLink.download = "edited-image.png";

    downloadLink.click();
  };
  tempImage.onerror = function () {
    alert("Failed to load the image due to CORS issues.");
  };
};
