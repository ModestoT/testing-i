module.exports = {
    repair,
    success
};

function success(item) {
    const newItem = {...item};

    newItem.enchancment += 1;
    
    if(newItem.enchancment === 16){
        newItem.displayName = `[PRI] ${newItem.name}`;
    } else if(newItem.enchancment === 17){
        newItem.displayName = `[DUO] ${newItem.name}`;
    } else if(newItem.enchancment === 18){
        newItem.displayName = `[TRI] ${newItem.name}`;
    }else if(newItem.enchancment === 19){
        newItem.displayName = `[TET] ${newItem.name}`;
    }else if(newItem.enchancment === 20){
        newItem.displayName = `[PEN] ${newItem.name}`;
    }else {
        newItem.displayName = `[+${newItem.enchancment}] ${newItem.name}`;
    }
    

    return newItem;
}

function repair(item) {
    const newItem = {...item};

    newItem.durability = 100;

    return newItem;
}