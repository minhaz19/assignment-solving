function hotelCost(days){
    var first10Days =0;
    var second10Days = 0;
    var restDays = 0;
    if(days>0){
    for(var i= 1;i<=days; i++){
        if(i<=10){
            first10Days = i*100;
        }
        else if(i<=20){
            for(var j=1;j<=i-10;j++)
            second10Days=j*80;
        }
        else if(i>=21){
            for(var k=1;k<=i-20;k++)
            restDays = k*50;
        }
        
    }
    var totalCost= first10Days + second10Days + restDays;
    return totalCost;
    }
    else{
        return "Staying days can't be negetive or Zero."
    }
}
var result = hotelCost(-2);
console.log(result);