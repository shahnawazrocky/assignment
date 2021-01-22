




// 1. kilometerToMeter
function kilometerToMeter(kilometer){
    var centimeter = kilometer * 1000; // 1 kilometer = 1000 centimeter.

    return centimeter;
}
var statement = 20;
var result = kilometerToMeter(statement);
console.log("Kilometer To Meter : ",result);


// 2. budgetCalculator
function budgetCalculator(numberOfWatch, numberOfPhone,numberOfLaptop){
    if(numberOfWatch < 0 || numberOfPhone < 0 || numberOfLaptop <0){
        return ;
    
    }
    else{
        return ((numberOfWatch * 50) + (numberOfPhone * 100) + (numberOfLaptop * 500));
    }
}
var totalBudgetCalculator = budgetCalculator(500,100,200);
console.log("Budget Calculator : ", totalBudgetCalculator);



// 3. hotelCost
function hotelCost(stayingDays){
    if(stayingDays < 0){
        return;
    }
    else if(stayingDays < 11){
        return stayingDays * 100;
    }
    else if(stayingDays < 18){
        afterTenDays = stayingDays - 10;
        return (1000 + (afterTenDays * 80));
    }
    else{
        afterSeventeenDays = stayingDays - 7;
        return (1560 + (afterSeventeenDays * 50));
    }

}
var totalCost = hotelCost(20);
console.log("Hotel Cost : ",totalCost);



// 4. megaFriend
function megaFriend(namesOfFriends){
    if(namesOfFriends.length < 2){
        return;
    }
    var largestFriendsNameLength = 0;
    var largestNameIndex;
    for (var i = 0; i < namesOfFriends.length; i++) {
        if(namesOfFriends[i].length > largestFriendsNameLength){
            largestFriendsNameLength = namesOfFriends[i].length;
         largestNameIndex = i;   
        }
                
    }
    return namesOfFriends[largestNameIndex];
}

var myMegaFriend = megaFriend(["Rahim","Shakibul","Mostafizur","Saifuddin"]);
console.log("My Mega Friend : ",myMegaFriend);



