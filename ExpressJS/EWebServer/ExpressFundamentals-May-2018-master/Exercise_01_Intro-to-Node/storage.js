let storage = {};

const fs = require('fs');
const filePath = './database/storage.json';

module.exports = {
    put: (key, value) => {
        if (typeof key !== "string") {
            throw new TypeError("Inavlid key! Type must be 'string'");
        }
        if (storage[key] !== undefined) {
            throw new ReferenceError("Value with that key already exists!");
        }

        storage[key] = value;
    },
    get: (key) => {
        if (typeof key !== "string") {
            throw new TypeError("Inavlid key! Type must be 'string'");
        }

        let value = storage[key];
        if (value == undefined) {
            throw new ReferenceError("No such key found in storage!");
        }

        return value;
    },
    saveSync: () => {
        fs.writeFileSync(filePath, JSON.stringify(storage));
        console.log("Saved data to file 'database/storaga.json'");
    },
    loadSync: () => {
        let data = fs.readFileSync(filePath, "utf8");
        storage = JSON.parse(data);
        console.log(`Loaded data from ${filePath}`);
    },
    load: () => {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    throw err;
                }
    
                storage = JSON.parse(data);
                console.log(`Succesfuly loaded data from ${filePath}`);
                resolve();
            })
        })
    }
}

