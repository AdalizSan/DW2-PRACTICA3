import { useState } from "react";

export type Tarea = {
  id: number;
  texto: string;
  completada: boolean;
};

export type Filtro = "todas" | "completadas" | "pendientes";

export function useTareas() {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [filtro, setFiltro] = useState<Filtro>("todas");

  const agregarTarea = (texto: string) => {
    if (!texto.trim()) return;
    const nueva: Tarea = {
      id: Date.now(),
      texto,
      completada: false,
    };
    setTareas([...tareas, nueva]);
  };

  const alternarTarea = (id: number) => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  };

  const eliminarTarea = (id: number) => {
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
