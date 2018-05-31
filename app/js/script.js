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

    /*search form list*/
    $(document).on('input', '.search-banner__form--field', function () {
        var list = $(this).next('.search-banner__form--list');
        if( list.length != 0 && $(this).val().length > 1 ) {
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
            days: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
            daysShort: ['Вос','Пон','Вто','Сре','Чет','Пят','Суб'],
            daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
            months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
            monthsShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
            today: 'Сегодня',
            clear: 'Очистить',
            dateFormat: 'dd.mm.yyyy',
            timeFormat: 'hh:ii',
            firstDay: 1
        },
        minDate: new Date()

    });
    /*close datapicker*/

});