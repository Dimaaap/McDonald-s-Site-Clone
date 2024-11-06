import { BannerRoutes } from "./LinksStore"

export const banners = [
    {
      number: 1,
      bgImage: "https://www.mcdonalds.com/content/dam/sites/ua/nfl/hero/slider/slider_McCafe_winter_v2.jpg",
      noticeTitle: "Сезон новинок",
      noticeText: `Спробуй новинки, що дарують затишний 
      настрій, та пригощай друзів! Ароматне Лате Імбирне 
      печиво, свіжесенький і пряний МакПиріг® 
      Слива-Кориця або Мафін Крем-Солона карамель. 
      Сезон теплих обіймів починається в МакДональдз!`,
      noticeHref: BannerRoutes.NEW_DESSERTS
    },
    {
      number: 2,
      bgImage: "https://www.mcdonalds.com/content/dam/sites/ua/nfl/hero/slider/I-Can_books_1-2_SLIDER_sept-2024.png",
      noticeTitle: "Нові книжечки вже в Хеппі Міл®!",
      noticeText: `Немає нічого неможливого!Герої серії книжок 
      "Я можу" в Хеппі Міл®, Террі Фокс і Тенцинґ Норгей, довели це на 
      власному прикладі. Історії їхнього тріумфу вже в нових книжечках 
      "Я можу".Читайте й надихейтесь разом зі своїми дітьми!`,
      noticeHref: BannerRoutes.HAPPYMEAL
    },
    {
      number: 3,
      bgImage: "https://www.mcdonalds.com/content/dam/sites/ua/nfl/hero/slider/slider_store_locator.png",
      noticeTitle: "Знайди відкритий заклад поруч",
      noticeText: `Стежити за графіком роботи й закладами поруч стає 
      ще зручніше. Дайте, які заклади відкриті або тимчасово зачинені, 
      які мають генератор або працюють на доставку. Тепер ще простіше 
      насолоджуватись улюбленим!`,
      noticeHref: BannerRoutes.RESTAURANTS
    },
    {
      number: 4,
      bgImage: "https://www.mcdonalds.com/content/dam/sites/ua/nfl/hero/slider/McCrispy_Delux_slider.png",
      noticeTitle: "Скуштуєш МакКріспі Делюкс?",
      noticeText: `Уяви хрустку курочку в поєднанні зі 
      свіжим салатом і пікантним соусом із зернами гірчиці. 
      Додай сюди ще ніжний сир чедер, томат і свіжий огірок — 
      і отримаєш новий соковитий МакКріспі Делюкс.`,
      noticeHref: BannerRoutes.MCCRISPY_DELUXE
    },
    {
      number: 5,
      bgImage: "https://www.mcdonalds.com/content/dam/sites/ua/nfl/hero/slider/slider_UABurgers_2024.png",
      noticeTitle: "Який житній вибереш ти?",
      noticeText: `Житній бургер із соковитою курячою котлеткою, 
      хрумким беконом і смаженою цибулькою або ж із яловичиною, 
      ніжним сиром ементаль та грибним соусом? Вибирати тобі! 
      Головне — не проґав такий жаданий сезон українських бургерів!`,
      noticeHref: BannerRoutes.UKRAINIAN_BURGER
    },
    {
      number: 6,
      bgImage: "https://www.mcdonalds.com/content/dam/sites/ua/nfl/hero/slider/slider-GMAL-banner-3.jpg",
      noticeTitle: "Час встановити застосунок!",
      noticeText: `Чи працює зараз заклад? Які ціни на улюблене? 
      Що там по ваучерах? Відповіді на ці запитання можна знайти 
      в застосунку МакДональдз! Годі зволікати — встановлюй і 
      користуйся на повну!`,
      noticeHref: BannerRoutes.MOBILE_APP
    }
  ]