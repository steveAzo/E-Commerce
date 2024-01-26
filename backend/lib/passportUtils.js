const crypto = require('crypto')

function validPassword(password, hash, salt) {
    
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(password, salt, 1000, 64, "sha512", (err, derivedKey) => {
            if (err) reject(err);
            resolve(hash === derivedKey.toString("hex"));
        });
    });
}

function genPassword(password) {
    return new Promise((resolve, reject) => {
        const salt = crypto.randomBytes(32).toString("hex");
        crypto.pbkdf2(password, salt, 1000, 64, "sha512", (err, derivedKey) => {
            if (err) reject(err);
            resolve({
                salt: salt,
                hash: derivedKey.toString("hex"),
            })
        })
    })
}

module.exports.validPassword = validPassword
module.exports.genPassword = genPassword
