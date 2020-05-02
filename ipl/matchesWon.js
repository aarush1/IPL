function matchesWon(matches) {
    let result = {};
    let seasons = [];

    for(let match of matches)
    { 
        let season = match.season;
        if(!seasons.includes(season))
        {
            seasons.push(season)
        }
    }
    for(let season of seasons){
        result[season]=findWins(matches,season);
    }
    function findWins(matches,season){
        result2={};
        for(let match of matches){
            if(match.season===season){
                winner=match.winner
                if(result2[winner]){
                    result2[winner]+=1;
                }else{
                    result2[winner]=1;
                }
            }
        }
        return result2;
    }
    return result;
}
module.exports = matchesWon;



