📘 README.md (English Version)
Student Management CLI
A simple command-line interface (CLI) project for managing student records using Node.js. Students are stored in a local file (db.txt) in JSON format.

🚀 Description
This project allows the user to perform basic CRUD operations (Create, Read, Update, Delete) on student records.

Each student has:

id (auto-generated unique identifier)

name

grade

The data is stored as a JSON array in the file db.txt.

🔁 Program Flow
When the program starts, the user is presented with options:

Create a new student

Read all student data

Update an existing student

Delete a student

User interaction is handled using Node.js's readline module asynchronously.

🛠️ Main Functions
1. createStudent(jsonString)
Input: A JSON string containing the student's name and grade

Functionality:

Parses the JSON string into an object

Automatically adds a unique id (based on the highest existing id + 1)

Reads the existing data from db.txt

Parses it into an array of students

Pushes the new student into the array

Writes the updated array back to the file

Implementation: Callback Hell

Example input:

json
Copy
Edit
{ "name": "Dana", "grade": 92 }
Result written to file:

json
Copy
Edit
{ "id": 4, "name": "Dana", "grade": 92 }
2. readStudents()
Functionality:

Reads the db.txt file

Parses the content into a student array

Displays all students to the user

Implementation: Asynchronous with callback

3. updateStudent(id, newGrade)
Input: Student id and a new grade

Functionality:

Reads and parses the db.txt

Locates the student by id

Updates their grade

Writes the updated array back to the file

Implementation: Uses Promises

4. deleteStudent(id)
Input: Student id

Functionality:

Reads and parses the db.txt

Filters out the student with the matching id

Writes the filtered array back to the file

Implementation: Uses Promises

📂 Key Files
db.txt: JSON-based local file that holds student data

main.js: Entry point script that manages user interaction

🧠 Notes
The system uses both callbacks and promises to demonstrate different asynchronous approaches in JavaScript.

User input is handled via the readline module.

IDs are generated automatically – the user only enters name and grade.

📘 README.md (גרסה בעברית)
מערכת לניהול סטודנטים - CLI
פרויקט בשורת פקודה (CLI) לניהול רשימת סטודנטים באמצעות Node.js. הנתונים נשמרים בקובץ מקומי בשם db.txt בפורמט JSON.

🚀 תיאור
המערכת מאפשרת למשתמש לבצע פעולות CRUD בסיסיות:

יצירת סטודנט חדש

קריאת כלל הנתונים

עדכון סטודנט קיים

מחיקת סטודנט

לכל סטודנט יש:

id (נוצר אוטומטית)

name (שם)

grade (ציון)

הנתונים נשמרים כמערך JSON בקובץ db.txt.

🔁 זרימת התוכנית
כאשר התוכנית מתחילה, מוצגות למשתמש האפשרויות הבאות:

יצירת סטודנט

קריאת נתוני סטודנטים

עדכון סטודנט לפי id

מחיקת סטודנט לפי id

הקלט מהמשתמש מתקבל בצורה א-סינכרונית בעזרת מודול readline של Node.js.

🛠️ פונקציות עיקריות
1. createStudent(jsonString)
קלט: מחרוזת JSON עם name ו־grade

מה הפונקציה עושה:

ממירה את המחרוזת לאובייקט JSON

מוסיפה אוטומטית שדה id ייחודי (על בסיס ה־id הגבוה ביותר שקיים)

קוראת את תוכן הקובץ db.txt

ממירה את התוכן למערך

מוסיפה את הסטודנט החדש למערך

שומרת את המערך חזרה לקובץ

שיטה: Callback Hell

דוגמה לקלט:

json
Copy
Edit
{ "name": "דנה", "grade": 92 }
פלט לקובץ:

json
Copy
Edit
{ "id": 4, "name": "דנה", "grade": 92 }
2. readStudents()
מה היא עושה:

קוראת את הקובץ db.txt

ממירה את התוכן למערך של סטודנטים

מציגה את כל הסטודנטים למשתמש

שיטה: callback א-סינכרוני

3. updateStudent(id, newGrade)
קלט: מזהה סטודנט (id) וציון חדש (newGrade)

מה היא עושה:

קוראת את הקובץ וממירה אותו למערך

מוצאת את הסטודנט לפי id

מעדכנת את הציון

כותבת מחדש את המערך לקובץ

שיטה: Promise

4. deleteStudent(id)
קלט: מזהה סטודנט (id)

מה היא עושה:

קוראת את הקובץ וממירה למערך

מסננת החוצה את הסטודנט עם ה־id המתאים

כותבת את המערך המעודכן חזרה לקובץ

שיטה: Promise

📂 קבצים חשובים
db.txt: קובץ מקומי שמכיל את כל נתוני הסטודנטים בפורמט JSON.

main.js: קובץ הכניסה הראשי שמנהל את האינטראקציה עם המשתמש.

🧠 הערות
בפרויקט נעשה שימוש גם ב־callbacks וגם ב־promises להדגמת גישות שונות בא־סינכרוניות.

הקלט מתבצע דרך מודול readline.

המשתמש מזין רק שם וציון – id מתווסף אוטומטית.

