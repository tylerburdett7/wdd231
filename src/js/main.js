import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner__title">${info.name}</a>
    <p class="hero-banner__subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>`;
  }

  const heroContent = document.querySelector(".hero-banner__content");
heroContent.innerHTML = parkInfoTemplate({
  name: parkData.name,
  designation: parkData.designation,
  states: parkData.states,
});

const heroImage = document.querySelector(".hero-banner img");
if (parkData.images.length > 0) {
  heroImage.src = parkData.images[0].url;
  heroImage.alt = parkData.images[0].altText;
}

