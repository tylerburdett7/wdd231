import { getParkData } from "./parkService.mjs";

// Function to generate HTML for the hero-banner content
function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner__title">${info.name}</a>
    <p class="hero-banner__subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>`;
}


function mediaCardTemplate(info) {
  return `
  <a href="${info.link}" class="media-card">
    <img src="${info.image}" alt="${info.name}" class="media-card__image" />
    <h3 class="media-card__headline">${info.name}</h3>
    <p class="media-card__description">${info.description}</p>
  </a>`;
}

async function initializePage() {
  try {
    const parkData = await getParkData();

    // Update disclaimer
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.textContent = parkData.fullName;
    disclaimer.href = parkData.url;

    // Update page title
    document.querySelector("head > title").textContent = parkData.fullName;

    // Update hero banner
    const heroImage = document.querySelector(".hero-banner img");
    if (parkData.images?.length > 0) {
      heroImage.src = parkData.images[0].url;
      heroImage.alt = parkData.images[0].altText || "Park image";
    } else {
      heroImage.src = "default-hero.jpg";
      heroImage.alt = "Default park image";
    }

    const heroContent = document.querySelector(".hero-banner__content");
    heroContent.innerHTML = parkInfoTemplate({
      name: parkData.name,
      designation: parkData.designation,
      states: parkData.states || "Unknown",
    });

    // Update intro section
    const introSection = document.querySelector(".intro");
    introSection.innerHTML = `<h2>${parkData.name} National Park</h2>
    <div id="park-description">
      <p>${parkData.description}</p>
    </div>`;

    // Update media cards
    const parkInfoLinks = [
      {
        name: "Current Conditions &#x203A;",
        link: "conditions.html",
        image: parkData.images[2]?.url || "default-image.jpg",
        description: "See what conditions to expect in the park before leaving on your trip!",
      },
      {
        name: "Fees and Passes &#x203A;",
        link: "fees.html",
        image: parkData.images[3]?.url || "default-image.jpg",
        description: "Learn about the fees and passes that are available.",
      },
      {
        name: "Visitor Centers &#x203A;",
        link: "visitor_centers.html",
        image: parkData.images[9]?.url || "default-image.jpg",
        description: "Learn about the visitor centers in the park.",
      },
    ];

    const infoSection = document.querySelector(".info");
    infoSection.innerHTML = parkInfoLinks.map(mediaCardTemplate).join("");

    // Update footer
    const footerSection = document.querySelector(".park-footer");
    footerSection.innerHTML = footerTemplate({
      mailingAddress: parkData.addresses?.find(addr => addr.type === "Mailing")?.line1,
      phone: parkData.contacts?.phoneNumbers?.find(num => num.type === "Voice")?.phoneNumber,
    });
  } catch (error) {
    console.error("Error initializing page:", error);
  }
}

initializePage();
