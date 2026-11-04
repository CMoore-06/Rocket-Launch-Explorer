// ** JavaScript Starter File **
// Purpose: Populate a dropdown of upcoming launches and display mission details
// and a rocket image using callbacks (Part 1), then refactor to promises (Part 2).

// Space Devs development endpoint: no rate limits, but the data is stale and limited.
const BASE_URL = "https://lldev.thespacedevs.com/2.3.0";
const message = document.getElementById("status");

// ---------------------------------------------------------------
// PART 1: XMLHttpRequest and callbacks
// ---------------------------------------------------------------

// Step 1: Create getUpcomingLaunches(callback)
// - Makes a GET request to BASE_URL + "/launches/upcoming/"
// - Parses the response
// - Calls the callback function and passes the results array
function getUpcomingLaunches(callback) {
  // TODO: Implement XHR GET request
  const xhr = new XMLHttpRequest();
  xhr.open("GET", BASE_URL + "/launches/upcoming/");
  xhr.send();

  xhr.onreadystatechange = () => {
    if(xhr.readyState != 4) {
      //loading message here.
    }

    else {
      //clear the loading message.
    }

    if(xhr.readyState == 4) {
      if(xhr.status == 200) {
        var result = JSON.parse(xhr.responseText);

        callback(result.results);
      }
    }
  }
}

// Step 2: Create populateDropdown(launches)
// - Receives an array of launches
// - Adds one <option> per launch: text = launch name, value = launch id
function populateDropdown(launches) {
  // TODO: Iterate and append <option> elements
  for(let i = 0; i < launches.length; i++) {
    let option = document.createElement("option");
    option.textContent = launches[i].name;
    option.value = launches[i].id;

    document.getElementById("launchDropdown").append(option);
  }
}

// Step 3: Add event listener to #launchDropdown
// - On change, get the selected launch ID
// - Call getLaunchDetails(launchId, callback)
document.getElementById("launchDropdown").addEventListener("change", () => {
  // TODO: Get selected launchId
  const launchId = document.getElementById("launchDropdown").value;
  // TODO: Call getLaunchDetails
  getLaunchDetails(launchId, displayLaunchInfo);
});

// Step 4: Create getLaunchDetails(launchId, callback)
// - Makes a GET request to BASE_URL + "/launches/" + launchId + "/"
// - Parses the response and passes the launch object to the callback
function getLaunchDetails(launchId, callback) {
  // TODO: Implement XHR GET request for a single launch
  const xhr2 = new XMLHttpRequest();
  xhr2.open("GET", BASE_URL + "/launches/" + launchId + "/");
  xhr2.send();

  xhr2.onreadystatechange = () => {
    if(xhr2.readyState != 4) {
      message.textContent = "Loading launch information..."
    }

    else { 
      message.textContent = "";
    }

    if(xhr2.readyState == 4) {
      if(xhr2.status == 200) {
        let launch = JSON.parse(xhr2.responseText);
        callback(launch);
      }
    }
  }
}

// Step 5: Create displayLaunchInfo(launch)
// - Updates #missionDetails with the mission name and description (if available)
// - Creates an image of the rocket (launch.rocket.configuration.image.image_url) and appends it to #rocket
// - If no image is available, displays a message instead
function displayLaunchInfo(launch) {
  // TODO: Display mission name and description
  let h2 = document.createElement("h2");
  let p = document.createElement("p");

  h2.textContent = launch.name;
  p.textContent = launch.mission.description ?? "No mission description available.";

  // TODO: Display the rocket image
  let img = document.createElement("img");
  img.src = launch.image.image_url ?? "No image available.";
  img.alt = launch.image.name ?? "";

  //Append the information to the document.
  document.getElementById("missionDetails").append(h2);
  document.getElementById("missionDetails").append(p);
  document.getElementById("rocket").append(img);
}

// Final step: kick off the flow
getUpcomingLaunches(populateDropdown);

// ---------------------------------------------------------------
// PART 2: Axios and promises (refactor after Part 1 is committed)
// ---------------------------------------------------------------
// - Replace both XHR requests with axios.get(...).then(...).catch(...)
// - Show "Loading..." in #status while a request is pending
// - Show a clear error message in #status when a request fails
// - Clear the status message when data arrives
