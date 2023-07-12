function problem3(inventory){
    const arr=[];
    for(i=0;i<inventory.length;i++){
        arr[i]=inventory[i].car_model;
    }
    arr.sort();
    l=[];
    for(i=0;i<arr.length;i++){
        for(j=0;j<inventory.length;j++){
            if(inventory[j].car_model==arr[i]){
                l[i]=inventory[j];
            }
        }
    }
    return l;
}
module.exports=problem3;