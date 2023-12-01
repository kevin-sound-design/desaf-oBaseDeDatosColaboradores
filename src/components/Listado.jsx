function Listado({arrayColaboradores}){

    return (
        <div className="miTabla table-responsive">
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Edad</th>
                        <th>Cargo</th>
                        <th>Telefono</th>
                    </tr>
                </thead>
            <tbody>
                {arrayColaboradores.map((colaborador)=>(
                    <tr key={colaborador.id}>
                        <td>{colaborador.nombre}</td>
                        <td>{colaborador.correo}</td>
                        <td>{colaborador.edad}</td>
                        <td>{colaborador.cargo}</td>
                        <td>{colaborador.telefono}</td>
                    </tr>
                ))}
                
            </tbody>
            </table>
        </div>
            
            
     
    )
}

export default Listado;
