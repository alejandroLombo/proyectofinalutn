
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const URI = 'http://localhost:8000/cc/';
const URICLIENTE = 'http://localhost:8000/clientes';
const URIZONAS = 'http://localhost:8000/zona';


const EditCc = () => {
  
    const [fecha, setFecha] = useState('');
    const [clientes, setClientes] = useState([])
    const [cliente, setCliente] = useState('');
    const [num_rem, setNum_rem] = useState('');
    const [total_rem, setTotal_rem] = useState([]);
    const [saldo, setSaldo] = useState('');
    const [zonas, setZonas] = useState([]);
    const [zona, setZona] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    console.log(id);

    const Update = async (e) => {
        e.preventDefault();
        await axios.put(URI + id, {
            fecha: fecha,
            codcliente: cliente,
            num_rem: num_rem,
            total_rem: total_rem,
            saldo:saldo,
            zona: zona,
            anulado:"0" 
        })
        navigate('/cuentasc')
    }
    useEffect(() => {
        getCc()
        getClientes()
        getZonas()
    }, [])

    const getCc = async () => {
        const res = await axios.get(URI + id)
        console.log(res)
        setFecha(res.data.fecha)
        setCliente(res.data.codcliente)
        setNum_rem(res.data.num_rem)
        setTotal_rem(res.data.total_rem)
        setSaldo(res.data.saldo)
        setZona(res.data.zona)
    }

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

    return (
        <div className="container">
            <div className="row">
                <h3>Crear Cuenta Corriente</h3>
                <div className="col-sm-12 col-md-4 col-lg-4 col-lx-4">


                    <form onSubmit={Update}>
                        <div className="mb-3">
                            <label className="form-label">Fecha</label>
                            <input value={fecha} className="form-control" type="date" onChange={(e) => setFecha(e.target.value)} />
                            <label className="form-label">Cliente</label>
                            <select className="form-control" onChange={(e) => setCliente(e.target.value)}>
                                <option defaultValue={cliente}>{cliente}</option>
                                {clientes.map(cliente => (
                                    <option key={cliente.id} value={cliente.id} >Cod:{cliente.id},{cliente.nombre}</option>
                                ))}
                            </select>
                            <label className="form-label">Nº Remito</label>
                            <input value={num_rem} className="form-control" type="number" onChange={(e) => setNum_rem(e.target.value)} />
                            <label className="form-label">Total Remito</label>
                            <input value={total_rem} className="form-control" type="text" onChange={(e) => setTotal_rem(e.target.value)} />
                            <label className="form-label">Saldo</label>
                            <input value={saldo} className="form-control" type="text" onChange={(e) => setSaldo(e.target.value)} />
                            <label className="form-label">Zona</label>
                            <select className="form-control" onChange={(e) => setZona(e.target.value)}>
                                <option defaultValue={zona}>{zona}</option>
                                {zonas.map(zona =>(
                                    <option key={zona.id} value={zona.id} className="form-control"  >{zona.zona}</option>

                                ))}
                            </select>
                            {/* <input value={zona} className="form-control" type="text" onChange={(e) => setZona(e.target.value)} /> */}
                            <button type="submit" className="btn btn-success mt-2">Editar Usuario</button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    )


}

export default EditCc