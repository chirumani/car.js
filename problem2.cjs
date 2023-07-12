function problem2(inventory){
    req_id=inventory[inventory.length-1].id-1;
    return "Last car is a "+ inventory[req_id].car_make +" "+inventory[req_id].car_model;
}

module.exports=problem2;