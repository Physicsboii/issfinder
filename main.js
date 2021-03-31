const api = `http://api.open-notify.org/iss-now.json`;


fetch(api)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const long = document.querySelector(".longitude");
    const lat = document.querySelector(".latitude");
    console.log(data);
    const { latitude, longitude } = data.iss_position;
    console.log("THE LATITUDE OF ISS IS => " + latitude);
    console.log("THE LONGITUDE OF ISS IS => " + longitude);
    long.innerText = longitude;
    lat.innerText = latitude;
  });
