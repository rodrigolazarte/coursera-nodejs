var Bicicleta = require('../../models/bicicleta');

beforeEach(() => {
    Bicicleta.allBicis = [];
});

describe('Bicicleta.allBicis', () => {
    it('comienza vacía', () => {
        expect(Bicicleta.allBicis.length).toBe(0);
    });
});

describe('Bicicleta.add', () => {
    it('agregamos una bicicleta', () => {
        expect(Bicicleta.allBicis.length).toBe(0);

        var a = new Bicicleta(1, 'rojo', 'urbana', [-26.828963, -65.200928]);
        Bicicleta.add(a);

        expect(Bicicleta.allBicis.length).toBe(1);
        expect(Bicicleta.allBicis[0]).toBe(a);

    });
});

describe('Bicicleta.findById', () => {
    it('encuentra bicicleta con id 1', () => {
        expect(Bicicleta.allBicis.length).toBe(0);
        var aBici = new Bicicleta(1, "verde", "mountainbike");
        var bBici = new Bicicleta(2, "naranja", "urbana");
        Bicicleta.add(aBici);
        Bicicleta.add(bBici);

        var targetBici = Bicicleta.findById(1);
        expect(targetBici.id).toBe(aBici.id);
        expect(targetBici.color).toBe(aBici.color);
    });
});

//Test de removeById

describe('Bicicleta.removeById', () => {
    it("eliminar de la lista bicicleta con id 1", () => {
        expect(Bicicleta.allBicis.length).toBe(0);
        var aBici = new Bicicleta(1, "verde", "mountainbike");
        var bBici = new Bicicleta(2, "naranja", "urbana");
        Bicicleta.add(aBici);
        Bicicleta.add(bBici);

        //Guardar id de la bici con id = 1
        var deleteBiciId = Bicicleta.allBicis[0].id;
        Bicicleta.removeById(deleteBiciId);

        //Evaluar si la bicicleta en la primera posicion tiene el id de bBici
        expect(Bicicleta.allBicis[0].id).toBe(bBici.id);

    });
});