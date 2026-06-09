let selectedCountry = null;
let costInputs = {};

// FX RATE (USD → RM, approx 2026 baseline)
const FX_RATE = 4.7;

// Load dropdown
function loadDropdown() {
  const select = document.getElementById("countrySelect");
  select.innerHTML = '<option value="">Choose a country...</option>';
  
  countries.forEach((country, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = country.name;
    select.appendChild(option);
  });
}

// Country selection
document.getElementById("countrySelect").addEventListener("change", function() {
  const index = parseInt(this.value);
  
  if (this.value === "" || isNaN(index)) {
    document.getElementById("compare").innerHTML = "";
    document.getElementById("costSection").style.display = "none";
    selectedCountry = null;
    return;
  }
  
  selectedCountry = countries[index];
  renderVisaTable();
  renderCostTable();
  document.getElementById("costSection").style.display = "block";
});

// Visa table (UPDATED - no financialReq)
function renderVisaTable() {
  const features = [
    { key: "visaType", label: "Visa Type" },
    { key: "processingDays", label: "Processing Days" },
    { key: "workHoursWeek", label: "Work Hours/Week" },
    { key: "acceptanceRate", label: "Approval Rate" },
    { key: "postStudyMonths", label: "Post-Study Months" }
  ];

  let html = "<table>";
  html += "<tr><th>Feature</th><th>Value</th></tr>";

  features.forEach(f => {
    let val;

    if (f.key === "acceptanceRate") {
      val = (selectedCountry.acceptanceRate * 100).toFixed(1) + "%";
    } 
    else if (f.key === "workHoursWeek") {
      val = selectedCountry.workHoursWeek === 0 ? "None" : Math.round(selectedCountry.workHoursWeek);
    } 
    else {
      val = selectedCountry[f.key];
    }

    html += `<tr><td>${f.label}</td><td>${val}</td></tr>`;
  });

  html += "</table>";
  document.getElementById("compare").innerHTML = html;
}

// Cost table (RM)
function renderCostTable() {
  const costs = selectedCountry.livingCosts;
  costInputs = { ...costs };
  
  let html = "<table><tr><th>Category</th><th>Monthly Cost (RM)</th></tr>";
  
  Object.keys(costs).forEach(category => {
    html += `
      <tr>
        <td>${category.charAt(0).toUpperCase() + category.slice(1)}</td>
        <td>
          <input type="number" class="cost-input"
            value="${costs[category] * FX_RATE}"
            onchange="updateCosts('${category}', this.value)"
            onkeyup="updateCosts('${category}', this.value)">
        </td>
      </tr>
    `;
  });
  
  html += "</table>";
  document.getElementById("costTable").innerHTML = html;
  updateTotals();
}

// Update cost
function updateCosts(category, value) {
  costInputs[category] = parseFloat(value) || 0;
  updateTotals();
}

// Totals (RM only)
function updateTotals() {
  const totalMonthlyLiving = Object.values(costInputs).reduce((sum, val) => sum + val, 0);
  const totalYearlyLiving = totalMonthlyLiving * 12;
  
  document.getElementById("monthlyTotal").textContent = "RM " + Math.round(totalMonthlyLiving).toLocaleString();
  document.getElementById("yearlyTotal").textContent = "RM " + Math.round(totalYearlyLiving).toLocaleString();
}

// Init
loadDropdown();
