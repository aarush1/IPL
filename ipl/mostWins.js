function mostWins(matches){
    let result = {};

    for(let match of matches)
    {
        let winner = match.winner;

        if(result[winner])
        {
            result[winner] += 1;
        }
        else{
            result[winner] = 1;
        }
    }
    return result;

}
module.exports =mostWins;