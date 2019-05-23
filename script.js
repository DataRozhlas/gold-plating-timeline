var curPoint = Date.parse("2012-10-17");
var points = [Date.parse("2012-10-17"), Date.parse("2012-12-20"), Date.parse("2013-02-22"), Date.parse("2013-07-29"), Date.parse("2013-09-11"), Date.parse("2013-12-12"), Date.parse("2014-12-16"), Date.parse("2015-02-24"), Date.parse("2015-04-28"), Date.parse("2015-06-17"), Date.parse("2015-07-13"), Date.parse("2015-09-09"), Date.parse("2018-08-16")];

function showDetails(point) {
  var date;
  var header;
  var text;
  Highcharts.charts[0].get("p" + curPoint).setState();
  curPoint = point;
  Highcharts.charts[0].get("p" + curPoint).setState("hover");

  switch (point) {
    case Date.parse("2012-10-17"):
      date = "17. října 2010";
      header = "Návrh směrnice";
      text = "<p><p>Evropská komise navrhuje směrnici s cílem omezit podíl biopaliv první generace – například řepky – v pohonných hmotách.</p><p>Návrh každé směrnice předkládá komise, Evropský parlament ji ovšem k předložení zákona na určité téma může vyzvat. Ještě před „vykopnutím“ komise legislativní návrh veřejně konzultuje na webu, kde se může kdokoliv zapojit.</p><p>Většinu důležitých návrhů předchází studie zhodnocující dopady, včetně statistik a srování mezi členskými zeměmi. Vychází společně s návrhem a je veřejná.</p><p>Když je návrh Evropské komise na světě, obvykle prochází řádným legislativním postupem, při kterém Evropský parlament a Rada EU návrh komise pozměňují a na konci se shodnou na kompromisním textu a schválí ho. Ve výjimečných případech rozhoduje rada nebo komise samostatně.</p></p><p><i><a href='https://eur-lex.europa.eu/legal-content/CS/TXT/?uri=celex:52012PC0595'>Více na webu Evropské unie...</a></i></p>";
      break;

    case Date.parse("2012-12-20"):
      date = "20. prosince 2012–8. dubna 2013";
      header = "Reakce členských zemí";
      text = "<p><p>Národní parlamenty mají dva měsíce, aby se k návrhu komise vyjádřily. Pokud se jim zdá, že návrh porušuje princip subsidiarity – o věci by se mělo rozhodovat na lokální úrovni – mohou podat námitku. V případě, že si stěžuje třetina parlamentů, je zahájen mechanismus takzvané žluté karty a komise musí návrh přehodnotit.</p><p>U této směrnice reaguje také český senát: připomíná například zhoubný vliv biopaliv první generace na půdu.</p><p>Národní parlamenty včetně českého také mají svého zmocněnce, úředníka s kanceláří v Evropském parlamentu. Tito zástupci z jednotlivých zemí se pravidelně scházejí a informují národní parlamenty.</p></p><p><i><a href='http://www.connefof.europarl.europa.eu/connefof/app/exp/COM(2012)0595#'>Více na webu Evropské unie...</a></i></p>";
      break;

    case Date.parse("2013-02-22"):
    case Date.parse("2013-03-21"):
    case Date.parse("2013-06-06"):
    case Date.parse("2013-06-18"):
      date = "2. února–18. června 2013";
      header = "Jednání rady";
      text = "<p><p>Návrh směrnice projednávají národní ministři z tematicky blízkých rezortů. Jednání o biopalivech se za Česko účastní ministr životního prostředí Tomáš Chalupa a náměstek ministra průmyslu pro energetiku Pavel Šolc.</p></p><p><i><a href='https://oeil.secure.europarl.europa.eu/oeil/popups/summary.do?id=1277801&t=e&l=en'>Více na webu Evropské unie...</a></i></p>";
      break;

    case Date.parse("2013-07-29"):
      date = "29. července 2013";
      header = "Zpráva parlamentního výboru";
      text = "<p><p>Podobně jako v národních parlamentech, i zde je klíčový názor výboru nebo výborů, které se návrhem zabývají. Ve výboru je vybrán zpravodaj návrhu, který dostane danou legislativu na starost. Doplní ho jeden nebo více stínových zpravodajů z dalších parlamentních frakcí.</p><p>V tomto případě je to Výbor pro životní prostředí, zdraví a potraviny. Upozorňuje například, že biopaliva první generace nejsou ohledně snižování emisí a vztahu k půdě příliš příznivá.</p></p><p><i><a href='https://www.europarl.europa.eu/sides/getDoc.do?pubRef=-//EP//TEXT+REPORT+A7-2013-0279+0+DOC+XML+V0//CS'>Více na webu Evropské unie...</a></i></p>";
      break;

    case Date.parse("2013-09-11"):
      date = "11. září 2013";
      header = "První čtení";
      text = "<p><p>Parlament může návrh komise přijmout nebo ho pozměnit; v praxi ho vždy pozmění. Zpravodaj výboru nejprve připraví návrh upraveného textu, o něm diskutují parlamentní frakce, následně o něm hlasuje výbor nebo výbory.</p><p>Pokud dostane návrh většinu hlasů ve výboru, dá se čekat, že bude mít obdobnou podporu na plénu. Při plenárním hlasování se v prvním čtení rozhoduje prostou většinou všech hlasujících.</p><p>V tomto případě parlament na doporučení výboru poměrem 552:126 poslanců směrnici schvaluje. Přidává k ní řadu zpřesnění a zpřísnění, například požaduje přidat do pohonných hmot 2,5 % biopaliv z odpadů.</p><p><i><a href='https://eur-lex.europa.eu/legal-content/CS/TXT/?uri=celex:52013AP0357'>Více na webu Evropské unie...</a></i></p>";
      break;

    case Date.parse("2013-12-12"):
    case Date.parse("2014-06-13"):
    case Date.parse("2014-12-09"):
      date = "12. prosince 2013–9. prosince 2014";
      header = "Jednání rady po 1. čtení";
      text = "<p><p>Formálně by nyní návrh s podporou parlamentu měla převzít rada. V praxi si instituce návrhy neposílají – místo toho o nich v rámci takzvaného trialogu průběžně jednají desítky lidí ze všech tří institucí za zavřenými dveřmi. Společně procházejí návrh rady i parlamentu a hledají kompromis. Svou roli na vyjednávání v trialogu hraje půlroční změna předsednické země.</p><p>Díky trialogu byla v letech 2009 až 2014 většina – 85 procent – legislativních návrhů v rámci řádného legislativního postupu přijata v prvním parlamentním čtení.</p><p>V tomto případě jsou ovšem jednání neúspěšná. Rada, tedy ministři členských zemí, většinu pozměňovacích návrhů parlamentu odmítá, snižuje například podíl obnovitelných paliv druhé generace na 0,5 %.</p></p><p><i><a href='https://eur-lex.europa.eu/legal-content/CS/TXT/?uri=celex:52015AG0002'>Více na webu Evropské unie...</a></i></p>";
      break;

    case Date.parse("2014-12-16"):
      date = "16. prosince 2014";
      header = "Reakce komise po 1. čtení";
      text = "<p><p>Druhé čtení začíná ve chvíli, kdy parlament a rada nenajdou shodu.</p><p>Do vyjednávání vstupuje také Evropská komise. V tomto případě je na straně parlamentu: „Komise s politováním konstatuje, že rada výrazně snížila úroveň ambicí v oblasti ochrany životního prostředí,“ upozorňuje.</p></p><p><i><a href='https://eur-lex.europa.eu/legal-content/CS/TXT/?uri=celex:52014PC0748'>Více na webu Evropské unie...</a></i></p>";
      break;

    case Date.parse("2015-02-24"):
    case Date.parse("2015-02-26"):
    case Date.parse("2015-04-14"):
      date = "24. února–4. dubna 2015";
      header = "Zpráva parlamentního výboru";
      text = "<p><p>Rada navrhne vlastní pozměňovací návrhy a text pošle zpátky do parlamentu. Nejprve se k jejím návrhům opět vyjádří parlamentní výbor.<p></p>V případě dané směrnice doporučuje i on opatření opět zpřísnit, například u odpadových biopaliv chce podíl v pohonných hmotách aspoň 1,25 %.</p></p><p><i><a href='https://oeil.secure.europarl.europa.eu/oeil/popups/summary.do?id=1379318&t=e&l=en'>Více na webu Evropské unie...</a></i></p>";
      break;

    case Date.parse("2015-04-28"):
      date = "28. dubna 2015";
      header = "Druhé čtení";
      text = "<p><p>Parlament může návrh rady odmítnout, hlasuje tentokrát absolutní většinou, k přijetí nebo odmítnutí návrhu je tedy potřeba většina ze všech 751 poslanců.</p><p>Záleží opět hlavně na zprávě hlavního výboru, který má věc na starost – tentokrát už ne výborů, které mají poradní úlohu. Jsou také omezeny změny, které může navrhovat, nesmí přijít s novými: může se vrátit ke svým pozicím z prvního čtení nebo upravit změny, které navrhla rada po prvním čtení. Nejčastěji přijde s kompromisem.</p><p>Zatímco v prvním čtení bývá k vidění široká škála navrhovaných změn, ve druhém se řeší jen klíčové body a projdou jen změny, které mají širokou podporu frakcí.</p><p>I v tomto případě evropští poslanci ustupují, u zmiňovaného podílu biopaliv druhé generace vítězí návrh rady na 0,5 %.</p></p><p><i><a href='https://eur-lex.europa.eu/legal-content/CS/TXT/?uri=celex:52015AP0100'>Více na webu Evropské unie...</a></i></p>";
      break;

    case Date.parse("2015-06-17"):
      date = "17. června 2015";
      header = "Reakce komise po 2. čtení";
      text = "<p><p>Komise všechny návrhy parlamentu přijímá.</p></p><p><i><a href='https://eur-lex.europa.eu/legal-content/CS/TXT/?uri=celex:52015PC0310'>Více na webu Evropské unie...</a></i></p>";
      break;

    case Date.parse("2015-07-13"):
      date = "13. července 2015";
      header = "Reakce rady po 2. čtení";
      text = "<p><p>Parlamentní návrh z druhého čtení opět posuzuje rada, má na to tentokrát tři, výjimečně čtyři měsíce. Jednání rady opět předchází trialog.</p><p>Pokud ani ve druhém čtení parlament a rada nenajdou shodu, následuje takzvaný dohodovací postup – do šesti týdnů se sejde dohodovací výbor, složený ze stejného počtu členů parlamentu a rady. Do dalších šesti týdnů buď přijdou s kompromisem, nebo je směrnice zamítnuta.</p><p>Dohodovací postup je ale výjimečný: z 488 legislativních opatření, které parlament přijal v období 2009 až 2014, bylo 85 procent přijato v prvním čtení, osm procent v druhém čtení parlamentu, pět procent v druhém čtení rady a dvě procenta v dohodovacím výboru.</p></p><p>&nbsp;</p>";
      break;

    case Date.parse("2015-09-09"):
      date = "9. září 2015";
      header = "Podpis";
      text = "<p><p>Předseda Evropského parlamentu i Rady EU směrnici podepisují.</p></p><p>&nbsp;</p>";
      break;

    case Date.parse("2018-08-16"):
      date = "16. srpna 2018";
      header = "Přijetí implementačního zákona";
      text = "<p><p>Směrnici musí ještě do své legislativy transponovat členské země: obvykle na to mají dva roky.</p><p>Český parlament termín pro přijetí zákona – 10. září 2017 – nestihl. Implementační zákon přijal až téměř o rok později, 16. srpna 2018. Zákon má navíc nedostatky, jak v lednu 2019 upozornila Evropská komise.</p><p>Spor mezi Evropskou komisí a členskou zemí o výklad směrnice, stejně jako pozdní implementaci, řeší Soudní dvůr EU. Ten odpovídá za jednotnost výkladu unijního práva a kontroluje rozhodování Rady EU a Evropské komise.</p></p><p><i><a href='https://www.zakonyprolidi.cz/cs/2018-172'>Více na webu Zákony pro lidi...</a></i></p>";
      break;

    default:
      date = "";
      header = "";
      text = "";
  }

  document.getElementById("chart-desc-date").innerHTML = date;
  document.getElementById("chart-desc-header").innerHTML = header;
  document.getElementById("chart-desc-text").innerHTML = text;
}

