class Lieu {

    constructor(id,libelle){
        this._id = id;
        this._libelle = libelle;

        Lieu.addLieu(this);
    }

    get libelle(){
        return this._libelle;
    }

    toString(){
        return 'Lieu : '+ this._libelle;
    }


    // Methods for Static Property LES_LIEUX
    static addLieu(unLieu){
        Lieu.LES_LIEUX.push(unLieu);
    }

    static removeLieu(unLieu){
        let i = Lieu.LES_LIEUX.indexOf(unLieu);
        if(i != -1) {
            Lieu.LES_LIEUX.splice(i, 1);
        }
    }
    static nbLieux(){
        return Lieu.LES_LIEUX.length;
    }

    static getLesLieux(){
        return Lieu.LES_LIEUX;
    }

    static getLesLieuxJSON(){
        let l = [];
        Lieu.LES_LIEUX.forEach(
            function(unLieu){
                l.push(JSON.parse(JSON.stringify(unLieu)));
            }
	  	);
        return l;
    }
    static chargerLieux(){
        let unlieu1 = new Lieu(1,"Nantes");
        let unLieu2 = new Lieu(2,"Orvault");
    }
}

Lieu.LES_LIEUX = [];


module.exports = Lieu;