use('tienda');
// b) Proyectar nombre y promedio de compras
db.clientes.aggregate([
  { $project: { _id: 0, nombre: 1, promedio: { $avg: "$compras" } } }
]);
