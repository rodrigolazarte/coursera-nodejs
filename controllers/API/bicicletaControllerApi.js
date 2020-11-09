var Bicicleta = require('../../models/bicicleta');

exports.bicicleta_list = function(req, res){
    Bicicleta.find({}, function(err, bicis){
        res.status(200).json({
            bicis: bicis
        });
    });
}

exports.bicicleta_create = function(req, res){
    var bici = new Bicicleta({code: req.body.code, color: req.body.color, modelo: req.body.modelo});
    bici.ubicacion = [req.body.lat, req.body.lng];

    bici.save(function(err){
        res.status(200).json({
            bici
        });
    })
}

exports.bicicleta_delete = function(req, res){
    Bicicleta.removeById(req.body.id);
    res.status(204).send();
}

exports.bicicleta_update = function(req, res){
    var bici = Bicicleta.findById(req.body.id);
    bici.id = req.body.id;
    bici.color = req.body.color;
    bici.modelo = req.body.modelo;
    bici.ubicacion = [req.body.lat, req.body.lng];

    res.status(200).send();
}