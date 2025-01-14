document.querySelectorAll('.pill-bar__item').forEach((button, index) => {
    button.addEventListener('click', () => {
        // Hide all solutions first
        document.querySelectorAll('#solution-list li').forEach((solution) => {
            solution.style.display = 'none';
        });
        
        // Show the solution corresponding to the clicked button
        const solutions = document.querySelectorAll('#solution-list li');
        if (solutions[index]) {
            solutions[index].style.display = 'block';
        }
    });
});
