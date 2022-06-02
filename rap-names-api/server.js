const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage':{
        'age': 29,
        'birthName': `Bri'ish` ,
        'birthLocation':'London, UK'
    },
    'chance the rapper':{
        'age': 29,
        'birthName': `Chancellor Bennett` ,
        'birthLocation':'Chicago, IL'
    },
    'dylan':{
        'age': 29,
        'birthName': `Dylan` ,
        'birthLocation':'Dylan, Dylan'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (req,res)=> {//colon signifies a query param
    const rapperName = req.params.rapperName.toLowerCase()
    if(rappers[rapperName]){
        res.json(rappers[rapperName])
    }else{
        res.json(rappers['dylan'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}`)
})