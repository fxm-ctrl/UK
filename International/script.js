let selectedCountry = null;
let costInputs = {};

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
  
  if (index === "" || isNaN(index)) {
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

// Visa table
function renderVisaTable() {
  const features = [
    { key: "visaType", label: "Visa Type" },
    { key: "financialReq", label: "Financial Req (USD)" },
    { key: "processingDays", label: "Processing Days" },
    { key: "workHoursWeek", label: "Work Hours/Week" },
    { key: "acceptanceRate", label: "Approval Rate" },
    { key: "postStudyMonths", label: "Post-Study Months" }
  ];

  let html = "<table>";
  html += "<tr><th>Feature</th><th>Value</th></tr>";

  features.forEach(f => {
    let val;
    if (f.key === "financialReq") val = "$" + Math.round(selectedCountry.financialReq).toLocaleString();
    else if (f.key === "acceptanceRate") val = (selectedCountry.acceptanceRate * 100).toFixed(1) + "%";
    else if (f.key === "workHoursWeek") val = selectedCountry.workHoursWeek === 0 ? "None" : Math.round(selectedCountry.workHoursWeek);
    else val = selectedCountry[f.key];

    html += `<tr><td>${f.label}</td><td>${val}</td></tr>`;
  });

  html += "</table>";
  document.getElementById("compare").innerHTML = html;
}

// Cost of living table + calculator
function renderCostTable() {
  const costs = selectedCountry.livingCosts;
  costInputs = { ...costs };
  
  let html = "<table><tr><th>Category</th><th>Monthly Cost ($)</th></tr>";
  
  Object.keys(costs).forEach(category => {
    html += `
      <tr>
        <td>${category.charAt(0).toUpperCase() + category.slice(1)}</td>
        <td><input type="number" class="cost-input" value="${costs[category]}" 
                   onchange="updateCosts('${category}', this.value)" 
                   onkeyup="updateCosts('${category}', this.value)"></td>
      </tr>
    `;
  });
  
  html += "</table>";
  document.getElementById("costTable").innerHTML = html;
  updateTotals();
}

// Update individual cost
function updateCosts(category, value) {
  costInputs[category] = parseFloat(value) || 0;
  updateTotals();
}

// FIXED: Yearly total = living costs ONLY (12 × monthly living costs)
function updateTotals() {
  const totalMonthlyLiving = Object.values(costInputs).reduce((sum, val) => sum + val, 0);
  const totalYearlyLiving = totalMonthlyLiving * 12; // LIVING COSTS ONLY
  
  document.getElementById("monthlyTotal").textContent = Math.round(totalMonthlyLiving);
  document.getElementById("yearlyTotal").textContent = Math.round(totalYearlyLiving).toLocaleString();
  
  const rentPercent = totalMonthlyLiving > 0 ? (costInputs.rent / totalMonthlyLiving * 100).toFixed(0) : 0;
  const foodPercent = totalMonthlyLiving > 0 ? (costInputs.food / totalMonthlyLiving * 100).toFixed(0) : 0;
  
}

// Init
loadDropdown();
