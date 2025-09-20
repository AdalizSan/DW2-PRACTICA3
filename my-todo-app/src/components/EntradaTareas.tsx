import { useState } from "react";

type Props = {
    onAgregar: (texto: string) => void;
};

export function EntradaTareas({ onAgregar }: Props) {
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
