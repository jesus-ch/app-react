import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css'

function Products() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);

    useEffect(() => {
        let componentMounted = true;
        const getProdcuts = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            if (componentMounted) {
                const data = await response.json();
                setData(data);
                setFilter(data);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProdcuts();
    }, []);

    const ListaProductos = () => {
        return (
            <>
                <div >
                    <div className="div">
                        {filter.map((product) => {
                            return (
                                <div className="col-6 col-md-6 col-lg-4 mb-3" key={product.id}>

                                    <div class="card">
                                        <img src={product.image} className="m-3" style={{ height: "300px", width: "auto", objectFit: "contain" }} alt={product.title} />
                                        <div className="m-3 mb-0">
                                            <small className="titulo">{product.title.substring(0, 50)}...</small>
                                        </div>
                                        <div className="divInferior">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="m-3">Precio: <b>${product.price}</b></div>
                                                <NavLink className="stretched-link" to={`/product/${product.id}`}>
                                                    <button className="btn btn-sm m-3 border-primary">
                                                        <i className="fa fa-arrow-right text-muted"></i>
                                                    </button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </>
        )
    }

    return (
        <div className="container">
            <div className="row">
                {<ListaProductos />}
            </div>
        </div>
    )
}

export default Products