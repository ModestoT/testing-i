module.exports = {
    repair
};

function repair(item) {
    const newItem = {...item};

    newItem.durability = 100;

    return newItem;
}