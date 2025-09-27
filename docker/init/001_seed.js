// Init script executed at container startup
// Creates DB 'tienda', inserts sample data in 'clientes' and 'pedidos'

// Switch to desired DB
db = db.getSiblingDB('tienda');

// ---- CLIENTES ----
db.createCollection('clientes');

db.clientes.insertMany([
  { nombre: "Ana", edad: 28, pais: "México", compras: [120, 340, 560] },
  { nombre: "Luis", edad: 35, pais: "México", compras: [800, 120, 90, 600] },
  { nombre: "Carla", edad: 22, pais: "Guatemala", compras: [200, 150] },
  { nombre: "Pedro", edad: 29, pais: "México", compras: [1000, 200, 320] },
  { nombre: "María", edad: 31, pais: "Colombia", compras: [450, 510, 700] },
  { nombre: "Jorge", edad: 26, pais: "México", compras: [80, 90, 110] },
  { nombre: "Sofía", edad: 19, pais: "Perú", compras: [50, 75] },
  { nombre: "Diego", edad: 41, pais: "México", compras: [900, 1200] },
  { nombre: "Elena", edad: 27, pais: "Argentina", compras: [320, 410, 515] },
  { nombre: "Hugo", edad: 24, pais: "México", compras: [180, 220] },
  { nombre: "Lucía", edad: 33, pais: "España", compras: [600, 620, 640] },
  { nombre: "Raúl", edad: 30, pais: "México", compras: [300, 500, 200, 900] },
  { nombre: "Valeria", edad: 25, pais: "Chile", compras: [100, 120, 140] },
  { nombre: "Iván", edad: 38, pais: "México", compras: [700, 710] },
  { nombre: "Nadia", edad: 29, pais: "Guatemala", compras: [200, 220, 240] },
  { nombre: "Oscar", edad: 45, pais: "México", compras: [1500, 1200, 800] },
  { nombre: "Patricia", edad: 28, pais: "México", compras: [520, 510, 530] },
  { nombre: "Quetzal", edad: 21, pais: "Guatemala", compras: [90, 110] },
  { nombre: "Rosa", edad: 36, pais: "México", compras: [350, 360, 370, 380] },
  { nombre: "Tomás", edad: 40, pais: "México", compras: [800, 950, 700] }
]);

// ---- PEDIDOS ----
db.createCollection('pedidos');

// helper to make ISODate(s) around now
function daysAgo(n){ 
  const d = new Date(); 
  d.setDate(d.getDate()-n); 
  return d; 
}

db.pedidos.insertMany([
  { _id: 1, clienteId: "Ana",    estado: "pendiente", fecha: daysAgo(5),   total: 320.50 },
  { _id: 2, clienteId: "Luis",   estado: "enviado",   fecha: daysAgo(12),  total: 980.00 },
  { _id: 3, clienteId: "Carla",  estado: "entregado", fecha: daysAgo(33),  total: 150.00 },
  { _id: 4, clienteId: "Pedro",  estado: "pendiente", fecha: daysAgo(1),   total: 1200.75 },
  { _id: 5, clienteId: "María",  estado: "enviado",   fecha: daysAgo(2),   total: 650.10 },
  { _id: 6, clienteId: "Jorge",  estado: "cancelado", fecha: daysAgo(3),   total: 0.00 },
  { _id: 7, clienteId: "Sofía",  estado: "entregado", fecha: daysAgo(15),  total: 220.00 },
  { _id: 8, clienteId: "Diego",  estado: "pendiente", fecha: daysAgo(25),  total: 2100.99 },
  { _id: 9, clienteId: "Elena",  estado: "enviado",   fecha: daysAgo(41),  total: 415.00 },
  { _id: 10, clienteId: "Hugo",  estado: "pendiente", fecha: daysAgo(8),   total: 180.00 },
  { _id: 11, clienteId: "Lucía", estado: "entregado", fecha: daysAgo(10),  total: 640.00 },
  { _id: 12, clienteId: "Raúl",  estado: "pendiente", fecha: daysAgo(28),  total: 900.00 },
  { _id: 13, clienteId: "Valeria", estado: "enviado", fecha: daysAgo(30),  total: 140.00 },
  { _id: 14, clienteId: "Iván",  estado: "entregado", fecha: daysAgo(18),  total: 710.00 },
  { _id: 15, clienteId: "Nadia", estado: "pendiente", fecha: daysAgo(29),  total: 240.00 },
  { _id: 16, clienteId: "Oscar", estado: "enviado",   fecha: daysAgo(4),   total: 2800.00 },
  { _id: 17, clienteId: "Patricia", estado: "pendiente", fecha: daysAgo(0), total: 530.00 },
  { _id: 18, clienteId: "Quetzal", estado: "cancelado", fecha: daysAgo(6), total: 0.00 },
  { _id: 19, clienteId: "Rosa",  estado: "pendiente", fecha: daysAgo(14),  total: 365.00 },
  { _id: 20, clienteId: "Tomás", estado: "enviado",   fecha: daysAgo(7),   total: 820.00 }
]);

// Helpful note
print("Seed data inserted into 'tienda' database.");
