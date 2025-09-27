use('tienda');
// Vista dinámica de últimos 30 días usando $$NOW
db.createView(
  "pedidosUltimos30",
  "pedidos",
  [
    {
      $match: {
        $expr: {
          $gte: [
            "$fecha",
            { $dateSubtract: { startDate: "$$NOW", unit: "day", amount: 30 } }
          ]
        }
      }
    }
  ]
);
