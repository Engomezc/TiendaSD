import React, { useEffect, useState } from "react";
import VentasService from "../services/VentasService";

const VentasList = () => {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    const cargarVentas = async () => {
      const data = await VentasService.obtenerVentas();
      setVentas(data);
    };
    cargarVentas();
  }, []);

  return (
    <div>
      <h2>Lista de Ventas</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Código</th>
            <th>Cédula Cliente</th>
            <th>Cédula Usuario</th>
            <th>IVA</th>
            <th>Valor Venta</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {ventas.length > 0 ? (
            ventas.map((venta) => (
              <tr key={venta.cedulaCliente}>
                <td>{venta.direccionCliente}</td>
                <td>{venta.emailCliente}</td>
                <td>{venta.nombreCliente}</td>
                <td>{venta.telefonoCliente}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No hay ventas disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default VentasList;
