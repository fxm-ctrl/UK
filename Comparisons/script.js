let selectedUnis = [];

// Load dropdown
function loadDropdown() {
  const select = document.getElementById("uniSelect");

  universities.forEach((uni, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${uni.name} (${uni.country})`;
    select.appendChild(option);
  });
}

// Add university
function addUniversity() {
  const select = document.getElementById("uniSelect");
  const uni = universities[select.value];

  if (!selectedUnis.includes(uni)) {
    selectedUnis.push(uni);
    renderSelected();
    renderTable();
  }
}

// Remove university
function removeUniversity(index) {
  selectedUnis.splice(index, 1);
  renderSelected();
  renderTable();
}

// Show selected (WITH BUTTONS)
function renderSelected() {
  const div = document.getElementById("selected");
  div.innerHTML = "";

  selectedUnis.forEach((u, i) => {
    div.innerHTML += `
      <div class="chip">
        <span>${u.name}</span>
        <button class="remove-btn" onclick="removeUniversity(${i})">✕</button>
      </div>
    `;
  });
}

// Table
function renderTable() {
  function isBest(value, best, type) {
  if (type === "high") return value === best;
  if (type === "low") return value === best;
  return false;
}
    


  const features = [
    { key: "ranking", label: "World Ranking", type: "low" },
    { key: "fees", label: "Fees (USD)", type: "low" },
    { key: "acceptance", label: "Acceptance Rate", type: "high" },
    { key: "satisfaction", label: "Student Satisfaction", type: "high" },
    { key: "onCampus", label: "On-Campus accomodation", type: "bool" },
    { key: "onCost", label: "On-Campus Cost", type: "low" },
    { key: "offCost", label: "Off-Campus Cost", type: "low" }
  ];

  let html = "<table>";

  html += "<tr><th>Feature</th>";
  selectedUnis.forEach(u => {
    html += `<th>${u.name}</th>`;
  });
  html += "</tr>";

  features.forEach(f => {
    html += `<tr><td>${f.label}</td>`;

    let values = selectedUnis.map(u => {
      if (f.key === "onCampus") return u.accommodation.onCampus ? 1 : 0;
      if (f.key === "onCost") return u.accommodation.onCost || Infinity;
      if (f.key === "offCost") return u.accommodation.offCost;
      return u[f.key];
    });

    let best = (f.type === "high") ? Math.max(...values) : Math.min(...values);

    selectedUnis.forEach(u => {
      let val;

      if (f.key === "fees") val = "$" + u.fees.toLocaleString();
      else if (f.key === "acceptance") val = (u.acceptance * 100).toFixed(1) + "%";
      else if (f.key === "satisfaction") val = u.satisfaction + "/5";
      else if (f.key === "onCampus") val = u.accommodation.onCampus ? "Yes" : "No";
      else if (f.key === "onCost") val = u.accommodation.onCost ? "$" + u.accommodation.onCost : "N/A";
      else if (f.key === "offCost") val = "$" + u.accommodation.offCost;
      else val = u[f.key];

      let numericValue;

        if (f.key === "fees") numericValue = u.fees;
        else if (f.key === "acceptance") numericValue = u.acceptance;
        else if (f.key === "satisfaction") numericValue = u.satisfaction;
        else if (f.key === "onCampus") numericValue = u.accommodation.onCampus ? 1 : 0;
        else if (f.key === "onCost") numericValue = u.accommodation.onCost || Infinity;
        else if (f.key === "offCost") numericValue = u.accommodation.offCost;
        else numericValue = u[f.key];

        let highlight = isBest(numericValue, best, f.type)
        ? "style='background:#d4f8d4;font-weight:bold;'"
        : "";

        html += `<td ${highlight}>${val}</td>`;
    });

    html += "</tr>";
  });

  html += "</table>";

  document.getElementById("compare").innerHTML = html;
}

// Init
loadDropdown();