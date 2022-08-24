
const Manager = require('../lib/Manager.js');

test('creates manager object', () => {
    const manager = new Manager('Jessica', '4', 'jessica@gmail.com');

    expect(manager.name).toBe('Jessica');
    expect(manager.id).toBe('4');
    expect(manager.email).toBe('jessica@gmail.com');
})