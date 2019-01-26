const express = require('express');

const PORT = process.env.PORT || 5000;
// initialize our express app
const app = express();


app.use('/',(req,res)=>{
    res.send('Server Running')
});
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))


