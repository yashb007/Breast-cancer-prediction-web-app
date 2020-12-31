import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [radius, setRadius] = useState()
  const [texture, setTexture] = useState()
  const [perimeter, setPerimeter] = useState()
  const [area, setArea] = useState()
  const [smoothness, setSmoothness] = useState()
  const [result, setResult] = useState("")

  useEffect(()=>{

  },[])

 const showResult = () =>{
    //  if(!radius || !texture || !perimeter || !area || !smoothness){
    //    setResult("Please Add All the fields")
    //    return;
    //  }
     fetch("http://localhost:8080/result",{
      method:"Post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        radius,
        texture,
        perimeter,
        area,
        smoothness
      })
      }).then(res => res.json())
      .then(data => { 
        console.log(data)
        if(data.error){
          alert("Error")
        }
        else{
          const result = parseInt(data.set)
          console.log(parseInt(data.set))
          if(result == 1){
         setResult("Unfortunately, You are diaganosd with breast cancer")

        }
        else{
          
         setResult("Hurray, You are not diaganosd with breast cancer")
        }
      }
      }
        ).catch(err => console.log(err))
   
  }
  const reset = () => {
    setResult("")
    setRadius()
    setTexture()
    setArea()
    setPerimeter()
    setSmoothness()
    window.location.reload()
  }

  return (
    <div className="  App">
      <header className=" App-header">
<div style={{marginTop:"100px",fontSize:"100px"}}>
      <h3 className="white" style={{fontSize:"64px"}} > Breast Cancer prediction  </h3>
      </div>
      <div className="" style={{marginTop:"50px",width:"500px",fontSize:"24px"}}>
      <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-4 col-form-label">Radius</label>
    <div class="col-sm-8">
      <input type="number" class="form-control" 
      value={radius}
      onChange={(e)=>setRadius(e.target.value)} placeholder="Enter the mean Radius" />
    </div>
</div>
<div class="mb-3 row">
    <label for="inputPassword" class="col-sm-4 col-form-label">Texture</label>
    <div class="col-sm-8">
      <input type="number" class="form-control" 
      value={texture}
      onChange={(e)=>setTexture(e.target.value)} placeholder="Enter the mean Texture"/>
    </div>
</div>
<div class="mb-3 row">
    <label for="inputPassword" class="col-sm-4 col-form-label">Perimeter</label>
    <div class="col-sm-8">
      <input type="number" class="form-control" 
      value={perimeter}
      onChange={(e)=>setPerimeter(e.target.value)} placeholder="Enter the mean Perimeter"/>
    </div>
</div>
<div class="mb-3 row">
    <label for="inputPassword" class="col-sm-4 col-form-label">Area</label>
    <div class="col-sm-8">
      <input type="number" class="form-control" 
      value={area}
      onChange={(e)=>setArea(e.target.value)} placeholder="Enter the mean Area"/>
    </div>
</div>
<div class="mb-3 row">
    <label for="inputPassword" class="col-sm-4 col-form-label">Smoothness</label>
    <div class="col-sm-8">
      <input type="number" class="form-control"
      value={smoothness}
      onChange={(e)=>setSmoothness(e.target.value)} placeholder="Enter the mean Smoothness" />
    </div>
</div>
</div>



<button type="button" onClick={showResult} class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{marginTop:"15px",fontSize:"28px"}}>Success</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" style={{color:"black"}} id="exampleModalLabel">Result</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{color:"black"}}>
        {result ? result : "Please Add all the fields"}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" onClick = {reset}  data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

</header>
    </div>
  );
}

export default App;
