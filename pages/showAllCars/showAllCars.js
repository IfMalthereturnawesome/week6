const url = "http://localhost:8080/api/cars";
import { encode } from "../../utils.js";

let cars = [];
let router;

export function initShowAllCars(navigoRouter) {
  document.getElementById("btn-get-all").onclick = getAllCars;
  document.getElementById("tbody-all").onclick = showCarDetails;
  getAllCars();
  router = navigoRouter;
}

export async function getAllCars() {
  try {
    const carsFromServer = await fetch(url).then((res) => res.json());
    showAllCars(carsFromServer);
    cars = carsFromServer;
  } catch (error) {
    console.log(error);
  }
}

function showAllCars(data) {
  const tableRowsArray = data.map(
    (car) => `
  <tr>                                
    <td>${car.id} </td>              
    <td>${car.brand} </td>  
    <td>${car.model} </td>                      
    <td>${car.pricePrDay} </td>  
    <td>${car.bestDiscount} </td>
    <td>
    <!--See https://getbootstrap.com/docs/5.0/components/modal/ for an explanation of the classes used below -->
    <button id="${car.id}-column-id" type="button"  class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button> 
   
    <button id="${car.id}-column-id" type="button"  class="other-page btn btn-sm btn-secondary">Details-2</button> </td>      
  </tr>`
  );

  const tableRowsString = tableRowsArray.join("\n");
  document.getElementById("tbody-all").innerHTML = tableRowsString;
}

async function showCarDetails(evt) {
  const target = evt.target;
  if (!target.id.includes("-column-id")) {
    return;
  }
  const id = target.id.replace("-column-id", "");
  if (target.classList.contains("other-page")) {
    router.navigate("single-car?id=" + id);
  } else {
    document.getElementById("exampleModalLabel").innerText =
      "Details for carId: " + id;
    const car = await fetch(url + '/car/' +  id).then((res) => res.json());
    document.getElementById("id").innerText =  car.id;
    document.getElementById("brand").innerText = car.brand;
    document.getElementById("model").innerText = car.model;
    document.getElementById("pricePrDay").innerText = car.pricePrDay;
    document.getElementById("bestDiscount").innerText = car.bestDiscount;

  }

}
