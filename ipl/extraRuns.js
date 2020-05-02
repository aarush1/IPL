function extraRuns(matches,deliveries,year) {

    let result = {};
    seasons = [];
    id = [];
    for (let match of matches) {
      if (!seasons.includes(match.season)) {
        seasons.push(match.season);
      }
    }
    
    
    for (let match of matches) {
      if (match.season === year) {
        id.push(match.id);
      }
    }
    for (let i of id) {
      for (let del of deliveries) {
        if (del.match_id === i) {
          let team = del.bowling_team;
          if (result[team]) {
            result[team] += parseInt(del.extra_runs);
          } else {
            result[team] = parseInt(del.extra_runs);
          }
        }
      }
    }
    return result;
    
}

  module.exports = extraRuns;