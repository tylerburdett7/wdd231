import { getParkData, getParkAlerts, getVisitorCenters, getActivities } from "./parkService.mjs";
import { alertTemplate, listItemTemplate } from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";

function setAlerts(alerts) {
  const alertsContainer = document.querySelector(".alerts > ul");
  alertsContainer.innerHTML = "";
  const html = alerts.map(alertTemplate);
  alertsContainer.insertAdjacentHTML("beforeend", html.join(""));
}

function setVisitorCenters(visitorCenters) {
  const visitorList = document.querySelector(".visitor details ul")
  visitorList.innerHTML = visitorCenters.map(vc => listItemTemplate(vc.name, vc.description)).join("");
}

function setActivities(activities) {
  const activitiesList = document.querySelector(".activities details ul")
  activitiesList.innerHTML = activities.map(a => listItemTemplate(a.name, a.description)).join("");
}

async function init() {
  const parkData = await getParkData();
  const alerts = await getParkAlerts();
  const visitorCenters = await getVisitorCenters();
  const activities = await getActivities();
  setHeaderFooter(parkData);
  setAlerts(alerts);
  setVisitorCenters(visitorCenters);
  setActivities(activities);

}

init();