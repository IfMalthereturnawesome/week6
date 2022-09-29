// fetch url with id async

function fetchUrl(carId) {
  let url = "http://localhost:8080/api/cars/car/" + carId;
  async function async() {
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
    id.innerHTML = `ID: ${data.id}`;
    brand.innerHTML = `Brand: ${data.brand}`;
    model.innerHTML = `Model: ${data.model}`;
    pricePrDay.innerHTML = `Price pr. day: ${data.pricePrDay}`;
    bestDiscount.innerHTML = `Best discount: ${data.bestDiscount}`;
  }
  async();
}

function fetchUrlForEdit(carId) {
  let url = "http://localhost:8080/api/cars/car/" + carId;
  async function async() {
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
    id2.innerHTML = `ID: ${data.id}`;
    brand2.innerHTML = `Brand: ${data.brand}`;
    model2.innerHTML = `Model: ${data.model}`;
    pricePrDay2.innerHTML = `Price pr. day: ${data.pricePrDay}`;
    bestDiscount2.innerHTML = `Best discount: ${data.bestDiscount}`;
  }

  async();
}

function editCar(carId) {
  let url = "http://localhost:8080/api/cars/car/" + carId;

  let car = {
    id: carId,
    brand: document.getElementById("input-field5").value,
    model: document.getElementById("input-field6").value,
    pricePrDay: document.getElementById("input-field7").value,
    bestDiscount: document.getElementById("input-field8").value,
  };

  async function async() {
    let response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),
    });
    let data = await response.json();
    console.log("data", data);
    fetchUrlForEdit(carId);
  }
  async();
}

// create a function that takes an input and fetches the data from the url in a table
function fetchAll() {
  let url = "http://localhost:8080/api/cars";

  async function async() {
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
    let table = document.getElementById("myTable");
    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        let row = table.insertRow(i + 1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        cell1.innerHTML = data[i].id;
        cell2.innerHTML = data[i].brand;
        cell3.innerHTML = data[i].model;
        cell4.innerHTML = data[i].pricePrDay;
        cell5.innerHTML = data[i].bestDiscount;
      }
    } else if (data.length === 0) {
      table.innerHTML = "No cars found";
    }
  }
  async();
}

function addNewCar() {
  let url = "http://localhost:8080/api/cars";
  let car = {
    brand: document.getElementById("input-field1").value,
    model: document.getElementById("input-field2").value,
    pricePrDay: document.getElementById("input-field3").value,
    bestDiscount: document.getElementById("input-field4").value,
  };
  async function async() {
    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(car),
    });
    let data = await response.json();
    console.log("Success:", data);
    console.log(data);
    id1.innerHTML = `ID: ${data.id}`;
    brand1.innerHTML = `Brand: ${data.brand}`;
    model1.innerHTML = `Model: ${data.model}`;
    pricePrDay1.innerHTML = `Price pr. day: ${data.pricePrDay}`;
    bestDiscount1.innerHTML = `Best discount: ${data.bestDiscount}`;
    
    
    console.log("data", data);
    }
    async();
}
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      console.log(data);
      id1.innerHTML = `ID: ${data.id}`;
      brand1.innerHTML = `Brand: ${data.brand}`;
      model1.innerHTML = `Model: ${data.model}`;
      pricePrDay1.innerHTML = `Price pr. day: ${data.pricePrDay}`;
      bestDiscount1.innerHTML = `Best discount: ${data.bestDiscount}`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

