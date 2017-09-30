const Lieu = require('../models/lieu');

const assert = require('assert');

describe("Lieu",() => {

    describe("create Lieu",() => {
        let unlieu1;

        before(function () {
            unlieu1 = new Lieu(1,"Nantes");
        });

        it("Création d'un lieu",() => {
            assert.equal(Lieu.nbLieux(), 1, 'Problème de création');
        });

        after(function () {
            Lieu.removeLieu(unlieu1);
        });

    });
    describe("create many Lieux",() => {
        let unlieu1;
        let unlieu2;

        before(function () {
            unlieu1 = new Lieu(1,"Nantes");
            unlieu2 = new Lieu(2,"Orvault");
        });

        it("Création d'un lieu",() => {
            assert.equal(Lieu.nbLieux(), 2, 'Problème de création');
        });

        after(function () {
            Lieu.removeLieu(unlieu1);
            Lieu.removeLieu(unlieu2);
        });



    });
});