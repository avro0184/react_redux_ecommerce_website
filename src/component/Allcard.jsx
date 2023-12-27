import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cardSlice'

const Allcard = () => {
    const productcart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const remd = (id)=>{
      dispatch(remove(id))
    }
  return (
    <>
    <div className='bg-body-tertiary py-4'>
        <div className="container">
          <div className='row'>
          {productcart && productcart.map((d) => (
              <div class="col-md-6 col-lg-4 mt-3" >
                <div key={d.id} class="card" style={{ width: "18rem"  }}>
                   <img src={d.image} style={{height:"200px"}} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{d.title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button onClick={()=>remd(d.id)} type="button" class="btn btn-primary">Remove from cart</button>
                  </div>
                </div>
              </div>
            ))}
            

          </div>
        </div>
      </div >
    </>
  )
}

export default Allcard
