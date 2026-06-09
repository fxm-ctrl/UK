const universities = [
  {
    name: "Harvard University",
    country: "USA",
    website: "https://www.harvard.edu",
    feesRM: 242250,
    ranking: 4,
    acceptance: 0.04,
    satisfaction: 4.8,
    accommodation: { onCampus: true, onCost: 20000, offCost: 25000 }
  },
  {
    name: "Yale University",
    country: "USA",
    website: "https://www.yale.edu",
    feesRM: 297075,
    ranking: 16,
    acceptance: 0.05,
    satisfaction: 4.7,
    accommodation: { onCampus: true, onCost: 11550, offCost: 24000 }
  },
  {
    name: "Princeton University",
    country: "USA",
    website: "https://www.princeton.edu",
    feesRM: 255000,
    ranking: 17,
    acceptance: 0.04,
    satisfaction: 4.9,
    accommodation: { onCampus: true, onCost: 18000, offCost: 23000 }
  },
  {
    name: "Columbia University",
    country: "USA",
    website: "https://www.columbia.edu",
    feesRM: 276250,
    ranking: 23,
    acceptance: 0.06,
    satisfaction: 4.6,
    accommodation: { onCampus: true, onCost: 21000, offCost: 26000 }
  },
  {
    name: "University of Pennsylvania",
    country: "USA",
    website: "https://www.upenn.edu",
    feesRM: 267750,
    ranking: 12,
    acceptance: 0.06,
    satisfaction: 4.7,
    accommodation: { onCampus: true, onCost: 20000, offCost: 25000 }
  },
  {
    name: "Brown University",
    country: "USA",
    website: "https://www.brown.edu",
    feesRM: 263500,
    ranking: 64,
    acceptance: 0.05,
    satisfaction: 4.6,
    accommodation: { onCampus: true, onCost: 19000, offCost: 24000 }
  },
  {
    name: "Dartmouth College",
    country: "USA",
    website: "https://home.dartmouth.edu",
    feesRM: 259250,
    ranking: 237,
    acceptance: 0.06,
    satisfaction: 4.5,
    accommodation: { onCampus: true, onCost: 18000, offCost: 22000 }
  },
  {
    name: "Cornell University",
    country: "USA",
    website: "https://www.cornell.edu",
    feesRM: 255000,
    ranking: 13,
    acceptance: 0.07,
    satisfaction: 4.6,
    accommodation: { onCampus: true, onCost: 19000, offCost: 24000 }
  },
  {
    name: "Stanford University",
    country: "USA",
    website: "https://www.stanford.edu",
    feesRM: 287857,
    ranking: 5,
    acceptance: 0.04,
    satisfaction: 4.9,
    accommodation: { onCampus: true, onCost: 19000, offCost: 24000 }
  },
  {
    name: "MIT",
    country: "USA",
    website: "https://www.mit.edu",
    feesRM: 246500,
    ranking: 3,
    acceptance: 0.04,
    satisfaction: 4.9,
    accommodation: { onCampus: true, onCost: 18000, offCost: 22000 }
  },
  {
    name: "Caltech",
    country: "USA",
    website: "https://www.caltech.edu",
    feesRM: 255000,
    ranking: 7,
    acceptance: 0.03,
    satisfaction: 4.8,
    accommodation: { onCampus: true, onCost: 18000, offCost: 23000 }
  },
  {
    name: "University of Chicago",
    country: "USA",
    website: "https://www.uchicago.edu",
    feesRM: 263500,
    ranking: 11,
    acceptance: 0.07,
    satisfaction: 4.7,
    accommodation: { onCampus: true, onCost: 19000, offCost: 24000 }
  },

  {
    name: "University of Oxford",
    country: "UK",
    website: "https://www.ox.ac.uk",
    feesRM: 258750,
    ranking: 1,
    acceptance: 0.17,
    satisfaction: 4.8,
    accommodation: { onCampus: true, onCost: 15000, offCost: 18000 }
  },
  {
    name: "University of Cambridge",
    country: "UK",
    website: "https://www.cam.ac.uk",
    feesRM: 247250,
    ranking: 2,
    acceptance: 0.18,
    satisfaction: 4.8,
    accommodation: { onCampus: true, onCost: 14000, offCost: 17000 }
  },
  {
    name: "Imperial College London",
    country: "UK",
    website: "https://www.imperial.ac.uk",
    feesRM: 230000,
    ranking: 6,
    acceptance: 0.15,
    satisfaction: 4.7,
    accommodation: { onCampus: true, onCost: 15000, offCost: 20000 }
  },
  {
    name: "UCL",
    country: "UK",
    website: "https://www.ucl.ac.uk",
    feesRM: 218500,
    ranking: 9,
    acceptance: 0.22,
    satisfaction: 4.5,
    accommodation: { onCampus: true, onCost: 13000, offCost: 17000 }
  },
  {
    name: "LSE",
    country: "UK",
    website: "https://www.lse.ac.uk",
    feesRM: 201250,
    ranking: 45,
    acceptance: 0.09,
    satisfaction: 4.6,
    accommodation: { onCampus: false, onCost: null, offCost: 20000 }
  },

  {
    name: "University of Toronto",
    country: "Canada",
    website: "https://www.utoronto.ca",
    feesRM: 139500,
    ranking: 21,
    acceptance: 0.43,
    satisfaction: 4.4,
    accommodation: { onCampus: true, onCost: 15000, offCost: 18000 }
  },
  {
    name: "University of British Columbia",
    country: "Canada",
    website: "https://www.ubc.ca",
    feesRM: 124000,
    ranking: 34,
    acceptance: 0.52,
    satisfaction: 4.4,
    accommodation: { onCampus: true, onCost: 14000, offCost: 17000 }
  },

  {
    name: "University of Melbourne",
    country: "Australia",
    website: "https://www.unimelb.edu.au",
    feesRM: 96250,
    ranking: 14,
    acceptance: 0.7,
    satisfaction: 4.5,
    accommodation: { onCampus: true, onCost: 12000, offCost: 16000 }
  },
  {
    name: "Australian National University",
    country: "Australia",
    website: "https://www.anu.edu.au",
    feesRM: 90750,
    ranking: 30,
    acceptance: 0.35,
    satisfaction: 4.4,
    accommodation: { onCampus: true, onCost: 11000, offCost: 15000 }
  },

  {
    name: "National University of Singapore",
    country: "Singapore",
    website: "https://www.nus.edu.sg",
    feesRM: 100500,
    ranking: 8,
    acceptance: 0.05,
    satisfaction: 4.7,
    accommodation: { onCampus: true, onCost: 8000, offCost: 14000 }
  },
  {
    name: "Nanyang Technological University",
    country: "Singapore",
    website: "https://www.ntu.edu.sg",
    feesRM: 97150,
    ranking: 15,
    acceptance: 0.06,
    satisfaction: 4.6,
    accommodation: { onCampus: true, onCost: 8000, offCost: 13000 }
  },

  {
    name: "University of Hong Kong",
    country: "Hong Kong",
    website: "https://www.hku.hk",
    feesRM: 108000,
    ranking: 26,
    acceptance: 0.10,
    satisfaction: 4.6,
    accommodation: { onCampus: true, onCost: 18000, offCost: 60000 }
  },
  {
    name: "Chinese University of Hong Kong",
    country: "Hong Kong",
    website: "https://www.cuhk.edu.hk",
    feesRM: 78300,
    ranking: 47,
    acceptance: 0.12,
    satisfaction: 4.5,
    accommodation: { onCampus: true, onCost: 15000, offCost: 55000 }
  },
  {
    name: "Hong Kong University of Science and Technology",
    country: "Hong Kong",
    website: "https://www.hkust.edu.hk",
    feesRM: 83700,
    ranking: 60,
    acceptance: 0.13,
    satisfaction: 4.6,
    accommodation: { onCampus: true, onCost: 16000, offCost: 58000 }
  },
  {
    name: "City University of Hong Kong",
    country: "Hong Kong",
    website: "https://www.cityu.edu.hk",
    feesRM: 75600,
    ranking: 70,
    acceptance: 0.18,
    satisfaction: 4.4,
    accommodation: { onCampus: true, onCost: 14000, offCost: 50000 }
  },
  {
    name: "Hong Kong Polytechnic University",
    country: "Hong Kong",
    website: "https://www.polyu.edu.hk",
    feesRM: 78300,
    ranking: 65,
    acceptance: 0.20,
    satisfaction: 4.4,
    accommodation: { onCampus: true, onCost: 14000, offCost: 52000 }
  }
];
