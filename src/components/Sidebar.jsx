import React from 'react';
import { Table } from 'antd';

// Datos de ejemplo (simulación de datos tipo Excel)
const data = [
  { key: '1', Nombre: 'Alice', Imagen: <img src="https://statics.pampling.com/imagenes/galerias/imagen_49629.jpg" width="30" height="30" />, Estado: 'Activa' },
  { key: '2', Nombre: 'Bob', Imagen: <img src="https://statics.pampling.com/imagenes/galerias/imagen_43613.jpg" width="30" height="30" />, Estado: 'Desactivada' },
  { key: '3', Nombre: 'Charlie', Imagen: <img src="https://statics.pampling.com/imagenes/galerias/imagen_49521.jpg" width="30" height="30" />, Estado: 'En Progreso' },
];

// Definición de columnas para la tabla
const columns = [
  { title: 'Imagen', dataIndex: 'Imagen', key: 'Imagen', render: (imagen) => imagen },
  { title: 'Nombre', dataIndex: 'Nombre', key: 'Nombre' },
  { title: 'Estado', dataIndex: 'Estado', key: 'Estado' },
];

export function Sidebar() {
  return (
    <>
      <h2>Datos tipo Excel en Sidebar</h2>
      <Table dataSource={data} columns={columns} />
    </>
  );
}
