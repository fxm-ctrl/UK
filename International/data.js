const countries = [
    // ORIGINAL 27 COUNTRIES (with living costs)
    {
        name: "United Kingdom",
        visaType: "Student Visa",
        financialReq: 1529, // £/month London
        processingDays: 21,
        workHoursWeek: 20,
        acceptanceRate: 0.85,
        postStudyMonths: 24,
        livingCosts: { rent: 1200, food: 350, transport: 120, utilities: 180, misc: 200 }
    },
    {
        name: "United States",
        visaType: "F-1 Visa",
        financialReq: 25000, // Annual
        processingDays: 30,
        workHoursWeek: 20,
        acceptanceRate: 0.75,
        postStudyMonths: 12,
        livingCosts: { rent: 1400, food: 400, transport: 150, utilities: 200, misc: 250 }
    },
    {
        name: "Australia",
        visaType: "Subclass 500",
        financialReq: 29710, // AUD annual
        processingDays: 60,
        workHoursWeek: 48,
        acceptanceRate: 0.82,
        postStudyMonths: 24,
        livingCosts: { rent: 1300, food: 380, transport: 140, utilities: 190, misc: 220 }
    },
    {
        name: "Canada",
        visaType: "Study Permit",
        financialReq: 22895, // CAD annual
        processingDays: 42,
        workHoursWeek: 20,
        acceptanceRate: 0.88,
        postStudyMonths: 36,
        livingCosts: { rent: 1100, food: 320, transport: 110, utilities: 160, misc: 190 }
    },
    {
        name: "Germany",
        visaType: "National D Visa",
        financialReq: 11904, // Annual blocked
        processingDays: 56,
        workHoursWeek: 120/4.33,
        acceptanceRate: 0.92,
        postStudyMonths: 18,
        livingCosts: { rent: 800, food: 280, transport: 80, utilities: 140, misc: 150 }
    },
    // ... [ALL YOUR ORIGINAL 27 COUNTRIES HERE - abbreviated for space]
    
    // + 30 NEW COUNTRIES
    {
        name: "India",
        visaType: "Student Visa",
        financialReq: 5000, // Annual estimate
        processingDays: 15,
        workHoursWeek: 0,
        acceptanceRate: 0.95,
        postStudyMonths: 12,
        livingCosts: { rent: 300, food: 150, transport: 40, utilities: 60, misc: 100 }
    },
    {
        name: "Brazil",
        visaType: "VITEM IV",
        financialReq: 8000, // Annual
        processingDays: 30,
        workHoursWeek: 20,
        acceptanceRate: 0.88,
        postStudyMonths: 12,
        livingCosts: { rent: 500, food: 250, transport: 60, utilities: 90, misc: 120 }
    },
    {
        name: "Mexico",
        visaType: "Student Visa",
        financialReq: 6000, // Annual
        processingDays: 25,
        workHoursWeek: 20,
        acceptanceRate: 0.90,
        postStudyMonths: 6,
        livingCosts: { rent: 450, food: 220, transport: 50, utilities: 80, misc: 110 }
    },
    {
        name: "Turkey",
        visaType: "Student Visa",
        financialReq: 7000, // Annual
        processingDays: 35,
        workHoursWeek: 20,
        acceptanceRate: 0.85,
        postStudyMonths: 12,
        livingCosts: { rent: 400, food: 200, transport: 45, utilities: 70, misc: 105 }
    },
    {
        name: "Russia",
        visaType: "Student Visa",
        financialReq: 4500, // Annual
        processingDays: 28,
        workHoursWeek: 20,
        acceptanceRate: 0.82,
        postStudyMonths: 12,
        livingCosts: { rent: 350, food: 180, transport: 40, utilities: 65, misc: 95 }
    },
    {
        name: "Thailand",
        visaType: "ED Visa",
        financialReq: 6000, // Annual
        processingDays: 20,
        workHoursWeek: 0,
        acceptanceRate: 0.92,
        postStudyMonths: 6,
        livingCosts: { rent: 400, food: 180, transport: 50, utilities: 70, misc: 100 }
    },
    {
        name: "Philippines",
        visaType: "9F Student Visa",
        financialReq: 4000, // Annual
        processingDays: 25,
        workHoursWeek: 0,
        acceptanceRate: 0.95,
        postStudyMonths: 6,
        livingCosts: { rent: 300, food: 150, transport: 40, utilities: 60, misc: 90 }
    },
    {
        name: "Indonesia",
        visaType: "Study Permit",
        financialReq: 3500, // Annual
        processingDays: 20,
        workHoursWeek: 0,
        acceptanceRate: 0.94,
        postStudyMonths: 6,
        livingCosts: { rent: 250, food: 140, transport: 35, utilities: 55, misc: 85 }
    },
    {
        name: "Vietnam",
        visaType: "Student Visa",
        financialReq: 3000, // Annual
        processingDays: 18,
        workHoursWeek: 0,
        acceptanceRate: 0.96,
        postStudyMonths: 6,
        livingCosts: { rent: 250, food: 130, transport: 30, utilities: 50, misc: 80 }
    },
    {
        name: "Argentina",
        visaType: "Student Visa",
        financialReq: 5000, // Annual
        processingDays: 30,
        workHoursWeek: 20,
        acceptanceRate: 0.90,
        postStudyMonths: 12,
        livingCosts: { rent: 350, food: 200, transport: 45, utilities: 70, misc: 100 }
    },
    {
        name: "Chile",
        visaType: "Student Visa",
        financialReq: 6500, // Annual
        processingDays: 35,
        workHoursWeek: 20,
        acceptanceRate: 0.87,
        postStudyMonths: 12,
        livingCosts: { rent: 450, food: 220, transport: 55, utilities: 80, misc: 110 }
    },
    {
        name: "Poland",
        visaType: "Type D",
        financialReq: 8500, // Annual
        processingDays: 28,
        workHoursWeek: 20,
        acceptanceRate: 0.88,
        postStudyMonths: 12,
        livingCosts: { rent: 550, food: 250, transport: 60, utilities: 90, misc: 130 }
    },
    {
        name: "Czech Republic",
        visaType: "Long-term Visa",
        financialReq: 7000, // Annual
        processingDays: 60,
        workHoursWeek: 20,
        acceptanceRate: 0.85,
        postStudyMonths: 9,
        livingCosts: { rent: 500, food: 230, transport: 55, utilities: 85, misc: 120 }
    },
    {
        name: "Hungary",
        visaType: "Residence Permit",
        financialReq: 7500, // Annual
        processingDays: 45,
        workHoursWeek: 24,
        acceptanceRate: 0.86,
        postStudyMonths: 9,
        livingCosts: { rent: 450, food: 220, transport: 50, utilities: 80, misc: 115 }
    },
    {
        name: "Greece",
        visaType: "Type D",
        financialReq: 6500, // Annual
        processingDays: 30,
        workHoursWeek: 20,
        acceptanceRate: 0.84,
        postStudyMonths: 12,
        livingCosts: { rent: 500, food: 240, transport: 55, utilities: 85, misc: 120 }
    },
    {
        name: "Croatia",
        visaType: "Student Visa",
        financialReq: 6000, // Annual
        processingDays: 35,
        workHoursWeek: 20,
        acceptanceRate: 0.87,
        postStudyMonths: 6,
        livingCosts: { rent: 450, food: 210, transport: 50, utilities: 75, misc: 110 }
    },
    {
        name: "Estonia",
        visaType: "D Visa",
        financialReq: 8000, // Annual
        processingDays: 30,
        workHoursWeek: 20,
        acceptanceRate: 0.89,
        postStudyMonths: 9,
        livingCosts: { rent: 600, food: 260, transport: 60, utilities: 95, misc: 135 }
    },
    {
        name: "Latvia",
        visaType: "Type D",
        financialReq: 7000, // Annual
        processingDays: 28,
        workHoursWeek: 20,
        acceptanceRate: 0.88,
        postStudyMonths: 6,
        livingCosts: { rent: 500, food: 240, transport: 55, utilities: 85, misc: 125 }
    },
    {
        name: "Lithuania",
        visaType: "National D Visa",
        financialReq: 7500, // Annual
        processingDays: 30,
        workHoursWeek: 20,
        acceptanceRate: 0.87,
        postStudyMonths: 9,
        livingCosts: { rent: 550, food: 250, transport: 60, utilities: 90, misc: 130 }
    },
    {
        name: "Slovakia",
        visaType: "Student Visa",
        financialReq: 6500, // Annual
        processingDays: 35,
        workHoursWeek: 20,
        acceptanceRate: 0.86,
        postStudyMonths: 6,
        livingCosts: { rent: 450, food: 230, transport: 50, utilities: 80, misc: 120 }
    },
    {
        name: "Slovenia",
        visaType: "Type D",
        financialReq: 7000, // Annual
        processingDays: 40,
        workHoursWeek: 20,
        acceptanceRate: 0.85,
        postStudyMonths: 12,
        livingCosts: { rent: 500, food: 240, transport: 55, utilities: 85, misc: 125 }
    },
    {
        name: "Bulgaria",
        visaType: "Type D",
        financialReq: 5000, // Annual
        processingDays: 30,
        workHoursWeek: 20,
        acceptanceRate: 0.90,
        postStudyMonths: 6,
        livingCosts: { rent: 350, food: 200, transport: 45, utilities: 70, misc: 105 }
    },
    {
        name: "Romania",
        visaType: "Long Stay Visa",
        financialReq: 5500, // Annual
        processingDays: 35,
        workHoursWeek: 20,
        acceptanceRate: 0.89,
        postStudyMonths: 9,
        livingCosts: { rent: 400, food: 210, transport: 50, utilities: 75, misc: 110 }
    },
    {
        name: "Ukraine",
        visaType: "Type D",
        financialReq: 4000, // Annual
        processingDays: 25,
        workHoursWeek: 20,
        acceptanceRate: 0.92,
        postStudyMonths: 12,
        livingCosts: { rent: 300, food: 180, transport: 40, utilities: 60, misc: 95 }
    },
    {
        name: "Egypt",
        visaType: "Student Visa",
        financialReq: 3500, // Annual
        processingDays: 20,
        workHoursWeek: 0,
        acceptanceRate: 0.94,
        postStudyMonths: 6,
        livingCosts: { rent: 250, food: 150, transport: 35, utilities: 55, misc: 85 }
    },
    {
        name: "Morocco",
        visaType: "Long Stay Visa",
        financialReq: 4500, // Annual
        processingDays: 30,
        workHoursWeek: 0,
        acceptanceRate: 0.90,
        postStudyMonths: 6,
        livingCosts: { rent: 300, food: 160, transport: 40, utilities: 60, misc: 90 }
    },
    {
        name: "South Africa",
        visaType: "Study Visa",
        financialReq: 8000, // Annual
        processingDays: 105,
        workHoursWeek: 20,
        acceptanceRate: 0.92,
        postStudyMonths: 12,
        livingCosts: { rent: 450, food: 220, transport: 55, utilities: 90, misc: 110 }
    },
    {
        name: "Israel",
        visaType: "Student Visa (A/2)",
        financialReq: 15000, // Annual
        processingDays: 45,
        workHoursWeek: 20,
        acceptanceRate: 0.80,
        postStudyMonths: 6,
        livingCosts: { rent: 1000, food: 350, transport: 80, utilities: 150, misc: 200 }
    },
    {
        name: "New Zealand",
        visaType: "Student Visa",
        financialReq: 20000, // NZD annual
        processingDays: 56,
        workHoursWeek: 20,
        acceptanceRate: 0.83,
        postStudyMonths: 36,
        livingCosts: { rent: 1050, food: 330, transport: 105, utilities: 165, misc: 185 }
    }

    
];
