const images = [
  "img/evening/aperture-vintage-SshYpuf607g-unsplash.jpg",
  "img/evening/artem-sapegin-8c6eS43iq1o-unsplash.jpg",
  "img/evening/arto-marttinen-fHXP17AxOEk-unsplash.jpg",
  "img/evening/graham-holtshausen-63JKK67yGUE-unsplash.jpg",
];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("style");
bgImage.innerHTML = `body {
    background-image: url("${chosenImage}");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    }`;

document.head.appendChild(bgImage);
