const baseUrl = "https://developer.nps.gov/api/v1/";
const apiKey = import.meta.env.VITE_NPS_API_KEY;

async function getJson(url) {
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey
    }
  };
  let data = {};
  const response = await fetch(baseUrl + url, options);
  if (response.ok) {
    data = await response.json();
  } else throw new Error("response not ok");
  return data;
}

export async function getParkData() {
  const parkData = await getJson("parks?parkCode=yell");
  return parkData.data[0];
}

export async function getParkAlerts() {
  const alerts = await getJson("alerts?parkCode=yell");
  return alerts.data;
}

export async function getVisitorCenters() {
  const visitorCenters = await getJson("visitorcenters?parkCode=yell");
  return visitorCenters.data;
}

export async function getActivities() {
  const activities = await getJson("activities/parks?ide=yell");
  return activities.data;
}


