// un archivo con extensión .jsx es la combinación de código js y etiquetas html
import './LoginPage.css'
import { useState } from 'react';
import Swal from 'sweetalert2';

function LoginPage(){
    // Código de JS
    const [username, setUsername] = useState(''); // declarando variables

    function handleLoginClick(){
        if(username.trim() === ''){
            Swal.fire("Por favor ingrese un nombre válido");
        }
        else{
            Swal.fire(username)
        }
    }
    // Etiquetas de HTML
    return (
        <div className="login-container">
            <h2>EJERCICIO DE PRUEBA</h2>
            <input type="text"
                placeholder='Escriba nombre de usuario'
                value={username}
                onChange={(e) =>setUsername(e.target.value)}
            />
            <button onClick={handleLoginClick}>Iniciar Sesión</button>
        </div>
    );
}

export default LoginPage;