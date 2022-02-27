var t=[1,10,30,40,5];
let n=["rami","salah","ali","emna","amira"];
let p=["test.png","test.png","test.png","test.png","test.png"];
var eleve=new Array;

function creereleve(nom,note,photo)
{
	var el={nom:nom,note:note,img:photo};
	return el;	
}

function createtable()
{
for(var i=0;i<t.length;i++)
{
	el=creereleve(n[i],t[i],p[i])
    eleve.push(el);
   
}
alert("Creation Terminée");
document.getElementById("b").innerHTML +="<button onclick='affichetable()'>Afficher tableau</button>";
document.getElementById("b").innerHTML +="<button onclick='Triertable()'>Trier tableau</button>";
}

function affiche_eleve(nom,note,img)
{
var info= "<tr><td>"+nom+"</td><td>"+note+"</td><td><img src='"+img+"' width='60' height='48'/></td></tr>";
return info;   
}

function affichetable()
{
for(var i=0;i<t.length;i++)
   {
var info=affiche_eleve(eleve[i].nom,eleve[i].note,eleve[i].img);
document.getElementById("tab").innerHTML += info;
   }
}

function Triertable()
{

eleve.sort(function compare(a, b) {
  if (a.note < b.note)
     return -1;
  if (a.note > b.note )
     return 1;
  return 0;
});
alert("tableau Triée")
//afficher un eleve au choix
var info=affiche_eleve(eleve[3].nom,eleve[3].note,eleve[3].img);
document.getElementById("eleve").innerHTML += info;

}