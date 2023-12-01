function Formulario({setColaboradores, colaboradores, setVerificacion}){

    function agregarColaborador(e){
        e.preventDefault()
        const nombre = e.target[0].value
        const correo = e.target[1].value;
        const edad = e.target[2].value;
        const cargo = e.target[3].value;
        const telefono = e.target[4].value;

        if(nombre===""||correo===""||edad===""||cargo===""||telefono===""){
            setVerificacion("Completa todos los campos !")
        }else{
            setColaboradores([
                ...colaboradores,
                {
                    id: (colaboradores.length+1).toString(),
                    nombre:nombre,
                    correo:correo,
                    edad:edad,
                    cargo:cargo,
                    telefono:telefono,
                }
            ])
            setVerificacion("Colaborador agregado !")
    
            e.target.reset();
        }

        
        
    }

    return (
        <>  
            <h2>Agregar colaborador</h2>
            <form onSubmit={agregarColaborador} className="formulario">
                <input type="text" placeholder="Nombre del colaborador" />
                <input type="email" placeholder="Email del colaborador" />
                <input type="number" placeholder="Edad del colaborador" />
                <input type="text" placeholder="Cargo del colaborador" />
                <input type="number" placeholder="Teléfono del colaborador" />
                <input className="button" type="submit" value = "Agregar colaborador" />
            </form>

        </>

    )
}

export default Formulario;