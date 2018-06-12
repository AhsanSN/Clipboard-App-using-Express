var commonHeader = { 'Content-Type': 'html' };
const render = require('./render');
var qs = require('querystring');

function home(req, res)
{
	res.writeHead(200, commonHeader);
	//home page
	if (req.url == "/Clipboard")
	{
		res.write("you are viewing clipboard");
		res.end();
	}
	if (req.method == 'POST') {
        var body = '';

        req.on('data', function (data) {
            body += data;
            if (body.length > 1e6)
                req.connection.destroy();
        });

        req.on('end', function () {
            var post = qs.parse(body);
            var name = post['message']
            render.view("header",{}, res);
            render.view("success_message",{}, res);
            render.view("home",{}, res);
            res.end();
        });
    }
    else{
    	render.view("header",{}, res);
    	render.view("home",{}, res);
		res.end();
    }
}

module.exports.home = home;
