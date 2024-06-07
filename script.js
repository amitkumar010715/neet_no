function calculateResults() {
    const marks = parseInt(document.getElementById('marks').value);
    let flag = false;
    let result = '';

    for (let i = 1; i <= 180; i++) {
        for (let j = 0; j <= 180; j++) {
            if (marks === (i * 4 - j) && i + j <= 180) {
                flag = true;
                result += `Correct: ${i}, Incorrect: ${j}<br>`;
            }
        }
    }

    if (!flag) {
        result = 'Impossible';
    }

    document.getElementById('result').innerHTML = result;
}
