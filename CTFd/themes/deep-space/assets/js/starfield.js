// Deep Space Anomaly - Starfield Logic

document.addEventListener('DOMContentLoaded', () => {
    const starContainer = document.createElement('div');
    starContainer.className = 'deep-space-background';

    const stars1 = document.createElement('div');
    stars1.className = 'stars';
    starContainer.appendChild(stars1);

    const stars2 = document.createElement('div');
    stars2.className = 'stars2';
    starContainer.appendChild(stars2);

    const stars3 = document.createElement('div');
    stars3.className = 'stars3';
    starContainer.appendChild(stars3);

    document.body.prepend(starContainer);

    // Mission Objective Terminology Replacement
    const replaceTerminology = () => {
        const challengeHeader = document.querySelector('.challenge-name');
        if (challengeHeader && !challengeHeader.dataset.modified) {
            // Add visual glint effect
            challengeHeader.dataset.modified = "true";
        }

        const submitBtn = document.getElementById('challenge-submit');
        if (submitBtn && submitBtn.innerText.trim() === 'Submit') {
            submitBtn.innerText = 'Transmit';
            submitBtn.classList.add('btn-outline-primary');
            submitBtn.classList.remove('btn-outline-secondary');
        }
    };

    // Observer to handle dynamic content loading (modals)
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                replaceTerminology();
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});
