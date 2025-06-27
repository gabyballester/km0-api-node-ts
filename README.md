# KM0 API Node TypeScript

Backend escalable y moderno para KM0-market, construido con TypeScript, Express y Prisma.

## 🚀 Características principales

- **TypeScript** para tipado seguro y desarrollo profesional
- **Express** como framework web
- **Prisma** como ORM para bases de datos SQL
- **Validación** con Zod
- **Logging** con Winston
- **Manejo centralizado de errores**
- **Seguridad**: Helmet, CORS, rate limiting
- **Documentación**: Swagger (OpenAPI)
- **Testing**: Jest
- **Calidad de código**: ESLint, Prettier, Husky, lint-staged, commitlint
- **Build ultra-rápido**: SWC (Rust)
- **Desarrollo ágil**: tsx (watcher moderno)

## 📦 Instalación

```bash
npm install
```

## 🛠️ Scripts principales

| Script               | Descripción                                     |
| -------------------- | ----------------------------------------------- |
| `npm run dev`        | Arranca el servidor en modo desarrollo (tsx)    |
| `npm run build`      | Compila el proyecto con SWC (output en `dist/`) |
| `npm run start`      | Ejecuta el build de producción                  |
| `npm run lint`       | Linting de código con ESLint                    |
| `npm run format`     | Formatea el código con Prettier                 |
| `npm run type-check` | Chequeo de tipos con TypeScript                 |
| `npm run test`       | Ejecuta los tests (Jest)                        |

## 📁 Estructura de carpetas

```
src/
  config/         # Configuración de entorno y app
  modules/        # Módulos de negocio (rutas, controladores, servicios)
  shared/
    database/     # Configuración y helpers de base de datos (Prisma)
    middlewares/  # Middlewares reutilizables
    utils/        # Utilidades compartidas
    errors/       # Manejo centralizado de errores
    types/        # Tipos compartidos
  types/          # Tipos globales
  utils/          # Utilidades globales
main.ts           # Entry point principal
```

## 🧰 Herramientas de calidad de código

- **ESLint**: Linting estricto para TypeScript
- **Prettier**: Formateo automático
- **Husky**: Hooks de git (pre-commit, commit-msg)
- **lint-staged**: Linting y formateo solo de archivos modificados
- **commitlint**: Convenciones de mensajes de commit

## 📝 Convenciones

- Se siguen convenciones de commits y código profesional. Consulta detalles y ejemplos en [`PROJECT_DETAILS.md`](./PROJECT_DETAILS.md).

## 📄 Documentación ampliada

Consulta el archivo [`PROJECT_DETAILS.md`](./PROJECT_DETAILS.md) para detalles técnicos, decisiones de arquitectura, migraciones y notas ampliadas.

---

**Autor:** Gabi

---

> Proyecto creado con ❤️ y buenas prácticas para crecer y escalar fácilmente.
