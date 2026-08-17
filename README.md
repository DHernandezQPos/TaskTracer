# TaskTracer Pro 🚀

> **Sistema de Gestión de Tareas por Versión, Pipeline QA y Changelog Automático**

TaskTracer Pro es una aplicación web moderna diseñada para estructurar y optimizar el ciclo de vida del software en equipos de desarrollo ágil: desde el backlog organizado por versión, desarrollo con certificación de flujo completo (Smoke Test), revisión cruzada de casos de uso (QA Peer Review), hasta la generación automática de Changelogs técnicos y ejecutivos.

---

## ✨ Características Principales

- **📊 Vista Hoja de Cálculo (Estilo Excel)**:
  - Identificación por versiones con códigos de colores temáticos (ej: v1.0.19 en amarillo, v1.0.20 en azul).
  - Edición rápida in-situ de módulos, descripciones y responsables.
  - Creación rápida de filas correlativas y exportación a CSV.

- **🔀 Pipeline de 4 Fases de Calidad**:
  - **Fase 1: Desarrollo (Dev)**: Asignación de desarrollador, control de ramas Git/PRs y notas técnicas.
  - **Fase 2: Flujo Completo por Dev (Smoke / Sanity Test)**: Checklist de integridad donde el desarrollador valida y certifica que la aplicación no tiene regresiones antes de entregar a QA.
  - **Fase 3: Revisión de Casos de Uso (QA Review)**: Asignación de un revisor independiente, ejecución de la matriz de pruebas (*Passed / Failed / Pending*) y feedback detallado.
  - **Fase 4: Aprobación y Cierre**: Paso a estado OK y preparación para release.

- **📝 Changelog Studio**:
  - Compilación automática del registro de cambios en Markdown y HTML.
  - Modo Técnico (con IDs, módulos y responsables) y Modo Ejecutivo (Notas de versión para clientes).
  - Copia rápida al portapapeles y descarga de archivo `CHANGELOG.md`.

- **⚙️ Configuración y Directorio de Equipo**:
  - Registro de usuarios con roles (*Dev, QA, Tech Lead, Product Owner*), emails y colores de avatar.
  - Asignación mediante listas desplegables en tiempo real.

- **📈 Métricas & Control de Versiones**:
  - Indicadores de completitud por versión, distribución por módulos y análisis de cuellos de botella.
  - Copia de seguridad y restauración completa en formato JSON.

---

## 🚀 Inicio Rápido

La aplicación es completamente autónoma y no requiere pasos de compilación:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/DHernandezQPos/TaskTracer.git
   ```

2. Abre `index.html` en cualquier navegador web moderno, o ejecuta un servidor estático local:
   ```bash
   # Con Python
   python -m http.server 5173

   # O con Node.js / npx
   npx serve .
   ```

3. Accede a `http://localhost:5173` y comienza a gestionar tus versiones y tareas.

---

## 🛠️ Tecnologías

- **HTML5 & Vanilla CSS3**: Variables de diseño, soporte Modo Oscuro/Claro, glassmorphism y diseño responsive.
- **Modern JavaScript (ES6+)**: Gestión reactiva de estado, persistencia en `localStorage`, drag & drop nativo y renderizado dinámico de Markdown.
