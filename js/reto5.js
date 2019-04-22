Vue.component("v-select", VueSelect.VueSelect);

Number.prototype.formatMoney = function (c, d, t) {
	var n = this,
		c = isNaN(c = Math.abs(c)) ? 2 : c,
		d = d == undefined ? "." : d,
		t = t == undefined ? "," : t,
		s = n < 0 ? "-" : "",
		i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
		j = (j = i.length) > 3 ? j % 3 : 0;
	return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

new Vue({
	el: '#app',
	data: {
		productos: [{
				producto: 1,
				descripcion: 'TV LG 32',
				precio: 800000
			},
			{
				producto: 2,
				descripcion: 'TV LG 49',
				precio: 1200000
			},
			{
				producto: 3,
				descripcion: 'Lavadora LG',
				precio: 1500000
			},
			{
				producto: 4,
				descripcion: 'Nevera haceb',
				precio: 1800000
			},
			{
				producto: 5,
				descripcion: 'Impresora Multifuncional EPSON 630',
				precio: 1230000
			},
			{
				producto: 6,
				descripcion: 'Equipo de sonido LG 1000W',
				precio: 700000
			},
			{
				producto: 7,
				descripcion: 'Portatil Acer 14 Cori3',
				precio: 1400000
			},
			{
				producto: 8,
				descripcion: 'Portatil Acer 14 Cori5',
				precio: 1700000
			},
			{
				producto: 9,
				descripcion: 'Teatro en Casa',
				precio: 1000000
			}
		],
		descuento: 0,
		facturacion: {
			productoSeleccionado: {
				producto: 0,
				cantidad: 1,
				iva: 19
			},
			productosAgregados: []
		},
		clientes: [{
				dni: 1061799998,
				nombre: 'Yeferzon Quisoboni',
				direccion: 'Calle 12 #4-19',
				telefono: 8231111
			},
			{
				dni: 236721637,
				nombre: 'Aurelio Santa Maria',
				direccion: 'Calle 34 #4-11',
				telefono: 8362222
			},
			{
				dni: 96767232,
				nombre: 'Carlos Molano',
				direccion: 'Calle 12 #4-19',
				telefono: 8363333
			},
			{
				dni: 312391283921,
				nombre: 'Karen Rueda',
				direccion: 'Calle 12 #4-19',
				telefono: 8364545
			},
			{
				dni: 989283989,
				nombre: 'Daniela Ospina',
				direccion: 'Carrera 34 #4-19',
				telefono: 8221111
			}
		],
		clienteadd: {
			clienteSeleccionado: {
				dni: ''
			}
		}
	},
	methods: {
		agregarLinea: function () {
			var productoSeleccionado = this.facturacion.productoSeleccionado,
				existe = this.facturacion.productosAgregados.find(function (el) {
					return el.producto == productoSeleccionado.producto;
				});

			if (!existe) {
				this.facturacion.productosAgregados.push({
					producto: productoSeleccionado.producto,
					descripcion: productoSeleccionado.descripcion,
					precio: productoSeleccionado.precio,
					cantidad: productoSeleccionado.cantidad,
					iva: productoSeleccionado.iva
				});
			} else {
				var idFactura = this.facturacion.productosAgregados.find(function (el) {
					if (el.producto == productoSeleccionado.producto) {
						return el.cantidad;
					}
				});

				idFactura.cantidad = parseInt(idFactura.cantidad) +
					parseInt(productoSeleccionado.cantidad);
			}
		},
		infoProductoSeleccionado: function () {
			var producto = this.facturacion.productoSeleccionado.producto;

			if (producto) {
				var info = this.productos.find(function (id) {
					if (id.producto == producto) {
						return id;
					}
				});

				this.facturacion.productoSeleccionado.descripcion = info.descripcion;
				this.facturacion.productoSeleccionado.precio = info.precio;
			}
		},
		infoCliente: function () {
			var cliente = this.clienteadd.clienteSeleccionado.dni;
			if (cliente) {
				var info = this.clientes.find(function (id) {
					if (id.dni == cliente) {
						return id;
					}
				});
				this.clienteadd.clienteSeleccionado.nombre = info.nombre;
				this.clienteadd.clienteSeleccionado.direccion = info.direccion;
				this.clienteadd.clienteSeleccionado.telefono = info.telefono;
			}
		},
		eliminarLinea: function (indice) {
			this.facturacion.productosAgregados.splice(indice, 1);

		},
		horaActual: function () {
			n = new Date();
			y = n.getFullYear();
			m = n.getMonth() + 1;
			d = n.getDate();
			return d + "/" + m + "/" + y
		}
	},
	computed: {
		total() {
			var total = 0;
			var totalIva = 0;
			var suma = 0;
			let por = parseInt(this.descuento)
			this.facturacion.productosAgregados.forEach(function (el) {
				totalIva += el.cantidad * el.precio * (el.iva / 100);
				total += el.cantidad * el.precio;
			});
			suma = (total + totalIva) - (total * (por / 100))
			return suma.formatMoney(2, ',', '.');
		},
		totalLineas: function () {
			var total = 0;

			this.facturacion.productosAgregados.forEach(function (el) {
				total += el.cantidad * el.precio;
			});

			return total.formatMoney(2, ',', '.');
		},
		totalIva: function () {
			var total = 0;

			this.facturacion.productosAgregados.forEach(function (el) {
				total += el.cantidad * el.precio * (el.iva / 100);
			});

			return total.formatMoney(2, ',', '.');
		},
		porcentajeDes: function () {
			var total = 0;
			let por = parseInt(this.descuento)
			this.facturacion.productosAgregados.forEach(function (el) {
				total += el.cantidad * el.precio * (por / 100);
			});

			return `-${total.formatMoney(2, ',', '.')}`
		}
	}
});