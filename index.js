const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWon = require("./ipl/matchesWon");
const mostWins = require("./ipl/mostWins");
const bestEco = require("./ipl/bestEco");
const extraRuns = require("./ipl/extraRuns");
const tossEff = require("./ipl/tossEff");



const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";

function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
        .fromFile(DELIVERIES_FILE_PATH)
        .then(deliveries => {
          let result = matchesPlayedPerYear(matches);
          let result1 = matchesWon(matches);
          let result2 = mostWins(matches);
          let result3 = bestEco(matches,deliveries,"2015");
          let result4 = extraRuns(matches,deliveries,"2016");
          let result5 = tossEff(matches);

          saveMatchesPlayedPerYear(result, result1, result2,result3,result4,result5);
        });
    });
}



function saveMatchesPlayedPerYear(result, result1, result2,result3,result4,result5) {
  const jsonData = {
    matchesPlayedPerYear: result,
    matchesWon: result1,
    mostWins: result2,
    bestEco: result3,
    extraRuns: result4,
    tossEff: result5

  };

  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main();
