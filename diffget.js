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
    
    let u=document.createElement('table');
           u.className='table table-hover table-bordered table-danger mt-5';
           let op=
           `
           <thead class='table table-dark'>
           <tr>
           <th>language</th>
           <th>moviename</th>
           <th>available at</th>
           </tr>
           </thead>
           <tbody>`;
let c=Array.from(data);
c.forEach((x)=>{
  
    if(x.language===v)
    {
        op+=`<tr>
        <td>${x.language}</td>
        <td>${x.name}</td>
        <td>${x.availablein}</td>
        </tr>
        
        
        `
    }
    

});
u.innerHTML=op+`</tbody>`;
    console.log(u);
    m.appendChild(u);
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

