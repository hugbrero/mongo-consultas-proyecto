use('tienda');
// a) Todos los clientes de México con edad > 25
db.clientes.find({ pais: "México", edad: { $gt: 25 } }).pretty();
