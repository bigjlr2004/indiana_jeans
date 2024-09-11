import { setSocialLocationId } from "./TransientState.js";

const handleLocationChange = (changeEvent) => {
  if (changeEvent.target.name === "socioLocation") {
    const chosenLocation = parseInt(changeEvent.target.value);
    setSocialLocationId(chosenLocation);
  }
};

export const Location = async () => {
  document.addEventListener("change", handleLocationChange);
  const response = await fetch("http://localhost:8088/socioLocations");
  const locations = await response.json();

  let locationHTML = `
  <h2>What type of area do you live in?</h2>

  <ul>
  `;
  for (const location of locations) {
    locationHTML += `<input type='radio' name='socioLocation'  value="${location.id}" />${location.label}</li>`;
  }
  locationHTML += "</ul>";
  return locationHTML;
};
