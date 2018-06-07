// if ($('#map').length > 0) {
//     /*yandex map*/
//     var map = new Map();
//     map.init({
//         selector: '#map2',
//         center: 'г. Донецк, ул. Артема 75',
//         zoom: 12,
//         placemarks: [
//             {
//                 address: 'г. Донецк, ул. Артема 75',
//                 options: [
//                     {key: 'draggable', value: true}
//                 ],
//                 properties: [
//                     {key: 'hintContent', value: 'Тыц'},
//                     {key: 'balloonContentHeader', value: "Предприятия Донецка"},
//                     {key: 'balloonContentBody', value: "<h1>ArtCraft</h1>"}
//                 ]
//             },
//             {
//                 address: 'г. Донецк, ул. Артема 100',
//                 options: [
//                     {key: 'draggable', value: true}
//                 ],
//                 properties: [
//                     {key: 'hintContent', value: 'Пока'}
//                 ]
//             }
//         ]
//     });
//     /*close yandex map*/
// }

$(document).ready(function () {

    /*show header dropdown*/
    $(document).on('click', '.header__user-menu', function (event) {
        var dropdown = $(this).closest('.header__elements').find('.header__user-dropdown');
        if ($(this).hasClass('js-show-dropdown')) {
            $(this).removeClass('js-show-dropdown');
            dropdown.css('display', 'none');
        } else {
            $(this).addClass('js-show-dropdown');
            dropdown.css('display', 'block');
        }
    });

    $(document).on('click', function (e) {
        if ($(e.target).closest('.header__elements').length != 1) {
            $('.header__user-menu').removeClass('js-show-dropdown');
            $('.header__user-dropdown').css('display', 'none');
        }
    });
    /*close header dropdown*/

    /*search form litop*/
    $(document).on('input', '.search-banner__form--field', function (event) {
        var list = $(this).next('.search-banner__form--list');
        if (list.length != 0 && $(this).val().length > 1) {
            list.css('display', 'block');
        } else {
            return false;
        }
    });

    $(document).on('click', '.search-banner__form--list a', function (event) {
        event.preventDefault();
        var field = $(this).closest('.search-banner__form--list').prev('.search-banner__form--field'),
            list = $(this).closest('.search-banner__form--list'),
            value = $(this).text();
        field.val(value);
        list.css('display', 'none');
        return false;
    });


    $(document).on('click', function (e) {
        if ($(e.target).closest('.search-banner__form').length != 1) {
            $('.search-banner__form--list').css('display', 'none');
        }
    });
    /*close*/


    /*datapicker*/
    $('.search-banner__form .search-banner__form--date .search-banner__form--field').datepicker({
        language: {
            days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
            daysShort: ['Вос', 'Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб'],
            daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            today: 'Сегодня',
            clear: 'Очистить',
            dateFormat: 'dd.mm.yyyy',
            timeFormat: 'hh:ii',
            firtopDay: 1
        },
        minDate: new Date()

    });

    $('.offers__filter--form .search-banner__form--date .search-banner__form--field').datepicker({
        language: {
            days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
            daysShort: ['Вос', 'Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб'],
            daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            today: 'Сегодня',
            clear: 'Очистить',
            dateFormat: 'dd.mm.yyyy',
            timeFormat: 'hh:ii',
            firtopDay: 1
        },
        minDate: new Date()

    });
    /*close datapicker*/

    /*slider single proposal*/
    $('.offers__carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.offers__nav'
    });
    $('.offers__nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.offers__carousel',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true
    });
    /*close slider single proposal*/

    /*scroll to form*/
    $(document).on('click', '.go-to', function (event) {
        event.preventDefault();
        var href = $(this).attr('href'),
            target = $(href),
            top = target.offset().top;
        console.log(href);
        $('html,body').animate({scrollTop: top}, 1000);
        return false;
    });
    /*cose to form*/

    /* scroll button*/
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 480) {
            $('#Go-Top').css('display', 'block');
        }
        else {
            $('#Go-Top').css('display', 'none');
        }
    });

    $('#Go-Top').click(function (event) {
        event.preventDefault();
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
    /*close scroll button*/
    $(window).scroll(function () {
        ScrollSearchForm();
    });
    /*scroll search form*/

    /*close scroll search form*/

    /*scrolling filter*/
    if ($(window).innerWidth() > 1024 && $('.offers__filter-wrapper').length !=0 ) {

        $(window).scroll(function () {

                var BlockingElement = parseInt($('.offers__items-wrapper').height() - $('.offers__items-wrapper').find('.pagination').height()),///высота блока всего блока без пагинации
                    top = $(window).scrollTop(),//размер прокрутки окна браузераё
                    scroll_form = $('.info__separator.js-scroll-form.js-fixed').height();
                    wrapper = $(".offers__filter-wrapper"),
                    wrapper_ot = wrapper.offset().top;

                    console.log( scroll_form )

                if (top > wrapper_ot && top < (BlockingElement - 444)) {
                    var h = Math.round(top - wrapper_ot) + scroll_form;
                    wrapper.css({"paddingTop": h});
                } else if ( top < wrapper_ot) {
                    wrapper.css({"paddingTop": 0 + scroll_form});
                }

        });
    }
    /*scrolling filter*/

    /*products filter*/
    $(function () {

        var min = parseInt($("input[name='minPrice']").val(), 10);
        var max = parseInt($("input[name='maxPrice']").val(), 10);
        var selMin = $("input[name='minPrice']").attr('selprice');
        var selMax = parseInt($("input[name='maxPrice']").attr('selprice'), 10);
        /*console.log(formatNumber(selMin));*/
        var number = 3500;

        /*console.log(new Intl.NumberFormat().format(selMin));*/

        $("#slider_price").slider({
            range: true,
            min: min,
            max: max,
            values: [selMin, selMax],
            //values: [formatNumber(selMin), selMax],
            slide: function (event, ui) {
                //Поле минимального значения
                $("#price").val(ui.values[0]);
                //Поле максимального значения
                $("#price2").val(ui.values[1]);
            },
            topop: function (event, ui) {
                $("input[name='minPrice']").val(ui.values[0]).change();
                $("input[name='maxPrice']").val(ui.values[1]).change();
                /* var obj = $(this).closetop('div');
                 filterSearchCount(obj);*/

            }

        });
        //Записываем значения ползунков в момент загрузки страницы
        //То есть значения по умолчанию
        $("#price").val($("#slider_price").slider("values", 0));
        $("#price2").val($("#slider_price").slider("values", 1));
    });
    $('#price').change(function () {
        var val = $(this).val();
        var obj = $(this).closest('div');
        $('#slider_price').slider("values", 0, val);
        // filterSearchCount(obj);
    });
    $('#price2').change(function () {
        var val1 = $(this).val();
        var obj = $(this).closest('div');
        $('#slider_price').slider("values", 1, val1);

        // filterSearchCount(obj);
    });

    $(function () {

        var min = parseInt($("input[name='minWeight']").val(), 10);
        var max = parseInt($("input[name='maxWeight']").val(), 10);
        var wMin = $("input[name='minWeight']").attr('weight');
        var wMax = parseInt($("input[name='maxWeight']").attr('weight'), 10);
        /*console.log(formatNumber(selMin));*/
        var number = 3500;

        /*console.log(new Intl.NumberFormat().format(selMin));*/

        $("#slider_weight").slider({
            range: true,
            min: min,
            max: max,
            values: [wMin, wMax],
            //values: [formatNumber(selMin), selMax],
            slide: function (event, ui) {
                //Поле минимального значения
                $("#weight").val(ui.values[0]);
                //Поле максимального значения
                $("#weight2").val(ui.values[1]);
            },
            topop: function (event, ui) {
                $("input[name='minWeight']").val(ui.values[0]).change();
                $("input[name='maxWeight']").val(ui.values[1]).change();
                /* var obj = $(this).closetop('div');
                 filterSearchCount(obj);*/

            }

        });
        //Записываем значения ползунков в момент загрузки страницы
        //То есть значения по умолчанию
        $("#weight").val($("#slider_weight").slider("values", 0));
        $("#weight2").val($("#slider_weight").slider("values", 1));
    });
    $('#weight').change(function () {
        var val = $(this).val();
        var obj = $(this).closest('div');
        $('#slider_weight').slider("values", 0, val);
        // filterSearchCount(obj);
    });
    $('#weight2').change(function () {
        var val1 = $(this).val();
        var obj = $(this).closest('div');
        $('#slider_weight').slider("values", 1, val1);
        // filterSearchCount(obj);
    });
    /*close products filter*/

    /*tooltip*/
    $('.offers__buttons a').popover({trigger: "hover"});
    /*close tooltip*/
});

function ScrollSearchForm() {
    var search_form = $('.js-scroll-form'),
        header = $('.header').height();
    if ($(window).scrollTop() >= header) {
        search_form.addClass('js-fixed');
    }
    else {
        search_form.removeClass('js-fixed');
    }
}