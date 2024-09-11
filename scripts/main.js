import { PageFooter } from "./PageFooter.js";
import { OwnsJeansChoices } from "./OwnsJeans.js";
import { Location } from "./LocationMod.js";

const locationsHTML = await Location();

const mainContainer = document.querySelector("#mainHTML");
const render = async () => {
  const applicationHTML = `
    <h1>Indiana Jeans Survey</h1>
    <article class="details">
    <section class="detail--column list details__employees">
    <h2>Top</h2>
    ${OwnsJeansChoices()}       
    </section>
    <section>
        ${locationsHTML}
    </section>
    <section class="detail--column list details__products">
    <h2>Footer</h2>
    ${PageFooter()}
    </section>
    </article>`;

  mainContainer.innerHTML = applicationHTML;
};

render();
