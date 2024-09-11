import { PageFooter } from "./PageFooter.js";
import { OwnsJeansChoices } from "./OwnsJeans.js";

const mainContainer = document.querySelector("#mainHTML");
const render = () => {
  const applicationHTML = `
    <h1>Indiana Jeans Survey</h1>
    <article class="details">
    <section class="detail--column list details__employees">
    <h2>Top</h2>
    ${OwnsJeansChoices()}       
    </section>
    <section class="detail--column list details__products">
    <h2>Footer</h2>
    ${PageFooter()}
    </section>
    </article>`;

  mainContainer.innerHTML = applicationHTML;
};

render();
