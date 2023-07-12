const l=[]
let j=0;
function problem5(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]<2000){
            l[j]=arr[i];
            j++;
        }
    }
    return l.length;
}

module.exports=problem5;