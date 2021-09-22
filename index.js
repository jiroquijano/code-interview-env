const axios = require('axios');

const foo = () => {
    return 'pass';
}

const bar = () => {
    return {
        result: 'pass'
    }
}

const baz = async () => {
    const users = await axios.get('https://reqres.in/api/users');
    return users;
}

module.exports = {
    foo,
    bar,
    baz
}