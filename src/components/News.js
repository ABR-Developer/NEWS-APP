import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Mariella Moon",
      title:
        "Apple pulls gambling ads from App Store product pages following backlash",
      description:
        'On October 25th, Apple started displaying more ads in the App Store, particularly in the "Today" tab and at the bottom of app listings. Since then, multiple developers have complained about getting ads for gambling under their listings\' "You Might Also Like" …',
      url: "https://www.engadget.com/apple-pulls-gambling-ads-from-app-store-product-pages-082207219.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-images/2020-03/51328a80-652a-11ea-bffb-88b19fc42fdd",
      publishedAt: "2022-10-27T08:22:07Z",
      content:
        'On October 25th, Apple started displaying more ads in the App Store, particularly in the "Today" tab and at the bottom of app listings. Since then, multiple developers have complained about getting a… [+1678 chars]',
    },
    {
      source: {
        id: "ars-technica",
        name: "Ars Technica",
      },
      author: "Corey Gaskin",
      title:
        "Today’s best deals: Google Pixel 6a, Apple MacBooks, 4K TVs, and more",
      description:
        "Dealmaster also has discounts on Google smart home, Microsoft Surfaces, and some of our favorite wearables.",
      url: "https://arstechnica.com/staff/2022/10/todays-best-deals-google-pixel-6a-apple-macbooks-4k-tvs-and-more/",
      urlToImage:
        "https://cdn.arstechnica.net/wp-content/uploads/2022/10/dm102522-760x380.jpg",
      publishedAt: "2022-10-27T12:37:43Z",
      content:
        "0 with 0 posters participating\r\nAnother week, another roundup of today's best tech deals. Today's Dealmaster features a new all-time low ($998, \r\n$1,500\r\n) on Samsung's art-inspired \"The Frame\" 4K TV… [+5544 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Central",
      },
      author: "andrew.myrick@futurenet.com (Andrew Myrick)",
      title:
        "Fitbit Sense 2 vs. Apple Watch Series 8: Which is the best smartwatch for you",
      description:
        "There's a lot to like about the Fitbit Sense 2, but it's definitely lost a bit of functionality compared to the original Sense. Whereas Apple isn't doing much to change things up when it comes to the Apple Watch Series 8.",
      url: "https://www.androidcentral.com/wearables/fitbit-sense-2-vs-apple-watch-series-8",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/BBmEDkRiqhWyoZePVtieRb-1200-80.jpg",
      publishedAt: "2022-10-27T14:00:50Z",
      content:
        "There are few companies that can eat into Apple's market share when it comes to smartwatches, but Fitbit has managed to do just that over the years. There's also a good chance that this trend could c… [+10357 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Tim Dowling",
      title: "‘It’s become a real monster!’ How Britain fell for Halloween",
      description:
        "It used to be a very American tradition, but love it or loathe it, fright night is bigger than ever in the UK – and consumers are spending a scary amount‘It started with the Coffin of Doom,” says Jeremy Hayward, of the year he first decided to create an exper…",
      url: "https://www.theguardian.com/lifeandstyle/2022/oct/27/its-become-a-real-monster-how-britain-fell-for-halloween",
      urlToImage:
        "https://i.guim.co.uk/img/media/66d88b407ec3b297cb32ae9910b67d11ecd14964/12_0_3248_1949/master/3248.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=01a5ff49dd03546ac3f3f582825063f2",
      publishedAt: "2022-10-27T05:00:22Z",
      content:
        "It started with the Coffin of Doom, says Jeremy Hayward, of the year he first decided to create an experience for children ringing his bell on Halloween. Just beyond his threshold was a coffin, with … [+13873 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Mitchel Broussard",
      title:
        "Deals: Get the 64GB 2021 Apple TV 4K for All-Time Low Price of $109.99",
      description:
        "The 2021 Apple TV 4K has been seeing solid discounts ever since Apple announced the new model earlier this month. Today, the 64GB 2021 Apple TV 4K has dropped to a new all-time low of $109.99, down from an original price of $199.00.\n\n\n\nNote: MacRumors is an a…",
      url: "https://www.macrumors.com/2022/10/27/deals-64gb-2021-apple-tv-4k/",
      urlToImage:
        "https://images.macrumors.com/t/MmAL42QUwM93ZQhRXVfROC0R7dk=/2500x/article-new/2022/06/Apple-TV-Deals-22-Feature-Multi0001.jpg",
      publishedAt: "2022-10-27T14:09:14Z",
      content:
        "The 2021 Apple TV 4K has been seeing solid discounts ever since Apple announced the new model earlier this month. Today, the 64GB 2021 Apple TV 4K has dropped to a new all-time low of $109.99, down f… [+951 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "bnguyen@insider.com (Britney Nguyen)",
      title:
        "Meta is mad about Apple's latest policy change, accusing the company of trying to 'grow their own business while undercutting others'",
      description:
        "Apple's updated App Store rule gives it 30% from in-app purchases for boosting posts in social media apps, including Meta's Facebook and Instagram.",
      url: "https://www.businessinsider.com/meta-accuses-apple-undercutting-businesses-app-store-policy-change-2022-10",
      urlToImage:
        "https://i.insider.com/63599793513e8f0019c95089?width=1200&format=jpeg",
      publishedAt: "2022-10-27T15:19:11Z",
      content:
        "Meta is not happy with Apple's latest update to its App Store guidelines around in-app purchases.\r\nThe updated rule requires iOS app developers to use Apple's system of in-app purchases for post \"boo… [+2560 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "ahartmans@businessinsider.com (Avery Hartmans)",
      title:
        "Meta employees are bracing for possible layoffs as growth slows and spending on the metaverse soars",
      description:
        "Meta burned $4 billion on the metaverse this quarter and Mark Zuckerberg vowed Wednesday to spend billions more on the metaverse next year.",
      url: "https://www.businessinsider.com/meta-employees-expect-layoffs-amid-high-metaverse-spending-2022-10",
      urlToImage:
        "https://i.insider.com/6359922c513e8f0019c94e5f?width=1200&format=jpeg",
      publishedAt: "2022-10-27T10:40:00Z",
      content:
        "Good morning, everyone! It's Thursday, which means there are only about 36 more hours until the weekend begins (but who's counting). \r\nToday I'm dreaming of Bali, which will soon let tourists move th… [+4958 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "prosen@insider.com (Phil Rosen)",
      title:
        "Here's why Goldman Sachs is warning about a stock market crash and recession.",
      description:
        "Goldman CEO David Solomon and top strategists are sounding the bell on a looming economic downturn.",
      url: "https://www.businessinsider.com/goldman-sachs-market-crash-inflation-recession-fed-bank-finance-economy-2022-10",
      urlToImage:
        "https://i.insider.com/63598dfaea35650019e055e3?width=1200&format=jpeg",
      publishedAt: "2022-10-27T10:10:00Z",
      content:
        "Welcome back market watchers, Phil Rosen here. Dust off your dictionaries because today's GDP release might reignite the recession debate that's proved as semantic as it is economic.  \r\nThe year kick… [+6082 chars]",
    },
    {
      source: {
        id: null,
        name: "Harvard Business Review",
      },
      author: null,
      title: "4 Business Ideas That Changed the World: Emotional Intelligence",
      description:
        "A roundtable conversation on the management of feelings in the workplace.",
      url: "https://hbr.org/podcast/2022/10/4-business-ideas-that-changed-the-world-emotional-intelligence",
      urlToImage:
        "https://hbr.org/resources/images/article_assets/2022/09/IC_HBR100_podcast_sponsor_wide_1200.png",
      publishedAt: "2022-10-27T13:20:00Z",
      content:
        "ALISON BEARD: Welcome to 4 Business Ideas That Changed the World, a special series of the HBR IdeaCast. In the early 1990s when science journalist Daniel Goleman wanted to publish a book on emotional… [+40674 chars]",
    },
    {
      source: {
        id: null,
        name: "Thetechoutlook.com",
      },
      author: "Meghasyam Pagadala",
      title:
        "Now you can get an Apple TV 4K 64GB for $90 off. Don't miss it a few more hours ; check out now - The Tech Outlook",
      description:
        "<ol><li>Now you can get an Apple TV 4K 64GB for $90 off. Don't miss it a few more hours ; check out now  The Tech Outlook\r\n</li><li>Apple TV 4K (2nd Gen) on Clearance Ahead of the Newest Launch in November • iPhone in Canada Blog  iPhone in Canada\r\n</li><li>D…",
      url: "https://www.thetechoutlook.com/news/new-release/gadgets-release/now-you-can-get-an-apple-tv-4k-64gb-for-90-off-dont-miss-it-a-few-more-hours-check-out-now/",
      urlToImage:
        "https://www.thetechoutlook.com/wp-content/uploads/2022/10/Untitled-design-33-2.jpg",
      publishedAt: "2022-10-27T10:29:10Z",
      content:
        "Apple is one of the best-known companies in the world. It provides all Premium products. Best Buy, one of the best retailer websites, is giving a stunning deal on Apple TV on their website. Apple is … [+1453 chars]",
    },
    {
      source: {
        id: null,
        name: "Hipertextual",
      },
      author: "Alberto Martín",
      title: "Apple frena en seco los anuncios de casinos en la App Store",
      description:
        "Después de las críticas de los desarrolladores y los usuarios, que en los últimos se han multiplicado en Twitter y Reddit, Apple ha dado marcha atrás en su nueva estrategia de anuncios en la App Store. No en su totalidad, pero la compañía ha confirmado que de…",
      url: "https://hipertextual.com/2022/10/anuncios-de-casinos-en-la-app-store",
      urlToImage:
        "https://imgs.hipertextual.com/wp-content/uploads/2021/12/app-store.jpeg",
      publishedAt: "2022-10-27T08:03:01Z",
      content:
        "Después de las críticas de los desarrolladores y los usuarios, que en los últimos se han multiplicado en Twitter y Reddit, Apple ha dado marcha atrás en su nueva estrategia de anuncios en la App Stor… [+2017 chars]",
    },
    {
      source: {
        id: null,
        name: "Hipertextual",
      },
      author: "Tomás Rivero",
      title: "Cómo usar la cámara de 48 MP en tu iPhone 14 Pro y 14 Pro Max",
      description:
        "La nueva generación del iPhone 14 Pro y Pro Max llegó para establecer el nuevo rumbo de la marca. Además de la Isla Dinámica, otro de los cambios importantes que vimos en esta nueva generación fue la inclusión de una cámara de 48 MP. Desde hacía varias genera…",
      url: "https://hipertextual.com/2022/10/como-usar-camara-48-mp-iphone-14-pro-14-pro-max",
      urlToImage:
        "https://imgs.hipertextual.com/wp-content/uploads/2022/09/Apple-iPhone-14-pro-scaled.jpeg",
      publishedAt: "2022-10-27T06:56:00Z",
      content:
        "La nueva generación del iPhone 14 Pro y Pro Max llegó para establecer el nuevo rumbo de la marca. Además de la Isla Dinámica, otro de los cambios importantes que vimos en esta nueva generación fue la… [+2906 chars]",
    },
    {
      source: {
        id: null,
        name: "HuffPost",
      },
      author: "Marco Margaritoff",
      title:
        "Spotify CEO Condemns Kanye West’s ‘Awful’ Rants, But Won’t Remove His Music",
      description:
        '“It’s up to his label, if they want to take action or not," CEO Daniel Ek said.',
      url: "https://www.huffpost.com/entry/spotify-ceo-condemns-kanye-wests-awful-rants-but-denies-authority-to-remove-his-music_n_635a7945e4b07c6cedbff014",
      urlToImage:
        "https://img.huffingtonpost.com/asset/635a801e2200005c00d012b6.jpeg?cache=rc4eHSCtyi&ops=1200_630",
      publishedAt: "2022-10-27T14:58:59Z",
      content:
        "Kanye Wests music can stay on streaming giant Spotify despite the rap stars just awful antisemitic statements, CEO Daniel Ek said.\r\nWest, ditched by Adidas and other corporate partners after recent h… [+2304 chars]",
    },
    {
      source: {
        id: null,
        name: "HuffPost",
      },
      author: "Tessa Flores",
      title:
        "This Is The One Thing You Need To Protect Your Leather Goods From Inclement Weather This Fall",
      description:
        "This highly rated water-repelling spray is the one thing you need to protect your shoes, bags, jackets and more this fall.",
      url: "https://www.huffpost.com/entry/waterproof-protector-spray-leather-suede_l_63575058e4b0e376dc1acf4f",
      urlToImage:
        "https://img.huffingtonpost.com/asset/635758f32500001c009b2812.jpg?ops=1200_630",
      publishedAt: "2022-10-27T09:45:38Z",
      content:
        "This product is the real deal. I sprayed two coats on my leather purse and it rained the next day. The water literally rolled off the purse and i feel so much more comfortable taking my handbags out … [+3045 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Ricardo Aguilar",
      title:
        "Apple da marcha atrás (de momento) con la publicidad en App Store tras la avalancha de críticas",
      description:
        "Uno de los temas del día de ayer fue la publicidad intrusiva que Apple está empezando a introducir en App Store. Con iOS 16.1, su tienda de aplicaciones amanecía hasta arriba de recomendaciones de descarga, publicidad integrada en casi todas las secciones de …",
      url: "https://www.xataka.com/aplicaciones/apple-da-marcha-atras-momento-publicidad-app-store-avalancha-criticas",
      urlToImage:
        "https://i.blogs.es/72dcb7/captura-de-pantalla-2022-10-27-a-las-08.30.16-a.-m./840_560.jpeg",
      publishedAt: "2022-10-27T06:34:40Z",
      content:
        "Uno de los temas del día de ayer fue la publicidad intrusiva que Apple está empezando a introducir en App Store. Con iOS 16.1, su tienda de aplicaciones amanecía hasta arriba de recomendaciones de de… [+2436 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Alberto de la Torre",
      title:
        "Toyota nunca ha creído en el coche eléctrico como alternativa de futuro. Hasta que la realidad le ha golpeado",
      description:
        "Reinventarse cuando eres líder en el sector siempre es un punto crítico para cualquier empresa. Cómo enfrentar uno de esos puntos de inflexión para seguir siendo la referencia y no perder cuota de mercado. Ese es el lugar donde está Toyota con el coche eléctr…",
      url: "https://www.xataka.com/movilidad/toyota-nunca-ha-creido-coche-electrico-como-alternativa-futuro-que-realidad-le-ha-golpeado",
      urlToImage:
        "https://i.blogs.es/c0d42f/toyota-bz4x-2023-1600-3c/840_560.jpg",
      publishedAt: "2022-10-27T14:00:03Z",
      content:
        "Reinventarse cuando eres líder en el sector siempre es un punto crítico para cualquier empresa. Cómo enfrentar uno de esos puntos de inflexión para seguir siendo la referencia y no perder cuota de me… [+5834 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Enrique Pérez",
      title:
        "Mejor innovación en un gadget: vota en los Premios Xataka Orange 2022",
      description:
        "Ya falta menos para los Premios Xataka Orange 2022. El próximo 16 de noviembre en los Cines Capitol de Madrid tenemos una cita con Joaquín Reyes para descubrir lo mejor del año en el mundo de la tecnología. Pero antes nos tenéis que ayudar a elegir cuáles deb…",
      url: "https://www.xataka.com/xataka/mejor-innovacion-gadget-vota-premios-xataka-orange-2022",
      urlToImage:
        "https://i.blogs.es/d2bd18/mejor-innovacion-gadget/840_560.jpg",
      publishedAt: "2022-10-27T08:03:32Z",
      content:
        "Ya falta menos para los Premios Xataka Orange 2022. El próximo 16 de noviembre en los Cines Capitol de Madrid tenemos una cita con Joaquín Reyes para descubrir lo mejor del año en el mundo de la tecn… [+2442 chars]",
    },
    {
      source: {
        id: null,
        name: "Digital Trends",
      },
      author: "Joe Maring",
      title: "Apple iPad (2022) review: easy to love, tricky to recommend",
      description:
        "The iPad (2022) is the biggest overhaul the baseline iPad has ever seen. But should you actually buy it? We answer that question in our review.",
      url: "https://www.digitaltrends.com/mobile/apple-ipad-10th-gen-2022-review/",
      urlToImage:
        "https://www.digitaltrends.com/wp-content/uploads/2022/10/apple-ipad-10th-gen-2022-review-14.jpg?p=1",
      publishedAt: "2022-10-27T14:30:03Z",
      content:
        "The Apple iPad (2022) is one of the biggest updates the baseline iPad has ever seen. It’s touting an all-new design, a larger screen, a more powerful chipset, a reimagined camera system, and more. By… [+17644 chars]",
    },
    {
      source: {
        id: null,
        name: "Gigazine.net",
      },
      author: "@GIGAZINE",
      title:
        "App Storeの製品ページでギャンブルなどの広告が表示され開発者から苦情が殺到",
      description:
        "2022年10月25日からApp Storeのデザインがやや変わり、新しい場所に広告が表示されるようになりました。しかし、個々のアプリページの「おすすめアプリ」欄にギャンブル系アプリが表示されているとして、開発者が苦情を申し立てました。続きを読む...",
      url: "https://gigazine.net/news/20221027-app-store-gambling-ads/",
      urlToImage:
        "https://i.gzn.jp/img/2022/10/27/app-store-gambling-ads/00_m.jpg",
      publishedAt: "2022-10-27T04:06:00Z",
      content:
        "Now my apps product page shows gambling ads, which Im really not OK with.\r\nApple shouldnt be OK with it, either.\r\nThe App Store has corrupted such a great company so deeply. They make so much from ga… [+127 chars]",
    },
    {
      source: {
        id: "vice-news",
        name: "Vice News",
      },
      author: "Matthew Gault, Jason Koebler",
      title: "CYBER: A History of ‘American Terror’",
      description:
        "In a new podcast, Cyber’s own Ben Makuch walks us through the history of white supremacist terror in America.",
      url: "https://www.vice.com/en/article/y3pxam/cyber-a-history-of-american-terror",
      urlToImage:
        "https://video-images.vice.com/articles/6359959ef46b3b009a40fc10/lede/1666815784989-full.jpeg?image-resize-opts=Y3JvcD0wLjkzMjF4dzowLjk5ODh4aDswLjA0eHcsMHhoJnJlc2l6ZT0xMjAwOiomcmVzaXplPTEyMDA6Kg",
      publishedAt: "2022-10-27T13:00:00Z",
      content:
        "America and political violence go together like George Lincoln Rockwell and a corncob pipe. There is a growing movement in the U.S., one that’s spreading online and probably in some of your neighborh… [+650 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Leonhard Becker, Robin Brand, Johannes Schuster",
      title: "heise+ | Apple iPhone 14, Pro und Pro Max im Test",
      description:
        "Apple hat das iPhone 14 Pro und Pro Max mit Dynamic Island tatsächlich auch äußerlich verändert. Bei den normalen iPhones 14 stecken die Neuerungen im Inneren.",
      url: "https://www.heise.de/tests/Apple-iPhone-14-Pro-und-Pro-Max-im-Test-7317660.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/3/1/6/2/2/547c71123b975a214609b95667a0beeb208a945cad7f5971af079ffcf072ab25-7466d65f8f61d63d.jpeg",
      publishedAt: "2022-10-27T10:40:00Z",
      content:
        "Inhaltsverzeichnis\r\nMan muss die neuen iPhones 14 Pro und Pro Max einschalten, damit man die größte Änderung überhaupt wahrnimmt. Statt des mit dem iPhone X eingeführten Notch sitzt nun ein pillenför… [+1748 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Leo Becker, Holger Zelder",
      title:
        "heise+ | macOS 13 und iOS 16 im Praxiseinsatz: Die neuen Funktionen der Apple-Apps",
      description:
        "Apple verbessert bei macOS 13 und iOS 16 die zentralen Apps: Von iMessage über Mail, Notizen bis hin zu Fotos und Home gibt es viele praktische Neuerungen.",
      url: "https://www.heise.de/ratgeber/macOS-13-und-iOS-16-im-Praxiseinsatz-Die-neuen-Funktionen-der-Apple-Apps-7317672.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/3/1/6/2/9/mi_05_22_aufmacher_alles_systeme_digital-f6b367390173580d.png",
      publishedAt: "2022-10-27T09:00:00Z",
      content:
        "Inhaltsverzeichnis\r\nNeben neuen Funktionen wie Stage Manager und flexiblen iPhone-Sperrbildschirmen machen iOS 16, iPadOS 16 und macOS 13 Apple-Apps und Dienste deutlich nützlicher. Die Neuerungen re… [+1609 chars]",
    },
    {
      source: {
        id: "t3n",
        name: "T3n",
      },
      author: null,
      title: "It’s Tool Time: Smartphones und Laptops lassen sich reparieren",
      description:
        "Geräte von großen Konzernen wie Apple, Samsung und Google waren viele Jahre schwer oder gar nicht zu reparieren – mit Absicht. Doch das ändert sich das gerade.",
      url: "https://t3n.de/consent?redirecturl=%2Fnews%2Fits-tool-time-smartphones-und-laptops-lassen-sich-reparieren-1499123%2F%3Fwt_mc%3Drss.red.ho.ho.atom.beitrag.beitrag",
      urlToImage:
        "https://assets.t3n.de/t3n-de/assets/t3n/2018/images/t3n-og-1200x630.png",
      publishedAt: "2022-10-27T12:30:00Z",
      content:
        "Wir verwenden Cookies oder ähnliche Informationen (z.B. deine IP-Adresse, Zählpixel) sowie Funktionen von Drittanbietern, die Cookies setzen. Das dient der Funktionalität auf t3n.de (z.B. sichere Dat… [+1358 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Frank Schräer",
      title:
        "Donnerstag: Meta mit sinkendem Umsatz, Indien gegen Googles Bezahl-Strategie",
      description:
        "Metaverse trübt Meta-Ergebnis + Indien-Bußgeld für Google + Emissionen bei Streaming + Piraten für Quick Freeze + Börsenstart von Mobileye + Hyperloop-heiseshow",
      url: "https://www.heise.de/news/Donnerstag-Meta-mit-sinkendem-Umsatz-Indien-gegen-Googles-Bezahl-Strategie-7321648.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/3/3/4/0/9/thursday-91a7b018a67c3d35.webp",
      publishedAt: "2022-10-27T04:30:00Z",
      content:
        "Der Facebook-Konzern Meta kämpft mit anhaltendem Umsatzrückgang. Milliarden-Kosten für das Metaverse und sinkende Werbeeinnahmen bringen Mark Zuckerberg nicht von seinem Kurs ab. Trübe Aussichten tre… [+6002 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Filipe Espósito",
      title:
        "Apple VP Greg Joswiak says ‘metaverse’ is a word he will never use",
      description:
        "Apple has reportedly been working on its own virtual universe as the company also has plans to introduce a new mixed reality headset. And, following a statement from Mark Zuckerberg saying that the metaverse should be “open” as a criticism of Apple, the compa…",
      url: "https://9to5mac.com/2022/10/26/apple-greg-joswiak-metaverse-word/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/10/Greg-Joswiak-Apple.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-10-27T00:27:28Z",
      content:
        "Apple has reportedly been working on its own virtual universe as the company also has plans to introduce a new mixed reality headset. And, following a statement from Mark Zuckerberg saying that the m… [+2464 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Ben Lovejoy",
      title:
        "iPhone shipments grew a “remarkable” 36% in China in Q3, as all other major brands fell",
      description:
        "A new market intelligence report says that iPhone shipments grew 36% year-on-year in China in Q3, while all other major brands saw theirs fall between 16% and 27%.\nThe data says that this saw Apple’s smartphone market share in the country grew from 11% to 16%…",
      url: "https://9to5mac.com/2022/10/27/iphone-shipments-2/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/10/iPhone-shipments.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-10-27T11:16:43Z",
      content:
        "A new market intelligence report says that iPhone shipments grew 36% year-on-year in China in Q3, while all other major brands saw theirs fall between 16% and 27%.\r\nThe data says that this saw Apple’… [+3080 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Michael Potuck",
      title:
        "Google and Microsoft take 20x more damage than Apple as big tech sees $3 trillion in losses",
      description:
        "It’s been a challenging year on a number of levels and major tech hasn’t been immune. Over the last twelve months, more than $3 trillion in value has been shed by the top seven US tech companies. While all have lost billions, Google’s Alphabet and Microsoft h…",
      url: "https://9to5mac.com/2022/10/27/google-microsoft-20x-more-damage-than-apple/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/06/apple-stock-down.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-10-27T14:49:49Z",
      content:
        "It’s been a challenging year on a number of levels and major tech hasn’t been immune. Over the last twelve months, more than $3 trillion in value has been shed by the top seven US tech companies. Whi… [+2043 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Ben Lovejoy",
      title:
        "16-inch iPad would be wonderful, but likely far too expensive for consumers",
      description:
        "A report yesterday suggested that Apple has a 16-inch iPad in the works, which could be released late next year. It follows an earlier report of a 14-inch one.\nTalk of larger iPads dates back several years, with 9to5Mac readers long expressing an interest in …",
      url: "https://9to5mac.com/2022/10/27/16-inch-ipad/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/10/16-inch-iPad.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-10-27T13:45:12Z",
      content:
        "A report yesterday suggested that Apple has a 16-inch iPad in the works, which could be released late next year. It follows an earlier report of a 14-inch one.\r\nTalk of larger iPads dates back severa… [+4449 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Ben Lovejoy",
      title:
        "TikTok gaming push will be an “enormous” one, launch expected on Nov 2",
      description:
        "TikTok gaming has so far been a very small part of the streaming video app, but the company is said to be just days away from announcing an “enormous” push into the games market … Background TikTok has offered games to Chinese users since 2019, but in a rathe…",
      url: "https://9to5mac.com/2022/10/27/tiktok-gaming-2/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/10/TikTok-gaming.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-10-27T12:06:19Z",
      content:
        "TikTok gaming has so far been a very small part of the streaming video app, but the company is said to be just days away from announcing an “enormous” push into the games market …\r\nBackground\r\nTikTok… [+2406 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Police",
      },
      author: "Arol Wright",
      title:
        "Samsung supports Unicode 15 emoji with One UI 5, ahead of everyone else",
      description: "Beating Apple, Microsoft, and even Google to the punch",
      url: "https://www.androidpolice.com/one-ui-5-samsung-unicode-15-emoji/",
      urlToImage:
        "https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/10/samsung-one-ui-5-ap-hero.jpg",
      publishedAt: "2022-10-27T08:48:05Z",
      content:
        "Samsung has begun rolling out One UI 5, starting with the Samsung Galaxy S22 range and soon following on the rest of the company's recent phone lineup, all around the world. While it might take a few… [+1591 chars]",
    },
    {
      source: {
        id: null,
        name: "Genbeta.com",
      },
      author: "José Alberto Lizana",
      title:
        "Apple da marcha atrás ante las críticas: pausa la publicidad en la App Store",
      description:
        "Ni dos días ha aguantado en pie el nuevo sistema de anuncios de Apple para la App Store. Este plan comenzó a funcionar el pasado martes, haciendo que los desarrolladores pudieran pagar a la compañía para que su aplicación apareciera en el espacio de recomenda…",
      url: "https://www.genbeta.com/actualidad/apple-da-marcha-atras-criticas-pausa-publicidad-app-store",
      urlToImage: "https://i.blogs.es/18fe8a/app-store/840_560.jpg",
      publishedAt: "2022-10-27T07:11:57Z",
      content:
        "Ni dos días ha aguantado en pie el nuevo sistema de anuncios de Apple para la App Store. Este plan comenzó a funcionar el pasado martes, haciendo que los desarrolladores pudieran pagar a la compañía … [+2489 chars]",
    },
    {
      source: {
        id: null,
        name: "Genbeta.com",
      },
      author: "José Alberto Lizana",
      title:
        "Todas las novedades de la última actualización de Windows 11: vuelve al sistema una función histórica de Windows",
      description:
        "Como todos los meses, desde Microsoft han liberado su nueva actualización para Windows 11 22H2 con un total de 26 correcciones de errores y también mejoras generales en la estética. Esta corresponde con la actualización KB5018496 que actualmente está en forma…",
      url: "https://www.genbeta.com/windows/todas-novedades-ultima-actualizacion-windows-11-vuelve-al-sistema-funcion-historica-windows",
      urlToImage: "https://i.blogs.es/4ee0d1/windows/840_560.jpg",
      publishedAt: "2022-10-27T09:04:59Z",
      content:
        "Como todos los meses, desde Microsoft han liberado su nueva actualización para Windows 11 22H2 con un total de 26 correcciones de errores y también mejoras generales en la estética. Esta corresponde … [+2324 chars]",
    },
    {
      source: {
        id: null,
        name: "Autoblog",
      },
      author: "Zac Palmer",
      title:
        "2023 Ford Explorer Review: From Timberline to King Ranch, a trim for every occasion",
      description:
        "Filed under:\n Ford,Buying Guide,New Car Reviews,Crossover,SUV,Hybrid,Performance\n Continue reading 2023 Ford Explorer Review: From Timberline to King Ranch, a trim for every occasion\n2023 Ford Explorer Review: From Timberline to King Ranch, a trim for every o…",
      url: "https://www.autoblog.com/article/2023-ford-explorer-review/",
      urlToImage:
        "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2022/10/26104615/IMG_72813.jpg",
      publishedAt: "2022-10-27T10:00:00Z",
      content:
        "Pros: RWD-based with above-average dynamics; powerful engines; plethora of choices\r\nCons: Pricier than most; Hybrid is only marginally efficient; cheap-feeling interior\r\nPicking a version of the 2023… [+11978 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Wesley Hilliard)",
      title:
        "Apple Music Live giving out free tickets to Megan Thee Stallion concert",
      description:
        "The next Apple Music Live event will feature Megan Thee Stallion performing in Hollywood — an in-person live concert on November 11, streaming December 21.The next Apple Music Live will feature Megan Thee StallionThe Apple Music Live concert series features e…",
      url: "https://appleinsider.com/articles/22/10/27/apple-music-live-giving-out-free-tickets-to-megan-thee-stallion-concert",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/51075-100889-Apple-Music-Live-xl.jpg",
      publishedAt: "2022-10-27T15:34:37Z",
      content:
        "The next Apple Music Live will feature Megan Thee Stallion\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nThe next Apple Music Live event will feature Me… [+1074 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Andrew Orr)",
      title:
        "iOS 16.2 asks for feedback on accidental Emergency SOS activation",
      description:
        "Apple's new crash detection feature on iPhone 14 has already worked in real-life incidents, but it's also been triggering false reports. Now Apple is working to cut down on inaccurate reports by trialling a new call for user feedback in iOS 16.2Crash Detectio…",
      url: "https://appleinsider.com/articles/22/10/27/ios-162-asks-for-feedback-on-accidental-emergency-sos-activation",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/51072-100880-crash-detection-iPhone-Apple-Watch-xl.jpg",
      publishedAt: "2022-10-27T13:13:30Z",
      content:
        "Crash Detection for Apple Watch and iPhone\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nApple's new crash detection feature on iPhone 14 has already wo… [+1744 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Wesley Hilliard)",
      title:
        "iPhone growth in China outstrips declining smartphone market by a large margin",
      description:
        "Market analysis shows the biggest smartphone vendors in China saw steep year-over-year declines in Q3 2022, while Apple's iPhone shipments grew by 36%.Apple has seen significant iPhone growth in China in Q3The global market is in decline and analysts have bee…",
      url: "https://appleinsider.com/articles/22/10/27/iphone-growth-in-china-outstrips-declining-smartphone-market-by-a-large-margin",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/51071-100882-iPhone-14-Pro-Box-xl.jpg",
      publishedAt: "2022-10-27T12:55:22Z",
      content:
        "Apple has seen significant iPhone growth in China in Q3\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nMarket analysis shows the biggest smartphone vendo… [+1715 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Christine McKee)",
      title:
        "Daily deals Oct. 27: $800 off Samsung OLED TVs, $200 off M1 12.9-inch iPad Pro, Hover-1 Blast scooter for $90, more",
      description:
        "Thursday's best deals include $50 off Nanoleaf triangles with Thread, $50 off cellular Apple Watch Series 8, a big screen TV sale starting at $250, and much more.Best deals October 27AppleInsider checks online stores daily to uncover discounts and offers on h…",
      url: "https://appleinsider.com/articles/22/10/27/daily-deals-oct-27-800-off-samsung-oled-tvs-200-off-m1-129-inch-ipad-pro-hover-1-blast-scooter-for-90-more",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/51069-100879-Deals-xl.jpg",
      publishedAt: "2022-10-27T12:15:38Z",
      content:
        "Best deals October 27\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nThursday's best deals include $50 off Nanoleaf triangles with Thread, $50 off cellul… [+3538 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (William Gallagher)",
      title:
        "Apple boasts iPad Pro packaging is 99% made from sustainable forests",
      description:
        "The new iPad Pro comes in packaging that is almost entirely fiber-based, and is completely biodegradeable, says Apple's Lisa Jackson.Back in 2015, Apple partnered with The Conservation Fund to buy over 36,000 acres of vulnerable forestland in Maine and North …",
      url: "https://appleinsider.com/articles/22/10/27/apple-boasts-ipad-pro-packaging-is-99-made-from-sustainable-forests",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/51070-100878-000-lead-Lisa-Jackson-xl.jpg",
      publishedAt: "2022-10-27T11:53:09Z",
      content:
        "AppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nThe new iPad Pro comes in packaging that is almost entirely fiber-based, and is completely biodegradeable, … [+955 chars]",
    },
    {
      source: {
        id: null,
        name: "Macworld",
      },
      author: "Michael Simon",
      title:
        "Samsung just released an incredible privacy feature the iPhone desperately needs",
      description:
        "Over the past several versions of iOS, Apple has released tremendous privacy features that make it harder for prying eyes to peek at your personal data. But when it comes it repairs or service, it’s still an all-or-nothing scenario. Either erase your phone or…",
      url: "https://www.macworld.com/article/1363907/samsung-maintenance-mode-iphone-privacy.html",
      urlToImage:
        "https://www.macworld.com/wp-content/uploads/2022/10/iphone-privacy.jpg?quality=50&strip=all&w=1024",
      publishedAt: "2022-10-27T14:37:08Z",
      content:
        "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nOver the past severa… [+1558 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.jp",
      },
      author: "マエノケンタ",
      title: "今アメリカのAppleストアで売れているのは錠前らしい",
      description:
        "Image:Level最近のAppleストア、アクセサリーの棚にある最新の商品のひとつは、錠前です。通常の錠前のように、めんどくさいカギを物理的に持っておく必要がないこのLevelLock+というスマートロックは、互換性のあるiPhoneかAppleWatchを近づけることで解除できます。値段は330ドル（約4万8000円）。LevelHomeは、Appleのホームアプリの機能とシームレスに対応す",
      url: "https://www.gizmodo.jp/2022/10/now-selling-apple-store-is-smart-lock.html",
      urlToImage:
        "https://media.loom-app.com/gizmodo/dist/images/2022/10/27/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%882022-10-2714.50.54.png?w=1280&h=630&f=jpg",
      publishedAt: "2022-10-27T07:50:00Z",
      content:
        "Apple\r\nLevel Lock+ iPhoneApple Watch33048000\r\nLevel Home Apple\r\nCNBCLevel Lock+Apple\r\nSiriAirbnbs\r\n2030811\r\nLevel HomeCEOJohn Martin\r\nApple\r\nApple PayeApple Pay43.9AppleState ID\r\nSource: Level, Apple",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.jp",
      },
      author: "ヤマダユウス型",
      title:
        "Apple Watch Ultraのロングバッテリー、どれだけもつのか山で試してきた！",
      description:
        "Photo:ヤマダユウス型結論、さすがUltraでした。さすウル。AppleWatchのタフネス進化版ともいえる「AppleWatchUltra」。チタニウムケースや追加ボタンなどの新機能は魅力ですが、なんだかんだいって一番実用的っぽいのが、バッテリー時間の増加でしょう。通常使用で最大36時間、低電力モードであれば最大60時間のロングバッテリーは、通常のAppleWatchのバッテリー（最大18時",
      url: "https://www.gizmodo.jp/2022/10/apple-watch-ultra-long-battery.html",
      urlToImage:
        "https://media.loom-app.com/gizmodo/dist/images/2022/10/11/221011ultrabattery_01.jpg?w=1280&h=630&f=jpg",
      publishedAt: "2022-10-27T09:00:00Z",
      content:
        "Ultra\r\nApple WatchApple Watch Ultra\r\n3660Apple Watch18\r\n5\r\nUltra vs Series 8\r\nApple WatchApple Watch UltraApple Watch Series 8\r\nApple Watch850\r\nUltraSeries 8\r\nUltraSeries 8YAMAP\r\nYAMAP\r\n30\r\nUltraSeri… [+345 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.jp",
      },
      author: "satomi",
      title:
        "広がるApple税。ゲームアプリのNFT決済やSNSアプリのブースト広告も対象に",
      description:
        "AppStoreレビューガイドラインが改定。NFT購入はApple決済を使った場合のみ認められるとなったり、コンテンツブーストに30％の手数料がかかったりと、デベロッパーからは不満続出。",
      url: "https://www.gizmodo.jp/2022/10/nft-payments-are-prohibited-in-app-store.html",
      urlToImage:
        "https://media.loom-app.com/gizmodo/dist/images/2022/10/27/shutterstock_89077750.jpeg?w=1280&h=630&f=jpg",
      publishedAt: "2022-10-27T10:30:00Z",
      content:
        "Apple1024iOS 16.1iPad OS 16.1macOS VenturaAppStoreNFTAppleNFT\r\nSNSSNSSNSAppleIAP30Apple\r\nEpic Games\r\nNFT\r\nNFTAppleNFT\r\nNFTNFTNFTAppleApple30NFTNFT×NFT\r\nNFTQR\r\nARQR\r\nAppleNFTAppleWeb3\r\niOSAppleAppleWe… [+165 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.jp",
      },
      author: "三浦一紀",
      title:
        "Apple製品バリバリ使っている方へ。すべてを一度に充電できる四角いヤツ「Anker 3-in-1 Cube with MagSafe」はいかがでしょう？",
      description:
        "Photo:三浦一紀見た目がワクワクする。iPhoneにAirPodsPro、そしてAppleWatchと、Apple（アップル）製品に囲まれて生活している方も多いかと思います。そうなってくるとぶち当たるのが充電問題。充電すること自体は問題ないんですけど、それぞれ充電するためのケーブルが机の上でごちゃごちゃして、あーーーーーーー！ってなりますよね。そんな「Apple製品たくさん使ってると充電ケーブ",
      url: "https://www.gizmodo.jp/2022/10/anker-3-in-1-cube-with-magsafe.html",
      urlToImage:
        "https://media.loom-app.com/gizmodo/dist/images/2022/10/27/221027ankercube-01.jpg?w=1280&h=630&f=jpg",
      publishedAt: "2022-10-27T10:15:00Z",
      content:
        "iPhoneAirPods ProApple WatchApple\r\nAppleAnkerAnker 3-in-1 Cube with MagSafe\r\n3-1n-1\r\nAirPods Pro\r\nAnkerMade for MagSafeiPhoneMagSafe15WAirPods ProApple Watch3-in-1\r\nImage: Anker\r\nApple\r\nMagSafeApple … [+72 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.jp",
      },
      author: "三浦一紀",
      title:
        "ほぼAirTagじゃん。Appleの「探す」アプリに対応したEufyの紛失防止トラッカーが俺の心をわしづかみにしてきた",
      description:
        "Photo:三浦一紀これだよこれ。かねてより出るぞ出るぞと言われていた、Ankerの家電ブランドEufyの紛失防止トラッカー「EufySecuritySmartTrackLink」が、本日10月27日より予約開始となりました。発売は11月1日です。最大の特徴はなんといっても、Apple（アップル）の「探す」アプリに対応していること。ということは、ほぼAirTagですよ。Appleの機能をそのまま使",
      url: "https://www.gizmodo.jp/2022/10/eufy-security-smarttrack-link.html",
      urlToImage:
        "https://media.loom-app.com/gizmodo/dist/images/2022/10/27/221027Ankertag-01.jpg?w=1280&h=630&f=jpg",
      publishedAt: "2022-10-27T09:45:00Z",
      content:
        "AnkerEufyEufy Security SmartTrack Link1027111\r\nAppleAirTagAppleAnker\r\n2,9901\r\nEufy Security SmartTrack Card\r\n2.4mm\r\n33\r\nSource: Anker",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Scott Stein",
      title: "iPad Pro 2022 Review: For Apple Pencil Power Users - CNET",
      description:
        "The latest iPad Pro doubles down on being a tablet for artists, with a basic spec bump.",
      url: "https://www.cnet.com/tech/computing/ipad-pro-2022-review-for-apple-pencil-power-users/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/3f1e21ec5c9d35a973ced9fbd78fe16d4cd4d1d7/hub/2022/10/26/f011b628-3114-4e33-b146-434f13daa92f/ipad-pro-12-9-2022.jpg?auto=webp&fit=crop&height=630&width=1200",
      publishedAt: "2022-10-27T12:00:28Z",
      content:
        "Yes, the iPad is a computer. No, it's not a perfect laptop replacement yet. But even as the paths of the iPad and Mac are converging ever closer, the latest 2022 iPad Pro doesn't really try to be mor… [+6796 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Lisa Eadicicco",
      title:
        "Forget USB-C. An iPhone With No Charging Port Isn't That Absurd - CNET",
      description:
        "Commentary: The Lightning port's days are numbered, and the iPhone has become less reliant on physical cables. A wireless iPhone starts to make sense.",
      url: "https://www.cnet.com/tech/mobile/forget-usb-c-an-iphone-with-no-charging-port-isnt-that-absurd/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/17d055a6cfeb0e9bbdd474673e7fa52a0039cc16/hub/2022/04/15/a7afa65f-4289-4421-855d-0dadae5f8fe1/apple-logo-2022-060.jpg?auto=webp&fit=crop&height=630&width=1200",
      publishedAt: "2022-10-27T11:00:28Z",
      content:
        "After 10 years, the iPhone's charging port is finally getting an update. The European Union has deemed USB-C to be the universal charging standard in the region, meaning all new phones launching in E… [+9835 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Eli Blumenthal",
      title:
        "Thursday Night Football: How to Watch, Stream Ravens vs. Buccaneers Tonight on Prime Video or Twitch - CNET",
      description:
        "Baltimore and Tampa Bay meet on Thursday Night Football to kick off Week 8 of the NFL season.",
      url: "https://www.cnet.com/tech/services-and-software/thursday-night-football-how-to-watch-stream-ravens-vs-buccaneers-tonight-on-prime-video-or-twitch/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/d8f3d3d935334a0b9711a006697f7f73c3c0b8af/hub/2021/09/13/05a69fd0-1ecc-49a8-a013-9bf20e158687/gettyimages-1090596762.jpg?auto=webp&fit=crop&height=630&width=1200",
      publishedAt: "2022-10-27T09:00:10Z",
      content:
        "The Baltimore Ravens are one game over .500. The Tampa Bay Buccaneers are a game under .500. Yet both find themselves tied for first place in their respective divisions. The 3-4 Bucs are tied with th… [+11638 chars]",
    },
    {
      source: {
        id: null,
        name: "Journal du geek",
      },
      author: "Tristan",
      title: "Apple prépare un iPad XXL, plus grand que le dernier MacBook Pro",
      description:
        "Un iPad Pro XXL ? Apple serait en train de développer une tablette avec un écran de 16 pouces. Plus grand que ses derniers MacBook. \nApple prépare un iPad XXL, plus grand que le dernier MacBook Pro",
      url: "https://www.journaldugeek.com/2022/10/27/apple-prepare-un-ipad-xxl-plus-grand-que-le-dernier-macbook-pro/",
      urlToImage:
        "https://www.journaldugeek.com/content/uploads/2022/10/apple-ipad-pro-magic-keyboard-m2.jpg",
      publishedAt: "2022-10-27T13:30:30Z",
      content:
        "Un iPad Pro XXL ? Apple serait en train de développer une tablette avec un écran de 16 pouces. Plus grand que ses derniers MacBook.Apple a présenté il y a quelques jours trois nouvelles tablettes. Av… [+2645 chars]",
    },
    {
      source: {
        id: null,
        name: "Journal du geek",
      },
      author: "Thomas Estimbre",
      title: "Apple réserve une belle surprise aux fans de Nintendo",
      description:
        "Surprise pour les fans de Nintendo qui disposent d’un iPhone, iPad, Mac ou Apple TV. Les manettes du Switch Online sont compatibles avec les dernières versions d’iOS, iPadOS, macOS et tvOS.\nApple réserve une belle surprise aux fans de Nintendo",
      url: "https://www.journaldugeek.com/2022/10/27/apple-reserve-une-belle-surprise-aux-fans-de-nintendo/",
      urlToImage:
        "https://www.journaldugeek.com/content/uploads/2022/10/manette-snes-bluetooth.jpg",
      publishedAt: "2022-10-27T12:00:02Z",
      content:
        "Surprise pour les fans de Nintendo qui disposent dun iPhone, iPad, Mac ou Apple TV. Les manettes du Switch Online sont compatibles avec les dernières versions diOS, iPadOS, macOS et tvOS.Apple devien… [+2440 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "David Bernal Raspall",
      title:
        "“¿Metaverso? Yo nunca usaré esa palabra”: los ejecutivos de Apple se desmarcan de Meta en la carrera por el mundo virtual",
      description:
        "Quizá no nos damos cuenta, pero estamos a pocas semanas de que Apple cambie las reglas de juego en cuanto a qué tecnología usamos en nuestro día a día. Tim Cook ya repetido en varias ocasiones que pronto nos preguntaremos cómo habíamos podido vivir sin la Rea…",
      url: "https://www.applesfera.com/apple-1/metaverso-yo-nunca-usare-esa-palabra-ejecutivos-apple-se-desmarcan-meta-carrera-mundo-virtual",
      urlToImage: "https://i.blogs.es/1fa6ff/hero/840_560.jpeg",
      publishedAt: "2022-10-27T14:11:11Z",
      content:
        "Quizá no nos damos cuenta, pero estamos a pocas semanas de que Apple cambie las reglas de juego en cuanto a qué tecnología usamos en nuestro día a día. Tim Cook ya repetido en varias ocasiones que pr… [+2568 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Fran Bouzas",
      title: "Un iPad aún más grande es posible, según un rumor",
      description:
        "El iPad es uno de los productos más icónicos de Apple. Hace nada, los de Cupertino presentaron sus nuevos iPad Pro de 11 y de 12,9 pulgadas con chip M2. Dos máquinas con la potencia de sobra para hacer todo lo que se les ponga delante, incluso algunas de las …",
      url: "https://www.applesfera.com/rumores/ipad-grande-posible-rumor",
      urlToImage: "https://i.blogs.es/6d113b/1366_2000/840_560.jpeg",
      publishedAt: "2022-10-27T10:01:59Z",
      content:
        "El iPad es uno de los productos más icónicos de Apple. Hace nada, los de Cupertino presentaron sus nuevos iPad Pro de 11 y de 12,9 pulgadas con chip M2. Dos máquinas con la potencia de sobra para hac… [+1984 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Miguel López",
      title:
        "Anker ha encontrado otro modo de sustituir al fallido Air Power: con un cubo",
      description:
        "Apple creó el AirPower con una idea: cargar todos nuestros dispositivos y accesorios de Apple usando sólo un cable. Pero querían hacerlo con tantas funciones que el producto terminó siendo cancelado, supuestamente por problemas de calentamiento. A nivel ofici…",
      url: "https://www.applesfera.com/accesorios/anker-ha-encontrado-otro-modo-sustituir-al-fallido-air-power-cubo",
      urlToImage: "https://i.blogs.es/37bfec/anker-cubo/840_560.jpeg",
      publishedAt: "2022-10-27T09:01:56Z",
      content:
        "Apple creó el AirPower con una idea: cargar todos nuestros dispositivos y accesorios de Apple usando sólo un cable. Pero querían hacerlo con tantas funciones que el producto terminó siendo cancelado,… [+1751 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "David Bernal Raspall",
      title:
        "Apple rediseña la web de iCloud por completo. Por ahora solo en beta",
      description:
        "El sitio web de iCloud ha pasado por un rediseño completo para adaptarlo a un lenguaje mucho más actual en cuanto a la presentación de la información. Un diseño que ahora mismo está solo disponible en beta, pero que más tarde o más temprano ha de llegar ofici…",
      url: "https://www.applesfera.com/servicios-apple/apple-redisena-web-icloud-completo-ahora-solo-beta",
      urlToImage: "https://i.blogs.es/a0d757/hero/840_560.jpeg",
      publishedAt: "2022-10-27T07:55:51Z",
      content:
        "El sitio web de iCloud ha pasado por un rediseño completo para adaptarlo a un lenguaje mucho más actual en cuanto a la presentación de la información. Un diseño que ahora mismo está solo disponible e… [+1859 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Jesús Quesada",
      title:
        "MediaMarkt deja el pequeño pero matón Mac mini M1 de 512 GB a precio de 256 GB con esta oferta",
      description:
        "Lleva a la venta un par de años, pero el Mac mini M1 sigue siendo un ordenador de sobremesa interesante tanto para usuarios domésticos como los que buscan algo de potencia para trabajar, incluso editando vídeos en alta resolución. MediaMarkt deja en oferta la…",
      url: "https://www.applesfera.com/seleccion/mediamarkt-deja-pequeno-maton-mac-mini-m1-512-gb-a-precio-256-gb-esta-oferta",
      urlToImage: "https://i.blogs.es/17d5ab/mac-mini-m1-oferta/840_560.jpg",
      publishedAt: "2022-10-27T05:22:55Z",
      content:
        "Lleva a la venta un par de años, pero el Mac mini M1 sigue siendo un ordenador de sobremesa interesante tanto para usuarios domésticos como los que buscan algo de potencia para trabajar, incluso edit… [+1565 chars]",
    },
    {
      source: {
        id: null,
        name: "MakeUseOf",
      },
      author: "Jowi Morales",
      title: "Apple Watch Ultra vs. Garmin MARQ: Which Should You Get?",
      description: "It's a tough, tough decision.",
      url: "https://www.makeuseof.com/apple-watch-ultra-vs-garmin-marq/",
      urlToImage:
        "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/10/Apple-Watch-Ultra-vs-Gamin-MARQ-desert-mountain-image-.jpg",
      publishedAt: "2022-10-27T12:30:14Z",
      content:
        "Garmin launched the second-generation MARQ luxury smartwatches on October 11, 2022. It offered five specialized variants: Adventurer, Athlete, Golfer, Captain, and Aviator.\r\nThese devices offer speci… [+7028 chars]",
    },
    {
      source: {
        id: null,
        name: "MakeUseOf",
      },
      author: "Alvin Wanjala",
      title: "How to Remove the Background From Any Image on iPhone",
      description:
        "Apple's Visual Lookup feature makes it so easy to remove the messy background from your photos. Learn how to take advantage of it.",
      url: "https://www.makeuseof.com/how-to-remove-image-background-on-iphone/",
      urlToImage:
        "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/10/iPhone-14-Plus-1.JPG",
      publishedAt: "2022-10-27T12:01:14Z",
      content:
        "Do you need to remove the background of an image you shot on your iPhone? If so, you don't need to pay an expert to do it for you or rely on third-party photo editing apps to get the job done.\r\nYou c… [+2733 chars]",
    },
    {
      source: {
        id: null,
        name: "Phandroid - News for Android",
      },
      author: "Tyler Lee",
      title:
        "DEAL: The Moto G Stylus 5G (2021) is at its cheapest price we’ve ever seen",
      description:
        "The Moto G Stylus 5G is already a pretty great value for money phone, but right now it’s enjoying a massive 50% discount that makes it cheaper than ever.\nThe post DEAL: The Moto G Stylus 5G (2021) is at its cheapest price we’ve ever seen first appeared on Pha…",
      url: "https://phandroid.com/2022/10/27/deal-the-moto-g-stylus-5g-2021-is-at-its-cheapest-price-weve-ever-seen/",
      urlToImage:
        "https://phandroid.com/wp-content/uploads/2022/02/Moto-G-Stylus-2022-2-640x430.jpg",
      publishedAt: "2022-10-27T13:51:46Z",
      content:
        "While Motorola’s flagship phones might not be getting the same amount of attention compared to Apple or Samsung, there’s no denying that Motorola’s budget and mid-range phones are some of the best va… [+758 chars]",
    },
    {
      source: {
        id: null,
        name: "Search Engine Journal",
      },
      author: "Moz",
      title: "3 Ways To Unlock Keyword Gold",
      description:
        "Learn how to add efficiency & effectiveness to your SEO keyword research process & discover golden opportunities to rank higher on SERPs.\nThe post 3 Ways To Unlock Keyword Gold appeared first on Search Engine Journal.",
      url: "https://www.searchenginejournal.com/unlock-keyword-gold-moz-spcs/468065/",
      urlToImage:
        "https://cdn.searchenginejournal.com/wp-content/uploads/2022/10/featured-image-634db1364bdf8-sej.jpg",
      publishedAt: "2022-10-27T05:00:04Z",
      content:
        "Keyword research is often thought of as the keystone of SEO and provides the foundation for many SEO strategies. After all, how can you optimize your website for search engines if you don’t know what… [+3571 chars]",
    },
    {
      source: {
        id: null,
        name: "Search Engine Journal",
      },
      author: "Motoko Hunt",
      title:
        "Global vs. Local Websites: Which Is Right For You? via @sejournal, @motokohunt",
      description:
        "When you run a business globally, your website is one of the most powerful tools to reach and communicate with your target audience. Read about four points you should consider to determine whether a global site or a local site is better for you.",
      url: "https://www.searchenginejournal.com/global-vs-local-websites-options/452269/",
      urlToImage:
        "https://cdn.searchenginejournal.com/wp-content/uploads/2022/09/global-vs-local-631ad55ee529d-sej.png",
      publishedAt: "2022-10-27T09:45:01Z",
      content:
        "When you run a business globally, your website is one of the most powerful tools to reach and communicate with your target audience.\r\nIf you are conducting business offline in various countries, you … [+8770 chars]",
    },
    {
      source: {
        id: null,
        name: "Presse-citron",
      },
      author: "Setra",
      title: "Comment Apple va rendre les accessoires MagSafe plus stylés",
      description:
        "Apple change les règles pour les fabricants d’accessoires MagSafe.",
      url: "https://www.presse-citron.net/comment-apple-va-rendre-les-accessoires-magsafe-plus-styles/",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2020/10/test-iphone-12-pro-magsafe.jpg",
      publishedAt: "2022-10-27T08:00:17Z",
      content:
        "Alors que la recharge sans fil existe depuis des années, Apple a voulu faire les choses différemment. En plus de prendre en charge les technologies de recharge sans fil standards, les récents iPhone … [+2913 chars]",
    },
    {
      source: {
        id: null,
        name: "Presse-citron",
      },
      author: "Stéphane Ficca",
      title:
        "Pour Microsoft, le Métavers n’est qu’un “jeu vidéo mal conçu” (Apple et Snap sont d’accord)",
      description:
        "Pour Xbox, Snap ou encore Apple, le métavers imaginé par Facebook a tout d'un jeu vidéo raté et d'une vie numérique dont personne ne veut...",
      url: "https://www.presse-citron.net/pour-microsoft-le-metavers-nest-quun-jeu-video-mal-concu-apple-et-snap-sont-daccord/",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2020/11/phil-spencer-xbox-meprise-fanboys.jpg",
      publishedAt: "2022-10-27T10:00:55Z",
      content:
        "C’était il y a quelques semaines, l’Américain Meta lançait en France sa plateforme Horizon Worlds, permettant de simmerger dans le métavers imaginé (et financé) par Mark Zuckerberg et ses équipes. Un… [+2587 chars]",
    },
    {
      source: {
        id: null,
        name: "Presse-citron",
      },
      author: "Manon Carpentier",
      title: "Pourquoi Canal+ augmente le prix de ses abonnements",
      description:
        "Comme d’autres avant lui, CANAL+ se voit contraint d’augmenter ses tarifs… Et ça fait mal.",
      url: "https://www.presse-citron.net/pourquoi-canal-augmente-le-prix-de-ses-abonnements/",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2022/10/telecommande-tv.jpg",
      publishedAt: "2022-10-27T09:30:01Z",
      content:
        "Voilà une bien mauvaise nouvelle pour les abonnés de CANAL+. Comme Netflix, Disney+ ou tout récemment Apple TV+, cest désormais au tour de CANAL+ daugmenter ses tarifs. Pour linstant, seule une de se… [+2574 chars]",
    },
    {
      source: {
        id: null,
        name: "Presse-citron",
      },
      author: "Romain Vitt",
      title: "Faut-il vraiment cacher la webcam de l’ordinateur ?",
      description:
        "On connaît tous quelqu’un qui cache la webcam de son ordinateur par crainte de se voir espionné à son insu. Peut-être même faites-vous partie de ces personnes. Mais est-ce que cela sert vraiment à quelque chose ?",
      url: "https://www.presse-citron.net/faut-il-vraiment-cacher-la-webcam-de-lordinateur/",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2021/02/DSC00685_DxO_PC.jpg",
      publishedAt: "2022-10-27T13:58:56Z",
      content:
        "Les films et séries ont largement contribué à générer une certaine psychose autour de ce petit objectif situé près de lécran de votre ordinateur. La webcam est souvent perçue comme une porte dentrée … [+3149 chars]",
    },
    {
      source: {
        id: null,
        name: "HYPEBEAST",
      },
      author: "info@hypebeast.com (HYPEBEAST), HYPEBEAST",
      title:
        'Elon Musk Just Changed His Status to "Chief Twit" While Carrying a Sink to Twitter HQ',
      description:
        'Elon Musk has officially made his grand entrance to the Twitter headquarters in San Francisco. It was on-brand for the billionaire with the announcement as Musk first took to Twitter to declare himself as "Chief Twit" where it was followed by a video of him w…',
      url: "https://hypebeast.com/2022/10/elon-musk-twitter-chief-twit-ceo-sink-entrance-video",
      urlToImage:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F10%2FTW-elon-musk-twitter-chief-twit-ceo-sink-entrance-video.jpg?w=960&cbr=1&q=90&fit=max",
      publishedAt: "2022-10-27T03:26:24Z",
      content:
        "Elon Musk has officially made his grand entrance to the Twitter headquarters in San Francisco. It was on-brand for the billionaire with the announcement as Musk first took to Twitter to declare himse… [+781 chars]",
    },
    {
      source: {
        id: null,
        name: "HYPEBEAST",
      },
      author: "info@hypebeast.com (HYPEBEAST), HYPEBEAST",
      title: "Nothing to Launch Its First-Ever Store in London",
      description:
        "With the Nothing Ear (1) released just over a year ago and the Nothing Phone (1) debuting recently in July, Nothing is now prepping its third offering, the $99 USD Nothing Ear (stick) set to launch on November 4. Around the same time as the latest release, No…",
      url: "https://hypebeast.com/2022/10/nothings-first-physical-store-london-opening-info",
      urlToImage:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F10%2Fnothing-first-retail-store-opening-lodnon-news-info-tw.jpg?w=960&cbr=1&q=90&fit=max",
      publishedAt: "2022-10-27T10:29:42Z",
      content:
        "With the Nothing Ear (1) released just over a year ago and the Nothing Phone (1) debuting recently in July, Nothing is now prepping its third offering, the $99 USD Nothing Ear (stick) set to launch o… [+1341 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Authority",
      },
      author: "Adamya Sharma",
      title:
        "Daily Authority: Ex-Windows chief reminisces Windows 8, 10 years later",
      description:
        "Talking Windows 8 after a decade, a new venture by the father of Android, Disney's strange tracking plans, and more tech news of the day.",
      url: "https://www.androidauthority.com/daily-authority-october-27-2022-3225302/",
      urlToImage:
        "https://www.androidauthority.com/wp-content/uploads/2022/10/Windows-8-logo.jpg",
      publishedAt: "2022-10-27T08:19:49Z",
      content:
        "Good morning, good people of tech. I started watching Andor on Disney Plus just yesterday and spent the entire night finishing all eight episodes available on the streaming platform. Isnt it the best… [+6342 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Authority",
      },
      author: "Ryan Whitwam",
      title: "Android updates are boring, and that’s okay",
      description:
        "Android 13 is rolling out, and although it might not be the most exciting update, a lot of important work has gone on behind the scenes.",
      url: "https://www.androidauthority.com/android-13-update-boring-okay-3215829/",
      urlToImage:
        "https://www.androidauthority.com/wp-content/uploads/2022/06/Android-13-Easter-Egg.jpg",
      publishedAt: "2022-10-27T13:00:25Z",
      content:
        "Googles annual Android updates used to be major events, bringing much-needed features and UI refinements to the platform, but that was then and this is now. Today, more than 14 years after Android de… [+6238 chars]",
    },
    {
      source: {
        id: null,
        name: "Presse-citron",
      },
      author: "RPB",
      title:
        "Pourquoi Apple pense que iMessage sur Android serait “du gâchis” ?",
      description:
        "Apple donne enfin une explication claire autour de l'absence de iMessage sur les smartphones Android. Et à en croire la firme, personne n'a jamais vu la messagerie enrichie comme une manière de booster les ventes d'iPhone.",
      url: "https://www.presse-citron.net/pourquoi-apple-pense-que-imessage-sur-android-serait-du-gachis/",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2022/06/Apple-Craig-Federighi.jpg",
      publishedAt: "2022-10-27T05:30:54Z",
      content:
        "Depuis toujours Apple a semblé faire en sorte de garder les meilleurs aspects de son écosystème propriétaire exclusifs à ses utilisateurs. L’un des cas les plus symboliques, c’est la messagerie enric… [+3115 chars]",
    },
    {
      source: {
        id: null,
        name: "Presse-citron",
      },
      author: "Setra",
      title:
        "Le fondateur d’Android se lance dans la surveillance (comme par hasard)",
      description:
        "Après l’échec d’Essential, le père d’Android, Andy Rubin, a un nouveau projet appelé Simple Things.",
      url: "https://www.presse-citron.net/le-fondateur-dandroid-se-lance-dans-la-surveillance-comme-par-hasard/",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2022/10/camera-surveillance-securite.jpg",
      publishedAt: "2022-10-27T15:00:21Z",
      content:
        "Afin de rivaliser avec le système dexploitation dApple, Google nest pas parti dune page blanche. En effet, la firme de Mountain View a racheté Android en 2005, puis sortit le système dexploitation en… [+2497 chars]",
    },
    {
      source: {
        id: null,
        name: "Presse-citron",
      },
      author: "RPB",
      title:
        "L’action Meta s’effondre : ralentissement économique, stratégie… voici pourquoi",
      description:
        "La capitalisation boursière de Meta s'est effondrée de 65 milliards de dollars mercredi après l'annonce d'un nouveau trimestre de baisse des revenus. En plus d'un contexte économique très défavorable pour la Big Tech en ce moment, la stratégie de Mark Zuckerb…",
      url: "https://www.presse-citron.net/laction-meta-seffondre-ralentissement-economique-strategie-voici-pourquoi/",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2022/08/Horizon-Worlds-Meta-France.jpg",
      publishedAt: "2022-10-27T07:27:22Z",
      content:
        "Mais que se passe-t-il en ce moment chez Meta ? La maison-mère de Facebook vient encore d’annoncer des résultat décevants ce trimestre et la sanction des marchés ne s’est pas faite attendre : la vale… [+4249 chars]",
    },
    {
      source: {
        id: null,
        name: "HYPEBEAST",
      },
      author: "info@hypebeast.com (HYPEBEAST), HYPEBEAST",
      title: "Apple Confirms iPhone Will Get USB-C Charging",
      description:
        "Apple has confirmed that iPhones will receive USB-C charging ports — a move widely considered as inevitable, if not overdue. Speaking at The Wall Street Journal’s Tech Live conference this week, Apple's senior vice president of worldwide marketing, Greg Joswi…",
      url: "https://hypebeast.com/2022/10/apple-confirms-iphone-will-get-usb-c-charging",
      urlToImage:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F10%2Fapple-confirms-iphone-usb-c-charging-tw.jpg?w=960&cbr=1&q=90&fit=max",
      publishedAt: "2022-10-27T02:27:15Z",
      content:
        "Apple has confirmed that iPhones will receive USB-C charging ports a move widely considered as inevitable, if not overdue. Speaking at The Wall Street Journals Tech Live conference this week, Apple’s… [+987 chars]",
    },
    {
      source: {
        id: null,
        name: "BGR",
      },
      author: "Chris Smith",
      title:
        "Apple Music, TV Plus, and One subscription prices went up – here’s how to save money",
      description:
        "Apple earlier this week raised the prices across various subscriptions, including individual, family, and annual plans. Going forward, your Apple Music, Apple TV Plus, and Apple One subscriptions will have higher price tags no matter how you pay for them. The…",
      url: "https://bgr.com/tech/apple-music-tv-plus-and-one-subscription-prices-went-up-heres-how-to-save-money/",
      urlToImage:
        "https://bgr.com/wp-content/uploads/2021/07/apple-iphone-12-pro-1.jpg?quality=82&strip=all",
      publishedAt: "2022-10-27T10:50:00Z",
      content:
        "Apple earlier this week raised the prices across various subscriptions, including individual, family, and annual plans. Going forward, your Apple Music, Apple TV Plus, and Apple One subscriptions wil… [+4293 chars]",
    },
    {
      source: {
        id: null,
        name: "BGR",
      },
      author: "José Adorno",
      title: "Can Apple Watch Ultra replace your iPhone? Here’s the answer",
      description:
        "Since Apple Watch Series 3 brought a Cellular connection option in 2017, customers have wondered whether it was possible to replace the iPhone with just Apple’s smartwatch. Apart from the lack of apps, there was another concern, as the battery life was always…",
      url: "https://bgr.com/tech/can-apple-watch-ultra-replace-your-iphone-heres-the-answer/",
      urlToImage:
        "https://bgr.com/wp-content/uploads/2022/09/Apple-Watch-Ultra-lifestyle-adventure-220907.jpg?quality=82&strip=all",
      publishedAt: "2022-10-27T14:06:55Z",
      content:
        "Since Apple Watch Series 3 brought a Cellular connection option in 2017, customers have wondered whether it was possible to replace the iPhone with just Apple’s smartwatch. Apart from the lack of app… [+3347 chars]",
    },
    {
      source: {
        id: null,
        name: "BGR",
      },
      author: "Maren Estrada",
      title:
        "Today’s deals: $89 AirPods, $15 Blink Mini, $169 AirPods Pro, Samsung TVs, iPad sale, more",
      description:
        "This year flew by and now Black Friday is less than a month away. Plus, there are so many early Black Friday 2022 deals that you can already shop now! On top of that, we rounded up tons of today’s top deals right here in this guide. There are so many great of…",
      url: "https://bgr.com/deals/todays-deals-89-airpods-15-blink-mini-169-airpods-pro-samsung-tvs-ipad-sale-more/",
      urlToImage:
        "https://bgr.com/wp-content/uploads/2022/02/bgr-deals-of-the-day-2022-42.jpg?quality=82&strip=all",
      publishedAt: "2022-10-27T13:35:00Z",
      content:
        "If you purchase an independently reviewed product or service through a link on our website, we may receive an affiliate commission. Learn more.\r\nThis year flew by and now Black Friday is less than a … [+5438 chars]",
    },
    {
      source: {
        id: null,
        name: "Internet",
      },
      author: "noreply@blogger.com (Ravie Lakshmanan)",
      title:
        "Apple iOS and macOS Flaw Could've Let Apps Eavesdrop on Your Conversations with Siri",
      description:
        'A now-patched security flaw in Apple\'s iOS and macOS operating systems could have potentially enabled apps with Bluetooth access to eavesdrop on conversations with Siri.\nApple said "an app may be able to record audio using a pair of connected AirPods," adding…',
      url: "https://thehackernews.com/2022/10/apple-ios-and-macos-flaw-couldve-let.html",
      urlToImage:
        "https://thehackernews.com/new-images/img/b/R29vZ2xl/AVvXsEhynr4fbFbRXPW16mAg1DscRgqTrt8mbDwdM66FICpylozUNf2anDFhLY0zot2uSs6oX1pTvARriucHuaNMj_ExUiBRWIx80ijqOjyLL9BjOHfcxtTRrOfImbZtKsPpj9oXQJO0nYkGgEZ7eIG7pFCw_ScWMMfdv_NFpHL64n9EjFuZdiMZ4GIFesdw/s728-e100/siri.jpg",
      publishedAt: "2022-10-27T10:15:00Z",
      content:
        "A now-patched security flaw in Apple's iOS and macOS operating systems could have potentially enabled apps with Bluetooth access to eavesdrop on conversations with Siri.\r\nApple said \"an app may be ab… [+2373 chars]",
    },
    {
      source: {
        id: null,
        name: "Faz.net",
      },
      author: "Roland Lindner",
      title: "Facebook-Konzern: Meta schrumpft weiter",
      description:
        "Facebooks Mutterkonzern erleidet abermals einen Umsatzrückgang, und sein Gewinn stürzt ab. Er will jetzt mehr sparen – auch beim Personal. Konzernchef Zuckerberg verteidigt das Metaversum.",
      url: "https://www.faz.net/aktuell/wirtschaft/unternehmen/facebook-konzern-metas-ungewoehnlicher-schrumpfkurs-18416749.html",
      urlToImage:
        "https://media0.faz.net/ppmedia/aktuell/wirtschaft/2267859386/1.8416768/facebook_teaser/muessen-umsatzeinbussen.jpg",
      publishedAt: "2022-10-27T04:27:29Z",
      content:
        "Meta hat abermals schwache Quartalszahlen vorgelegt und damit die Serie enttäuschender Geschäftsergebnisse aus der Technologiebranche fortgesetzt. Der Mutterkonzern des sozialen Netzwerks Facebook me… [+3574 chars]",
    },
    {
      source: {
        id: null,
        name: "iMore",
      },
      author: "bryan.wolfe@futurenet.com (Bryan M Wolfe)",
      title:
        "iOS 16 is getting a major new sleep tracking upgrade and an exciting new app",
      description:
        "There are two new Lock Screen widget options coming soon to iPhone. The long-awaited Freeform app is also set to debut.",
      url: "https://www.imore.com/ios/ios-16-is-getting-a-major-new-sleep-tracking-upgrade-and-an-exciting-new-app",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/JPBMNahqAkbyHE9zWUgXbT-1200-80.jpeg",
      publishedAt: "2022-10-27T12:46:28Z",
      content:
        "After it released iOS 16.1 to the public, Apple is out with the first iOS 16.2 developer beta. The update includes a new Sleep widget for the Lock Screen. The previously announced Freeform app is als… [+1721 chars]",
    },
    {
      source: {
        id: null,
        name: "iMore",
      },
      author: "oliver@monkeymanmedia.com (Oliver Haslam)",
      title: "Install iOS 16.1 to get this vital 0-day security fix",
      description:
        "Apple's latest update included an important security fix for your iPhone.",
      url: "https://www.imore.com/iphone/install-ios-161-to-get-this-vital-0-day-security-fix",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/SNdMbLMofu7cAAK7mUQuKD-1200-80.png",
      publishedAt: "2022-10-27T13:35:34Z",
      content:
        "If you've yet to update to iOS 16.1, now might be a very good time to do so — because it includes an important fix for a zero-day exploit that Apple says may have already been exploited in the wild.\r… [+1535 chars]",
    },
    {
      source: {
        id: null,
        name: "iMore",
      },
      author: "stephen.warwick@futurenet.com (Stephen Warwick)",
      title: "Instagram is closing in on Facebook with 2 billion active users",
      description:
        "Meta has revealed Instagram now has 2 billion monthly active users as it catches up with Facebook.",
      url: "https://www.imore.com/apps/instagram-is-closing-in-on-facebook-with-2-billion-active-users",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/HqhbREPjDsPhSXWTe5or5M-1200-80.jpg",
      publishedAt: "2022-10-27T10:04:43Z",
      content:
        "Meta has this week revealed that the popular photo-sharing and social media app Instagram now boasts 2 billion monthly active users, as the platform closes in on Facebook. \r\nMeta announced its Q3 ear… [+1757 chars]",
    },
    {
      source: {
        id: null,
        name: "iMore",
      },
      author: "oliver@monkeymanmedia.com (Oliver Haslam)",
      title:
        "iOS 16 upgrade will make Live Activities even better, but there's a cost",
      description:
        "Apple's next software update will allow Live Activities to update more often so you're always seeing more accurate information.",
      url: "https://www.imore.com/iphone/ios-16-upgrade-will-make-live-activities-even-better-but-theres-a-cost",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/EXVS9LFTrTLJVM8LP2df4V-1200-80.jpg",
      publishedAt: "2022-10-27T13:46:01Z",
      content:
        "Apple is making a change with the release of iOS 16.2 that will allow people to choose to have Live Activities update more frequently.\r\nThe option, which will be part of an iOS 16 upgrade later this … [+1562 chars]",
    },
    {
      source: {
        id: null,
        name: "iMore",
      },
      author: "stephen.warwick@futurenet.com (Stephen Warwick)",
      title:
        "Servant Season 4: Confirmed release date, recap, and everything you need to know",
      description: "Servant Season 4 is coming, but when will it be released",
      url: "https://www.imore.com/music-movies-tv/servant-season-4-confirmed-release-date-recap-and-everything-you-need-to-know",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/DnwCh8eg6fca7cEXqurAb8-1200-80.jpg",
      publishedAt: "2022-10-27T15:03:35Z",
      content:
        "Servant is one of (if not the) most terrifying shows on Apple TV Plus. From M. Night Shyamalan comes a show that will make your skin crawl in ways you never thought possible; even the trailers are en… [+9897 chars]",
    },
    {
      source: {
        id: null,
        name: "iMore",
      },
      author: "Lloyd Coombes",
      title:
        "Best secret iOS 16 features: Tricks to make your iPhone life easier",
      description:
        "iOS 16 offers plenty of great new additions, but some may surprise you.",
      url: "https://www.imore.com/ios/best-secret-ios-16-features",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/NiVEUrxrQLDtzwsVfVN6jY-1200-80.jpg",
      publishedAt: "2022-10-27T08:43:20Z",
      content:
        "iOS 16 is finally here, and after a few weeks spent messing around in Apple’s best iPhone operating system, we’ve found plenty of features outside of the headline ones Apple revealed.\r\nYes, the Lock … [+5661 chars]",
    },
    {
      source: {
        id: null,
        name: "iMore",
      },
      author: "heystephbarnes@gmail.com (Stephanie A Barnes)",
      title: "How to get the most out of your iPhone’s Back Tap feature",
      description:
        "The Back Tap feature was introduced in iOS 14 but didn't quite get the recognition it deserved. Here's how to make the most of it.",
      url: "https://www.imore.com/how-to-use-iphone-back-tap-feature",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/2Ec63XPRLTjX2ySGtZbWTd-1200-80.jpg",
      publishedAt: "2022-10-27T08:56:18Z",
      content:
        "When Apple releases iOS updates or new iPhones, the focus tends to be on the big changes and shiny new features. And sometimes, in that excitement, folks overlook smaller changes, like the iPhone’s B… [+3712 chars]",
    },
    {
      source: {
        id: null,
        name: "PetaPixel",
      },
      author: "Ted Kritsonis",
      title:
        "Leica’s Leitz Phone 1: Why Aren’t More Camera Companies Making Phones?",
      description:
        "Put a Type-1 image sensor in a phone and things are bound to get interesting, especially when Leica is involved. So, what’s next for the company’s presence in the mobile space?\n[Read More]",
      url: "https://petapixel.com/2022/10/27/leicas-leitz-phone-1-why-arent-more-camera-companies-making-phones/",
      urlToImage:
        "https://petapixel.com/assets/uploads/2022/10/Leitz-Phone-1-What-Happens-When-a-Camera-Company-Makes-a-Phone.jpg",
      publishedAt: "2022-10-27T14:32:12Z",
      content:
        "Put a Type-1 image sensor in a phone and things are bound to get interesting, especially when Leica is involved. So, whats next for the companys presence in the mobile space?\r\nLeica tried its hand at… [+8039 chars]",
    },
    {
      source: {
        id: null,
        name: "/FILM",
      },
      author: "Sandy Schaefer",
      title:
        "Why Ralph Macchio Missed Out On Playing Marty McFly In Back To The Future",
      description:
        'Eric Stoltz being cast as Marty McFly and spending several weeks filming the role before Michael J. Fox replaced him is easily one of the most widely-known pieces of "Back to the Future" trivia there is and for obvious reasons. But as fascinating as it is to …',
      url: "https://www.slashfilm.com/1072961/why-ralph-macchio-missed-out-on-playing-marty-mcfly-in-back-to-the-future/",
      urlToImage:
        "https://www.slashfilm.com/img/gallery/why-ralph-macchio-missed-out-on-playing-marty-mcfly-in-back-to-the-future/l-intro-1666819132.jpg",
      publishedAt: "2022-10-27T13:30:21Z",
      content:
        "However Macchio feels his conversation with Zemeckis and Spielberg went in hindsight, it didn't go so poorly as to take him out of the running to play Marty. While he was told the team behind \"Back t… [+1451 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Dan Avery （CNET News） 翻訳校正： 佐藤卓 長谷睦 （ガリレオ）",
      title: "16インチ「iPad」、2023年第4四半期に登場か",
      description:
        "アップルがこれまでで最も大型となる16インチの「iPad」を2023年後半にリリースする計画だと、The Informationが報じた。",
      url: "https://japan.cnet.com/article/35195217/",
      urlToImage:
        "https://japan.cnet.com/storage/2022/10/27/91de9c1496a3f7bdc0254d84fc50c13b/t/640/480/d/ipad-pro-12-9-2022_1280x960.jpg",
      publishedAt: "2022-10-27T02:34:00Z",
      content:
        "AppleiPad2023The Information102616iPad12.9iPad Pro\r\nApple16MacBook Pro2023416iPadiPadMacBookThe Information\r\nApple\r\nBloombergMark Gurman20216Power OnAppleiPad\r\nRed Ventures",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Joe Rossignol",
      title:
        "What to Expect From Apple's Earnings Results Today Following iPhone 14 Launch",
      description:
        "Apple is set to report its earnings results for the fourth quarter of its 2022 fiscal year today at 1:30 p.m. Pacific Time. Apple CEO Tim Cook and Apple CFO Luca Maestri will discuss the results on a conference call for investors at 2:00 p.m. Pacific Time.\n\n\n…",
      url: "https://www.macrumors.com/2022/10/27/what-to-expect-from-apple-4q22-earnings/",
      urlToImage:
        "https://images.macrumors.com/t/f3VEEbWYtJRKFzkdAIZytTWXIpg=/2676x/article-new/2022/01/Apple-Logo-Cash-Feature-Mint.jpg",
      publishedAt: "2022-10-27T14:59:28Z",
      content:
        "Apple is set to report its earnings results for the fourth quarter of its 2022 fiscal year today at 1:30 p.m. Pacific Time. Apple CEO Tim Cook and Apple CFO Luca Maestri will discuss the results on a… [+2128 chars]",
    },
    {
      source: {
        id: null,
        name: "Xatakamovil.com",
      },
      author: "Samuel Fernández",
      title:
        "Spotify avisa de una próxima subida de precios: sus planes de suscripción se ajustarán en algún momento de 2023",
      description:
        "Llevamos ya unos cuantos meses viendo cómo el mercado de las plataformas de streaming se va adaptando a los nuevos precios de la vida. Algunos con más anticipación, otros con menos, pero lo cierto es que todas las plataformas están subiendo progresivamente lo…",
      url: "https://www.xatakamovil.com/streaming/spotify-avisa-proxima-subida-precios-sus-planes-suscripcion-se-ajustaran-algun-momento-2023",
      urlToImage: "https://i.blogs.es/a6bb55/portada/840_560.jpg",
      publishedAt: "2022-10-27T09:01:56Z",
      content:
        "Llevamos ya unos cuantos meses viendo cómo el mercado de las plataformas de streaming se va adaptando a los nuevos precios de la vida. Algunos con más anticipación, otros con menos, pero lo cierto es… [+2248 chars]",
    },
    {
      source: {
        id: null,
        name: "The Points Guy",
      },
      author: "Zachary Laks",
      title:
        "Cruise ship room service: A line-by-line guide to in-cabin dining",
      description:
        "There’s no better place in the world to be when the pang of hunger strikes than on a cruise ship. Whether the buffet is packed with people or packed away, 24/7 room service is always available to fill your belly. It’s one of the greatest amenities of cruising…",
      url: "https://thepointsguy.com/guide/cruise-ship-room-service/",
      urlToImage:
        "https://thepointsguy.global.ssl.fastly.net/us/originals/2022/10/Cruise-Ship-Breakfast_Maridav.jpg",
      publishedAt: "2022-10-27T14:00:33Z",
      content:
        "Theres no better place in the world to be when the pang of hunger strikes than on a cruise ship. Whether the buffet is packed with people or packed away, 24/7 room service is always available to fill… [+20507 chars]",
    },
    {
      source: {
        id: null,
        name: "Playpcesor.com",
      },
      author: "Esor Huang",
      title: "Gmail 內建電子報版面與郵件合併功能，發送客製化通知信教學",
      description:
        "這幾個月 Gmail 又陸續增加了幾個實用的功能，包含內建了可以直接套用的各種電子報、通知信模板，方便發送大量公告郵件的傳送功能，以及最近推出的「郵件合併列印」功能 ，讓 Gmail 終於可以直接用內建的功能，就能寄出大量的客製化郵件。",
      url: "https://www.playpcesor.com/2022/10/gmail.html",
      urlToImage:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtd073ye0w8Lvi1X9pEP9lO8gGa_IybAGfQPnrmXDDOf7uHnrfdIu_keAYsb0iFpYvkkNChG2NyGjgq17ftUxB3lk_MnBv0axoHYDkZcWNdvZIFn46RQV06gE4cVFrKtpTLgU0o1oUQ7lclRAXpxRTNI2I2EewnJe5caRVhk7RPoJSB7SyBK0/w1200-h630-p-k-no-nu/image-01.png",
      publishedAt: "2022-10-27T09:50:00Z",
      content:
        "這幾個月 Gmail 又陸續增加了幾個實用的功能，包含內建了可以直接套用的各種電子報、通知信模板，方便發送大量公告郵件的傳送功能，以及最近推出的「郵件合併列印」功能，讓 Gmail 終於可以直接用內建的功能，就能寄出大量的客製化郵件。\r\n所謂客製化郵件，例如我有一堂最新的線上課程，也有一份之前其他課程與活動累積的學員名單，我想寄送最新線上課程的通知信給這些朋友，除了要有好看的版面外，也希望郵件當… [+2158 chars]",
    },
    {
      source: {
        id: null,
        name: "tagesschau.de",
      },
      author: "tagesschau",
      title: "Hat sich Mark Zuckerberg mit dem Metaversum verzockt?",
      description:
        "Mit dem Metaversum wollte Mark Zuckerberg seinen Konzern in die digitale Zukunft führen - bisher geschieht das nur mit Verlusten. Der Umsatz von Meta sinkt zum zweiten Mal hintereinander, erste Investoren werden nervös. <em>V</em><em>on Nils Dampz.</em>",
      url: "https://www.tagesschau.de/ausland/amerika/zuckerberg-meta-korri-101.html",
      urlToImage:
        "https://www.tagesschau.de/multimedia/bilder/meta-135~_v-original.jpg",
      publishedAt: "2022-10-27T07:17:15Z",
      content:
        "Mit dem Metaversum wollte Mark Zuckerberg seinen Konzern in die digitale Zukunft führen - bisher geschieht das nur mit Verlusten. Der Umsatz von Meta sinkt zum zweiten Mal hintereinander, erste Inves… [+2861 chars]",
    },
    {
      source: {
        id: null,
        name: "tagesschau.de",
      },
      author: "tagesschau",
      title: "Hat sich Mark Zuckerberg mit dem Metaversum verzockt?",
      description:
        "Mit dem Metaversum wollte Mark Zuckerberg seinen Konzern in die digitale Zukunft führen - bisher geschieht das nur mit Verlusten. Der Umsatz von Meta sinkt zum zweiten Mal hintereinander, erste Investoren werden nervös. <em>V</em><em>on Nils Dampz.</em>",
      url: "https://www.tagesschau.de/wirtschaft/unternehmen/zuckerberg-meta-korri-101.html",
      urlToImage:
        "https://www.tagesschau.de/multimedia/bilder/meta-135~_v-original.jpg",
      publishedAt: "2022-10-27T07:17:15Z",
      content:
        "Mit dem Metaversum wollte Mark Zuckerberg seinen Konzern in die digitale Zukunft führen - bisher geschieht das nur mit Verlusten. Der Umsatz von Meta sinkt zum zweiten Mal hintereinander, erste Inves… [+2861 chars]",
    },
    {
      source: {
        id: null,
        name: "tagesschau.de",
      },
      author: "tagesschau",
      title: "Marktbericht: Zurückhaltung im DAX vor EZB-Zinsentscheid",
      description:
        "Die Anleger halten sich vor dem heute am Nachmittag anstehenden EZB-Zinsentscheid mit Engagements zunächst zurück. Der DAX dürfte es schwer haben, auf seine gestrigen Gewinne noch etwas draufzusetzen.",
      url: "https://www.tagesschau.de/wirtschaft/finanzen/marktberichte/dax-ezb-zinsen-inflation-dow-nasdaq-101.html",
      urlToImage:
        "https://www.tagesschau.de/multimedia/bilder/ezb-tower-103~_v-original.jpg",
      publishedAt: "2022-10-27T05:37:21Z",
      content:
        "Die Anleger halten sich vor dem heute am Nachmittag anstehenden EZB-Zinsentscheid mit Engagements zunächst zurück. Der DAX dürfte es schwer haben, auf seine gestrigen Gewinne noch etwas draufzusetzen… [+5645 chars]",
    },
    {
      source: {
        id: null,
        name: "Caschys Blog",
      },
      author: "caschy",
      title: "Updates für Pages, Numbers, Keynote und Swift Playgrounds",
      description:
        "Pages, Numbers und Keynote, beliebte Apps von Apple, wurden aktualisiert, um Nutzern die Möglichkeit zu geben, die jüngsten Aktivitäten in gemeinsamen Dateien anzuzeigen und Benachrichtigungen zu erhalten, wenn andere Personen beitreten, kommentieren und Ände…",
      url: "https://stadt-bremerhaven.de/updates-fuer-pages-numbers-keynote-und-swift-playgrounds/",
      urlToImage:
        "https://stadt-bremerhaven.de/wp-content/uploads/2022/10/swift_.jpg",
      publishedAt: "2022-10-27T12:00:12Z",
      content:
        "Pages, Numbers und Keynote, beliebte Apps von Apple, wurden aktualisiert, um Nutzern die Möglichkeit zu geben, die jüngsten Aktivitäten in gemeinsamen Dateien anzuzeigen und Benachrichtigungen zu erh… [+1472 chars]",
    },
    {
      source: {
        id: null,
        name: "Caschys Blog",
      },
      author: "caschy",
      title:
        "Facebook-Konzern Meta: Mehr aktive Nutzer, weniger Umsatz und Gewinn",
      description:
        "Unter dem Konzernnamen Meta bündelt das früher nur als Facebook bekannte Unternehmen all seine Aktivitäten. Da hat man nun Quartalszahlen bekannt gegeben. Der Umsatz von Meta fiel im Jahresvergleich um vier Prozent auf rund 27,71 Milliarden US-Dollar. Der Net…",
      url: "https://stadt-bremerhaven.de/facebook-konzern-meta-mehr-aktive-nutzer-weniger-umsatz-und-gewinn/",
      urlToImage:
        "https://stadt-bremerhaven.de/wp-content/uploads/2022/03/Meta-Facebook.jpg",
      publishedAt: "2022-10-27T05:32:55Z",
      content:
        "Unter dem Konzernnamen Meta bündelt das früher nur als Facebook bekannte Unternehmen all seine Aktivitäten. Da hat man nun Quartalszahlen bekannt gegeben. Der Umsatz von Meta fiel im Jahresvergleich … [+2722 chars]",
    },
    {
      source: {
        id: null,
        name: "MSPoweruser",
      },
      author: "Sharron Bennet",
      title:
        "Tech leaders criticize metaverse; Xbox head calls it a “poorly built video game”",
      description:
        "Meta is investing a lot in the metaverse, but a lot of individuals in the industry are still skeptical about it and its current state. At the WSJ Tech Live conference, the technology received a special highlight when various leaders were asked to define it. O…",
      url: "https://mspoweruser.com/tech-leaders-criticize-metaverse-xbox-head-calls-it-a-poorly-built-video-game/",
      urlToImage:
        "https://mspoweruser.com/wp-content/uploads/2022/10/metaverso-news.jpg",
      publishedAt: "2022-10-27T07:56:28Z",
      content:
        "Tech Leaders Discuss the Metaverses Future | WSJ Tech Live 2022\r\nMeta is investing a lot in the metaverse, but a lot of individuals in the industry are still skeptical about it and its current state.… [+3801 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Ulrich Rozier",
      title: "Voici la nouvelle interface web d’iCloud, Apple nous surprend",
      description:
        "Apple n'est pas réputé pour la qualité de ses applications web, ni son expertise en la matière. Pourtant, iCloud va subir une refonte globale sur le web. La dernière version d’iCloud, actuellement en version bêta, dispose d’une toute nouvelle interface avec d…",
      url: "https://www.frandroid.com/marques/apple/1522066_voici-la-nouvelle-interface-web-dicloud-apple-nous-surprend",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2022/10/capture-decran-2022-10-27-a-154740.jpg",
      publishedAt: "2022-10-27T13:59:13Z",
      content:
        "Apple n'est pas réputé pour la qualité de ses applications web, ni son expertise en la matière. Pourtant, iCloud va subir une refonte globale sur le web. \r\nVoici la nouvelle page daccueil diCloud\r\nLa… [+1947 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Omar Belkaab",
      title:
        "Mauvaises pubs dans l’App Store, mauvaise pub pour Apple : histoire d’un petit couac",
      description:
        "Apple a dû faire machine arrière après que plusieurs développeurs se sont plaints de voir apparaître des publicités indésirables sur l'App Store faisant la promotion de jeux d'argent.Apple aime entretenir l’image d’une entreprise qui a le souci du détail. Cha…",
      url: "https://www.frandroid.com/marques/apple/1521480_mauvaises-pubs-dans-lapp-store-mauvaise-pub-pour-apple-histoire-dun-petit-couac",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2022/05/app-store-apple-scaled.jpg",
      publishedAt: "2022-10-27T09:31:33Z",
      content:
        "Apple a dû faire machine arrière après que plusieurs développeurs se sont plaints de voir apparaître des publicités indésirables sur l'App Store faisant la promotion de jeux d'argent.\r\nApp Store // S… [+3128 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Ulrich Rozier",
      title: "C’est confirmé, la 5G est beaucoup plus rapide sur les iPhone 14",
      description:
        "Si vous avez l'impression que la 5G est plus rapide avec votre nouvel iPhone 14 Pro. Ce n'est pas qu'une impression, elle est beaucoup plus rapide que sur les anciens iPhone 13.Lors de notre test des iPhone 14, dont l‘iPhone 14 Pro, j’avais été surpris de mes…",
      url: "https://www.frandroid.com/marques/apple/1521226_cest-confirme-la-5g-est-beaucoup-plus-rapide-sur-les-iphone-14",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2022/09/iphone-14-pro-dsc08987.jpg",
      publishedAt: "2022-10-27T05:10:22Z",
      content:
        "Si vous avez l'impression que la 5G est plus rapide avec votre nouvel iPhone 14 Pro. Ce n'est pas qu'une impression, elle est beaucoup plus rapide que sur les anciens iPhone 13.\r\nApple iPhone 14 Pro … [+2251 chars]",
    },
    {
      source: {
        id: null,
        name: "Wwwhatsnew.com",
      },
      author: "Fco. José Hidalgo",
      title:
        "Duolingo lanza oficialmente su nueva plataforma de aprendizaje de matemáticas",
      description:
        "Duolingo Math es la aspiración de Duolingo de ir más allá del aprendizaje de idiomas y la alfabetización, tratando de ofrecer un método de aprendizaje ameno y divertido similar al aprendizaje de idiomas pero enfocado a las matemáticas, Ahora, tras la llegada …",
      url: "https://wwwhatsnew.com/2022/10/27/duolingo-lanza-oficialmente-su-nueva-plataforma-de-aprendizaje-de-matematicas/",
      urlToImage:
        "https://wwwhatsnew.com/wp-content/uploads/2022/10/DuolingoMath.jpg",
      publishedAt: "2022-10-27T00:00:45Z",
      content:
        "Duolingo Math es la aspiración de Duolingo de ir más allá del aprendizaje de idiomas y la alfabetización, tratando de ofrecer un método de aprendizaje ameno y divertido similar al aprendizaje de idio… [+2049 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=1f5c7b38f34447f4a11b972787f93af8";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles : parsedData.articles});
  }

  render() {
    return (
      <div className="container my-3">
        <h2>News Component</h2>
        <div className="row content-evenly">
          {this.state.articles.map((element) => {
            return <div className="col-md-4 my-5" key={element.url}>
              <NewsItem
                title={element.title}
                description={element.description}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>;
          })}
        </div>
      </div>
    );
  }
}
