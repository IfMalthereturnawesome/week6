const singleCar = document.getElementById("singleCar");
const getSingleCar = document.getElementById("text-for-id");
const getAll = document.getElementById("btn-get-all");
const id = document.getElementById("id");
const brand = document.getElementById("brand");
const model = document.getElementById("model");
const pricePrDay = document.getElementById("pricePrDay");
const bestDiscount = document.getElementById("bestDiscount");
const addCar = document.getElementById("addCar");
const inputField1 = document.getElementById("input-field1");
const inputField2 = document.getElementById("input-field2");
const inputField3 = document.getElementById("input-field3");
const inputField4 = document.getElementById("input-field4");
const id1 = document.getElementById("id1");
const brand1 = document.getElementById("brand1");
const model1 = document.getElementById("model1");
const pricePrDay1 = document.getElementById("pricePrDay1");
const bestDiscount1 = document.getElementById("bestDiscount1");
const findEdit = document.getElementById("findEdit");
const submitEdit = document.getElementById("submitEdit");
const id2 = document.getElementById("id2");
const brand2 = document.getElementById("brand2");
const model2 = document.getElementById("model2");
const pricePrDay2 = document.getElementById("pricePrDay2");
const bestDiscount2 = document.getElementById("bestDiscount2");
const getEdit = document.getElementById("text-for-id2");

findEdit.addEventListener("click", (e) => {
  e.preventDefault();
  fetchUrlForEdit(getEdit.value);
});

submitEdit.addEventListener("click", (e) => {
  e.preventDefault();
  editCar(getEdit.value);
});

singleCar.addEventListener("click", (e) => {
  e.preventDefault();
  fetchUrl(getSingleCar.value);
});

getAll.addEventListener("click", (e) => {
  e.preventDefault();
  fetchAll();
});

addCar.addEventListener("click", (e) => {
  e.preventDefault();
  addNewCar();
});
