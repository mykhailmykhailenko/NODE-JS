const fs = require('fs').promises;

/*
Прочитати дані з userData.json
На основі розпарсених даних вивести в файл text.txt рядок тексту типу
"Hello, {firstName} {lastName}"
*/

const promise = fs.readFile('./userData.json', 'utf-8')
.then (promiseValue => {
    const obj =JSON.parse(promiseValue);
    const fileText = `Hallo, ${obj.firstName} ${obj.lastName}`
    fs.writeFile('./text.txt', fileText)
})