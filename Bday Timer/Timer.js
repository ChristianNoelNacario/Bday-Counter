const bday = "29 December 2024";

const d = document.getElementById('days');
const h = document.getElementById('hours');
const m = document.getElementById('mins');
const s = document.getElementById('seconds');

function countdown () {
    const bdaydate = new Date(bday).getTime();
    const today = new Date().getTime();
    const diff = (bdaydate - today);

    const day = Math.floor((diff / 1000) / 3600 / 24);
    const hour = Math.floor(((diff / 1000) / 3600) % 24);
    const min = Math.floor(((diff / 1000) / 60) % 60);
    const second = Math.floor((diff / 1000) % 60);


    d.innerHTML = day;
    h.innerHTML = hour;
    m.innerHTML = min;
    s.innerHTML = second;
}

countdown();

setInterval(countdown, 1000);