Highcharts.setOptions({
  lang: {
    shortMonths: ["Led", "Úno", "Bře", "Dub", "Kvě", "Čvn", "Čvc", "Srp", "Zář", "Říj", "Lis", "Pro"]
  }
});
Highcharts.chart("chart", {
  chart: {
    type: "scatter"
  },
  title: {
    text: "Legislativní proces EU"
  },
  credits: {
    enabled: false
  },
  colors: ["#EA614A", "#ECA038", "#A38456", "#008836", "#20649B", "#6B96CA", "#A87A93", "#D19C95"],
  xAxis: {
    type: "datetime",
    startOnTick: true,
    endOnTick: true,
    showLastLabel: true
  },
  yAxis: {
    title: {
      enabled: false
    },
    tickInterval: 1,
    min: 0,
    max: 4,
    labels: {
      formatter: function formatter() {
        switch (this.value) {
          case 4:
            return "Evropská komise";

          case 3:
            return "Národní parlamenty";

          case 2:
            return "Rada EU";

          case 1:
            return "Evropský parlament";

          case 0:
            return "";

          default:
            return this.value;
        }
      }
    }
  },
  legend: {
    enabled: false
  },
  tooltip: {
    formatter: function formatter() {
      switch (this.x) {
        case Date.parse("2012-10-17"):
          return "17. října 2010<br><b>Evropská komise</b><br>Návrh směrnice";

        case Date.parse("2012-12-20"):
        case Date.parse("2012-12-21"):
        case Date.parse("2013-04-08"):
          return "12. prosince 2012 - 8. dubna 2014<br><b>Národní parlamenty</b><br>Reakce členských zemí";

        case Date.parse("2013-02-22"):
        case Date.parse("2013-03-21"):
        case Date.parse("2013-06-06"):
        case Date.parse("2013-06-18"):
          return "2. února - 18. června 2013<br><b>Rada EU</b><br>Jednání rady";

        case Date.parse("2013-07-29"):
          return "29. července 2013<br><b>Evropský parlament</b><br>Zpráva parlamentního výboru";

        case Date.parse("2013-09-11"):
          return "11. září 2013<br><b>Evropský parlament</b><br>První čtení";

        case Date.parse("2013-12-12"):
        case Date.parse("2014-06-13"):
        case Date.parse("2014-12-09"):
          return "12. prosince 2013 - 9. prosince 2014<br><b>Evropská rada</b><br>Jednání po 1. čtení";

        case Date.parse("2014-12-16"):
          return "16. prosince 2014<br><b>Evropská komise</b><br>Reakce po 1. čtení";

        case Date.parse("2015-02-24"):
        case Date.parse("2015-02-26"):
        case Date.parse("2015-04-14"):
          return "24. února - 4. dubna 2015<br><b>Evropský parlament</b><br>Zpráva parlamentního výboru";

        case Date.parse("2015-04-28"):
          return "28. dubna 2015<br><b>Evropský parlament</b><br>Druhé čtení";

        case Date.parse("2015-06-17"):
          return "17. června 2015<br><b>Evropská komise</b><br>Reakce po 2. čtení";

        case Date.parse("2015-07-13"):
          return "13. července 2015<br><b>Evropská rada</b><br>Reakce po 2. čtení";

        case Date.parse("2015-09-09"):
          return "9. září 2015<br><b>Evropský parlament a rada</b><br>Podpis";

        case Date.parse("2018-08-16"):
          return "16. srpna 2018<br><b>Národní parlamenty</b><br>Přijetí implementačního zákona";

        default:
          return "";
      }
    }
  },
  plotOptions: {
    scatter: {
      marker: {
        symbol: "circle",
        radius: 5,
        states: {
          hover: {
            enabled: true,
            lineColor: "rgb(100,100,100)"
          }
        }
      },
      point: {
        events: {
          click: function click(event) {
            showDetails(event.point.x);
          }
        }
      }
    }
  },
  series: [{
    name: "Evropská komise",
    data: [{ x: Date.parse("2012-10-17"), y: 4, id: "p" + Date.parse("2012-10-17") },
    { x: Date.parse("2014-12-16"), y: 4, id: "p" + Date.parse("2014-12-16") },
    { x: Date.parse("2015-06-17"), y: 4, id: "p" + Date.parse("2015-06-17") }]
  }, {
    name: "Národní parlamenty",
    data: [{ x: Date.parse("2012-12-20"), y: 3, id: "p" + Date.parse("2012-12-20") },
    { x: Date.parse("2018-08-16"), y: 3, id: "p" + Date.parse("2018-08-16") }]
  }, {
    name: "Rada EU",
    data: [{ x: Date.parse("2013-02-22"), y: 2, id: "p" + Date.parse("2013-02-22") },
    { x: Date.parse("2013-12-12"), y: 2, id: "p" + Date.parse("2013-12-12") },
    { x: Date.parse("2015-07-13"), y: 2, id: "p" + Date.parse("2015-07-13") },
    { x: Date.parse("2015-09-09"), y: 2, id: "p" + Date.parse("2015-09-09") }]
  }, {
    name: "Evropský parlament",
    data: [{ x: Date.parse("2013-07-29"), y: 1, id: "p" + Date.parse("2013-07-29") },
    { x: Date.parse("2013-09-11"), y: 1, id: "p" + Date.parse("2013-09-11") },
    { x: Date.parse("2015-02-24"), y: 1, id: "p" + Date.parse("2015-02-24") },
    { x: Date.parse("2015-04-28"), y: 1, id: "p" + Date.parse("2015-04-28") }]
  }]
});
document.getElementById("button-next").addEventListener("click", function () {
  showDetails(points[(points.indexOf(curPoint) + 1) % points.length]);
});
document.getElementById("button-prev").addEventListener("click", function () {
  showDetails(points[(points.length + points.indexOf(curPoint) - 1) % points.length]);
});
window.addEventListener("keydown", function (e) {
  if (e.keyCode === 39) showDetails(points[(points.indexOf(curPoint) + 1) % points.length]);
  if (e.keyCode === 37) showDetails(points[(points.length + points.indexOf(curPoint) - 1) % points.length]);
});
showDetails(curPoint);
