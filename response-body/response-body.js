/*
Response Body
Header respons menampung informasi terkait respons yang diberikan oleh server. 
Informasi dapat berupa status respons, MIME types, tanggal, atau informasi lainnya yang mungkin dibutuhkan 
oleh client. 

Walaupun kita bisa memberikan informasi apa pun, namun tidak semua informasi cocok disimpan di header. 
Informasi pada header hanya sebagai metadata atau informasi yang menjelaskan tentang sebuah data lain (data utama).

Selain header, HTTP respons juga membawa body (Anda mengetahui ini pada materi pola komunikasi client dan server). 
Di dalam body inilah data utama (atau bisa kita sebut konten) seharusnya disimpan.

Ketahuilah bahwa objek response yang berada pada parameter fungsi request listener adalah instance dari 
http.serverResponse. Di mana ia merupakan WritableStream. Masih ingat cara menulis data pada WritableStream? 
Nah, cara itulah yang digunakan untuk menuliskan data pada body response.

Seperti objek WritableStream lainnya, untuk menuliskan data pada respons kita bisa gunakan 
method response.write() dan diakhiri dengan method response.end().
*/
const requestListener = (request, response) => {
    response.write('<html>');
    response.write('<body>');
    response.write('<h1>Hello, World!</h1>');
    response.write('</body>');
    response.write('</html>');
    response.end();
};

/*
Seperti yang sudah Anda ketahui juga, method end() pada WritableStream dapat digunakan 
untuk menulis data terakhir sebelum proses penulisan diakhiri. 
Jadi, untuk kasus di atas dapat dipersingkat penulisannya menjadi seperti ini.
*/
const requestListener = (request, response) => {
    response.end('<html><body><h1>Hello, World!</h1></body></html>');
};

/*
Latihan Mengubah Data pada Body Response
Di latihan sebelumnya Anda sudah mengubah properti Content-Type pada header menjadi application/json. 
Namun untuk konten yang dikirim server pada body, masih berformat HTML. Nah, pada latihan kali ini kita 
akan mengubah konten pada body menjadi format JSON. Ayo kita eksekusi!

Pastikan Anda sudah tahu dan paham apa itu dan bagaimana penulisan JSON. Bila tidak, 
silakan ulas kembali materi format request dan response.

Ketentuannya begini, setiap JSON yang akan kita kirimkan harus memiliki message. 
Nilai properti message akan diisi dengan pesan yang sebelumnya kita berikan dalam format HTML. 
Untuk lebih jelasnya, berikut contoh response body ketika client meminta halaman yang tidak ditemukan.
*/
{
    "message": "Halaman tidak ditemukan!"
}

/*
Sudah paham? Yuk langsung saja kita buka kembali server.js.

Kita ubah konten yang mudah dahulu yah, lebih tepatnya ketika client mengakses halaman yang tidak ditemukan. 
Silakan ubah kode ini:
*/
response.end('<h1>Halaman tidak ditemukan!</h1>');

//Menjadi:

response.end(JSON.stringify({
    message: 'Halaman tidak ditemukan!',
}));

/*
Karena response.end() menerima string (atau buffer), maka kita perlu mengubah objek JavaScript menjadi 
JSON string menggunakan JSON.stringify().

Mari kita coba dulu perubahan yang ada. Simpan perubahan pada berkas server.js; jalankan ulang server 
dengan perintah npm run start; dan coba lakukan permintaan ke alamat selain ‘/’ atau ‘/about’. 
Seharusnya, server akan merespons konten dengan format JSON.

Mantap! Silakan lanjut ubah format pesan untuk respons yang lain juga yah. 
Hingga fungsi request listener pada server.js tampak seperti ini:
*/
const http=require('http');

const requestListener=(request, response)=>{
	response.setHeader('Content-Type','appication/json');
	response.setHeader('X-Powered-By','NodeJS');


	const {method, url}=request;

	if(url==='/'){
		if(method==='GET'){
			response.statusCode=200;
			response.end(JSON.stringify({
				message:'ini adalah homepage',	
			}));
		}else{
			response.statusCode=400;
			response.end(JSON.stringify({
				message:`halaman tidak dapat diakses dengan ${method} request`,
			}));
		}
	} else if(url==='/about'){
		if(method==='GET'){
			response.statusCode=200;
			response.end(JSON.stringify({
				message:'ini adalah halaman about',	
			}));
		} else if(method==='POST'){
			let body=[];

			request.on('data',(chunk)=>{
				body.push(chunk);
			});

			request.on('end',()=>{
				body=Buffer.concat(body).toString();
				const {name} = JSON.parse(body);
				response.statusCode=200;
				response.end(JSON.stringify({
					message:`Hai, ${name}! ini adalah halaman about`,	
				}));		
			});
		} else{
			response.statusCode=400;
			response.end(JSON.stringify({
				message:`halaman tidak dapat diakses dengan ${method} request`,	
			}));
		}

	} else{
		response.statusCode=404;
		response.end(JSON.stringify({
			message:'halaman tidak ditemukan!',
		}));
	}

	

};	

const server=http.createServer(requestListener);

const port=5000;
const host='localhost';

server.listen(port, host,()=>{
	console.log(`server berjalan pada http://${host}:${port}`);
});

/*
Well done! Simpan perubahan pada berkas server.js; jalankan ulang server dengan perintah npm run start; 
dan coba lakukan lagi permintaan ke server menggunakan cURL. Server saat ini akan merespon dengan JSON sepenuhnya.
*/
curl -X GET http://localhost:5000/
// output: {"message":"Ini adalah homepage"}
curl -X GET http://localhost:5000/about
// output: {"message":"Halo! ini adalah halaman about"}
curl -X DELETE http://localhost:5000/
// output: {"message":"Halaman tidak dapat diakses dengan DELETE request"}