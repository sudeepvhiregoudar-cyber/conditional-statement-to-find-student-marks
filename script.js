// Student marks
const mark1 = 28;
const mark2 = 67;
const mark3 = 95;

// Decide the performance category using conditional statements
function getPerformance(mark) {
  if (mark > 90) {
    return "Good";
  } else if (mark > 35 && mark < 70) {
    return "Average";
  } else if (mark < 35) {
    return "Fail";
  } else {
    // Marks not covered by the rules (35, and 70 to 90)
    return "Not Categorized";
  }
}

// Build a result card and add it to the page
function showResult(label, mark) {
  const performance = getPerformance(mark);
  const cssClass = performance.toLowerCase();

  const card = document.createElement("div");
  card.className = "card " + cssClass;
  card.innerHTML =
    '<p><span class="label">' + label + ':</span> ' + mark + '</p>' +
    '<p><span class="label">Performance:</span> ' +
    '<span class="result ' + cssClass + '">' + performance + '</span></p>';

  document.getElementById("output").appendChild(card);
}

showResult("Mark 1", mark1);
showResult("Mark 2", mark2);
showResult("Mark 3", mark3);
