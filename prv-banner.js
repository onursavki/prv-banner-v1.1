document.addEventListener('DOMContentLoaded', function () {
    var today = new Date();
    var currentYear = today.getFullYear();

    // Tarih aralıkları
    var banner1StartDate = new Date(currentYear, 0, 0);
    var banner1EndDate = new Date(currentYear, 0, 0);

    var banner2StartDate = new Date(currentYear, 2, 8);
    var banner2EndDate = new Date(currentYear, 2, 9);

    var banner3StartDate = new Date(currentYear, 3, 23);
    var banner3EndDate = new Date(currentYear, 3, 24);

    var banner4StartDate = new Date(currentYear, 4, 1);
    var banner4EndDate = new Date(currentYear, 4, 2);

    var banner5StartDate = new Date(currentYear, 4, 19);
    var banner5EndDate = new Date(currentYear, 4, 20);

    var banner6StartDate = new Date(currentYear, 4, 20);
    var banner6EndDate = new Date(currentYear, 4, 21);

    var banner7StartDate = new Date(currentYear, 7, 30);
    var banner7EndDate = new Date(currentYear, 7, 31);

    var banner8StartDate = new Date(currentYear, 9, 29);
    var banner8EndDate = new Date(currentYear, 9, 30);

    var banner9StartDate = new Date(currentYear, 10, 10);
    var banner9EndDate = new Date(currentYear, 10, 11);

    // Kontroller
    if (today >= banner1StartDate && today <= banner1EndDate) {
        document.getElementById('banner1').style.display = 'block';
        document.getElementById('banner-container').style.background = 'linear-gradient(to top, #ea2421, #dd1106, #cf0800)';
    }
    else if (today >= banner2StartDate && today <= banner2EndDate) {
        document.getElementById('banner2').style.display = 'block';
        document.getElementById('banner-container').style.backgroundColor = '#fd7b7d';
    }
    else if (today >= banner3StartDate && today <= banner3EndDate) {
        document.getElementById('banner3').style.display = 'block';
        document.getElementById('banner-container').style.backgroundColor = '#2a9f9e';
    }
    else if (today >= banner4StartDate && today <= banner4EndDate) {
        document.getElementById('banner4').style.display = 'block';
        document.getElementById('banner-container').style.background = 'linear-gradient(to top, #ea2421, #dd1106, #cf0800)';
    }
    else if (today >= banner5StartDate && today <= banner5EndDate) {
        document.getElementById('banner5').style.display = 'block';
        document.getElementById('banner-container').style.background = 'linear-gradient(to top, #ea2421, #dd1106, #cf0800)';
    }
    else if (today >= banner6StartDate && today <= banner6EndDate) {
        document.getElementById('banner6').style.display = 'block';
        document.getElementById('banner-container').style.background = `linear-gradient(to right, transparent 50%, #ffffff 50%), linear-gradient(to top, #ea2421, #dd1106, #d40701)`;

    }
    else if (today >= banner7StartDate && today <= banner7EndDate) {
        document.getElementById('banner7').style.display = 'block';
        document.getElementById('banner-container').style.background = 'linear-gradient(to top, #ea2421, #dd1106, #cf0800)';
    }
    else if (today >= banner8StartDate && today <= banner8EndDate) {
        document.getElementById('banner8').style.display = 'block';
        document.getElementById('banner-container').style.background = 'linear-gradient(to top, #ea2421, #dd1106, #cf0800)';
    }
    else if (today >= banner9StartDate && today <= banner9EndDate) {
        document.getElementById('banner9').style.display = 'block';
        document.getElementById('banner-container').style.backgroundColor = '#010607';
    }
});
