const { repair } = require('./enhancement.js');

it('should repair item to 100 durability', () => {
    const item = {
        name: 'Rosar shortsword',
        type: 'Weapon',
        durability: 50,
        enhancement: 1,
        displayName: `[+${this.enhancement}] ${this.name}`
    };

    expect(repair(item).durability).toBe(100);
})