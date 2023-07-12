function problem6(inventory){
    let j=0;
    let arr=[];
    for(i=0;i<inventory.length;i++){
        if(inventory[i].car_make=='BMW' || inventory[i].car_make=='Audi'){
            arr[j]=inventory[i];
            j++;
        }
    }
    return JSON.stringify(arr);
}
module.exports=problem6;