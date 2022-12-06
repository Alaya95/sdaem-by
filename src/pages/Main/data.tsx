import flatImg from "../../app/assets/img/flat-gallery.png";
import apartmentsImg from "../../app/assets/img/apartments-gallery.png";
import bathhouseImg from "../../app/assets/img/bathhouse-gallery.png";
import autoImg from "../../app/assets/img/auto-gallery.png";
import {ReactComponent as CardTitleAdSvg} from "../../app/assets/icons/move1.svg";
import {ReactComponent as CardTitleSvg} from "../../app/assets/icons/move2.svg";
import {ReactComponent as ArrowSvg} from "../../app/assets/icons/chevron-down.svg";
import React from "react";

export const FLAT_DATA = [
    {id: 1, name: "Квартиры в Минске", countRequest: 2210},
    {id: 2, name: "Квартиры в Гомеле", countRequest: 1265},
    {id: 3, name: "Квартиры в Гродно", countRequest: 452},
    {id: 4, name: "Квартиры в Могилеве", countRequest: 110},
    {id: 5, name: "Квартиры в Бресте", countRequest: 100},
    {id: 6, name: "Квартиры в Витебске", countRequest: 150},
];

export const APARTMENTS_DATA = [
    {id: 1, name: "Аггроусадьбы", countRequest: 2210},
    {id: 2, name: "Коттеджи", countRequest: 1265},
    {id: 3, name: "Загородный комплекс", countRequest: 452},
    {id: 4, name: "Базы отдыха", countRequest: 2210},
    {id: 5, name: "Еще"},
];

export const POPULARITY_DATA = [
    {id: 1, name: "Коттеджи и усадьбы на о. Брасласких "},
    {id: 2, name: "Коттеджи и усадьбы (жилье) на Нарочи"},
    {id: 3, name: "Коттеджи и усадьбы (жилье) у воды, на берегу, на озере"},
];


export const GALLERY_CARDS = [
    {
        id: 1, title: "Квартиры на сутки",
        subtitle: "Снять квартиру",
        image: flatImg,
    },
    {
        id: 2,
        title: "Коттеджи и усадьбы",
        subtitle: "Снять коттедж на праздник",
        image: apartmentsImg,
    },
    {
        id: 3, title: "Бани и сауны", subtitle: "Попариться в бане с друзьми",
        image: bathhouseImg,
        mr: "30px"
    },
    {
        id: 4,
        title: "Авто на прокат",
        subtitle: "Если срочно нужна машина",
        image: autoImg,
    }
]

export const CARD_DATA = [
    {
        id: 1,
        title: "Начните привлекать клиентов бесплатно!",
        desc: 'Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором возможно бесплатно создавать и публиковать объявления на сайте. ',
        titleIcon: <CardTitleAdSvg/>,
        btnText: '+  Разместить объявление',
        btnColor: 'secondary',
    },
    {
        id: 2,
        title: "Поднимайте объявления",
        titleIcon: <CardTitleSvg/>,
        desc: 'Вы в любое время можете поднимать объявления вверх первой страницы каталога, они разместятся сразу после платных объявлений до тех пор, пока другой пользователь не повторит процедуру.',
        btnText: 'Узнать стоимость услуги',
        btnIcon: <ArrowSvg/>,
        btnColor: 'secondary',
    },
    {
        id: 3,
        title: "Приоритет Gold ",
        desc: 'Приоритетное размещение Gold позволяет закрепить ваше объявление в верхней части каталога! Gold объявления перемещаются каждые 5 мин на 1 позицию, что делает размещение одинаковым для всех.',
        btnText: 'Еще о тарифе Gold',
        btnIcon: <ArrowSvg/>,
        btnColor: 'primary',
        gold: true
    }
]