const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');

    const KwsState = [
        'KWS_KERIDOS',
        'KWS_KERIDOS_YG',
        'UNKNOWN',
        'ERROR',
    ];

    function generateData() {
        const responseData = [];
        for (let index = 0; index < 45; index++) {
            responseData.push({
                id: index,
                state: KwsState[Math.floor(Math.random() * 4)],
                timeStamps: new Date(),
            });
        }

        return responseData;
    }

    res.end(JSON.stringify(generateData()));
});

server.listen(port, hostname, () => {
    console.log(`Server running on port ${port}`);
});