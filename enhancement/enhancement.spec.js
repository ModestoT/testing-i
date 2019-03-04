const { repair, success, fail } = require('./enhancement.js');

describe('repair()', () => {
    it('should repair item to 100 durability', () => {
        const item = {
            name: 'Rosar Shortsword',
            type: 'Weapon',
            durability: 50,
            enhancement: 1,
            displayName: `[+1] Rosar Shortsword`
        };
    
        expect(repair(item).durability).toBe(100);
    });
});

describe('success()', () => {
    it('should increase the enchancment level of the Item by 1', () => {
        const item = {
            name: 'Kzarkas Shortsword',
            type: 'Weapon',
            durability: 20,
            enchancment: 3,
            displayName: `[+3] Kzarkas Shortsword`
        };
    
        expect(success(item).enchancment).toBe(item.enchancment+1);
    });
    
    it('should change the display name of the Item to reflect the new enchancment level to be [+number] Item name', () => {
        const item = {
            name: 'Kzarkas Shortsword',
            type: 'Weapon',
            durability: 20,
            enchancment: 10,
            displayName: `[+10] Kzarkas Shortsword`
        };

        expect(success(item).displayName).toBe('[+11] Kzarkas Shortsword');
    });

    it('should change the display name of the Item to reflect the new enchancment level to be [Arabic Numberal] Item name', () => {
        const item = {
            name: 'Kzarkas Shortsword',
            type: 'Weapon',
            durability: 20,
            enchancment: 16,
            displayName: `[PRI] Kzarkas Shortsword`
        };

        expect(success(item).displayName).toBe('[DUO] Kzarkas Shortsword');
    });
});

describe('fail()', () => {
    it('should decrease the durability of the Item by 5 if its enchancement level is between 0 and 14', () => {
        const item = {
            name: 'Kzarkas Shortsword',
            type: 'Weapon',
            durability: 100,
            enchancment: 14,
            displayName: `[+14] Kzarkas Shortsword`
        };
        expect(fail(item).durability).toBe(95);
    });

    it('should decrease the durability of the Item by 10 if its enchancment level is greater than 14', () => {
        const item = {
            name: 'Kzarkas Shortsword',
            type: 'Weapon',
            durability: 100,
            enchancment: 15,
            displayName: `[+15] Kzarkas Shortsword`
        };
        expect(fail(item).durability).toBe(90);
    });

    it('should decrease the enchancment of the Item by 1 if its enchancment level is greater than 16', () => {
        const item = {
            name: 'Kzarkas Shortsword',
            type: 'Weapon',
            durability: 100,
            enchancment: 17,
            displayName: `[DUO] Kzarkas Shortsword`
        };
        expect(fail(item).enchancment).toBe(16);
    });

    it('should change the display Name with the new enchancment from failing, DUO should change to PRI ', () => {
        const item = {
            name: 'Kzarkas Shortsword',
            type: 'Weapon',
            durability: 100,
            enchancment: 17,
            displayName: `[DUO] Kzarkas Shortsword`
        };
        expect(fail(item).displayName).toBe('[PRI] Kzarkas Shortsword');
    });

    it('the items enchancement level is 14 or lower then the item can not be enchanced if its durability is 25 or lower', () => {
        const item = {
            name: 'Kzarkas Shortsword',
            type: 'Weapon',
            durability: 25,
            enchancment: 14,
            displayName: `[+14] Kzarkas Shortsword`
        };
        expect(fail(item)).toBeNull();
    });

    it('the items enchancement level is 15 or higher then the item can not be enchanced if its durability is 10 or lower', () => {
        const item = {
            name: 'Kzarkas Shortsword',
            type: 'Weapon',
            durability: 9,
            enchancment: 17,
            displayName: `[DUO] Kzarkas Shortsword`
        };
        expect(fail(item)).toBeNull();
    });    

});