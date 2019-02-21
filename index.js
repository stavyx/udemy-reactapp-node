const express = require ('express');
const app = express();
//transfers the info into the express and move it to the model route reply
const PORT = process.env.PORT || 5000 ; //PORT DEFINTION AND PROTECTION IDK


app.get('/', (req,res) => {
res.send({hi: 'there'});
});
//route handlear with express

app.listen(PORT);
//http://localhost:5000/


