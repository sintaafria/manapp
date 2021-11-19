'use strict';
module.exports = function (app) {
    var jsonku = require('./controller');
        
    app.route('/tampilkegiatan/:id')
        .get(jsonku.tampilkegiatanid);

    app.route('/tambahkegiatan')
        .post(jsonku.tambahKegiatan);

    app.route('/editkegiatan')
        .put(jsonku.editKegiatan);

    app.route('/hapuskegiatan')
        .delete(jsonku.hapusKegiatan);
}