// Set up the transient state data structure and provide initial valuess
const transientState = {
  ownsBlueJeans: false,
  socioLocationId: 0,
};

// Functions to modify each property of transient state
export const setOwnsBlueJeans = (chosenOwnerShip) => {
  transientState.ownsBlueJeans = chosenOwnerShip;
  console.log(transientState);
};
// Functions to modify each property of transient state
export const setSocialLocationId = (chosenLocation) => {
  transientState.socioLocationId = chosenLocation;
  console.log(transientState);
};
// Function to convert transient state to permanent state
