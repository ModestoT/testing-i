module.exports = {
    repair,
    success,
    fail
};

function repair(item) {
    const newItem = {...item};

    newItem.durability = 100;

    return newItem;
}

function success(item) {
    const newItem = {...item};

    if(newItem.enchancment > 20){
        return null;
    } else {
        newItem.enchancment += 1;
    
        if(newItem.enchancment === 16){
            newItem.displayName = `[PRI] ${newItem.name}`;
        } else if(newItem.enchancment === 17){
            newItem.displayName = `[DUO] ${newItem.name}`;
        } else if(newItem.enchancment === 18){
            newItem.displayName = `[TRI] ${newItem.name}`;
        } else if(newItem.enchancment === 19){
            newItem.displayName = `[TET] ${newItem.name}`;
        } else if(newItem.enchancment === 20){
            newItem.displayName = `[PEN] ${newItem.name}`;
        } else {
            newItem.displayName = `[+${newItem.enchancment}] ${newItem.name}`;
        }
        

        return newItem;
    }
}

function fail(item) {
    const newItem = {...item};

    if(newItem.enchancment < 15){
        if(newItem.durability < 26){
            return null;
        } else {
            newItem.durability -= 5;
        }
    } else {
        if(newItem.durability < 10){
            return null;
        } else {
            newItem.durability -= 10;

            if(newItem.enchancment > 16) {

                newItem.enchancment -= 1;

                if(newItem.enchancment === 16){
                    newItem.displayName = `[PRI] ${newItem.name}`;
                } else if(newItem.enchancment === 17){
                    newItem.displayName = `[DUO] ${newItem.name}`;
                } else if(newItem.enchancment === 18){
                    newItem.displayName = `[TRI] ${newItem.name}`;
                } else if(newItem.enchancment === 19){
                    newItem.displayName = `[TET] ${newItem.name}`;
                } else if(newItem.enchancment === 20){
                    newItem.displayName = `[PEN] ${newItem.name}`;
                } else {
                    newItem.displayName = `[+${newItem.enchancment}] ${newItem.name}`;
                }
            }
        }
    }

    return newItem;
}