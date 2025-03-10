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

// const afs = require('node:fs/promises');
// const fs = require('node:fs');
// const readline = require('node:readline/promises');
//
// const path = require('node:path');
//
// const start = async ()=>{
//     // await fs.mkdir(path.join('storage', 'files'), {recursive:true})
//     const filePath = path.join('storage', 'addddd.txt');
//     // await fs.writeFile(filePath, 'Hello1\n')
//     // await fs.appendFile(filePath, 'Hello2\n')
//     // const arrayBufferLikeBuffer = await fs.readFile(filePath, {encoding:'utf-8'});
//     // console.log(arrayBufferLikeBuffer);
//     // await fs.rename(filePath, path.join(process.cwd(),'storage', 'asd','myFile2.txt'))
//     // await fs.rename(filePath, path.join(path.dirname(filePath), 'addddd.txt'))
//     // await fs.copyFile(filePath, path.join(path.dirname(filePath),'MyFile.txt') )
//     // await fs.rm(path.join(process.cwd(), 'storage'), {recursive:true})
//     // await fs.unlink('1111.txt')
//     // const stats = await fs.stat('services');
//     // console.log(stats.isDirectory());
//
//     // const fileStream = fs.createReadStream(filePath, 'utf-8');
//     // const rl = readline.createInterface({input:fileStream});
//     // try {
//     //     for await (const line of rl){
//     //         await afs.appendFile('res.txt', `${line}-----------\n`)
//     //     }
//     // }finally {
//     //     await rl.close()
//     // }
//     // const readStream = fs.createReadStream('kostyli.jpg');
//     // const writeStream = fs.createWriteStream('123.jpg');
//     // // readStream.on('data', (chunk)=>{
//     // //     writeStream.write(chunk)
//     // // })
//     // readStream.pipe(writeStream)
// }
//
// start()



//////////////////////////////////////////////////////////
// os
//////////////////////////////////////////////////////////

// const os = require('node:os');
//
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.totalmem()/1024/1024/1024);
// console.log(os.freemem()/1024/1024/1024);
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.release());
// console.log(os.tmpdir());
// console.log(os.type());
// console.log(os.uptime());
// console.log(os.userInfo());
// console.log(os.version());
// console.log(os.networkInterfaces());
// console.log(os.platform());

//////////////////////////////////////////////////////////
// events
//////////////////////////////////////////////////////////

const emitter = require('node:events');

const em = new emitter.EventEmitter();

em.on('fcall', ()=>{
    console.log('fcall');
})

// em.on('scall', (name, age)=>{
//     console.log('scall',name, age);
// })
em.once('scall', (name, age)=>{
    console.log('scall',name, age);
})

em.emit('scall', 'Max', 15)
em.emit('scall', 'Max', 15)
em.emit('scall', 'Max', 15)

