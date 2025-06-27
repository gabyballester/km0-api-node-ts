# PROJECT_DETAILS.md

## Decisiones técnicas y notas ampliadas

### 🚀 Compilador y watcher

- **Desarrollo:** Se utiliza `tsx` porque es el watcher más rápido y moderno para TypeScript en Node.js. No requiere configuración extra y soporta ESM y CommonJS.
- **Build de producción:** Se utiliza **SWC** (escrito en Rust) para compilar el código a `dist/` de forma ultra-rápida. SWC es mucho más rápido que `tsc` y soporta TypeScript moderno.
- **Chequeo de tipos:** Se mantiene `tsc --noEmit` para asegurar la calidad de tipos en CI/CD y desarrollo.

### 🧰 Herramientas de calidad de código

- **ESLint v9:** Configurado con el nuevo formato `eslint.config.js` y reglas estándar para Node/TypeScript.
- **Prettier:** Formateo automático, integrado con ESLint y hooks de git.
- **Husky + lint-staged:** Hooks pre-commit y commit-msg para asegurar calidad y convenciones antes de cada commit.
- **Commitlint:** Enforce Conventional Commits para un historial de cambios profesional y automatizable.

### 🏗️ Scripts útiles

- `npm run dev`: Desarrollo con recarga instantánea (tsx)
- `npm run build`: Build de producción con SWC
- `npm run build:check` o `npm run type-check`: Solo chequeo de tipos
- `npm run lint` y `npm run format`: Calidad y estilo de código

### 📁 Organización de carpetas

- `src/shared/`: Utilidades, middlewares, errores y tipos compartidos entre módulos
- `src/types/` y `src/utils/`: Para tipos y utilidades globales
- `legacy/`: Contiene los proyectos antiguos solo como referencia, no se versionan ni se usan directamente

### 📝 Notas sobre migración y legado

- Se han migrado solo las buenas prácticas y utilidades necesarias de los proyectos legacy.
- No se copia código directamente, solo se usa como referencia para nuevas implementaciones.
- Las carpetas `legacy/`, `api-v1/` y `api-v2/` están excluidas del control de versiones.

### 🔒 Seguridad y buenas prácticas

- Helmet, CORS y rate limiting incluidos por defecto
- Manejo centralizado de errores y logs con Winston
- Validación de datos con Zod

### 📚 Referencias y enlaces útiles

- [SWC](https://swc.rs/)
- [tsx](https://github.com/esbuild-kit/tsx)
- [Prisma](https://www.prisma.io/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [ESLint v9 migration](https://eslint.org/docs/latest/use/configure/migration-guide)

---

## 📋 Convenciones de commits y código

### Commits convencionales

Se utiliza [Conventional Commits](https://www.conventionalcommits.org/) para mantener un historial claro y automatizable.

**Ejemplos:**

- `feat: agrega autenticación JWT`
- `fix: corrige bug en validación de usuario`
- `docs: actualiza documentación de instalación`
- `refactor: simplifica lógica de middlewares`
- `test: añade tests para el módulo de productos`
- `chore: actualiza dependencias`

**Tipos permitidos:**

- feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert

### Código

- Estilo Prettier (autoformateo)
- Reglas ESLint estándar para Node/TypeScript
- Validación y formateo automáticos en cada commit (lint-staged + husky)

---

**Este archivo sirve como bitácora técnica y referencia para desarrolladores actuales y futuros.**
