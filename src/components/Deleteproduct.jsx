import React from 'react'
import NavBar from './NavBar'

export const Deleteproduct = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 colxl-12 col-xxl 12">
                    <label htmlFor="" className="form-label">Product Name</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div>
                            <button className="btn btn-danger">DElete</button>
                        </div>
                </div>
                </div>
            </div>
        </div>
        </div>

  )
}
