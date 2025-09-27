use('tienda');
// Índices recomendados
db.pedidos.createIndex({ fecha: -1 });
db.pedidos.createIndex({ estado: 1, fecha: -1 });
db.pedidos.createIndex({ clienteId: 1, fecha: -1 });
