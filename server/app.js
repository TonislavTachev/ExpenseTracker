let express = require('express');
let app = express();
const db = require('./config/db');

//init DB
db();

//init middleware
app.use(express.json({extended: false}));

app.use('/calc/expenses', require('./routes/expenses'));
app.use('/calc/profit', require('./routes/profit'));
app.use('/calc/balance', require('./routes/balance'));

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
})