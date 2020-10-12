const http = require('http');
const path = require('path');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const handler = (req, res) => {
    const filename = path.join(__dirname, 'index.html');
    const indexData = fs.readFileSync(filename, 'utf-8');
    const aboutData = fs.readFileSync(path.join(__dirname, 'about.html'))
    const contectData = fs.readFileSync(path.join(__dirname, 'contect.html'))

    // res.setHeader('Content-Type', 'text/plain');
    console.log('req.url', req.url);

    const { url } = req;
    if (url === '/about') {
        res.end(aboutData);
    } else if (url === '/contect') {
        res.end(contectData);
    } else {
        res.end(indexData);
    }


};
// ทำการสร้าง server โดยใช้ `http.createServer()`
// ซึ่ง createServer รับ listener function ที่มี request และ response
// ใช้ตัวย่อ เป็น req และ res (จริงๆจะใช้ชื่ออื่นก็ได้)
const server = http.createServer(handler)
    // server.listen() เพื่อระบุ port และ hostname ถ้าเราไม่กำหนด
    // ตัว server ก็ยังไม่ start นั่นเอง
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});