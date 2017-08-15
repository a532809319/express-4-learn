var express = require('express');
var a=require("./c")
var app = express();
var path = require("path")
var listport=process.env.port||3000
console.log(a.a)
var indexRouter=require('./routers/index')
var usersRouter=require("./routers/users")
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
console.log(usersRouter)
app.use('/',indexRouter);
app.use('/users',usersRouter);
app.use('/a/:a',function(req, res, next) {
    console.log('1');
   if(req.params.a!='hukai'){
       next(new Error('不是超级管理员不能进哦'));
   }
   else {
       res.send("你好管理员")
       next()
   }

});
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('不是超级管理员不能进哦');
});
app.use(function(err,req, res, next) {
    console.log('2');
    res.status(200).end();
});
app.listen(listport,function () {
    console.log("my app is running at:"+listport)

});