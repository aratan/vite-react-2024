import React, { useState } from 'react';
import { Input, Button } from 'antd';

function PaymentForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    nombre: '',
    cantidad: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    // Limpiar el formulario después de enviar
    setFormData({
      nombre: '',
      cantidad: ''
    });
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Formulario de Pago</h2>
      <Input
        placeholder="Nombre"
        name="nombre"
        value={formData.nombre}
        onChange={handleInputChange}
        style={{ marginBottom: 10 }}
      />
      <Input
        placeholder="Cantidad"
        name="cantidad"
        value={formData.cantidad}
        onChange={handleInputChange}
        style={{ marginBottom: 10 }}
      />
      <Button type="primary" onClick={handleSubmit}>
        Enviar
      </Button>
    </div>
  );
}

export default PaymentForm;
