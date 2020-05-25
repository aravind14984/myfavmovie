
function gettingall()
{

}
gettingall.prototype.alldata=()=>
{
    return new Promise((resolve,reject)=>{
        fetch('data.json').then((a)=>
    {
       
       resolve(a.json());
    }).catch((c)=>reject('error found'));
    });
    

}




