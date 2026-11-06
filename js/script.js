const usuario = {
  nombre: "María",
  apellido: "Gómez",
  edad: 25,
  direccion: {
    calle: "Calle 123",
    ciudad: "Bogotá",
    pais: "Colombia"
  },

  presentarse() {
    return `Hola, soy ${this.nombre} ${this.apellido}, tengo ${this.edad} años y vivo en ${this.direccion.ciudad}, ${this.direccion.pais}.`;
  }
};

const {
  direccion: { ciudad, pais }
} = usuario;

console.log("Ciudad:", ciudad);
console.log("País:", pais);

console.log(usuario.presentarse());