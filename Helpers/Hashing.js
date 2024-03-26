const bcrypt = require("bcrypt");

class BcryptHash {
    async hashPassword(password, saltRounds = 10) {
        try {
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            return hashedPassword;
        } catch (error) {
            throw error;
        }
    }

    async verifyPassword(password, hashedPassword) {
        try {
            const isMatch = await bcrypt.compare(password, hashedPassword);
            return isMatch;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new BcryptHash();
