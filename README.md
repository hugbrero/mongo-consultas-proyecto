# Proyecto: Queries y Colecciones Basadas en Consultas (MongoDB + Docker)

Este repo cumple los requisitos del examen: contenedor Docker con MongoDB y mongo-express, **queries** ejecutables, **colecciones dinámicas (vistas)** y caso integrador con últimos 30 días.

## 1) Prerrequisitos
- **Windows 10/11**: Instala **Docker Desktop** y habilita **WSL2**.
- **macOS / Linux**: Instala **Docker** y **Docker Compose**.
- **Git** (opcional, si clonas desde GitHub).

## 2) Levantar el entorno
```bash
# Clona el repo (o descarga el .zip y descomprímelo)
cd mongo-consultas-proyecto

# Inicia los servicios (primera vez tardará por descarga de imágenes)
docker compose -f docker/docker-compose.yml up -d

# Verifica
docker ps
# Deberías ver: 'mongodb' y 'mongo-express'
```

- **Mongo Express** en: http://localhost:8081
- **MongoDB** en: `mongodb://root:example@localhost:27017` (auth DB: `admin`)

## 3) Conectarse a MongoDB y ejecutar queries
```bash
# Entra a la shell del contenedor
docker exec -it mongodb bash

# Conéctate a mongosh (usuario administrador)
mongosh -u root -p example --authenticationDatabase admin

# Cambia a la base 'tienda'
use('tienda')

# Ejecuta los scripts directamente desde la carpeta montada en /workspace
load('/workspace/queries/mexico_mayor25.js')
load('/workspace/queries/promedio_compras.js')
```

### Resultado esperado
- `mexico_mayor25.js` devuelve los clientes de México con edad > 25.
- `promedio_compras.js` proyecta `{ nombre, promedio }` por cliente.

## 4) Crear colecciones basadas en consultas (vistas)
```js
load('/workspace/colecciones/clientesVIP_view.js')
load('/workspace/colecciones/pedidosActivos_view.js')

// Comprobar:
db.clientesVIP.find().pretty()
db.pedidosActivos.find().pretty()
```

## 5) Caso integrador: pedidos de los últimos 30 días + índices
```js
load('/workspace/proyecto_final/pedidosUltimos30_view.js')
load('/workspace/proyecto_final/indexes.js')

// Consultar
db.pedidosUltimos30.find().sort({fecha:-1}).pretty()
```

> La vista `pedidosUltimos30` usa `$$NOW` y `$dateSubtract` para que siempre aplique "últimos 30 días" en tiempo de consulta.

## 6) Estructura del repo
```
docker/
  docker-compose.yml
  init/001_seed.js
teoria/
  01_colecciones_por_consulta.md
queries/
  mexico_mayor25.js
  promedio_compras.js
colecciones/
  clientesVIP_view.js
  pedidosActivos_view.js
proyecto_final/
  pedidosUltimos30_view.js
  indexes.js
video/
  Link.md
images/  
scripts/
  run_queries.sh
  run_queries.ps1
```

## 7) Scripts útiles
- **Linux/macOS**:
  ```bash
  bash scripts/run_queries.sh
  ```
- **Windows PowerShell**:
  ```powershell
  ./scripts/run_queries.ps1
  ```

## 8) Evidencias
- `images/fig1-docker-ps.png`: salida de `docker ps` con contenedores levantados.
- `images/fig2-mongosh.png`: conexión a `mongosh` y `use('tienda')`.
- `images/fig3-query1.png`: resultado `mexico_mayor25.js`.
- `images/fig4-query2.png`: resultado `promedio_compras.js`.
- `images/fig5-vistas.png`: consultas a `clientesVIP` y `pedidosActivos`.
- `images/fig6-ultimos30.png`: consulta a `pedidosUltimos30` ordenada por fecha desc.

## 9) Cierre
Cuando termines, apaga los contenedores:
```bash
docker compose -f docker/docker-compose.yml down
```
