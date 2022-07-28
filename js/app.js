fetch('http://127.0.0.1:8000/api/books').then((data)=>{
    return data.json();
}).then((completed)=>{
        // console.log(completed[3].price);
        // document.getElementById('root').innerHTML=completed[3].title;
        let data1 ="";
        completed.map((values)=>{
            data1+=`

            <div class="col-md-4">
            <div class="box " style="height:90%;">
               <img src="${values.cover_image}" alt="" class="img-fluid" style="height: 200px ;">
               <div class="detail-box">
                  <h5>
                  ${values.title}
                  </h5>
                  <p>
              
                  </p>
                  <a href="http://www.africau.edu/images/default/sample.pdf" target="_blank" >Read Now</a>
               </div>
            </div>
         </div>
           

        
            `;
        });
        document.getElementById("root").innerHTML=data1;

}).catch((err)=>{
    console.log(err);
}
)

{/* <div class="card">
<img src="${values.cover_image}" class="card-img-top" alt="..." ">
<div class="card-body">
  <h5 class="card-title">${values.title} </h5>
  <p class="card-text"> ${values.description}</p>
  
</div>
</div> */}
