export function ListaTareas({ tareas, onAlternar, onEliminar }) {
    return (
        <ul className="lista">
        {tareas.map((t) => (
            <li key={t.id} className="tarea">
            <span
                onClick={() => onAlternar(t.id)}
                className={t.completada ? "completada" : ""}
            >
                {t.texto}
            </span>
            <button onClick={() => onEliminar(t.id)}>✕</button>
            </li>
        ))}
        </ul>
    );
}
