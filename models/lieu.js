class Lieu {

    constructor(id,libelle){
        this._id = id;
        this._libelle = libelle;
    }

    get libelle(){
        return this._libelle;
    }

    toString(){
        return 'Lieu : '+ this._libelle;
    }

}
module.exports = Lieu;