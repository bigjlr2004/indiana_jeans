import { PageFooter } from "./PageFooter.js";
import { OwnsJeansChoices } from "./OwnsJeans.js";
import { Location } from "./LocationMod.js";
import { SaveSubmission } from "./SaveSubmission.js";
import { Submissions } from "./SubmissionList.js";

const mainContainer = document.querySelector("#mainHTML");

const render = async () => {
  const locationsHTML = await Location();
  const saveSurvey = await SaveSubmission();
  const GetSubmissions = await Submissions();

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
    <section>
     <h2>Click to submit</h2>
    ${saveSurvey}
    </section>
    <section>
    ${GetSubmissions}
    </section>
    <section class="detail--column list details__products">
    <h2>Footer</h2>
    ${PageFooter()}
    </section>
    </article>`;

  mainContainer.innerHTML = applicationHTML;
};

document.addEventListener("newSubmissionCreated", render);

render();
