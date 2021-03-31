const api = `https://api.wheretheiss.at/v1/satellites/25544`;

fetch(api)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const long = document.querySelector(".longitude");
    const lat = document.querySelector(".latitude");
    console.log(data);
    const { latitude, longitude } = data;
    console.log("THE LATITUDE OF ISS IS => " + latitude);
    console.log("THE LONGITUDE OF ISS IS => " + longitude);
    long.innerText = longitude;
    lat.innerText = latitude;
  });
