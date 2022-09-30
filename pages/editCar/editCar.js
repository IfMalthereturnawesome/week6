const url = "http://localhost:8080/api/cars/car/";
import { encode } from "../../utils.js";

let router;
let car = [];

export async function initEditCar(match) {
  document.getElementById("findEdit").onclick = fetchCarData;
  const submitEdit = document.getElementById("submitEdit");
  const getEdit = document.getElementById("text-for-id");
         router = match.router;
  submitEdit.addEventListener("click", (e) => {
    e.preventDefault();
    editCar(getEdit.value);
    

  });
  if (match?.params?.id) {
    const id = match.params.id;

    try {

      findEdit(id);
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
    findEdit(id);
  } catch (err) {
    console.log("UPS " + err.message);
  }
}

// Create a function for placeholder text in the input fields from the car object
function createPlaceholderText(car) {
  document.getElementById("inputfield5").placeholder = car.brand;
  document.getElementById("inputfield6").placeholder = car.model;
  document.getElementById("inputfield7").placeholder = car.pricePrDay;
  document.getElementById("inputfield8").placeholder = car.bestDiscount;
}

async function findEdit(id) {
  const car = await fetch(url + id).then((res) => res.json());
  if (!car) {
    document.getElementById("error").innerText = "Could not find Car: " + id;
    return;
  }
  try {
    document.getElementById("id").innerText = car.id;

    createPlaceholderText(car);
  } catch (err) {
    console.log("UPS " + err.message);
  }
}

// Create an eventListener for submitEdit button

// make a defer function for editing the car with a put request and navigate to the single-car page
async function editCar(id) {
  const brand = document.getElementById("inputfield5").value;
  const model = document.getElementById("inputfield6").value;
  const pricePrDay = document.getElementById("inputfield7").value;
  const bestDiscount = document.getElementById("inputfield8").value;

  const updatedCar = {
    id: id,
    brand,
    model,
    pricePrDay,
    bestDiscount,
  };

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedCar),
  };

  const response = await fetch(url + id, options)
  const data = await response.json()
  console.log(data)
  // defer navigate to the single-car page after submit
  


}


