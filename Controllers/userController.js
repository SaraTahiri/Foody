const { verifyPassword} = require("../Helpers/Hashing")
const  { sign } = require("../Helpers/JWT")
const User = require('../Modals/Schema/UserSch')


exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find the user by username
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send('User not found');
        }
        const isPasswordCorrect = await verifyPassword(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).send('Incorrect password');
        }
        // Password is correct, generate JWT token
        const token = await sign({email:user.email, id:user._id, username:user.username});
        res.cookie('tokenauth', token);
        return res.status(200).send('You are logged in successfully');
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).send('Internal server error');
    }
};
