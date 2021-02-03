function budgetCalculator ( watch , phone , laptop){
    if(watch>=0 && phone>=0 && laptop>=0){
    var watchTotal = watch * 50;
    var phoneTotal = phone * 100;
    var laptopTotal = laptop * 500;
    var totalPrice = watchTotal + phoneTotal + laptopTotal;
    return totalPrice;
    }
    else{
        return "Amount can't be neagative";
    }
}
var result = budgetCalculator(10,10,10);
console.log(result);