import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
        }
        getProduct();
    }, [id]);
    
    const VerDetalle = () => {
        return (
            <>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12">
                        <NavLink className="text-decoration-none text-dark" to={`/`}>
                            <div className="d-flex align-items-center m-3">
                                <i className="fa fa-long-arrow-left"></i>
                                <span className="ml-1">&nbsp;Back</span>
                            </div>
                        </NavLink>
                        <div>
                            <div className="row">
                                <div className="col-md-6 cardDetalle">
                                    <div className="images p-3">
                                        <div className="text-center p-4">
                                            <img id="main-image" alt="product" src={product.image} width="250" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <div className="border p-4 cardDetalle">
                                        <div className="mt-4 mb-3">

                                        <span className="text-muted text-capitalize subtitulodetalle"> in {product.category}</span>

                                            <h5 className="titulo">
                                                {product.title}
                                            </h5>

                                            Rating {product.rating && product.rating.rate}
                                            <i className="fa fa-star text-warning"></i>

                                            <div className="price d-flex flex-row align-items-center">
                                                <big className="display-6"><b>${product.price}</b></big>
                                            </div>
                                        </div>
                                        <p className="description">{product.description}</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="container px-0 mb-5" style={{ marginTop: "66px" }}>

                {<VerDetalle />}

            </div>
        </>
    )
}

export default Product