export function alertTemplate(alert) {
    let alertType = "";
    // switch case bacause park closure doesn't fit well with icons 
    switch (alert.category) {
      case "Park Closure":
        alertType = "closure";
        break;
      default:
        alertType = alert.category.toLowerCase();
    }
    return `<li class="alert">
    <svg class="icon" focusable="false" aria-hidden="true">
      <use xlink:href="/images/sprite.symbol.svg#alert-${alertType}"></use>
    </svg>
    <div>
      <h3 class="alert-${alertType}">${alert.title}</h3>
      <p>${alert.description}</p>
    </div></li>`;
  }


  export function listItemTemplate(title, description) {
    return `<li><strong>${title}:</strong> ${description}</li>`;
  }
