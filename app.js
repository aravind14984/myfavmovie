document.getElementById('telugu').addEventListener('click',dataget);
function dataget()
{
    let xhr=new XMLHttpRequest();
    xhr.open('GET','data.json',true);
    let a='';
    xhr.onload=function()
    {
        if(this.status=200)
        {
           let a=JSON.parse(this.responseText);
           let b=Array.from(a);
           console.log(b);
           let u=document.createElement('table');
           u.className='table table-hover mt-5';
           let op=
           `
           <thead class='table table-dark'>
           <tr>
           <th>language</th>
           <th>moviename</th>
           <th>body</th>
           <tr>
           </thead>
           <tbody>`;
           b.forEach(function(x)
           {
                if(x.language==='telugu')
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
            let s=document.querySelector('.container');
            s.appendChild(u);
            
             
        }
    }
    xhr.send();
   

    
}



