const express = require('express')
const mysql = require('mysql')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')

 // const PORT = process.env.PORT || 3000 //

const app = express()
const hbs = exphbs.create ( {
  defaultlayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(todoRoutes)

       const connection = mysql.createConnection({
         host: "localhost",
         user: "root",
         database: "Mysql",
         password: "root"
       });
       connection.connect(function(err){
         if (err) {
        return console.error("Ошибка: " + err.message);
      }
      else{
      console.log("Подключение к серверу MySQL успешно установлено");
      }
    });
