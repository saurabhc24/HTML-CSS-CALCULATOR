function dis(val){
    document.getElementById("display").value+=val
}

function solve(){
    let x = document.getElementById("display").value
    let y = eval(x)
    document.getElementById("display").value = y
}

function ac(){
document.getElementById("display").value = ""
}

function clr(){
    var value = document.getElementById("display").value;
    document.getElementById("display").value = value.slice(0, -1);
}
