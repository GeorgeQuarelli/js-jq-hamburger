// aggiungere il codice js necessario per visualizzare l'hamburger menu su mobile

//intercettare il burger menù
$(".hamburger-menu a.close").click(
    function () {
        $(".hamburger-menu").hide(200);
    }
);
// facciamo in modo che cliccando si veda il menù
$(".header-right > a").click(
    function () {
        $(".hamburger-menu").show(200);
    }
);
