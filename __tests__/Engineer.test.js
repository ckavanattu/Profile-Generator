
const Engineer = require('../lib/Engineer');

test('creates Engineer object', () => {
    const engineer = new Engineer('Jack', '4', 'jack@gmail.com', 'JackDan');

    expect(engineer.name).toBe('Jack');
    expect(engineer.id).toBe('4');
    expect(engineer.email).toBe('jack@gmail.com');
    expect(engineer.github).toBe('JackDan');
});
