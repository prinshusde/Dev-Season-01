const crypto = require("node:crypto")


// crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, derivedKey) => {
//     if (err) throw err;
//     console.log(derivedKey.toString("hex"));
// });

crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");

console.log("Generating password")