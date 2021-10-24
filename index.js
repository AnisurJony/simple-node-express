const express = require('express');
const cors = require('cors');
// const bodyPerser=
const app = express();

const port = process.env.PORT || 5000;


app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from my second node server, hi friends, automatic ');

});

const users = [
    { id: 0, name: 'shabana', email: 'shabana@gmail.com', phone: '01788888888' },
    { id: 1, name: 'ranana', email: 'ranana@gmail.com', phone: '01788885888' },
    { id: 2, name: 'sakib', email: 'sakib@gmail.com', phone: '01788848888' },
    { id: 3, name: 'rakib', email: 'rakib@gmail.com', phone: '01788898888' },
    { id: 4, name: 'akbar', email: 'akbar@gmail.com', phone: '01788888788' },
    { id: 5, name: 'arman', email: 'arman@gmail.com', phone: '01788883888' },
    { id: 6, name: 'rayma', email: 'rayma@gmail.com', phone: '01788088888' },
    { id: 7, name: 'srity', email: 'srity@gmail.com', phone: '01798888888' }
]
app.get('/users', (req, res) => {
    const search = req.query.search;
    // console.log(req.query.search)
    // use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users)
    }

});
// app.method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post ', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})


//dynamic api

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'bannna', 'orange', 'apple', 'pinaple'])
});

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazli');
});

app.listen(port, () => {
    console.log("listening to port", port);
});
