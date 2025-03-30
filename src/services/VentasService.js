import axios from "axios";

class VentasService {
  API_URL = "http://localhost:8089/api/clientes/listar";

  async obtenerVentas() {
    try {
      const response = await axios.get(this.API_URL);
      if (response.data.status === 200) {
        return response.data.data; // Retorna solo la lista de ventas
      } else {
        console.error("Error en la respuesta:", response.data.message);
        return [];
      }
    } catch (error) {
      console.error("Error en la API:", error);
      return [];
    }
  }
}

export default new VentasService();
