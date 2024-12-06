import { BannerRoutes } from "./LinksStore"

export const banners = [
    {
      number: 1,
      bgImage: "https://www.mcdonalds.com/content/dam/sites/ua/nfl/hero/slider/Cheesy_slider.png",
      noticeTitle: 'Скажи "сиииир"!',
      noticeText: `І зустрічай легендарні Біг Чікен Чіз та Біг Біф Чіз із 
      великим шматком ніжного розплавленого сиру. А ще Камамбер у хрумкій 
      скоринці, Картоплю Фрі із сирним соусом і беконом. Зроби свій день сирним!`,
      noticeHref: BannerRoutes.NOVELTY
    },
    {
      number: 2,
      bgImage: "https://www.mcdonalds.com/content/dam/sites/ua/nfl/hero/slider/Slider_RMcD_stickers.png",
      noticeTitle: "Купуй наліпки — допомагай дітям!",
      noticeText: `Разом ми побудуємо Дім Рональда МакДональда для хворих дітей та 
      їхніх сімей на території найбільшої дитячої лікарні та надамо важливу 
      підтримку в Сімейних кімнатах.`,
      noticeHref: BannerRoutes.HAPPYMEAL
    },
    {
      number: 3,
      bgImage: "https://www.mcdonalds.com/content/dam/sites/ua/nfl/hero/slider/slider_McCafe_winter-snow-ua.jpg",
      noticeTitle: "Сезон новинок",
      noticeText: `Спробуй новинки, що дарують затишний настрій, та пригощай друзів!
      Ароматне Лате Імбирне печиво, свіжесенький і пряний МакПиріг® Слива-Кориця 
      або Мафін Крем-Солона карамель. Сезон теплих обіймів починається в 
      МакДональдз!`,
      noticeHref: BannerRoutes.RESTAURANTS
    },
    {
      number: 4,
      bgImage: "https://www.mcdonalds.com/content/dam/sites/ua/nfl/hero/slider/Slider_HMR_Book_3_4.jpg",
      noticeTitle: "Новенькі «Я можу» в Хеппі Міл®!",
      noticeText: `Мері Шеллі вдалося налякати увесь світ, а Мінді Калінґ — 
      розсмішити його! Читайте й захоплюйтеся разом із дітьми історіями двох 
      мрійниць, що стали героїнями двох нових книжечок серії «Я можу» в 
      Хеппі Міл®!`,
      noticeHref: BannerRoutes.MCCRISPY_DELUXE
    },
    {
      number: 5,
      bgImage: "https://www.mcdonalds.com/content/dam/sites/ua/nfl/hero/slider/SLIDER_Game-Banner-CheesyJump.jpg",
      noticeTitle: "На старт! Увага! Сиииир!",
      noticeText: `Гра починається! Все, що треба, — приєднатися до гри й стрибати 
      якнайвище! Набирай рекордну кількість балів і вигравай один із 10 промокодів 
      еквівалентом 5000 грн для замовлення улюблених страв з МакДональдз у доставці 
      Glovo. Буде сирно!`,
      noticeHref: "https://www.mcdonaldsapps.com/en-GB/page-not-found"
    },
    {
      number: 6,
      bgImage: "https://www.mcdonalds.com/content/dam/sites/ua/nfl/hero/slider/Slider_MarioKart.jpg",
      noticeTitle: "Усі на перегони!",
      noticeText: `Нові іграшки «Маріо Карт» вже готові до перегонів. Шукайте в 
      Хеппі Міл® улюблених героїв і проводьте час весело всією сім’єю!`,
      noticeHref: BannerRoutes.HAPPY_TOYS
    }
  ]

export const foundationBanners = [
  {
    number: 1,
    bgImage: "https://s7d1.scene7.com/is/image/mcdonalds/RMHC_slider_Kiev:accessible-carousel-desktop?resmode=sharp2",
    noticeText: `Кімнату відкрито у Національній дитячій 
    спеціалізованій лікарні «ОХМАТДИТ» у Києві`,
    noticeTitle: "Сімейна кімната у Києві"
  },
  {
    number: 2,
    bgImage: "https://s7d1.scene7.com/is/image/mcdonalds/RMHC_slider_Lviv:accessible-carousel-desktop?resmode=sharp2",
    noticeTitle: "Сімейна кімната у Львові",
    noticeText: `сімейну кімнату відкрито у Львівській 
    обласній дитячій клінічній лікарні «Охматдит»`
  },
  {
    number: 3,
    bgImage: "https://s7d1.scene7.com/is/image/mcdonalds/RMHC_slider_Vinnytsya:accessible-carousel-desktop?resmode=sharp2",
    noticeTitle: "Сімейна кімната у Вінниці",
    noticeText: `Сімейну кімнату відкрито у Вінницькій обласній 
    дитячій клінічній лікарні`
  },
  {
    number: 4,
    bgImage: "https://s7d1.scene7.com/is/image/mcdonalds/RMHC_slider_Sumy:accessible-carousel-desktop?resmode=sharp2",
    noticeTitle: "Сімейна кімната у Сумах",
    noticeText: `Сімейну кімнату відкрито у Сумській 
    обласній дитячій клінічній лікарні`
  },
  {
    number: 5,
    bgImage: "https://s7d1.scene7.com/is/image/mcdonalds/RMHC_slider_Rivne_2336x1040:accessible-carousel-desktop?resmode=sharp2",
    noticeTitle: "Сімейна кімната у Рівному",
    noticeText: `Сімейну кімнату відкрито у Рівненській обласній 
    дитячій клінічній лікарні`
  }
]