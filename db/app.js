// ====== Imports and Setup ======
import { readFile, writeFile } from "node:fs";
import readline from 'readline';

let maxId = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ====== Menu System ======

function showMenu() {
    console.log('\n========== menu ==========');
    console.log('1 - creat');
    console.log('2 - read');
    console.log('3 - update');
    console.log('4 - delete');
    console.log('0 - exit');
    rl.question('\nenter your chois : ', handleChoice);
}

function handleChoice(choice) {
    switch (choice) {
        case '1':
            rl.question('Enter a name and grade in proper Jason format.("name":"value","score":value): ', (answer) => {
                const res = JSON.parse(answer);
                creatFIleFunc(res);
                showMenu();
            });
            break;

        case '2':
            console.log('read');
            readFileFunc();
            break;

        case '3':
            rl.question('Enter ID and score in proper Jason format:("id":value,"score":value) ', (answer) => {
                const res = JSON.parse(answer);
                if (res.score < 100 && res.score >= 0) {
                    updateFunctio(res)
                        .then((msg) => {
                            console.log(msg);
                            showMenu();
                        })
                        .catch((err) => {
                            console.log(err);
                            showMenu();
                        })
                } else {
                    console.log('scor is invalid');
                    showMenu();
                }
            });
            break;

        case '4':
            rl.question('Enter the deletion ID in proper Jason format.("id":id)', (answer) => {
                const res = JSON.parse(answer);
                delteStudent(res)
                    .then((msg) => {
                        console.log(msg);
                        showMenu();
                    })
                    .catch((err) => {
                        console.log(err);
                        showMenu();
                    })
            });
            break;

        case '0':
            console.log('exit');
            rl.close();
            break;

        default:
            console.log('');
            showMenu();
            break;
    }
}

// ====== Functional Logic ======

/**
 * creatFIleFunc(answer)
 * Adds a new student to db.txt, assigns unique ID automatically
 */
function creatFIleFunc(answer) {
    readFile('db.txt', 'utf8', (err, data) => {
        if (err) return console.log(err);

        const arr = JSON.parse(data);
        if (arr.length === 0) {
            answer.id = 1
        } else {
            maxId = 0
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].id > maxId) {
                    maxId = arr[i].id
                }
            }
            answer.id = maxId + 1
        }
        arr.push(answer);

        writeFile('db.txt', JSON.stringify(arr, null, 2), (err) => {
            if (err) console.log(err);
        });
        console.log("created");
    });
}

/**
 * readFileFunc()
 * Reads and prints all student data
 */
function readFileFunc() {
    readFile('db.txt', 'utf8', (err, data) => {
        if (err) return console.log(err);
        console.log(data);
        showMenu();
    });
}

/**
 * writeFileFunc(arr)
 * Writes updated array to file – returns Promise
 */
function writeFileFunc(arr) {
    return new Promise((resolve, reject) => {
        writeFile('db.txt', JSON.stringify(arr, null, 2), (err) => {
            if (err) return reject(err);
            resolve("update");
        });
    });
}

/**
 * updateFunctio(params)
 * Updates a student's score by ID using Promises
 */
function updateFunctio(params) {
    return new Promise((resolve, reject) => {
        readFile('db.txt', 'utf8', (err, data) => {
            const arr = JSON.parse(data);
            let found = false;

            for (let i = 0; i < arr.length; i++) {
                if (arr[i].id === params.id) {
                    arr[i].score = params.score;
                    found = true;
                    break;
                }
            }
            if (!found) {
                return reject('ID not found');
            }
            writeFileFunc(arr)
                .then(() => resolve('Update successful'))
                .catch(err => reject('Write failed: ' + err));
        })
    })
}

/**
 * delteStudent(js)
 * Deletes a student by ID using Promises
 */
function delteStudent(js) {
    return new Promise((resolve, reject) => {
        readFile('db.txt', 'utf8', (err, data) => {
            const arr = JSON.parse(data);
            let found = false;

            for (let i = 0; i < arr.length; i++) {
                if (arr[i].id === js.id) {
                    arr.splice(i, 1);
                    found = true;
                    break;
                }
            }
            if (!found) {
                return reject('ID not found');
            }
            writeFileFunc(arr)
                .then(() => resolve('Update successful'))
                .catch(err => reject('Write failed: ' + err));
        })
    })
}

// ====== Start Program ======
showMenu();
