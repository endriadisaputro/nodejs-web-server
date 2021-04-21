/*
Routing Request
Ketika menangani request, hal yang perlu kita cek selain method adalah URL atau alamat yang dituju 
dari request tersebut. Sebagai contoh, ketika kita mengunjungi dicoding.com dan dicoding.com/about, 
tentu hasil yang kita terima dari server akan berbeda, bukan? 

Request ke dicoding.com akan menampilkan homepage Dicoding, sedangkan dicoding.com/about akan 
menampilkan halaman tentang Dicoding. Teknik ini dinamakan dengan routing. Routing merupakan 
istilah dalam menentukan respons server berdasarkan path atau url yang diminta oleh client.

Dalam http.clientRequest, untuk mendapatkan nilai url sangatlah mudah, semudah kita mendapatkan 
nilai request method yang digunakan.
*/
const requestListener=(request,response)=>{
	const {url}=request;
};

/*
Properti url akan mengembalikan nilai path secara lengkap tanpa host dan port yang digunakan server. 
Contohnya, bila client meminta pada alamat http://localhost:5000/about atau http://localhost:5000/about/, 
maka url akan bernilai ‘/about’; bila meminta alamat http://localhost:5000 atau http://localhost:5000/, 
maka url akan bernilai ‘/’.

Dengan mendapatkan nilai url, kita dapat merespons client sesuai dengan path yang ia minta.
*/
const requestListener=(request,response)=>{
	const {url}=request;

	if(url==='/'){
		// curl http://localhost:5000/
	}
	if(url==='/about'){
		// curl http://localhost:5000/about
	}

	// curl http://localhost:5000/<any>
};

/*
Kita juga bisa mengombinasikan evaluasi dengan method request. 
Alhasil, kita dapat menentukan respons lebih spesifik lagi.
*/
const requestListener=(request,response)=>{
	const {method, url}=request;

	if(url==='/'){
		if(method==='GET'){
			// curl -X GET http://localhost:5000/
		}

		// curl -X <any> http://localhost:5000/
	}

	if(url==='/about'){
		if(method==='GET'){
			// curl -X GET http://localhost:5000/about
		}
		if(method==='POST'){
			// curl -X POST http://localhost:5000/about
		}

		// curl -X <any> htpp://localhost:5000/about/<any>
	};
}

/*
Latihan Routing Request
Saatnya kita latihan lagi yuk! Karena saat ini Anda sudah paham bagaimana cara menangani request 
berdasarkan URL yang diminta, mari buat web server kita agar dapat menangani respons yang lebih 
spesifik berdasarkan URL dan method request. Berikut tugas atau ketentuan yang akan kita gunakan:

URL: ‘/’
Method: GET
Mengembalikan “Ini adalah homepage”.
Method: <any> (selain GET)
Mengembalikan “Halaman tidak dapat diakses dengan <any> request”.

URL: ‘/about’
Method: GET
Mengembalikan “Halo! Ini adalah halaman about”.
Method: POST (dengan melampirkan data name pada body)
Mengembalikan “Halo, <name>! Ini adalah halaman about”.
Method: <any> (selain GET dan POST)
Mengembalikan “Halaman tidak dapat diakses dengan <any> request”.
URL: <any> (selain / dan /about)
Method: <any>
Mengembalikan “Halaman tidak ditemukan!”.
*/