import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URI = 'http://localhost:8000/cc/';


export const Cuentasc = () => {

    const [cc_sva, setCc_sva] = useState([])
    //console.log(cc_sva)
    useEffect(() => {
        getCc_sva()
    }, [])

    const getCc_sva = async () => {
        const res = await axios.get(URI)
        setCc_sva(res.data)
    }
    const deleteCc_sva = async (id) => {
        axios.delete(`${URI}${id}`);
        getCc_sva();
    }

    return (
        <>


            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-12 col-lx-12">
                        <h1>Cuentas Corrientes</h1>
                        <Link to="/createCc" className='btn btn-success mt-2 mb-2'><i class="fas fa-folder-plus"></i>Crear Cuenta Corriente</Link>
                        <table id="tablaSaldos" class="table table-striped my-4" >
                            <thead class="table-primary">
                                <tr>
                                    <th scope="col">ID Cta Cte</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Cliente</th>
                                    <th scope="col">Nº Remito</th>
                                    <th scope="col">Total del Remito</th>
                                    <th scope="col">Zona</th>
                                    <th scope="col">Saldo</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cc_sva.map(cc => (
                                    <tr key={cc.id}>
                                        <td>{cc.id}</td>
                                        <td>{cc.fecha}</td>
                                        <td>{cc.cliente.nombre}</td>
                                        <td>{cc.num_rem}</td>
                                        <td>{cc.total_rem}</td>
                                        <td>{cc.zona}</td>
                                        <td>{cc.saldo}</td>
                                        <td><Link to={`/editCc/${cc.id}`} className='btn btn-primary'><i className="fa-solid fa-user-pen"></i>Editar</Link>
                                            <button onClick={() => deleteCc_sva(cc.id)} className='btn btn-danger'><i className="fa-solid fa-trash-can"></i></button></td>
                                    </tr>
                                ))

                                }

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

