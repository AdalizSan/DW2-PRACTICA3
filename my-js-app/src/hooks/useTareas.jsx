import { useState } from "react";

export function useTareas() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("todas");

  const agregarTarea = (texto) => {
    if (!texto.trim()) return;
    const nueva = {
      id: Date.now(),
      texto,
      completada: false,
    };
    setTareas([...tareas, nueva]);
  };

  const alternarTarea = (id) => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  const tareasFiltradas = tareas.filter((t) => {
    if (filtro === "completadas") return t.completada;
    if (filtro === "pendientes") return !t.completada;
    return true;
  });

  return {
    tareas,
    filtro,
    setFiltro,
    tareasFiltradas,
    agregarTarea,
    alternarTarea,
    eliminarTarea,
  };
}
