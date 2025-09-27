use('tienda');
// Vista dinámica de clientes VIP (promedio de compras > 500)
db.createView(
  "clientesVIP",
  "clientes",
  [
    { $addFields: { promedio: { $avg: "$compras" } } },
    { $match: { promedio: { $gt: 500 } } },
    { $project: { nombre: 1, edad: 1, pais: 1, promedio: 1, compras: 1 } }
  ]
);
