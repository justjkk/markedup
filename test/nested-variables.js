const {test} = require('ava');
const markedup = require('../src/api.js');

test('variables', t => {
    let input = markedup('Hello <user.name>', {user: {name: 'sid'}});
    let output = '<p>Hello sid</p>\n';
    t.deepEqual(input, output);
});

test('loops', t => {
    let users = [
        {name: 'sid'},
        {name: 'duck'}
    ];
    let input = markedup('<* user.name in users>', {users});
    let output = '<ul>\n<li>sid</li>\n<li>duck</li>\n</ul>\n';
    t.deepEqual(input, output);
});

test('conditional', t => {
    let user = {name: 'sid'};
    let input = markedup(`<if user.name = 'sid':Hi sid><else:Who are you?><endif>`, {user});
    let output = '<p>Hi sid</p>\n';
    t.deepEqual(input, output);
});


