document.addEventListener('DOMContentLoaded', function () {
    var today = new Date();
    var currentYear = today.getFullYear();

    // Dinamik olarak yıl bilgisi ekleyerek tarih aralıklarını tanımlayın
    // 100. Yıl
    var banner1StartDate = new Date(currentYear, 0, 0);
    var banner1EndDate = new Date(currentYear, 0, 0);

    // 8 Mart Dünya Kadınlar Günü
    var banner2StartDate = new Date(currentYear, 2, 8);
    var banner2EndDate = new Date(currentYear, 2, 9);

    // 23 Nisan Ulusal Egemenlik ve Çocuk Bayramı
    var banner3StartDate = new Date(currentYear, 3, 23);
    var banner3EndDate = new Date(currentYear, 3, 24);

    // 1 Mayıs Emek ve Dayanışma Günü
    var banner4StartDate = new Date(currentYear, 4, 1);
    var banner4EndDate = new Date(currentYear, 4, 2);

    // 19 Mayıs Atatürk'ü Anma, Gençlik ve Spor Bayramı
    var banner5StartDate = new Date(currentYear, 4, 19);
    var banner5EndDate = new Date(currentYear, 4, 20);

    // 15 Temmuz Demokrasi ve Milli Birlik Günü
    var banner6StartDate = new Date(currentYear, 6, 15);
    var banner6EndDate = new Date(currentYear, 6, 16);

    // 30 Ağustos Zafer Bayramı
    var banner7StartDate = new Date(currentYear, 7, 30);
    var banner7EndDate = new Date(currentYear, 7, 31);

    // 29 Ekim Cumhuriyet Bayramı
    var banner8StartDate = new Date(currentYear, 9, 29);
    var banner8EndDate = new Date(currentYear, 9, 30);

    // 10 Kasım Atatürk'ü Anma Günü
    var banner9StartDate = new Date(currentYear, 10, 10);
    var banner9EndDate = new Date(currentYear, 10, 11);

    // Arka plan renklerini tanımlayın
    var backgroundColors = {
        'banner1': '#e62106', // 100. Yıl
        'banner2': '#fd7b7d', // 8 Mart Dünya Kadınlar Günü
        'banner3': '#2a9f9e', // 23 Nisan Ulusal Egemenlik ve Çocuk Bayramı
        'banner4': '#e62106', // 1 Mayıs Emek ve Dayanışma Günü
        'banner5': '#e62106', // 19 Mayıs Atatürk'ü Anma, Gençlik ve Spor Bayramı
        'banner6': 'gradient', // 15 Temmuz Demokrasi ve Milli Birlik Günü
        'banner7': '#e62106', // 30 Ağustos Zafer Bayramı
        'banner8': '#e62106', // 29 Ekim Cumhuriyet Bayramı
        'banner9': '#010607'  // 10 Kasım Atatürk'ü Anma Günü
    };

    // Arka plan rengini ve banner'ı ayarla
    // 100. Yıl
    if (today >= banner1StartDate && today <= banner1EndDate) {
        document.getElementById('banner1').style.display = 'block';
        document.getElementById('banner-container').style.backgroundColor = backgroundColors['banner1'];
    }

    // 8 Mart Dünya Kadınlar Günü
    else if (today >= banner2StartDate && today <= banner2EndDate) {
        document.getElementById('banner2').style.display = 'block';
        document.getElementById('banner-container').style.backgroundColor = backgroundColors['banner2'];
    }

    // 23 Nisan Ulusal Egemenlik ve Çocuk Bayramı
    else if (today >= banner3StartDate && today <= banner3EndDate) {
        document.getElementById('banner3').style.display = 'block';
        document.getElementById('banner-container').style.backgroundColor = backgroundColors['banner3'];
    }

    // 1 Mayıs Emek ve Dayanışma Günü
    else if (today >= banner4StartDate && today <= banner4EndDate) {
        document.getElementById('banner4').style.display = 'block';
        document.getElementById('banner-container').style.backgroundColor = backgroundColors['banner4'];
    }

    // 19 Mayıs Atatürk'ü Anma, Gençlik ve Spor Bayramı
    else if (today >= banner5StartDate && today <= banner5EndDate) {
        document.getElementById('banner5').style.display = 'block';
        document.getElementById('banner-container').style.backgroundColor = backgroundColors['banner5'];
    }

    // 15 Temmuz Demokrasi ve Milli Birlik Günü
    else if (today >= banner6StartDate && today <= banner6EndDate) {
        document.getElementById('banner6').style.display = 'block';
        // Banner6 için gradient arka plan uygulama
        document.getElementById('banner-container').style.background = 'linear-gradient(to right, #e62106 50%, #fff 50%)';
    }

    // 30 Ağustos Zafer Bayramı
    else if (today >= banner7StartDate && today <= banner7EndDate) {
        document.getElementById('banner7').style.display = 'block';
        document.getElementById('banner-container').style.backgroundColor = backgroundColors['banner7'];
    }

    // 29 Ekim Cumhuriyet Bayramı
    else if (today >= banner8StartDate && today <= banner8EndDate) {
        document.getElementById('banner8').style.display = 'block';
        document.getElementById('banner-container').style.backgroundColor = backgroundColors['banner8'];
    }

    // 10 Kasım Atatürk'ü Anma Günü
    else if (today >= banner9StartDate && today <= banner9EndDate) {
        document.getElementById('banner9').style.display = 'block';
        document.getElementById('banner-container').style.backgroundColor = backgroundColors['banner9'];
    }
});
