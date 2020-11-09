var Bicicleta = require('../../models/bicicleta');
var mongoose = require('mongoose');

describe('Testing bicicletas', function(){
    beforeEach(function(done){
        var mongoDB = 'mongodb://localhost/testdb';
        mongoose.connect(mongoDB, {useNewUrlParser: true });

        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', function(){
            console.log('We are connected to test database!');
            done();
        });
    });

    afterEach(function(done){
        Bicicleta.deleteMany({}, function(err, success){
            if(err) console.log(err);
            done();
        });
    });

    // describe('Bicicleta.createInstance', () => {
    //     it('crea una instancia de Bicicleta', () => {
    //         var bici = Bicicleta.createInstance(1, "verde", "urbana", [-34.5, -54.1]);

    //         expect(bici.code).toBe(1);
    //         expect(bici.color).toBe("verde");
    //         expect(bici.modelo).toBe("urbana");
    //         expect(bici.ubicacion[0]).toEqual(-34.5);
    //         expect(bici.ubicacion[1]).toEqual(-54.1);
    //     });
    // });

    // describe('Bicicleta.allBicis', () => {
    //     it('comienza vacia', (done) => {
    //         Bicicleta.allBicis(function(err, bicis){
    //             console.log("testeando allBicis")
    //             expect(bicis.length).toBe(0);
    //             done();
    //         });
    //     });
    // });

    // describe('Bicicleta.add', ()=> {
    //     it('agrega solo una bici', (done) => {
    //         var aBici = new Bicicleta({code: 1, color: "verde", modelo: "urbana"});
    //         console.log("creada aBici")
    //         Bicicleta.add(aBici, function(err, newBici){
    //             console.log("nueva bici añadida")
    //             if(err) console.log(err);
    //             Bicicleta.allBicis(function(err, bicis){
    //                 expect(bicis.length).toEqual(1);
    //                 expect(bicis[0].code).toEqual(aBici.code);

    //                 done();
    //             });
    //         });
    //     });
    // });

    // describe('Bicicleta.findByCode', () => {
    //     it('debe devolver la bici con code 1', (done) => {
    //         Bicicleta.allBicis(function(err, bicis){
    //             expect(bicis.length).toBe(0);

    //             var aBici = new Bicicleta({code: 1, color: "verde", modelo: "urbana"});
    //             Bicicleta.add(aBici, function(err, newBici){
    //                 if(err) console.log(err)
    //                 var aBici2 = new Bicicleta({code: 2, color: "rojo", modelo: "mountainbike"});
    //                 Bicicleta.add(aBici2, function(err, newBici){
    //                     if(err) console.log(err)
    //                     Bicicleta.findByCode(1, function(err, targetBici){
    //                         expect(targetBici.code).toBe(1);
    //                         expect(targetBici.color).toBe("verde");
    //                         expect(targetBici.modelo).toBe("urbana");

    //                         done();
    //                     });
    //                 });
    //             });
    //         });
    //     });
    // });
    
    describe('Bicicleta.removeByCode', () => {
        it('debe eliminar la bici con code 1', (done) => {
            Bicicleta.allBicis(function(err, bicis){
                expect(bicis.length).toBe(0);

                var aBici = new Bicicleta({code: 1, color: "verde", modelo: "urbana"});
                Bicicleta.add(aBici, function(err, newBici){
                    if(err) console.log(err)
                    var aBici2 = new Bicicleta({code: 2, color: "rojo", modelo: "mountainbike"});
                    Bicicleta.add(aBici2, function(err, newBici){
                        if(err) console.log(err)
                        Bicicleta.removeByCode(1, function(err, deletedBici){
                            expect(deletedBici.code).toBe(undefined);
                            done();
                        });
                    });
                });
            });
        });
    });
    
});

// beforeEach(() => {
//     Bicicleta.allBicis = [];
// });

// describe('Bicicleta.allBicis', () => {
//     it('comienza vacía', () => {
//         expect(Bicicleta.allBicis.length).toBe(0);
//     });
// });

// describe('Bicicleta.add', () => {
//     it('agregamos una bicicleta', () => {
//         expect(Bicicleta.allBicis.length).toBe(0);

//         var a = new Bicicleta(1, 'rojo', 'urbana', [-26.828963, -65.200928]);
//         Bicicleta.add(a);

//         expect(Bicicleta.allBicis.length).toBe(1);
//         expect(Bicicleta.allBicis[0]).toBe(a);

//     });
// });

// describe('Bicicleta.findById', () => {
//     it('encuentra bicicleta con id 1', () => {
//         expect(Bicicleta.allBicis.length).toBe(0);
//         var aBici = new Bicicleta(1, "verde", "mountainbike");
//         var bBici = new Bicicleta(2, "naranja", "urbana");
//         Bicicleta.add(aBici);
//         Bicicleta.add(bBici);

//         var targetBici = Bicicleta.findById(1);
//         expect(targetBici.id).toBe(aBici.id);
//         expect(targetBici.color).toBe(aBici.color);
//     });
// });

// //Test de removeById

// describe('Bicicleta.removeById', () => {
//     it("eliminar de la lista bicicleta con id 1", () => {
//         expect(Bicicleta.allBicis.length).toBe(0);
//         var aBici = new Bicicleta(1, "verde", "mountainbike");
//         var bBici = new Bicicleta(2, "naranja", "urbana");
//         Bicicleta.add(aBici);
//         Bicicleta.add(bBici);

//         //Guardar id de la bici con id = 1
//         var deleteBiciId = Bicicleta.allBicis[0].id;
//         Bicicleta.removeById(deleteBiciId);

//         //Evaluar si la bicicleta en la primera posicion tiene el id de bBici
//         expect(Bicicleta.allBicis[0].id).toBe(bBici.id);

//     });
// });