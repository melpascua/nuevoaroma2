import { useState } from "react"

const CheckoutForm = ({ onConfirm }) => {
    const [nombre, setNombre] = useState('')
    const [celular, setCelular] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (e) => {
        e.preventDefault()

        const datosUsuario = {
            nombre, celular, email
        }

        onConfirm(datosUsuario)
    }
    return (
        <div>
            <form onSubmit={handleConfirm}>
                <label>
                    Nombre
                    <input
                        type="text"
                        value={nombre}
                        onChange={(event) => setNombre(event.target.value)}
                    />
                </label>
                <label>
                    Celular
                    <input
                        type="number"
                        value={celular}
                        onChange={(event) => setCelular(event.target.value)}
                    />
                </label>
                <label>
                    Email
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </label>
                <div>
                    <button type="submit" className="btt">Crear Orden</button>
                </div>
            </form>
        </div>
    );
}



export default CheckoutForm;