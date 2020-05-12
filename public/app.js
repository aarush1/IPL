function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  visualizeMatchesWon(data.matchesWon,data.mostWins);
  visualizebestEco(data.bestEco);
  //visualizeextraRuns(data.extraRuns);
  visualizetossEff(data.tossEff);
  
  return;
}

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }

  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "1.Matches Played Per Year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Years",
        data: seriesData
      }
    ]
  });
}




function   visualizeMatchesWon(matchesWon,mostWins){

  teams=Object.keys(mostWins);
  seasons=Object.keys(matchesWon);
  seriesData=[];
  seriesData = teams.map(team => ({
    name:team,
    data:seasons.map(season => matchesWon[season][team]|| 0)
  }));
  console.log(seriesData);





Highcharts.chart('container2', {
  chart: {
      type: 'column'
  },
  title: {
      text: '2.Number of matches won by each team over all the years of IPL'
  },
  subtitle: {
      text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'

  },
  xAxis: {
      categories: teams,
      crosshair: true
  },
  yAxis: {
      min: 0,
      title: {
          text: 'no_of_matcheswon'
      }
  },
  tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  series : seriesData
    });
}


function visualizebestEco(bestEco) {
  const seriesData = [];
  for (let year in bestEco) {
    seriesData.push([year, bestEco[year]]);
  }

  Highcharts.chart("container3", {
    chart: {
      type: "column"
    },
    title: {
      text: "3.Top 10 economical bowlers in 2015"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Player"
      }
    },
    series: [
      {
        name: "Economy",
        data: seriesData
      }
    ]
  });
}

  /*function visualizeextraRuns(extraRuns) {
    const seriesData = [];
    for (let year in extraRuns) {
      seriesData.push([year, extraRuns[year]]);
    }
  
    Highcharts.chart("container4", {
      chart: {
        type: "column"
      },
      title: {
        text: "4.Extra runs conceded by each team in 2016"
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "Runs"
        }
      },
      series: [
        {
          name: "Runs",
          data: seriesData
        }
      ]
    });
  }*/

  function visualizetossEff(tossEff)
  {

    teams=Object.keys(tossEff);
    seasons=["field","bat"];
    seriesData=[];
    seriesData = seasons.map(season => ({
      name:season,
      data:teams.map(team => tossEff[team][season]|| 0)
    }));
    console.log(seriesData);

    Highcharts.chart("container5", {
      chart: {
        type: "bar"
      },
      title: {
        text: "5.Toss Decision VS Wins"
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        categories: teams
      },
      yAxis: {
        allowDecimals: false,
        title: {
          text: "Total Wins"
        }
      },
      legend: {
        reversed: true
      },
      plotOptions: {
        series: {
          stacking: "normal"
        }
      },
      series: seriesData
    });
  
  }








