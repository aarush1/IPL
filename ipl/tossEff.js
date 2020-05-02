function tossEff(matches)
{
   result={};
   

   
        for(let match of matches){
            winner=match.winner;
            tossWinner=match.toss_winner;
            tossD=match.toss_decision;
            if(tossWinner === winner ){
                if(result[winner]){
                    if(result[winner][tossD]){
                        result[winner][tossD]+=1;
                    }else{
                        result[winner][tossD]=1;
                    }
                }else{
                    result[winner]={};
                    result[winner][tossD]=1;
                }
            }
        }
    
        return result;

    
}
module.exports = tossEff;

//toss_winner,toss_decision