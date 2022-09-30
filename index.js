import "https://unpkg.com/navigo"; //Will create the global Navigo object used below

import {
  setActiveLink,
  adjustForMissingHash,
  loadTemplate,
  renderTemplate,
} from "./utils.js";

import { initAddCar } from "./pages/addCar/addCar.js";
import { initEditCar } from "./pages/editCar/editCar.js";
import { initSingleCar } from "./pages/findCar/singleCar.js";
import { initShowAllCars } from "./pages/showAllCars/showAllCars.js";

window.addEventListener("load", async () => {
  const templateAddCar = await loadTemplate("./pages/addCar/addcar.html");
  const templateEditCar = await loadTemplate("./pages/editCar/editcar.html");
  const templateSingleCar = await loadTemplate(
    "./pages/findCar/singlecar.html"
  );
  const templateShowAllCars = await loadTemplate(
    "./pages/showAllCars/showallcars.html"
  );
  adjustForMissingHash();

  // @ts-ignore
  const router = new Navigo("/", { hash: true });

  router
    .hooks({
      before(done, match) {
        setActiveLink("menu", match.url);
        done();
      },
    })
    .on({
      "/": () =>
        (document.getElementById("content").innerHTML = `<h2>Home</h2>
      <p style='margin-top:2em'>
      This is the content of the Home Route
      </p>
     `),
      "/add-car": () => {
        renderTemplate(templateAddCar, "content");
        initAddCar(router);
      },
      "/edit-car": (match) => {
        renderTemplate(templateEditCar, "content");
        initEditCar(match);
      },
      "/single-car": (match) => {
        renderTemplate(templateSingleCar, "content");
        initSingleCar(match);
      },
      "/show-all-cars": () => {
        renderTemplate(templateShowAllCars, "content");
        initShowAllCars(router);
      }
    })
    .notFound(
      () =>
        (document.getElementById("content").innerText =
          "404 - No page for this route found")
    )
    .resolve();
});

window.onerror = (e) => alert(e);
