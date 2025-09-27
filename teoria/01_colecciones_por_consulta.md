# UNIVERSIDAD DA VINCI DE GUATEMALA 
### Hugo Ronaldo Breganza Rodas
#### 202301727
#### Bases de datos 2
#### Primer examen Parcial


# Parte I – Teoría conceptual

## a) ¿Qué es una colección basada en consultas?
Una **colección basada en consultas** (en MongoDB, típicamente implementada como una *vista*) es un objeto que **no almacena físicamente** los documentos, sino que **expone** el resultado de una **tubería de agregación** sobre una colección base. Se diferencia de una **colección estática** en que esta última **persiste datos** y requiere inserciones/actualizaciones explícitas.

**Analogía:** colección estática = “tabla materializada”; colección basada en consultas = “consulta guardada y reutilizable”.

## b) Consulta ad‑hoc vs vista materializada vs colección dinámica
- **Consulta ad‑hoc:** se ejecuta puntualmente; no queda registrada como entidad con nombre. Ventaja: flexibilidad. Desventaja: repetición de trabajo y riesgo de inconsistencias si cada quien consulta distinto.
- **Vista materializada:** pre‑calcula y **almacena** resultados (p. ej. con `$merge` a otra colección y procesos/trigger para refrescar). Ventaja: velocidad en lecturas. Desventaja: espacio extra y **riesgo de desincronización** si no se actualiza correctamente.
- **Colección dinámica (vista):** **no almacena**; siempre calcula al consultar. Ventaja: datos *siempre frescos* y sin duplicación. Desventaja: puede ser más **lenta** si la tubería es pesada y/o si faltan índices.

## c) Pros y contras de colecciones basadas en consultas
**Ventajas**
- Definen *contratos de lectura* y estandarizan métricas.
- Evitan duplicar datos (menos almacenamiento).
- Se actualizan automáticamente con los cambios en la colección base.

**Desventajas**
- Coste en tiempo de ejecución si la agregación es compleja.
- Dependencia de buenos **índices** para rendir.
- Algunas limitaciones (no se pueden escribir directamente; restricciones en ciertas expresiones).



### 📸 capturas
- **Figura 1:** salida de `docker ps` mostrando `mongodb` y `mongo-express`.

  [docker-ps](../images/fig1-docker-ps.png)
- **Figura 2:** conexión exitosa desde `mongosh`.  

  [mongosh](../images/fig2-mongosh.png)
- **Figura 3:** resultado de mexico_mayor25`.  

  [query1](../images/fig3-query1.png)
 - **Figura 4:** resultado de promedio_compras.  
  [query2](../images/fig4-query2.png)
- **Figura 5:** consultas a clientesVIP y pedidosActivos.  

  [vistas](../images/fig5-vistas.png)
- **Figura 6:** consultas a clientesVIP y pedidosActivos.  

  [ultimos30](../images/fig6-ultimos30.png)

*Fecha:* 2025-09-25
