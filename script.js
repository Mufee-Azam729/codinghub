
        (function() {
            const runBtn = document.getElementById('runCodeBtn');
            const outputDiv = document.getElementById('outputDisplay');
            if (runBtn) {
                runBtn.addEventListener('click', function() {
                    // simulate running the code from the editor panel
                    // we'll change the output to something "dynamic"
                    const funnyMessages = [
                        '84 points (but in strict mode!)',
                        '12 * 7 = 84 ⚡',
                        '84 points — you earned it',
                        '84 pts + bonus = 100',
                        'TypeError: "points" is not a number 😄',
                        '84 🏆'
                    ];
                    const randomIndex = Math.floor(Math.random() * funnyMessages.length);
                    outputDiv.innerText = funnyMessages[randomIndex];

                    // bonus: also change a bit of preview style
                    outputDiv.style.backgroundColor = '#e6f0ff';
                    setTimeout(() => outputDiv.style.backgroundColor = 'white', 150);
                });
            }

            // optional: clicking on "View demo" also triggers something playful
            const demoBtn = document.querySelector('.btn-outline');
            if (demoBtn && demoBtn.textContent.includes('View demo')) {
                demoBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    alert('✨ Welcome to codeStack demo — try the playground above!');
                });
            }

            // sign in / start learning demo (non-intrusive)
            const startBtn = document.querySelector('.btn-large');
            if (startBtn) {
                startBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    outputDiv.innerText = '“Hello, future coder!”  🚀';
                });
            }
        })();
   
