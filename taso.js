
const TASO = {
    "tekijät": ["Kalle I. Köhi", "Ella Hikkiö"],
    "pelaajanAlkuHP": 30,
    "pelaajanMaksimiHP": 100,
    "pisterajaYhdelleHplle": 100,
    "pelinAloitushuoneenNro": 10,
    "pelinLoppuhuoneenNro": 8,
    "tekstit": {
        "pohjoinen":"Pohjoinen",
        "ita":"Itä",
        "etela":"Etelä",
        "lansi":"Länsi",
        "voitto": "Onnea olet läpäissyt pelin.",
        "tappio": "You Died.",
        "avainSelitys": "Sinulla on ",
        "kohtaaVastustaja": "Kohtaa",
        "otaResurssi": "Ota",
        "kohtalokasVirhe": "Ohjelmassa tapahtui kohtalokas virhe. Peli loppui."
    },

    "huoneet": [
      {
      "huoneNro": 1,
      "huoneteksti": "Olet ison vanhan näköisen linnan edessä. Ainoa kohta, josta pääsee sisään näyttää olevan pää portti",
      "huonehp": {
          "hp": 0,
          "tekstit": {
              "vaikutus": "Löysit sisälle linnaan.",
              "loppu": "kaikki voimat käytetty"
          },
          "toistoLkm": 2
      },
      "pohjoinen": {"huoneeseen": 2, "avain": null},
      "ita": null,
      "etela": null,
      "lansi": null,
      "vastustaja": null,
      "avain": null,
      "esine": null
  },
  {
       "huoneNro": 1,
       "huoneteksti": "Olet Korkeassa tornissa ja huomaat kuinka hieno näkymä on.",
       "huonehp": {
           "hp": 0,
           "tekstit": {
               "vaikutus": "Löysit torniin.",
               "loppu": "kaikki voimat käytetty"
           },
           "toistoLkm": 2
       },
       "pohjoinen": {"huoneeseen": 6, "avain": null},
       "ita": {"huoneeseen": 2, "avain": null},
       "etela": null,
       "lansi": null,
       "vastustaja": null,
       "avain": null,
       "esine": null
   },
   {
    "huoneNro": 2,
    "huoneteksti": "Olet linnan sisäänkäynnillä. Pohjoisessa näet rappuset. Lännessä näet ensimmäisen tornin ja idässä näet toisen tornin.",
    "huonehp": null,
    "pohjoinen": {"huoneeseen": 5, "avain": null},
    "ita": {"huoneeseen": 3, "avain": null},
    "etela": {"huoneeseen": null, "avain": null},
    "lansi": {"huoneeseen": 1, "avain": null},

    "avain": {
        "nimi": "avain",
        "numero": 1,
        "teksti": "Avain kimmeltää kultaisena.",
        "vaikutus": "Avain näyttäisi sopivan vanhaan riippulukkoon!",
        "pisteet": 150,
        "hp": 0
    },
    "esine": null
},
{
    "huoneNro": 3,
    "huoneteksti": "Olet saapunut oikealla olevaan torniin. Tornissa ei näytä olevan paljon tavaraa",
    "huonehp": null{
        "hp": 0,
        "tekstit": {
            "vaikutus": "Löysit pihalle. Saat lisää voimaa!",
            "loppu": "kaikki voimat käytetty"
        },
        "toistoLkm": 0
    },
    "pohjoinen": null,
    "ita": null,
    "etela": null,
    "lansi": {"huoneeseen": 2, "avain": null},
    "vastustaja":{
        "nimi": "Snake",
        "teksti": "Jokin käärme näyttää löytäneensä tien huoneeseen.",
        "voittoviesti": "Murhasit viattoman käärme eläimen. Saat lisää kokemuspisteitä.",
        "tappioviesti": "Hävisit ottelun. Käärme puraisi sinua.",
        "pisteet": 100,
        "hp": 10,
        "voittoraja": 10
    },
    "avain": null,
    "esine": null
},
{
    "huoneNro": 4,
    "huoneteksti": "Saavut salaiseen huoneeseen, tässä huoneessa ei näytä olevan mitään muuta kuin arkku",
    "huonehp": null{
        "hp": -5,
        "tekstit": {
            "vaikutus": "Yrittäessäsi avata arkkua se puraisee sinua.",
            "loppu": "kaikki voimat käytetty"
        },
        "toistoLkm": 1
    },
    "pohjoinen": null,
    "ita": null,
    "etela": {"huoneeseen": 3, "avain": null},
    "lansi": null,
    "vastustaja":{
        "nimi": "Mimic",
        "teksti": "Ehkä sen sisällä on jotain?",
        "voittoviesti": "Tappaessasi tämän hirvien löydät sen sisuksista avaimen. Hyi.",
        "tappioviesti": "Sinusta tuli mimicin ruokaa (jos ei ollut selvä: kuolit)",
        "pisteet": 150,
        "hp": 20,
        "voittoraja": 20
    },
    "avain": {
"nimi":"avain",
"numero": 2,
"teksti": "Hopean värinen, vai onko se luusta tehty?",
"vaikutus": "Avain näyttäsi ehkä käyvän rappusten päässä olevaan käytävään",
"pisteet": 100,
"hp": 0
  },
    "esine": null
},
{
       "huoneNro": 5,
       "huoneteksti": "Olet Rappusissa. Eteläseinässä on kultaisena kiiltävä raskas teräs ovi. Idässä oleva ovi on hento ja heiveröinen ovi.",
       "huonehp": {
           "hp": 10,
           "tekstit": {
               "vaikutus":"Huone on täynnä pölyä. Pölyn näkeminen piristää kummasti.",
               "loppu": "Pöly loppuu aikanaan"
           },
           "toistoLkm": 1
       },
       "pohjoinen": null,
       "ita": {"huoneeseen": 4, "avain": 1},
       "etela": {"huoneeseen": 2, "avain": null},
       "lansi": {"huoneeseen": 7, "avain": 2},
       "vastustaja": null,
       "avain": null,
       "esine": null
   },
   {
    "huoneNro": 6,
    "huoneteksti": "Olet puutarhassa. Voit ainoastaan palata takaisin päin.",
    "huonehp": {
        "hp": 5,
        "tekstit": {
            "vaikutus":null,
            "loppu":null
        },
        "toistoLkm": 10
    },
    "pohjoinen":null,
    "ita": null,
    "etela": {"huoneeseen": 1, "avain": null},
    "lansi":null,
    "vastustaja": {
        "nimi": "Lepakko",
        "teksti": "Lepakko roikkuu katosta katsellen sinua.",
        "voittoviesti": "Litistit lepakon.",
        "tappioviesti": "Hävisit lepakolle, elämäsi laski hieman.",
        "pisteet": 0,
        "hp": 30,
        "voittoraja": 10
    },
    "avain": {
        "nimi":"Salahuoneen avain",
        "numero":1,
        "teksti":"Avaimessa roikkuu avaimenperä, joka kertoo että se on salahuonetta varten",
        "vaikutus":null,
        "pisteet":150,
        "hp":null
    }
},
{
        "huoneNro": 7,
        "huoneteksti": "Olet Viimeisessä huoneessa. Et pääse takaisin. Vastassasi on heikko käärme.",
        "huonehp": null,
        "pohjoinen": null,
        "ita": {"huoneeseen": 8, "avain": null},
        "etela": null,
        "lansi": {"huoneeseen": 9, "avain": null},
        "vastustaja": {
            "nimi": "Helppo käärme",
            "teksti": "Käärme on kuoleman partaalla.",
            "tappoviesti": "Omg Helpoin vastustaja ja hävisit!",
            "voittoviesti": "Hyvä voitit helpoimman vastuksen. Vasemmalla on pimeä, mutta kiinnostava huone. Oikealla on valoisa ja vapaan oloinen huone. Kumman valitset?",
            "pisteet": 0,
            "hp": 4,
            "voittoraja": 99
        },
        "avain": null,
        "esine": null
    },
    {
    "huoneNro": 8,
    "huoneteksti": "Pääsit vihdoin pihalle linnasta ja aurinko paistaa kivasta. Hetki sen jälkeen alkaa satamaan ja lähdet kävelemään kauaspois linnasta. Kävellessäsi pitkin ruohikkoa muistelet kuinka karmivaa linnassa oli mutta sitten tajuat, että et ainakaan kuollut.",
    "huonehp": null,
    "pohjoinen": null,
    "ita": null,
    "etela": null,
    "lansi": null,
    "vastustaja": null,
    "avain": null,
    "esine": null
},
{
    "huoneNro": 9,
    "huoneteksti": "Saavut synkkään huoneeseen, tullessasi sisään ovi paiskautuu kiinni ja olet nyt jumissa.",
    "huonehp": null{
        "hp": 0,
        "tekstit": {
            "loppu": "kaikki voimat käytetty"
        },
        "toistoLkm": 0
    },
    "pohjoinen": null,
    "ita": null,
    "etela": null,
    "lansi": null,
    "vastustaja":null,
    },
    "avain": null,
    "esine": {
"nimi": "Juoma",
"teksti": "Huomaat pöydällä olevan juomapullon.",
"vaikutus": "Otat hörpyn juomaa ja huomaat jonkin olevan pielessä heti heität pullon maahan ja huomaat suussasi olevan metallisen maun. alat panikoida kunnes oksennat ja vatsaasi alkaa kirvellä voimakkaasti joka aiheuttaa uuden oksennuksen jossa nyt makaat, oksentelu jatkuu kunnes huomaat että näkösi on jo myös kadonnut, alat huutaa paniikissa mutta et eneen kuule edes omaa huutoasi, yrität sitten nousta ylös mutta huomaat jalkojesi toiminnan loppuneen ja kätesi vapisevat kuin et olisi juonut kahvia viikoon, oksentelusi jatkuu samalla kun aivosolusi kuolevat elohopeamyrkytyksestä samalla kuin huutosi muuttuvat kauheammiksi ja kauhemmiksi kunnes ne vain loppuvat...",
"pisteet": 0,
"hp": -999
}
}

    ]
};
