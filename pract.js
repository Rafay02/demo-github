function getarray(){
    var a = document.getElementById("feild").value;
    var arr = a.split(",").map(Number);//.map(number) is used for string array into int array
    return arr;
}
function large() {
    var arr = getarray();
    console.log(arr)
    var l = arr.length;
    var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
    }
}
document.getElementById("show").innerHTML=largest;
}

function small(){
    var arr = getarray();
    var l = arr.length;
    var smallest = arr[0];
    for(i=0;i<l;i++){
        if(smallest>arr[i]){
            smallest=arr[i];
        }
    }
    document.getElementById("show").innerHTML=smallest;
}


 
 function asscending(arr){
    var chek = false;
    while (!chek) {
      chek = true;
      for (var i=0; i<arr.length; i++) {
        if (arr[i] > arr[i+1]) {
          chek = false;
          var tmp = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = tmp;
        }
      }
    }
    return arr;   
 }
 function sortA(){
    var arr = getarray();
     asscending(arr);
     document.getElementById("show").innerHTML=arr;
 }
 function SortD(){
    var arr = getarray();
    var chek = false;
    while(!chek){
        chek=true
        for(i=0;i<arr.length;i++){

            if (arr[i] < arr[i+1]) {
                chek = false;
                var tmp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = tmp;
              }
        }
    }
    document.getElementById("show").innerHTML=arr;
    
 }
 