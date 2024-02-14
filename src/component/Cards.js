import "./CSS/Cards.css"
const Cards=(props)=>{
   
    const {data}=props;
    return (

    <div class="card">
    <div class="card-body">
      <h5 class="card-title">{data.name}</h5>
      <p class="card-text">{data.description}</p>
     
    </div>
  </div>
  
    

   
    )
}

export default Cards;