var images= ["family.jpg",
"father.png",
"me.jpg",
"mother.png",
"sister.jpg"];
var names=["Family book",
"Amit Sachdeva","Eakam Sachdeva","Pooja Sachdeva","Astha Sachdeva"];
var i=0;
function changepic(){
i++;
var number_of_family_member_in_array=4;
if(i>number_of_family_member_in_array)
{
    i=0;

}
var all_image=images[i];
var all_names=names[i];
document.getElementById("family_member_image").src=all_image;
document.getElementById("family_member_name").innerHTML=all_names;
}