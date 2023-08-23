import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/cc';
const URICLIENTE = 'http://localhost:8000/clientes';
const URIZONAS = 'http://localhost:8000/zona';
export const CompCreateCc = () => {
    const [clientes, setClientes] = useState([])
    const [cliente, setCliente] = useState('')
    const [num_rem, setNum_rem] = useState('');
    const [total_rem, setTotal_rem] = useState(0);
    const [efectivo, setEfectivo] = useState(0);
    const [transferencia, setTransferencia] = useState(0);
    const [zonas, setZonas] = useState([]);
    const [zona, setZona] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        getClientes()
        getZonas()
    }, [])
    //console.log(url)

    const getClientes = async () => {
        const res = await axios.get(URICLIENTE)
        setClientes(res.data)
        //console.log(res.data)
    }
    const getZonas = async () => {
        const res = await axios.get(URIZONAS)
        setZonas(res.data)
        //console.log(res.data)
    }

    const store = async (e) => {
        e.preventDefault()
        let saldo = total_rem - efectivo - transferencia;
        //console.log(saldo)
        console.log(cliente);
        console.log(zona);
        await axios.post(URI, { codcliente: cliente, num_rem: num_rem, total_rem: total_rem, zona: zona, saldo: saldo, anulado: "0" })
        //`id`, `fecha`, `codcliente`, `num_rem`, `total_rem`, `zona`, `saldo`, `anulado`, `createdAt`, `updatedAt`

        navigate('/cuentasc');
    }
    return (
        <div className="container">
            <div className="col-sm-12 col-md-4 col-lg-4 col-lx-4">
                <div className="row">
                    <h3 className="mt-3">Nueva Cuenta Corriente</h3>
                    <form onSubmit={store}>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Cliente</label>
                            <select onChange={(e) => setCliente(e.target.value)}>
                                <option defaultValue={0}>Elija Cliente</option>
                                {clientes.map(cliente => (
                                    <option key={cliente.id} value={cliente.id} >Cod:{cliente.id},{cliente.nombre}</option>
                                ))}
                            </select>
                            <label className="form-label">Nº Remito</label>
                            <input value={num_rem} className="form-control" type="number" onChange={(e) => setNum_rem(e.target.value)} />
                            <label className="form-label">Total del Remito</label>
                            <input value={total_rem} className="form-control" type="numer" onChange={(e) => setTotal_rem(e.target.value)} />
                            <label className="form-label">Efectivo</label>
                            <input value={efectivo} className="form-control" type="number" onChange={(e) => setEfectivo(e.target.value)} />
                            <label className="form-label">Transferencia</label>
                            <input value={transferencia} className="form-control" type="number" onChange={(e) => setTransferencia(e.target.value)} />
                            <label className="form-label">Zona</label>
                            <select onChange={(e) => setZona(e.target.value)}>
                                <option defaultValue={0}>Elija zona</option>
                                {zonas.map(zona => (
                                    <option key={zona.id} value={zona.id} className="form-control"  >{zona.zona}</option>

                                ))}
                            </select>
                            <button type="submit" className="btn btn-success mt-2">Agregar Usuario</button>
                        </div>


                    </form>
                </div>
            </div>
        </div>


    )



}


//export default CompCreateCc;