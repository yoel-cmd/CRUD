import { readFile, writeFile } from "node:fs";
import readline from 'readline';

let maxId=0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function creatFIleFunc(answer) {
     
    readFile('db.txt', 'utf8', (err, data) => {
        if (err) return console.log(err);

        const arr = JSON.parse(data);
        if(arr.length===0){
            answer.id=1
        }
        else{
            maxId=0
            for(let i=0;i<arr.length;i++){
               if(arr[i].id>maxId){
                    maxId=arr[i].id                
               }             
            }
            answer.id=maxId+1
        }
        arr.push(answer);

       writeFileFunc(arr)
    });
}

function readFileFunc() {
    readFile('db.txt', 'utf8', (err, data) => {
        if (err) return console.log(err);
        console.log(data); 
    });
}

function writeFileFunc(arr){
    writeFile('db.txt', JSON.stringify(arr,null,2), (err) => {
            if (err) console.log(err);
            
             
            });
}

function updateFunctio(params){
    return new Promise((resolve,reject)=>{
        readFile('db.txt','utf8',(err,data)=>{
            const arr= JSON.parse(data);
             let found = false;

            for(let i=0;i<arr.length;i++){
                if(arr[i].id===params.id){
                    arr[i].score=params.score;
                    found = true;
                    break;
                }             
            }
              if (!found) {
                return reject('ID not found');
            }
           writeFileFunc(arr);
           resolve("update")
        })
    })
}

function delteStudent(js){
return new Promise((resolve,reject)=>{
    readFile('db.txt','utf8',(err,data)=>{
            const arr= JSON.parse(data);
            let found = false;

            for(let i=0;i<arr.length;i++){
                if(arr[i].id===js.id){
                    arr.splice(i, 1);
                    found = true;
                    break;
                }             
            }
              if (!found) {
                return reject('ID not found');
            }
            writeFileFunc(arr)
            resolve('delete')
        })

})

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
            showMenu();
            break;
        case '3':
            rl.question('Enter ID and score in proper Jason format:("id":value,"score":value) ', (answer) => {  
                 const res = JSON.parse(answer);                         
                    updateFunctio(res)
                    .then((msg)=>{
                        console.log(msg);
                        showMenu();
                    })
                    .catch((err)=>{
                        console.log(err);
                        showMenu();    
                    })
            });
            break;
        case '4':
            rl.question('Enter the deletion ID in proper Jason format.("id":id)', (answer) => {  
                 const res = JSON.parse(answer);                         
                    delteStudent(res)
                    .then((msg)=>{
                        console.log(msg);
                        showMenu();
                    })
                    .catch((err)=>{
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

function showMenu() {
    console.log('\n========== menu ==========');
    console.log('1 - creat');
    console.log('2 - read');
    console.log('3 - update');
    console.log('4 - delete');
    console.log('0 - exit');
    rl.question('\nenter your chois : ', handleChoice);
}


showMenu();


















//--------------------------------------------------------------
// import { log } from "node:console";
// import { readdir, readFile, stat, writeFile } from "node:fs";
// import readline from 'readline';

// let index = 0;
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });




// function WriteFIleFunc(answer) {
//     readFile('db.txt', 'utf8', (err, data) => {
//         if (err) console.log(err);
//         const arr = JSON.parse(data)
//         console.log(index);
//         index += 1;

//         arr.push(answer);
//         console.log('arr.push(answer)');
//         console.log(arr);

//         writeFile('db.txt', JSON.stringify(arr, null, 2), (err) => {
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                 console.log('yes');
//             }
//         })
//         // console.log(data); 
//     })
// }


// function readFileFunc() {
//     readFile('db.txt', 'utf8', (err, data) => {
//         if (err) console.log(err);
//         console.log(data);
//     })
// }


// function handleChoice(choice) {
//     while(choice!=0){
//     switch (choice) {
//         case '1':
//             rl.question('Insert json Key:Value ', (answer) => {
//                 const res = JSON.parse(answer)
//                 rl.close();
//                 WriteFIleFunc(res)
//             });
//             break;
//         case '2':
//             console.log(' create');
//             // כאן תקרא את הקובץ ותדפיס את התוכן
//             break;
//         case '3':
//             console.log(' update');
//             // כאן תבקש מזהה ותשנה את הרשומה
//             break;
//         case '4':
//             console.log('delete');
//             // כאן תבקש מזהה ותמחק את הרשומה
//             break;
//             case '0':
//             console.log('exit');
//             // כאן תבקש מזהה ותמחק את הרשומה
//             break;
//         default:
//             console.log('בחירה לא חוקית, נסה שוב');
//             showMenu(); // חזרה לתפריט במקרה של שגיאה
//             return;
//     }
    

    
// }

// }
