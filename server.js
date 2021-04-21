const http=require('http');

const requestListener=(request, response)=>{
	response.setHeader('Content-Type','text/html');


	const {method, url}=request;

	if(url==='/'){
		if(method==='GET'){
			response.statusCode=200;
			response.end('<h1>ini adalah homepage</h1>');
		}else{
			response.statusCode=400;
			response.end(`<h1>halaman tidak dapat diakses dengan ${method} request</h1>`);
		}
	} else if(url==='/about'){
		if(method==='GET'){
			response.statusCode=200;
			response.end('<h1>ini adalah halaman about</h1>');
		} else if(method==='POST'){
			let body=[];

			request.on('data',(chunk)=>{
				body.push(chunk);
			});

			request.on('end',()=>{
				body=Buffer.concat(body).toString();
				const {name} = JSON.parse(body);
				response.statusCode=200;
				response.end(`<h1>Hai, ${name}! ini adalah halaman about</h1>`);		
			});
		} else{
			response.statusCode=400;
			response.end(`<h1>halaman tidak dapat diakses dengan ${method} request</h1>`);
		}

	} else{
		response.statusCode=404;
		response.end('<h1>halaman tidak ditemukan</h1>');
	}

	

};	

const server=http.createServer(requestListener);

const port=5000;
const host='localhost';

server.listen(port, host,()=>{
	console.log(`server berjalan pada http://${host}:${port}`);
});