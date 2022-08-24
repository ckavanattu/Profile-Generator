const Intern = require('../lib/Intern.js');

test('creates intern object', ()=>{
    const intern = new Intern('Rock', '10', 'rock@rock.com', 'UCSD');

    expect(intern.name).toBe('Rock');
    expect(intern.id).toBe('10');
    expect(intern.email).toBe('rock@rock.com');
    expect(intern.school).toBe('UCSD');
})