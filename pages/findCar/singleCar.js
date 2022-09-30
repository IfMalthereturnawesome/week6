const url = "http://localhost:8080/api/cars/car/";

export async function initSingleCar(match) {
  document.getElementById("singleCar").onclick = fetchCarData;
  if (match?.params?.id) {
    const id = match.params.id;
    try {
      renderCar(id);
    } catch (error) {
      document.getElementById("error").innerHTML = "Could not find Car: " + id;
    }
  }
}

async function fetchCarData() {
  document.getElementById("error").innerText = "";
  const id = document.getElementById("text-for-id").value;
  if (!id) {
    document.getElementById("error").innerText = "Please provide an id";
    return;
  }
  try {
    renderCar(id);
  } catch (err) {
    console.log("UPS " + err.message);
  }
}

// Find the car with the given id and render it in the table
async function renderCar(id) {
  const car = await fetch(url + id).then((res) => res.json());
  if(!car) {
    document.getElementById("error").innerText = "Could not find Car: " + id;
    return;
    }
    try {
  document.getElementById("id").innerText = car.id;
  document.getElementById("brand").innerText = car.brand;
  document.getElementById("model").innerText = car.model;
  document.getElementById("pricePrDay").innerText = car.pricePrDay;
  document.getElementById("bestDiscount").innerText = car.bestDiscount;
    } catch (err) {
      console.log("UPS " + err.message);
    }

}
