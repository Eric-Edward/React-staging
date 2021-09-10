const express = require('express');

const app = express();

app.get('/student', (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", '*');
    let data = {
        "items":
            [
                {"id": 1, "name": "Apples", "price": "$2"},
                {"id": 2, "name": "Peaches", "price": "$5"}
            ]
    }
    response.send(JSON.stringify(data));
})


app.listen(8000, () => {
    console.log('服务器启动成功！8000端口正在监听！', (error) => {
        if (!error) console.log("服务器被请求了！");
    });
})