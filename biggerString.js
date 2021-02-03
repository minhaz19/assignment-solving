function megaFriend(friendList){
    var space= 0;
    var largest;
    for(var i = 0;i<friendList.length;i++){
        if(friendList[i].length>space){
            space = friendList[i].length;
            largest= friendList[i];
        }
    }
    return largest;
}
var result = megaFriend(['hello', 'ssaksfsib  djhjs','rahim','karim','samimss','minhazul abedin']);
console.log(result);
