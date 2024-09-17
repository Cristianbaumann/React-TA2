import React from 'react';
import Card from './Componentes/Card'; // Asegúrate de que la ruta sea correcta
import './App.css'; // Si tienes estilos

const App = () => {
  return (
    <div className="App">
      <h1>Lista de Tareas</h1>

      <Card>
        <h2>Tarea 1</h2>
        <p>Descripción: Descripción de la tarea 1</p>
        <p>Persona asignada: Juan Pérez</p>
        <p>Fecha de inicio: 2024-09-01</p>
        <p>Fecha de fin: 2024-09-10</p>
      </Card>

      <Card>
        <h2>Tarea 2</h2>
        <p>Descripción: Descripción de la tarea 2</p>
        <p>Persona asignada: Ana García</p>
        <p>Fecha de inicio: 2024-09-05</p>
        <p>Fecha de fin: 2024-09-15</p>
      </Card>

      <Card>
        <h2>Tarea 3</h2>
        <p>Descripción: Descripción de la tarea 3</p>
        <p>Persona asignada: Carlos López</p>
        <p>Fecha de inicio: 2024-09-10</p>
        <p>Fecha de fin: 2024-09-20</p>
      </Card>
    </div>
  );
};

export default App;
