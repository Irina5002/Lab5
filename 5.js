var num1 = "";
var num2 = "";
var deist = "";
var res = "";
document.getElementById("number").value = "97h";
function one(){
    if (deist == "")
    num1+="1"
    else num2+="1";
    document.getElementById("number").value = num1 + deist + num2;
}
function two(){
    if (deist == "")
    num1+="2"
    else num2+="2";
    document.getElementById("number").value = num1 + deist + num2;
}
function three(){
    if (deist == "")
    num1+="3"
    else num2+="3";
    document.getElementById("number").value = num1 + deist + num2;
}
function four(){
    if (deist == "")
    num1+="4"
    else num2+="4";
    document.getElementById("number").value = num1 + deist + num2;
}
function five(){
    if (deist == "")
    num1+="5"
    else num2+="5";
    document.getElementById("number").value = num1 + deist + num2;
}
function sixs(){
    if (deist == "")
    num1+="6"
    else num2+="6";
    document.getElementById("number").value = num1 + deist + num2;
}
function seven(){
    if (deist == "")
    num1+="7"
    else num2+="7";
    document.getElementById("number").value = num1 + deist + num2;
}
function eight(){
    if (deist == "")
    num1+="8"
    else num2+="8";
    document.getElementById("number").value = num1 + deist + num2;
}
function neine(){
    if (deist == "")
    num1+="9"
    else num2+="9";
    document.getElementById("number").value = num1 + deist + num2;
}
function zero(){
    if (num1!="") {
    if (deist == "")
    num1+="0"
    else num2+="0";}
    document.getElementById("number").value = num1 + deist + num2;
}
function plus(){
    if ((deist=="") && (num1!="")) deist = "+";
    document.getElementById("number").value = num1 + deist + num2;
}
function rasdel(){
    if ((deist=="") && (num1!="")) deist = "/";
    document.getElementById("number").value = num1 + deist + num2;
}
function umno(){
    if ((deist=="") && (num1!="")) deist = "x";
    document.getElementById("number").value = num1 + deist + num2;
}
function minus(){
    if ((deist=="") && (num1!="")) deist = "-";
    document.getElementById("number").value = num1 + deist + num2;
}
function delite(){
    num1 = "";
    num2 = "";
    deist = "";
    res = "";
    document.getElementById("number").value = num1 + deist + num2;
}
function result(){
        if (deist=="+") {
            res = Number(num1) + Number(num2);
            document.getElementById("number").value = res;
        }
        if (deist=="-") {
            res = Number(num1) - Number(num2);
            document.getElementById("number").value = res;
        }
        if (deist=="x") {
            res = Number(num1) * Number(num2);
            document.getElementById("number").value = res;
        }
        if (deist=="/") {
            if(num2!="0"){
            res = Number(num1) / Number(num2);
            document.getElementById("number").value = res;
            }
            else{
                document.getElementById("number").value = "ERROR"
            }
        }
}