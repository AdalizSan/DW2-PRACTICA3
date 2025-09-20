import { useState } from "react";

export function EntradaTareas({ onAgregar }) {
    const [texto, setTexto] = useState("");

    const manejarAgregar = () => {
        onAgregar(texto);
        setTexto("");
    };

    return (
        <div className="entrada">
        <input
            type="text"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Escribe una tarea..."
        />
        <button onClick={manejarAgregar}>Agregar</button>
        </div>
    );
}
