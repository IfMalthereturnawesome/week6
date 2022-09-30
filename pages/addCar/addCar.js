const url = "http://localhost:8080/api/cars";
import { encode } from "../../utils.js";

let router;
let car = [];

export function initAddCar(navigoRouter) {
  document.getElementById("addCar").onclick = addCar;
  addCar();
  router = navigoRouter;
}

async function addCar() {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),
    });
    const data = await response.json();
    console.log(data);
    router.navigate("/addcar");
  } catch (error) {
    console.log(error);
  } 
}
