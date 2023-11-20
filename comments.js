//create web server

var app = express();
var fs = require('fs');

//set up handlebars view engine
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
//set port
app.set('port',process.env.PORT || 3000);

//static middleware
app.use(express.static(__dirname + '/public'));

//get all comments
app.get('/comments',function(req,res){
	res.type('text/plain');
	res.send('Comments page');
});

//custom 404 page
app.use(function(req,res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});

//custom 500 page
app.use(function(err,req,res,next){
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server Error');
});

app.listen(app.get('port'),function(){
	console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

//create fibbonacci sequence using recursion
function fib(n) {
    if (n < 2)
        return n;
    else
        return fib(n-1) + fib(n-2);
}