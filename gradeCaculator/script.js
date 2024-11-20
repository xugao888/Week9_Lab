function generateInputs() {
    let count = parseInt(document.getElementById('subject-count').value);
    let inputsDiv = document.getElementById('inputs');
    let resultsDiv = document.getElementById('results');
    inputsDiv.innerHTML = '';
    resultsDiv.innerHTML = '';

    for (let i = 1; i <= count; i++) {
        inputsDiv.innerHTML += `
            <label for="subject-${i}">Marks for Subject ${i}:</label>
            <input type="number" id="subject-${i}" min="0" max="100" placeholder="Enter marks"><br>
        `;
    }
    inputsDiv.innerHTML += `<button onclick="calculateResults(${count})">Calculate Results</button>`;
}

function calculateResults(count) {
    const resultsDiv = document.getElementById('results');
    let total = 0;
    let isValid = true;
    let grades = '';

    for (let i = 1; i <= count; i++) {
        let marks = parseInt(document.getElementById(`subject-${i}`).value);
        total += marks;
        grades += `<p>Subject ${i}: Marks = ${marks}, Grade = ${getGrade(marks)}</p>`;
    }


    const average = total / count;
    resultsDiv.innerHTML = `
        <h2>Results</h2>
        ${grades}
        <p>Average Marks:</strong> ${average.toFixed(2)}</p>
        <p>Overall Grade:</strong> ${getGrade(average)}</p>
    `;
}

function getGrade(marks) {
    if (marks >= 90) return 'A';
    if (marks >= 80) return 'B';
    if (marks >= 70) return 'C';
    if (marks >= 60) return 'D';
    if (marks >= 50) return 'E';
    return 'F';
}
