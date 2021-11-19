'use strict';

var response = require('./res');
var connection = require('./connection');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API ku berjalan!", res)
};

//menampilkan semua kegiatan berdasarkan id
exports.tampilkegiatanid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM kegiatan WHERE id_user = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//menambahkan data kegiatan
exports.tambahKegiatan = function (req, res) {
    var id_user = 1;
    var jam_ke = req.body.jam_ke;
    var catatan_kegiatan = req.body.catatan_kegiatan;
    var tanggal_dibuat = req.body.tanggal_dibuat;
    var waktu_dibuat = new Date().getTime

    connection.query('INSERT INTO kegiatan (id_user, jam_ke, catatan_kegiatan, tanggal_dibuat, waktu_dibuat) VALUES(?,?,?,?,?)',
        [id_user, jam_ke, catatan_kegiatan, tanggal_dibuat, waktu_dibuat],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};


//mengubah kegiatan berdasarkan id kegiatan
exports.editKegiatan = function (req, res) {
    var id_kegiatan = req.body.id_kegiatan;
    var jam_ke = req.body.jam_ke;
    var catatan_kegiatan = req.body.catatan_kegiatan;
    var tanggal_dibuat = req.body.tanggal_dibuat;
    var waktu_dibuat = new Date().getTime

    connection.query('UPDATE kegiatan SET jam_ke=?, catatan_kegiatan=?, tanggal_dibuat=? WHERE id_kegiatan=? ', 
        [jam_ke, catatan_kegiatan, tanggal_dibuat, id_kegiatan],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data", res)
            }
        });
}


//Menghapus data berdasarkan id
exports.hapusKegiatan = function (req, res) {
    var id = req.body.id_kegiatan;
    connection.query('DELETE FROM kegiatan WHERE id_kegiatan=?',[id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data", res)
            }
        });
}
