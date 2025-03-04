// console.log('Hello from Node.js!');
//
// console.log(__dirname);
// console.log(__filename);
//
// console.log(process.cwd());
//
// let {a, myFunc} = require('./services/test')
//
// console.log(a)
// myFunc()

////////////////////////////////////////////////////////////
// http
////////////////////////////////////////////////////////////

// const http = require('node:http');
//
// const server = http.createServer( (req, res) => {
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     if (req.url === '/cars') {
//         switch (req.method) {
//             case 'GET':
//                 return res.end(JSON.stringify({
//                     data: 'myCars'
//                 }));
//                 case 'POST':
//                     return res.end(JSON.stringify({
//                         data: 'want to create a car'
//                     }))
//         }
//     }
// })
//
// server.listen(5555);

////////////////////////////////////////////////////////////
// path
////////////////////////////////////////////////////////////

// let path = require('node:path')

// \\ c:\\myDirectory\ddd
// /cde/ddd

// let filePath = path.join(process.cwd(), 'service', 'test.js');
//
// console.log(filePath);
//
// console.log(path.basename(filePath)); // остання частина шляху
// console.log(path.dirname(filePath)); // все окрім останньої частини шляху
// console.log(path.extname(filePath)); // розширення файлу
// console.log(path.parse(filePath)); // формує обєкт про шлях
// console.log(path.normalize('\Users\///user\\\\IdeaProjects\/\nodeJs_202//\\service\',')); // нормалізація шляху
// console.log(path.isAbsolute(filePath)); // абсолютний шлях

////////////////////////////////////////////////////////////
// readLine
////////////////////////////////////////////////////////////

// let readLine = require('node:readline/promises');
//
// const start = async () => {
//
//     let rLInterface = readLine.createInterface({
//         input:process.stdin,
//         output:process.stdout
//     });
//
//     const name = await rLInterface.question('What is your name? ');
//     const age = await rLInterface.question('How old are you? ');
//
//     console.log(`Hello, ${name} - ${age}!`);
//
//     // rLInterface.close()
//
//     process.exit(0);
//
// }
//
// start()

////////////////////////////////////////////////////////////
// fs
////////////////////////////////////////////////////////////




