function problem1(inventory){
    for(let i=0;i<inventory.length;i++){
        if(inventory[i].id==33){
            req_id=inventory[i].id;
            break;
        }
    }
    return "car "+ inventory[req_id-1].id +" is a " + inventory[req_id-1].car_year +" "+ inventory[req_id-1].car_make +" "+ inventory[req_id-1].car_model;
}
let req_id;

module.exports=problem1; 


//console.log(inventory);