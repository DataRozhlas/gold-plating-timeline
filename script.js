var curPoint = Date.parse("2012-10-17");
var points = [Date.parse("2012-10-17"), Date.parse("2012-12-20"), Date.parse("2013-02-22"), Date.parse("2013-07-29"), Date.parse("2013-09-11"), Date.parse("2013-12-12"), Date.parse("2014-12-16"), Date.parse("2015-02-24"), Date.parse("2015-04-28"), Date.parse("2015-06-17"), Date.parse("2015-07-13"), Date.parse("2015-09-09")];

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
      text = "<p>Evropská komise navrhuje směrnici s cílem omezit podíl biopaliv první generace – například řepky – v pohonných hmotách. Návrh směrnice vždy předkládá komise, evropský parlament ji ovšem k předložení zákona na určité téma může vyzvat.</p><p><i><a href='https://eur-lex.europa.eu/legal-content/CS/TXT/?uri=celex:52012PC0595'>Více na webu Evropské unie...</a></i></p>";
      break;

    case Date.parse("2012-12-20"):
      date = "20. prosince 2012–8. dubna 2013";
      header = "Reakce členských zemí";
      text = "<p>Před prvním čtením se k návrhu vyjadřují parlamenty členských zemí. Reaguje také český senát: připomíná například zhoubný vliv biopaliv první generace na půdu. Pokud by návrh směrnice odmítla třetina národních parlamentů, komise jej musí přepracovat (takzvaná žlutá karta).</p><p><i><a href='http://www.connefof.europarl.europa.eu/connefof/app/exp/COM(2012)0595#'>Více na webu Evropské unie...</a></i></p>";
      break;

    case Date.parse("2013-02-22"):
    case Date.parse("2013-03-21"):
    case Date.parse("2013-06-06"):
    case Date.parse("2013-06-18"):
      date = "2. února–18. června 2013";
      header = "Jednání rady";
      text = "<p>Návrh směrnice projednávají národní ministři z tematicky blízkých rezortů. Za Česko se jednání o biopalivech účastní ministr životního prostředí Tomáš Chalupa a náměstek ministra průmyslu pro energetiku Pavel Šolc.</p><p><i><a href='https://oeil.secure.europarl.europa.eu/oeil/popups/summary.do?id=1277801&t=e&l=en'>Více na webu Evropské unie...</a></i></p>";
      break;

    case Date.parse("2013-07-29"):
      date = "29. července 2013";
      header = "Zpráva parlamentního výboru";
      text = "<p>Podobně jako v národních parlamentech, i zde je klíčový názor výboru, v tomto případě Výboru pro životní prostředí, zdraví a potraviny. Upozorňuje například, že biopaliva první generace nejsou ohledně snižování emisí a vztahu k půdě příliš příznivá.</p><p><i><a href='https://www.europarl.europa.eu/sides/getDoc.do?pubRef=-//EP//TEXT+REPORT+A7-2013-0279+0+DOC+XML+V0//CS'>Více na webu Evropské unie...</a></i></p>";
      break;

    case Date.parse("2013-09-11"):
      date = "11. září 2013";
      header = "První čtení";
      text = "<p>Parlament na doporučení výboru poměrem 552:126 poslanců směrnici schvaluje. Přidává k ní řadu zpřesnění a zpřísnění, například požaduje přidat do pohonných hmot 2,5 % biopaliv z odpadů.</p><p><i><a href='https://eur-lex.europa.eu/legal-content/CS/TXT/?uri=celex:52013AP0357'>Více na webu Evropské unie...</a></i></p>";
      break;

    case Date.parse("2013-12-12"):
    case Date.parse("2014-06-13"):
    case Date.parse("2014-12-09"):
      date = "12. prosince 2013–9. prosince 2014";
      header = "Jednání rady po 1. čtení";
      text = "<p>Po parlamentním prvním čtení začíná vyjednávání parlamentu, komise i rady. Rada, tedy ministři členských zemí, v tomto případě většinu pozměňovacích návrhů odmítá, snižuje například podíl obnovitelných paliv druhé generace na 0,5 %.</p><p><i><a href='https://eur-lex.europa.eu/legal-content/CS/TXT/?uri=celex:52015AG0002'>Více na webu Evropské unie...</a></i></p>";
      break;

    case Date.parse("2014-12-16"):
      date = "16. prosince 2014";
      header = "Reakce komise po 1. čtení";
      text = "<p>Na jednání rady reaguje Evropská komise. V tomto případě „s politováním konstatuje, že rada výrazně snížila úroveň ambicí v oblasti ochrany životního prostředí“.</p><p><i><a href='https://eur-lex.europa.eu/legal-content/CS/TXT/?uri=celex:52014PC0748'>Více na webu Evropské unie...</a></i></p>";
      break;

    case Date.parse("2015-02-24"):
    case Date.parse("2015-02-26"):
    case Date.parse("2015-04-14"):
      date = "24. února–4. dubna 2015";
      header = "Zpráva parlamentního výboru";
      text = "<p>Na radu reaguje také parlamentní výbor, i on doporučuje opatření opět zpřísnit, například u odpadových biopaliv chce podíl v pohonných hmotách aspoň 1,25 %.</p><p><i><a href='https://oeil.secure.europarl.europa.eu/oeil/popups/summary.do?id=1379318&t=e&l=en'>Více na webu Evropské unie...</a></i></p>";
      break;

    case Date.parse("2015-04-28"):
      date = "28. dubna 2015";
      header = "Druhé čtení";
      text = "<p>Evropští poslanci hlasují o kompromisu z předchozích jednání. V řadě věcí ustupují, u zmiňovaného podílu biopaliv druhé generace vítězí návrh rady na 0,5 %.</p><p><i><a href='https://eur-lex.europa.eu/legal-content/CS/TXT/?uri=celex:52015AP0100'>Více na webu Evropské unie...</a></i></p>";
      break;

    case Date.parse("2015-06-17"):
      date = "17. června 2015";
      header = "Reakce komise po 2. čtení";
      text = "<p>Komise všechny návrhy parlamentu přijímá.</p><p><i><a href='https://eur-lex.europa.eu/legal-content/CS/TXT/?uri=celex:52015PC0310'>Více na webu Evropské unie...</a></i></p>";
      break;

    case Date.parse("2015-07-13"):
      date = "13. července 2015";
      header = "Reakce rady po 2. čtení";
      text = "<p>Ani rada nemá další návrhy.</p><p><i><a href='https://eur-lex.europa.eu/legal-content/CS/HIS/?uri=CELEX:32015L1513&qid=1558362384004#2012-10-17_ADP_byCOM'>Více na webu Evropské unie...</a></i></p>";
      break;

    case Date.parse("2015-09-09"):
      date = "9. září 2015";
      header = "Podpis";
      text = "<p>Předseda Evropského parlamentu i Rady EU směrnici podepisují.</p><p><i><a href='https://oeil.secure.europarl.europa.eu/oeil/popups/ficheprocedure.do?reference=2012/0288(COD)&l=en'>Více na webu Evropské unie...</a></i></p>";
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
          return "12. prosince 2012 - 8. dubna 2014<br><b>Národní parlamenty</b><br> Reakce členských zemí";

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
    data: [{ x: Date.parse("2012-12-20"), y: 3, id: "p" + Date.parse("2012-12-20") }]
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
showDetails(curPoint);
