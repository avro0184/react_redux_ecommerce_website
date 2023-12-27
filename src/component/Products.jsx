import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addcart } from '../store/cardSlice';


export default function Products() {
  const [data, setdata] = useState([]);
  const dispatch = useDispatch()

  function getalldata() {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getalldata();
  }, []);

  const ca =(d)=>{
      dispatch(addcart(d))
  }

  return (
    <>

      <div className='bg-body-tertiary py-4'>
        <div className="container">
          <div className='row'>
            {data.map((d) => (
              <div key={d.id} class="col-md-6 col-lg-4 mt-3" >
                <div key={d.id} class="card" style={{ width: "18rem"  }}>
                   <img src={d.image} style={{height:"200px"}} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{d.title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button onClick={()=>ca(d)}  class="btn btn-primary">Add to card</button>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div >



    </>

  );
}
