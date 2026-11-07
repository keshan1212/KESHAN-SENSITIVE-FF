// Lightning Animation Canvas Logic
const canvas = document.getElementById('lightningCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function drawLightning() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (Math.random() < 0.3) {
        ctx.strokeStyle = Math.random() < 0.5 ? 'rgba(0, 255, 204, 0.8)' : 'rgba(255, 0, 85, 0.8)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        let x = Math.random() * canvas.width;
        let y = 0;
        ctx.moveTo(x, y);

        while (y < canvas.height) {
            x += (Math.random() - 0.5) * 40;
            y += Math.random() * 30;
            ctx.lineTo(x, y);
        }
        ctx.stroke();
    }
}
setInterval(drawLightning, 100);

// Sensitivity Generator Logic
function getSensitivity() {
    const input = document.getElementById('phoneInput').value.trim();
    if (!input) {
        alert("Please enter a phone model!");
        return;
    }

    // Dynamic Seed Calculation for unique results per model name
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
        hash = input.charCodeAt(i) + ((hash << 5) - hash);
    }

    const getVal = (min, max, offset) => {
        const val = Math.abs((hash + offset) % (max - min + 1)) + min;
        return val;
    };

    document.getElementById('deviceTitle').innerText = input.toUpperCase();
    document.getElementById('genVal').innerText = getVal(93, 100, 1);
    document.getElementById('redVal').innerText = getVal(88, 98, 2);
    document.getElementById('scope2Val').innerText = getVal(85, 95, 3);
    document.getElementById('scope4Val').innerText = getVal(80, 92, 4);
    document.getElementById('sniperVal').innerText = getVal(50, 75, 5);
    document.getElementById('freeVal').innerText = getVal(60, 90, 6);

    document.getElementById('dpiVal').innerText = getVal(390, 580, 7) + " DPI";
    document.getElementById('btnVal').innerText = getVal(42, 58, 8) + "%";

    document.getElementById('resultContainer').classList.remove('hidden');
          }
