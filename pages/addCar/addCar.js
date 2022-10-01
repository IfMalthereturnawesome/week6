const url = "http://localhost:8080/api/cars";
import { encode } from "../../utils.js";

let router;
let car = [];

export function initAddCar(navigoRouter) {
  document.getElementById("addCar").onclick = addCar;
  router = navigoRouter;
}

async function addCar() {
  const brand = document.getElementById("input-field1").value;
  const model = document.getElementById("input-field2").value;
  const pricePrDay = document.getElementById("input-field3").value;
  const bestDiscount = document.getElementById("input-field4").value;
  const newCar = {
    brand,
    model,
    pricePrDay,
    bestDiscount,
  };

  const id = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCar),
  })
    .then((res) => res.json())
    .then((data) => data.id);
  router.navigate(`single-car?id=${id}`);
}

// Onsubmit function to navigate to the single-car page
async function navigateToSingleCar(id) {
  // Define the url for the single-car page
  const url = `single-car?id=${id}`;
  // Navigate to the single-car page
  router.navigate(url);
}



