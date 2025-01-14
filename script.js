 
document.addEventListener('DOMContentLoaded', () => {
    const formSteps = document.querySelectorAll('.form-step');
    const nextBtns = document.querySelectorAll('.next-btn');
    const prevBtns = document.querySelectorAll('.prev-btn');
    let currentStep = 0;

    // Show the current form step
    function showStep(step) {
        formSteps.forEach((formStep, index) => {
            formStep.classList.toggle('hidden', index !== step);
            formStep.classList.toggle('active', index === step);
        });
    }

    // Handle "Next" button click
    nextBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (currentStep < formSteps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });

    // Handle "Previous" button click
    prevBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });
    });

    // Initial step display
    showStep(currentStep);
});
