let currentQuestion = 1;
let answers = {};

// Next question progression
document.querySelectorAll('select').forEach((select, index) => {
    select.addEventListener('change', function() {
        if (this.value !== "") {
            // Store answer
            const qId = this.id;
            answers[qId] = this.value;
            
            // Show next question
            if (currentQuestion < 10) {
                document.getElementById(`q${currentQuestion + 1}`).style.display = 'block';
                currentQuestion++;
            }
        }
    });
});

// FIXED: Generate recommendation with PROPER SCORING
function generateRecommendation() {
    // Validate all answers
    if (Object.keys(answers).length < 10) {
        alert('Please answer all 10 questions!');
        return;
    }
    
    // Reset scores
    Object.keys(continents).forEach(continent => {
        continents[continent].score = 0;
    });
    
    // Calculate scores for each continent
    Object.keys(continents).forEach(continent => {
        let score = 0;
        
        // 1. Climate (20 pts max)
        if (answers.climate === 'warm' && (continent === 'asia' || continent === 'australiaOceania')) score += 20;
        if (answers.climate === 'temperate' && continent === 'europe') score += 20;
        if (answers.climate === 'cold' && (continent === 'europe' || continent === 'northAmerica')) score += 20;
        
        // 2. Budget (25 pts max)
        if (answers.budget === 'low' && continent === 'asia') score += 25;
        if (answers.budget === 'medium' && (continent === 'europe' || continent === 'australiaOceania')) score += 20;
        if (answers.budget === 'high' && continent === 'northAmerica') score += 25;
        
        // 3. Landscape (15 pts)
        if (answers.landscape === 'urban' && (continent === 'northAmerica' || continent === 'asia')) score += 15;
        if (answers.landscape === 'coastal' && (continent === 'australiaOceania' || continent === 'europe')) score += 15;
        if (answers.landscape === 'mountains' && (continent === 'europe' || continent === 'northAmerica')) score += 15;
        
        // 4. Language (20 pts)
        if (answers.language === 'english' && (continent === 'northAmerica' || continent === 'australiaOceania')) score += 20;
        if (answers.language === 'multi' && (continent === 'europe' || continent === 'asia')) score += 15;
        
        // 5. Duration (10 pts)
        if (answers.duration === 'undergrad' && continent !== 'northAmerica') score += 10; // NA expensive for UG
        
        // 6. Work rights (15 pts)
        if (answers.work === 'yes' && (continent === 'australiaOceania' || continent === 'europe')) score += 15;
        
        // 7. Post-study work (25 pts)
        if (answers.poststudy === 'important') {
            if (continent === 'northAmerica' || continent === 'australiaOceania') score += 25;
            else score += 15;
        }
        
        // 8. Safety (15 pts)
        if (answers.safety === 'high' && (continent === 'europe' || continent === 'northAmerica')) score += 15;
        
        // 9. Culture (10 pts)
        if (answers.culture === 'diverse' && (continent === 'asia' || continent === 'northAmerica')) score += 10;
        
        // 10. FIXED: Tourist destinations (15 pts)
        if (answers.proximity === 'tourist') {
            if (continent === 'europe' || continent === 'australiaOceania') score += 15;
            if (continent === 'asia') score += 12;
        } else {
            if (continent === 'northAmerica') score += 15;
            score += 8;
        }
        
        continents[continent].score = score;
    });
    
    // Find best continent
    const bestContinent = Object.keys(continents).reduce((a, b) => 
        continents[a].score > continents[b].score ? a : b
    );
    
    renderResult(bestContinent);
}

// Render result table
function renderResult(bestContinent) {
    const continent = continents[bestContinent];
    
    let html = `
        <table>
            <tr><th>BEST MATCH</th><td class="continent-highlight">${continent.name}</td></tr>
            <tr><th>Score</th><td>${continent.score}/175</td></tr>
            <tr><th>Why Recommended?</th><td>${continent.bestFor}</td></tr>
        </table>
        
        <div class="university-list">
            <h3> Top 5 Universities</h3>
    `;
    
    continent.universities.forEach((uni, index) => {
        html += `<div style="margin: 8px 0; padding: 10px; background: white;">${index + 1}. ${uni}</div>`;
    });
    
    html += `
        </div>
        <button onclick="restartQuiz()" class="find-btn" style="margin-top: 20px; background: #28a745;">New Recommendation</button>
    `;
    
    document.getElementById('questionnaire').style.display = 'none';
    document.getElementById('result').innerHTML = html;
    document.getElementById('result').style.display = 'block';
}

// Restart quiz
function restartQuiz() {
    answers = {};
    currentQuestion = 1;
    document.getElementById('questionnaire').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    document.querySelectorAll('.question').forEach((q, i) => {
        q.style.display = i === 0 ? 'block' : 'none';
    });
    document.getElementById('climate').value = '';
}

// Init - show first question
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('q1').style.display = 'block';
});