document.getElementById('telugu').addEventListener('click',function(e)
{
    dataget('telugu');
    //removetable();
    e.preventDefault();
});
document.getElementById('hindi').addEventListener('click',function(e)
{
    dataget('hindi');
    //removetable();
    e.preventDefault();
});
document.getElementById('kannada').addEventListener('click',function(e)
{
    dataget('kannada');
    //removetable();
    e.preventDefault();
});
document.getElementById('Tamil').addEventListener('click',function(e)
{
    dataget('tamil');
    //removetable();
    e.preventDefault();
});
document.getElementById('Malyalam').addEventListener('click',function(e)
{
    dataget('malyalam');
   // removetable();
    e.preventDefault();
});
document.getElementById('English').addEventListener('click',function(e)
{
    dataget('english');
   // removetable();
    e.preventDefault();
});
document.getElementById('Wenglish').addEventListener('click',function(e)
{
    dataget('wenglish');
    //removetable();
    e.preventDefault();
});
document.getElementById('Whindi').addEventListener('click',function(e)
{
    dataget('whindi');
    //removetable();
    e.preventDefault();
});
function dataget(v){
let a=new gettingall();
let b=a.alldata().then((data)=> {
    console.log(data);
    let m=document.createElement('div');
    m.className="alert border-dark alert-dismissible";
   
    let d=document.createElement('button');
    d.className="close";
    d.setAttribute('data-dismiss','alert');
    d.innerHTML=`<span>&times;</span>`;
    m.appendChild(d);
    
           let a1=document.createElement('div');
           a1.className="card-columns";
         
let c=Array.from(data);
let op='';
c.forEach((x)=>{
  
    if(x.language===v)
    {
      op+=`
        <div class="card ">
        <img class="card-img-top" src="${x.image}">
        <div class="card-body">
        <h5 class="card-title bg-dark text-center text-capitalize font-weight-bold text-light text-nowrap">${x.name}</h1>
        <footer class="text-justify text-center text-capitalize font-weight-bold bg-dark text-light text-nowrap mb-1">${x.availablein}</p> 
        </div>
        </div>`;
    }
    

});
console.log(op);

a1.innerHTML=op;

    

   
    m.appendChild(a1);
    console.log(m);
    let s=document.querySelector('.container');
    s.appendChild(m);
   




}).catch((error)=>console.log(error));

}
/*function removetable()
{
    
setTimeout(function()
{
    document.querySelector('table').remove();

},5000);
}*/

