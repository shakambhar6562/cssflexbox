//challenge 1
function ageindays()
{
    var Years=prompt("Enter year were you born");
    var currentYear= new Date().getFullYear();
    var result=(currentYear-Years)* 365;
    var h1=document.createElement('h1');
    var textanswer=document.createTextNode('You are ' + result + ' days old');
    h1.setAttribute('id','ageIndays');
    h1.appendChild(textanswer);
    document.getElementById("flex-box-result").appendChild(h1);
}
function reset()
{
    document.getElementById("ageIndays").remove();
}

function generate()
{
    var image=document.createElement('img');
    image.setAttribute('id','flex-box-container-2-sub-img')
    var div =document.getElementById("flex-box-container-2-sub");
    image.src="https://media3.giphy.com/media/ICOgUNjpvO0PC/giphy.gif";
    div.appendChild(image)

}
function reset2()
{
    document.getElementById("flex-box-container-2-sub-img").remove();
}