/*
Method/Verb Request
Web server yang sudah kita buat pada latihan sebelumnya sudah berhasil merespons dan menampilkan data 
dalam dokumen HTML. Namun, tahukah Anda bahwa web server yang kita buat belum mengenali sepenuhnya 
permintaan yang diberikan oleh client? 

Maksudnya, meskipun client meminta dengan path atau method yang berbeda, server akan merespons dengan 
data yang sama. Server kita saat ini tidak peduli permintaan datang seperti apa, dia akan mengembalikan 
data yang sama. Anda bisa mencobanya sendiri melalui cURL dengan menggunakan HTTP method yang berbeda.
*/
curl -x POST http://localhost:5000
// output: <h1> Halo HTTP Server!</h1>
curl -X PUT http://localhost
// output: <h1> Halo HTTP Server!</h1>
curl -X DELETE http://localhost:5000
// output: <h1> Halo HTTP Server!</h1>
curl -X GET http://localhost:5000
// output: <h1> Halo HTTP Server!</h1>

/*
Hal tersebut wajar karena kita memang belum menuliskan logika dalam menangani permintaan dari method yang berbeda. 
Lalu, bagaimana caranya agar bisa melakukan hal tersebut?

Fungsi request listener menyediakan dua parameter yakni request dan response. 
Fokus ke parameter request, parameter ini merupakan instance dari http.ClientRequest yang memiliki banyak 
properti di dalamnya. 

Melalui properti-propertinya ini kita dapat mengetahui seperti apa karakteristik dari permintaan HTTP 
yang dilakukan oleh client. Seperti method yang digunakan, path atau alamat yang dituju, 
data yang dikirimkan (bila ada), dan informasi lain mengenai permintaan tersebut.

Untuk mendapatkan nilai method dari request, gunakanlah properti request.method seperti ini:
*/
const requestListener=(request,response)=>{
	const method=request.method;
};

/*
Properti method bernilai tipe method dalam bentuk string. Nilainya dapat berupa “GET”, “POST”, “PUT”, 
atau method lainnya sesuai dengan yang client gunakan ketika melakukan permintaan. 
Dengan memiliki nilai method, kita bisa memberikan respons berbeda berdasarkan tipe method-nya.
*/
const requestListener=(request,response)=>{
	const {method}=request;

	if(method==='GET'){
		//response ketika GET
	}
	if(method==='POST'){
		//response ketika post
	}

	//anda bisa mengevaluasi tipe method lainnya
};

/*
Sekali lagi, tidak hanya properti method, objek request kaya akan properti dan fungsi lain di dalamnya. 
Anda dapat mengeksplorasi properti atau fungsi lainnya pada halaman dokumentasi Node.js tentang 
HTTP Client Request.
*/

