const { login } = require('../services/authService');

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const message = await login(email, password);
        res.status(200).json({ success: true, message });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
};

module.exports = { loginUser };