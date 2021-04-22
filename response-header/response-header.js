/*
Response Header
Pada web server yang sudah kita buat, ia memberikan respons dengan format dokumen HTML. Dokumen ini digunakan 
oleh browser dalam menampilkan website. Anda bisa melihat ini ketika mengakses web server melalui browser. 

Pada url http://localhost:5000 server akan mengembalikan pesan “Ini adalah homepage” atau 
pada url http://localhost:5000/about server akan mengembalikan pesan “Halo! Ini adalah halaman about”. 
Pesan yang ditampilkan tampak besar dan tebal karena ia dibungkus oleh elemen heading HTML.

Sebenarnya, server bisa merespons dengan memberikan data dalam tipe (MIME types) lain, seperti XML, JSON, 
gambar, atau sekadar teks biasa. Apa pun MIME types yang digunakan, web server wajib memberi tahu pada client. 

Caranya, lampirkan property ‘Content-Type’ dengan nilai MIME types yang disisipkan pada header response. 
Untuk menyisipkan nilai pada header response, gunakanlah method setHeader().
*/
const requestListener=(request,response)=>{
	response.setHeader('Content-Type','text/html');
};

/*
Anda bisa menetapkan data pada header sebanyak yang diinginkan. 
Method setHeader() menerima dua parameter, yakni nama properti dan nilai untuk headernya.
*/
const requestListener=(response,request)=>{
	response.setHeader('Content-Type','text/html');
	response.setHeader('X-Powered-By','NodeJS');
};

/*
Jika Anda menetapkan header dengan properti yang tidak standar (lihat apa saja standard properti pada header) 
atau Anda buat nama propertinya secara mandiri, maka sangat disarankan untuk menambahkan huruf X di awal 
nama propertinya. 

Ketahuilah juga bahwa penulisan properti header dituliskan secara Proper Case atau setiap kata diawali dengan
huruf kapital dan setiap katanya dipisahkan oleh tanda garis (-).
*/

/*
Latihan mengubah dan menambah nilai header response
Mari kita latihan! 

Saat ini web server yang kita buat menampilkan format HTML dalam mengirimkan respons ke client. 
Nah, pada latihan kali ini kita akan mengubah format HTML menjadi format JSON. Selain itu, 
kita akan tambahkan properti X-Powered-By pada header untuk memberitahu client teknologi server apa 
yang kita gunakan. 

Latihan ini akan sangat mudah. Jadi, yuk langsung saja!

Buka kembali berkas server.js dan lihat kode apa yang sekiranya perlu kita ubah untuk memberi tahu server 
bahwa kita akan menggunakan JSON untuk responnya?

Jika Anda mengira kode ini:
response.setHeader('Content-Type', 'text/html');

Tebakan Anda tepat sekali!

Seperti yang sudah Anda ketahui, properti header ‘Content-Type’ berfungsi untuk memberi tahu client seperti 
apa ia harus menampilkan data. 

Contoh dengan nilai ‘text/html’, client khususnya browser akan menampilkan data yang dikirim oleh respons 
akan di-render atau ditampilkan dalam bentuk HTML. Itulah mengapa pesan respons tampak besar ketika 
melakukan request menggunakan browser.

Karena kita ingin mengubah Content-Type menjadi JSON, maka ubah text/html menjadi application/json. 
*/
response.setHeader('Content-Type','application/json');

//selanjutnya, tetapkan uga nilai property X-Powered-By dengan nilai "NodeJS"

response.setHeader('Content-Type','application/json');
response.setHeader('X-Powered-By','NodeJS');

/*
Simpan perubahan pada berkas server.js; jalankan ulang server dengan perintah npm run start; 
dan coba lakukan lagi permintaan ke server menggunakan cURL.

Anda bisa lihat, sekarang nilai Content-Type berubah menjadi ‘application/json’. 
Selain itu, ada properti header baru yang kita tetapkan, yakni X-Powered-By dengan nilai ‘NodeJS’.

Oh ya, karena server tidak lagi mengirimkan konten dalam bentuk HTML, maka browser tidak akan lagi 
menampilkan dalam bentuk HTML. Coba buka http://localhost:5000 melalui browser. Sekarang konten HTML 
tidak lagi ter-render.

Dengan begitu, memberikan pesan dalam format HTML sudah tidak relevan lagi. 
Kita akan mengubahnya menjadi format JSON. Tapi sabar, kita tak akan lakukan itu sekarang. 
Kita pelajari dahulu lebih dalam bagaimana cara mengirimkan body respons pada server.
*/