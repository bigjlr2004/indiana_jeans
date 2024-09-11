export const OwnsJeansChoices = () => {
  let html = "<h2>Do you own a pair of jeans?</h2>";
  html += "<input type='radio' name='ownsJeans' value=true /> Yes";
  html += "<input type='radio' name='ownsJeans' value=false /> No";

  return html;
};
