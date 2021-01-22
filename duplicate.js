var sid = [3,6,2,7,3,2,8,9,11,56];
var uniqueName = [];

for (var i = 0; i < sid.length; i++) {
    var element = sid[i];
    var index = uniqueName.indexOf(element);
    if(index== -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);