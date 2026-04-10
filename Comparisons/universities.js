const universities = [

  // 🇺🇸 USA (USD $)
  { name: "Harvard University", country: "USA", currency: "$", ranking: 4, fees: 57000, acceptance: 0.04, satisfaction: 4.8,
    accommodation: { onCampus: true, onCost: 20000, offCost: 25000 } },

  { name: "Yale University", country: "USA", currency: "$", ranking: 16, fees: 62000, acceptance: 0.05, satisfaction: 4.7,
    accommodation: { onCampus: true, onCost: 19000, offCost: 24000 } },

  { name: "Princeton University", country: "USA", currency: "$", ranking: 17, fees: 56000, acceptance: 0.04, satisfaction: 4.9,
    accommodation: { onCampus: true, onCost: 18000, offCost: 23000 } },

  { name: "Columbia University", country: "USA", currency: "$", ranking: 23, fees: 65000, acceptance: 0.06, satisfaction: 4.6,
    accommodation: { onCampus: true, onCost: 21000, offCost: 26000 } },

  { name: "University of Pennsylvania", country: "USA", currency: "$", ranking: 12, fees: 63000, acceptance: 0.06, satisfaction: 4.7,
    accommodation: { onCampus: true, onCost: 20000, offCost: 25000 } },

  { name: "Brown University", country: "USA", currency: "$", ranking: 64, fees: 62000, acceptance: 0.05, satisfaction: 4.6,
    accommodation: { onCampus: true, onCost: 19000, offCost: 24000 } },

  { name: "Dartmouth College", country: "USA", currency: "$", ranking: 237, fees: 61000, acceptance: 0.06, satisfaction: 4.5,
    accommodation: { onCampus: true, onCost: 18000, offCost: 22000 } },

  { name: "Cornell University", country: "USA", currency: "$", ranking: 13, fees: 60000, acceptance: 0.07, satisfaction: 4.6,
    accommodation: { onCampus: true, onCost: 19000, offCost: 24000 } },

  { name: "Stanford University", country: "USA", currency: "$", ranking: 5, fees: 60000, acceptance: 0.04, satisfaction: 4.9,
    accommodation: { onCampus: true, onCost: 19000, offCost: 24000 } },

  { name: "MIT", country: "USA", currency: "$", ranking: 3, fees: 58000, acceptance: 0.04, satisfaction: 4.9,
    accommodation: { onCampus: true, onCost: 18000, offCost: 22000 } },

  { name: "Caltech", country: "USA", currency: "$", ranking: 7, fees: 60000, acceptance: 0.03, satisfaction: 4.8,
    accommodation: { onCampus: true, onCost: 18000, offCost: 23000 } },

  { name: "University of Chicago", country: "USA", currency: "$", ranking: 11, fees: 62000, acceptance: 0.07, satisfaction: 4.7,
    accommodation: { onCampus: true, onCost: 19000, offCost: 24000 } },

  // 🇬🇧 UK (£)
  { name: "University of Oxford", country: "UK", currency: "£", ranking: 1, fees: 45000, acceptance: 0.17, satisfaction: 4.8,
    accommodation: { onCampus: true, onCost: 15000, offCost: 18000 } },

  { name: "University of Cambridge", country: "UK", currency: "£", ranking: 2, fees: 43000, acceptance: 0.18, satisfaction: 4.8,
    accommodation: { onCampus: true, onCost: 14000, offCost: 17000 } },

  { name: "Imperial College London", country: "UK", currency: "£", ranking: 6, fees: 40000, acceptance: 0.15, satisfaction: 4.7,
    accommodation: { onCampus: true, onCost: 15000, offCost: 20000 } },

  { name: "UCL", country: "UK", currency: "£", ranking: 9, fees: 38000, acceptance: 0.22, satisfaction: 4.5,
    accommodation: { onCampus: true, onCost: 13000, offCost: 17000 } },

  { name: "LSE", country: "UK", currency: "£", ranking: 45, fees: 35000, acceptance: 0.09, satisfaction: 4.6,
    accommodation: { onCampus: false, onCost: null, offCost: 20000 } },

  { name: "University of Edinburgh", country: "UK", currency: "£", ranking: 22, fees: 32000, acceptance: 0.4, satisfaction: 4.5,
    accommodation: { onCampus: true, onCost: 12000, offCost: 16000 } },

  { name: "King's College London", country: "UK", currency: "£", ranking: 40, fees: 31000, acceptance: 0.35, satisfaction: 4.4,
    accommodation: { onCampus: true, onCost: 12000, offCost: 17000 } },

  { name: "University of Bristol", country: "UK", currency: "£", ranking: 55, fees: 30000, acceptance: 0.67, satisfaction: 4.5,
    accommodation: { onCampus: true, onCost: 9000, offCost: 14000 } },

  { name: "University of Manchester", country: "UK", currency: "£", ranking: 32, fees: 29000, acceptance: 0.56, satisfaction: 4.4,
    accommodation: { onCampus: true, onCost: 8500, offCost: 12000 } },

  { name: "University of Warwick", country: "UK", currency: "£", ranking: 67, fees: 28000, acceptance: 0.42, satisfaction: 4.5,
    accommodation: { onCampus: true, onCost: 9500, offCost: 13000 } },

  { name: "Durham University", country: "UK", currency: "£", ranking: 78, fees: 30000, acceptance: 0.41, satisfaction: 4.6,
    accommodation: { onCampus: true, onCost: 9500, offCost: 13000 } },

  // 🇨🇦 CANADA (C$)
  { name: "University of Toronto", country: "Canada", currency: "C$", ranking: 21, fees: 45000, acceptance: 0.43, satisfaction: 4.4,
    accommodation: { onCampus: true, onCost: 15000, offCost: 18000 } },

  { name: "University of British Columbia", country: "Canada", currency: "C$", ranking: 34, fees: 40000, acceptance: 0.52, satisfaction: 4.4,
    accommodation: { onCampus: true, onCost: 14000, offCost: 17000 } },

  // 🇦🇺 AUSTRALIA (A$)
  { name: "University of Melbourne", country: "Australia", currency: "A$", ranking: 14, fees: 35000, acceptance: 0.7, satisfaction: 4.5,
    accommodation: { onCampus: true, onCost: 12000, offCost: 16000 } },

  { name: "Australian National University", country: "Australia", currency: "A$", ranking: 30, fees: 33000, acceptance: 0.35, satisfaction: 4.4,
    accommodation: { onCampus: true, onCost: 11000, offCost: 15000 } },

  // 🇸🇬 SINGAPORE (S$)
  { name: "National University of Singapore", country: "Singapore", currency: "S$", ranking: 8, fees: 30000, acceptance: 0.05, satisfaction: 4.7,
    accommodation: { onCampus: true, onCost: 8000, offCost: 14000 } },

  { name: "Nanyang Technological University", country: "Singapore", currency: "S$", ranking: 15, fees: 29000, acceptance: 0.06, satisfaction: 4.6,
    accommodation: { onCampus: true, onCost: 8000, offCost: 13000 } },

  // 🇭🇰 HONG KONG (HK$)
  { name: "University of Hong Kong", country: "Hong Kong", currency: "HK$", ranking: 26, fees: 200000, acceptance: 0.10, satisfaction: 4.6,
    accommodation: { onCampus: true, onCost: 18000, offCost: 60000 } },

  { name: "Chinese University of Hong Kong", country: "Hong Kong", currency: "HK$", ranking: 47, fees: 145000, acceptance: 0.12, satisfaction: 4.5,
    accommodation: { onCampus: true, onCost: 15000, offCost: 55000 } },

  { name: "Hong Kong University of Science and Technology", country: "Hong Kong", currency: "HK$", ranking: 60, fees: 155000, acceptance: 0.13, satisfaction: 4.6,
    accommodation: { onCampus: true, onCost: 16000, offCost: 58000 } },

  { name: "City University of Hong Kong", country: "Hong Kong", currency: "HK$", ranking: 70, fees: 140000, acceptance: 0.18, satisfaction: 4.4,
    accommodation: { onCampus: true, onCost: 14000, offCost: 50000 } },

  { name: "Hong Kong Polytechnic University", country: "Hong Kong", currency: "HK$", ranking: 65, fees: 145000, acceptance: 0.20, satisfaction: 4.4,
    accommodation: { onCampus: true, onCost: 14000, offCost: 52000 } }

];