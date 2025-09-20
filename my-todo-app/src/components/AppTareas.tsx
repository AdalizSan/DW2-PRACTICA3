import { useTareas } from "../hooks/useTareas.tsx";
import { EntradaTareas } from "./EntradaTareas.tsx";
import { ListaTareas } from "./ListaTareas.tsx";

export function AppTareas() {
    const {
        tareasFiltradas,
        agregarTarea,
        alternarTarea,
        eliminarTarea,
        filtro,
        setFiltro,
    } = useTareas();

    return (
        <div className="app-tareas">
            <h1>Lista de Pendientes</h1>
            <EntradaTareas onAgregar={agregarTarea} />
            <div className="filtros">
                <button
                className={filtro === "todas" ? "activo" : ""}
                onClick={() => setFiltro("todas")}
            >
                Todas
            </button>
            <button
                className={filtro === "completadas" ? "activo" : ""}
                onClick={() => setFiltro("completadas")}
            >
                Completadas
            </button>
            <button
                className={filtro === "pendientes" ? "activo" : ""}
                onClick={() => setFiltro("pendientes")}
            >
                Pendientes
            </button>
        </div>

        <ListaTareas
            tareas={tareasFiltradas}
            onAlternar={alternarTarea}
            onEliminar={eliminarTarea}
        />
        </div>
    );
}
