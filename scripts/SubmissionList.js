export const Submissions = async () => {
  //   document.addEventListener("change", handleOwnershipChange);
  const response = await fetch("http://localhost:8088/submissions");
  const submissions = await response.json();

  let html = "<h2>Submissions</h2> <ul>";
  for (const submission of submissions) {
    html += `<li data-id="${submission.id}">Owns Jeans? ${submission.ownsBlueJeans} 
         Area type foreign key? ${submission.socioLocationId} </li>`;
  }

  html += "</ul>";

  return html;
};
