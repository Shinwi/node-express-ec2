import express from 'express'

const app = express()

app.listen(5001, () => {
    console.log('Hey there. We are running now innit mate')
})

app.get('/', (req, res) => {
    res.json('Api is running like craazyyy wowww')
})

app.get('/karta', (req, res) => {
    console.log(req)
    res.json('OK we are loooking for ur karta mate')
})