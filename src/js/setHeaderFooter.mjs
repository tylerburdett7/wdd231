// setHeaderFooter.mjs

export default function setHeaderFooter(parkData) {
    // Update header
    const heroImage = document.querySelector(".hero-banner img");
    if (parkData.images?.length > 0) {
      heroImage.src = parkData.images[0].url;
      heroImage.alt = parkData.images[0].altText || "Park image";
    } else {
      heroImage.src = "default-hero.jpg";
      heroImage.alt = "Default park image";
    }
  
    const heroContent = document.querySelector(".hero-banner__content");
    heroContent.innerHTML = `
      <a href="/" class="hero-banner__title">${parkData.name}</a>
      <p class="hero-banner__subtitle">
        <span>${parkData.designation}</span>
        <span>${parkData.states || "Unknown"}</span>
      </p>
    `;
  
    // Update footer
    const footerSection = document.querySelector(".park-footer");
    footerSection.innerHTML = `
      <p>Mailing Address: ${parkData.addresses?.find(addr => addr.type === "Mailing")?.line1 || "N/A"}</p>
      <p>Phone: ${parkData.contacts?.phoneNumbers?.find(num => num.type === "Voice")?.phoneNumber || "N/A"}</p>
    `;
  }
  