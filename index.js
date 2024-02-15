const express = require('express');
const { request } = require('http');

const app = express();

app.get('/',(request,response)=>{
        return response.json({message: 'serveris up'});

})

app.listen(3333)