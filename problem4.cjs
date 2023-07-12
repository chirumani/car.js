function problem4(inventory){
    const arr=[];
    for(i=0;i<inventory.length;i++){
        arr[i]=inventory[i].car_year;
    }
    return arr;
}

module.exports=problem4;