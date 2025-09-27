use('tienda');
// Vista de pedidos activos (pendiente o enviado)
db.createView(
  "pedidosActivos",
  "pedidos",
  [
    { $match: { estado: { $in: ["pendiente", "enviado"] } } }
  ]
);
