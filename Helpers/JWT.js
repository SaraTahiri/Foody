const jwt = require("jsonwebtoken");

JWTSECRETKEY = process.env.JWTSECRETKEY
class JwtManager {
    sign(payload, expiresIn = "1d") {
        try {
            const token = jwt.sign(payload, JWTSECRETKEY, { expiresIn });
            return token;
        } catch (error) {
            throw error;
        }
    }

    verify(token) {
        try {
            const decoded = jwt.verify(token, server.jwtSecretKey);
            return decoded;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = new JwtManager();