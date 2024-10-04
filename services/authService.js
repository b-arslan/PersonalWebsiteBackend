const bcrypt = require('bcrypt');
const { getAdminByEmail } = require('../models/Admin');

const login = async (email, password) => {
    const {data, error} = await getAdminByEmail(email);

    if (error || data.length === 0) {
        throw new Error('User not found!');
    }

    const hashedPassword = data[0].password;
    const isMatch = await bcrypt.compare(password, hashedPassword);

    if (!isMatch) {
        throw new Error('Password is wrong!');
    }

    return 'Logged in successfully!';

};

module.exports = { login };