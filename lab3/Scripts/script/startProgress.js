let timer1 = null;
let timer2 = null;
let timer3 = null;

let progress1 = 0;
let progress2 = 0;
let progress3 = 0;


const target1 = 60;
const target2 = 30;
const target3 = 53;


function updateBar(barId, progress) {
    const bar = document.getElementById(barId);
    if (bar) {
        bar.style.width = progress + '%';
        bar.textContent = progress > 5 ? progress + '%' : '';
    }
}

function startProgress() {
    stopProgress();

    timer1 = setInterval(() => {
        if (progress1 < target1) {
            progress1++;
            updateBar('bar1', progress1);
        } else {
            clearInterval(timer1);
        }
    }, 30);


    timer2 = setInterval(() => {
        if (progress2 < target2) {
            progress2++;
            updateBar('bar2', progress2);
        } else {
            clearInterval(timer2);
        }
    }, 40);


    timer3 = setInterval(() => {
        if (progress3 < target3) {
            progress3++;
            updateBar('bar3', progress3);
        } else {
            clearInterval(timer3);
        }
    }, 35);
}


function stopProgress() {
    clearInterval(timer1);
    clearInterval(timer2);
    clearInterval(timer3);
}


function resetProgress() {
    stopProgress();
    progress1 = 0;
    progress2 = 0;
    progress3 = 0;
    updateBar('bar1', 0);
    updateBar('bar2', 0);
    updateBar('bar3', 0);
}

window.addEventListener('DOMContentLoaded', () => {
    startProgress();
});