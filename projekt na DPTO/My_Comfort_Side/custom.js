const episodes = [{
    episode:'S1 E09',
    series: 'LEGO Monkie Kid'
}, {
    episode:'S2 E07',
    series: 'LEGO Monkie Kid'
}, {
    episode:'S3 E05',
    series: 'LEGO Monkie Kid'
}, {
    episode:'S3 E13',
    series: 'LEGO Monkie Kid'
}, {
    episode:'S3 E15',
    series: 'LEGO Monkie Kid'
}, {
    episode:'S1 E10',
    series: 'Bungou Stray Dogs'
}, {
    episode:'S1 E21',
    series: 'Bungou Stray Dogs'
}, {
    episode:'S2 E01',
    series: 'Bungou Stray Dogs'
}, {
    episode:'S2 E02',
    series: 'Bungou Stray Dogs'
}, {
    episode:'S2 E03',
    series: 'Bungou Stray Dogs'
}, {
    episode:'S2 E01',
    series: 'Helluva Boss'
}, {
    episode:'S1 E01',
    series: 'Owl House'
}, {
    episode:'S1 E05',
    series: 'Owl House'
}, {
    episode:'S1 E16',
    series: 'Owl House'
}, {
    episode:'S2 E06',
    series: 'Owl House'
}, {
    episode:'S2 E07',
    series: 'Owl House'
}, {
    episode:'S2 E09',
    series: 'Owl House'
}, {
    episode:'S2 E13',
    series: 'Owl House'
}, {
    episode:'S2 E15',
    series: 'Owl House'
}, {
    episode:'S2 E21',
    series: 'Owl House'
}, {
    episode:'S2 E19',
    series: 'Owl House'
}, {
    episode:'S2 E20',
    series: 'Owl House'
}, {
    episode:'S1 E19',
    series: 'Gravity Falls'
}, {
    episode:'S2 E04',
    series: 'Gravity Falls'
}, {
    episode:'S2 E15',
    series: 'Gravity Falls'
}, {
    episode:'S2 E18',
    series: 'Gravity Falls'
}, {
    episode:'S2 E19',
    series: 'Gravity Falls'
}, {
    episode:'S2 E20',
    series: 'Gravity Falls'
}, {
    episode:'S1 E12',
    series: 'Camp Camp'
}, {
    episode:'S2 E01',
    series: 'Camp Camp'
}, {
    episode:'S2 E12',
    series: 'Camp Camp'
}, {
    episode:'S1 E11',
    series: 'Danny Phantom'
}, {
    episode:'S1 E18',
    series: 'Danny Phantom'
}, {
    episode:'S2 E05',
    series: 'Danny Phantom'
}, {
    episode:'S2 E07',
    series: 'Danny Phantom'
}, {
    episode:'S2 E08',
    series: 'Danny Phantom'
}, {
    episode:'S2 E09',
    series: 'Danny Phantom'
}, {
    episode:'S2 E10',
    series: 'Danny Phantom'
}, {
    episode:'S2 E15',
    series: 'Danny Phantom'
}, {
    episode:'S2 E17',
    series: 'Danny Phantom'
}, {
    episode:'S3 E11',
    series: 'Danny Phantom'
},]


let btn = document.querySelector("#Qbtn");
let episode = document.querySelector(".episode");
let series = document.querySelector(".series");

btn.addEventListener("click",function() {
    let random = Math.floor(Math.random() * episodes.lenght);

    episode.innerHTML = episodes[random].episode;

    series.innerHTML = episodes[random].series;
})