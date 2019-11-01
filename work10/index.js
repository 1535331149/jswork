function monkey(){
    let total = document.getElementById("monkeytotal").value
    let kick = document.getElementById("monkeykick").value
    total = parseInt(total)&&Number(total)
    kick = parseInt(kick)&&Number(kick)
    if(isNaN(total)||isNaN(kick)){
        alert('请输入数字')
        return
    }
    let monkey=[]
    for(let i=1;i<=total;i++){
        monkey.push(i)
    }
    let i=0
    while(monkey.length>1){
        i++;
        head = monkey.shift()
        if(i%kick!=0){
            monkey.push(head);
        }
    }
    document.getElementById('monkeyking').innerHTML = monkey[0]
}
function stat(){
    let str = document.getElementById("str").value
    let obj = {};
    var juzi = str.split("");
    juzi = juzi.sort();
    for(var i=0;i<str.length;i++){
        var zifu=juzi[i];
        obj[zifu]=(obj [zifu]+1)||1;
    }
    document.getElementById("result").innerText = JSON.stringify(obj)

}




