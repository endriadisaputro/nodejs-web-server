/*
HTTP module memiliki banyak member seperti objek, properti, atau method yang berguna untuk melakukan 
hal-hal terkait protokol HTTP. Salah satu member yang penting untuk kita ketahui sekarang adalah 
method http.createServer().

Sesuai namanya, method ini berfungsi untuk membuat HTTP server yang merupakan instance dari http.server. 
Method ini menerima satu parameter custom callback yang digunakan sebagai request listener. 
Di dalam request listener inilah logika untuk menangani dan menanggapi sebuah request dituliskan.
*/
const http = require('http');

/*
* logika untuk menangani dan menanggapi rquest dituliskan pada fungsi ini
*
* @param request: object yang berisikan informasi terkait permintaan
* @param reponse: object yang digunakan untuk menanggapi permintaan
*/
const requestListener=(request, reponse)=>{

};

const server=http.createServer(requestListener);

/*
Request listener memiliki 2 parameter, yakni request dan response. 
Seperti yang tertulis pada contoh kode di atas, request merupakan objek yang menyimpan 
informasi terkait permintaan yang dikirimkan oleh client. Di dalam objek ini kita bisa 
melihat alamat yang diminta, data yang dikirim, ataupun HTTP metode yang digunakan oleh client.

Sementara itu, response merupakan objek yang digunakan untuk menanggapi permintaan. 
Melalui objek ini kita bisa menentukan data yang diberikan, format dokumen yang digunakan, 
kode status, atau informasi response lainnya.
*/
const requestListener=(request,response)=>{
	response.setHeader('Content-Type','text/html');

	response.statusCode=200;
	response.end('<h1>halo HTTTP Server!</h1>');
};


/*
Kode di atas merupakan contoh logika yang bisa dituliskan di dalam request listener. 
Request listener akan menanggapi setiap permintaan dengan dokumen HTML, kode status 200, dan 
menampilkan konten “Halo HTTP Server!”.

Lalu, bagaimana caranya agar server selalu sedia menangani permintaan yang masuk? 
Setiap instance dari http.server juga memiliki method listen(). Method inilah yang membuat 
http.server selalu standby untuk menangani permintaan yang masuk dari client. 
Setiap kali ada permintaan yang masuk, request listener akan tereksekusi.

Method listen() dapat menerima 4 parameter, berikut detailnya:

port (number) : jalur yang digunakan untuk mengakses HTTP server.
hostname (string) : nama domain yang digunakan oleh HTTP server.
backlog (number) : maksimal koneksi yang dapat ditunda (pending) pada HTTP server.
listeningListener (function) : callback yang akan terpanggil ketika HTTP server sedang bekerja (listening).

Namun, keempat parameter di atas bersifat opsional. Kita bisa memberikan nilai port saja, 
atau kombinasi apa pun dari keempatnya. Hal itu tergantung terhadap kebutuhan Anda. 
Namun lazimnya, ketika memanggil method listen() kita memberikan nilai port, hostname, dan listeningListener.
*/
const port=5000;
const host='localhost';

server.listen(port, host,()=>{
	console.log(`server berjalan pada http://${host}:${port}`);
});