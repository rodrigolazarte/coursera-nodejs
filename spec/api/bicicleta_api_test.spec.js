var Bicicleta = require('../../models/bicicleta');
var request = require('request');
var server = require('../../bin/www');

beforeEach(() => {
    console.log('testeando API...')
});

describe('Bicicleta.API', () => {
    describe('GET BICICLETAS /', () => {
        it('status 200', () => {
            expect(Bicicleta.allBicis.length).toBe(0);

            var a = new Bicicleta(1, 'rojo', 'urbana', [-26.828963, -65.200928]);
            Bicicleta.add(a);

            request.get('http://localhost:3000/api/bicicletas', function(error, response, body){
                expect(response.statusCode).toBe(200);
            });        
        });
    });

    describe('POST BICICLETAS /create', () => {
        it('status 200', (done) => {
            var headers = {'content-type' : 'application/json'};
            var aBici = '{"id": 10, "color": "rojo", "modelo": "urbana", "lat": -26, "lng": -65}';
            request.post({
                headers: headers,
                url: 'http://localhost:3000/API/bicicletas/create',
                body: aBici
            }, function(error, response, body) {
                expect(response.statusCode).toBe(200);
                expect(Bicicleta.findById(10).color).toBe("rojo");
                done();
            });    
        });
    });

    //TEST UPDATE Y DELETE

    describe('UPDATE BICICLETAS /update', () => {
        it('status 200', (done) => {
            var headers = {'content-type' : 'application/json'};
            var aBici = '{"id": 10, "color": "verde", "modelo": "mountainbike", "lat": -26, "lng": -65}';
            request.post({
                headers: headers,
                url: 'http://localhost:3000/API/bicicletas/update',
                body: aBici
            }, function(error, response, body) {
                expect(response.statusCode).toBe(200);
                expect(Bicicleta.findById(10).color).toBe("verde");
                expect(Bicicleta.findById(10).modelo).toBe("mountainbike");
                done();
            });    
        });
    });

    describe('DELETE BICICLETAS /delete', () => {
        it('status 204', (done) => {
            var headers = {'content-type' : 'application/json'};
            var aBiciId = '{"id": 10}'; 
            request.delete({
                headers: headers,
                url: 'http://localhost:3000/API/bicicletas/delete',
                body: aBiciId
            }, function(error, response, body) {
                expect(response.statusCode).toBe(204);
                done();
            });    
        });
    });
});