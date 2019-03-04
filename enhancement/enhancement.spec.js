const { repair, success } = require('./enhancement.js');

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
    it('should increase the enchancment level by 1', () => {
        const item = {
            name: 'Kzarkas Shortsword',
            type: 'Weapon',
            durability: 20,
            enchancment: 3,
            displayName: `[+3] Kzarkas Shortsword`
        };
    
        expect(success(item).enchancment).toBe(item.enchancment+1);
    });
    
    it('should change the display name to reflect the new enchancment level', () => {
        const item = {
            name: 'Kzarkas Shortsword',
            type: 'Weapon',
            durability: 20,
            enchancment: 15,
            displayName: `[+15] Kzarkas Shortsword`
        };

        expect(success(item).displayName).toBe('[PRI] Kzarkas Shortsword');
    });
});