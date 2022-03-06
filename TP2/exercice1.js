 var text=document.getElementById("result");
var perso=[];
var joueur=[];
var adversaire=[];
var i=0;
var j=0;
var a=0;
//creation de prototype personnes
var personnage={
    initperso:function (nom,sante,force)
    this.nom=nom;
    this.sante=sante;
    this.force=force;
};
//fonction de creation de nouvelle personne 
function createp(){
    let p=Object.create(personnage);
    p.nom=prompt('inserer le nom de la personne ');
    p.force=prompt('inserer la force de la personne');
    p.sante=prompt('inserer la sante du personne');
    var descriptionpersonne=p.nom+"a"+"point de vie et"+p.force+"en force";
    perso[i]=descriptionpersonne;
    i+=1;
    //function d'affichage de toutes les personnes
    function affichep(){
        for(let i=0;i<perso.length;i++)
        {
            text.innerHTML+=perso[i]+"<br>"
        }
    }
};

//creation de prototype joueur
var joueur=object.create(personnage);
//ajouter un joueur 
    joueur.initjoueur=function (nom,sante,force){
    this.initperso(nom,sante,force) ;
    this.xp=0;

 };
