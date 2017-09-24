const Lieu = require('../models/lieu');

const assert = require('assert');

describe("Lieu",() => {

    describe("create Lieu",() => {
        let unlieu1;


        before(function () {
            unlieu1 = new Lieu(1,"Nantes");

        });

        it("Création d'un lieu",() => {
            assert.equal(unlieu1.libelle, 'Nantes', 'Problème de création');
        });


    });
});