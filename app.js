/**
 * TASKTRACER PRO - CORE APPLICATION ENGINE
 * Comprehensive Version Management, Pipeline QA Matrix, Team Settings & Changelog Generator
 */

(function() {
  'use strict';

  // =========================================================================
  // INITIAL SEED DATA
  // =========================================================================
  const DEFAULT_VERSIONS = [
    {
      id: 'v-1-0-19',
      name: '1.0.19',
      color: '#eab308',
      status: 'LIBERADA',
      targetDate: '2026-08-10',
      description: 'Versión estable en producción con mejoras en flujo rápido de ventas, boletas y cuadratura de caja.'
    },
    {
      id: 'v-1-0-20',
      name: '1.0.20',
      color: '#0284c7',
      status: 'QA_FREEZE',
      targetDate: '2026-08-22',
      description: 'Versión actual en proceso de QA y desarrollo: gestión de caja, post-venta, restricciones y changelog.'
    },
    {
      id: 'v-1-0-21',
      name: '1.0.21',
      color: '#9333ea',
      status: 'PLANIFICADA',
      targetDate: '2026-09-15',
      description: 'Próxima versión planificada: mejoras de sincronización offline y facturación masiva.'
    }
  ];

  const DEFAULT_USERS = [
    {
      id: 'usr-1',
      name: 'David Hernandez',
      role: 'LEAD',
      email: 'david.hernandez@empresa.com',
      color: '#38bdf8'
    },
    {
      id: 'usr-2',
      name: 'Carlos Mendoza',
      role: 'DEV',
      email: 'carlos.mendoza@empresa.com',
      color: '#22c55e'
    },
    {
      id: 'usr-3',
      name: 'Valeria Soto',
      role: 'QA',
      email: 'valeria.soto@empresa.com',
      color: '#ec4899'
    },
    {
      id: 'usr-4',
      name: 'Ignacio Silva',
      role: 'QA',
      email: 'ignacio.silva@empresa.com',
      color: '#a855f7'
    }
  ];

  const DEFAULT_TASKS = [
    // --- Versión 1.0.19 (Completadas / OK) ---
    {
      id: 10011,
      version: '1.0.19',
      module: 'Nuevo Prc',
      type: 'Nuevo',
      description: 'Ver todas las categorías al momento de crear producto',
      details: 'El selector de categorías en la creación de producto ahora despliega el árbol completo.',
      priority: 'Media',
      dev: 'Carlos Mendoza',
      devBranch: 'feature/10011-categorias-prod',
      devNotes: 'Se modificó el endpoint /api/categories para admitir paginación y renderizado anidado.',
      smokeChecklist: [
        { text: 'Inicio de sesión con rol Administrador y Cajero', checked: true },
        { text: 'Apertura de modal Nuevo Producto y carga de categorías', checked: true },
        { text: 'Guardado de producto y visualización en catálogo', checked: true }
      ],
      devCertified: true,
      devCertifiedAt: '2026-08-08 11:30',
      smokeNotes: 'Flujo completo ejecutado en ambiente de pruebas sin incidencias.',
      qa: 'Valeria Soto',
      qaStatus: 'APROBADO',
      useCases: [
        { title: 'Crear producto con categoría de primer nivel', status: 'PASSED' },
        { title: 'Crear producto con sub-subcategoría', status: 'PASSED' },
        { title: 'Comportamiento cuando no hay conexión', status: 'PASSED' }
      ],
      qaFeedback: 'Validado con éxito en web y tablet. Cumple con los criterios de aceptación.',
      changelogTech: '[Nuevo Prc] Soporte de visualización jerárquica de categorías en creación de producto.',
      changelogUser: 'Ahora es posible seleccionar cualquier subcategoría directamente al registrar un producto.',
      flowStatus: 'OK',
      status: 'OK',
      audit: [
        { user: 'Carlos Mendoza', action: 'Completó desarrollo y Smoke Test', date: '2026-08-08 11:30' },
        { user: 'Valeria Soto', action: 'Casos de uso aprobados en QA', date: '2026-08-09 16:20' }
      ]
    },
    {
      id: 10012,
      version: '1.0.19',
      module: 'Nuevo Prc',
      type: 'Mejora',
      description: 'Sugerencia de Producto Nuevo',
      details: 'Autocompletado inteligente al escribir el nombre de un producto nuevo basado en base de datos global.',
      priority: 'Media',
      dev: 'Carlos Mendoza',
      devBranch: 'feature/10012-sugerencia-producto',
      devNotes: 'Integración de debounce de 300ms y lookup en API.',
      smokeChecklist: [
        { text: 'Escritura de producto y desplegado de sugerencias', checked: true },
        { text: 'Selección de sugerencia y auto-llenado de campos', checked: true }
      ],
      devCertified: true,
      devCertifiedAt: '2026-08-08 14:10',
      smokeNotes: 'Funciona rápido y sin bloqueos.',
      qa: 'Valeria Soto',
      qaStatus: 'APROBADO',
      useCases: [
        { title: 'Sugerencia con coincidencia exacta', status: 'PASSED' },
        { title: 'Sugerencia sin coincidencias (crear nuevo limpio)', status: 'PASSED' }
      ],
      qaFeedback: 'Probado en diferentes resoluciones.',
      changelogTech: '[Nuevo Prc] Implementado motor de sugerencia reactivo con debounce.',
      changelogUser: 'Sugerencias inteligentes automáticas al crear productos nuevos.',
      flowStatus: 'OK',
      status: 'OK',
      audit: [{ user: 'Carlos Mendoza', action: 'Creada y certificada', date: '2026-08-08' }]
    },
    {
      id: 10013,
      version: '1.0.19',
      module: 'Venta Rap',
      type: 'Mejora',
      description: 'Existen clientes que solo hacen venta afecta por lo cual...',
      details: 'Permitir forzar régimen de venta afecta automáticamente si el cliente tiene dicha configuración.',
      priority: 'Alta',
      dev: 'David Hernandez',
      devBranch: 'fix/10013-venta-afecta-forzada',
      devNotes: 'Validación en front y middleware de facturación.',
      smokeChecklist: [
        { text: 'Venta rápida a cliente afecto', checked: true },
        { text: 'Emisión de documento tributario', checked: true }
      ],
      devCertified: true,
      devCertifiedAt: '2026-08-09 10:15',
      smokeNotes: 'Flujo de venta completo ejecutado.',
      qa: 'Valeria Soto',
      qaStatus: 'APROBADO',
      useCases: [
        { title: 'Cliente con solo venta afecta', status: 'PASSED' },
        { title: 'Cliente exento o mixto', status: 'PASSED' }
      ],
      qaFeedback: 'Flujo validado correctamente.',
      changelogTech: '[Venta Rap] Regla de bloqueo y preselección de documento afecto según perfil de cliente.',
      changelogUser: 'Optimización en venta rápida para clientes con régimen afecto exclusivo.',
      flowStatus: 'OK',
      status: 'OK',
      audit: [{ user: 'David Hernandez', action: 'Desarrollado y probado', date: '2026-08-09' }]
    },
    {
      id: 10014,
      version: '1.0.19',
      module: 'Deuda clie',
      type: 'Seguridad / Validación',
      description: 'Cliente con Deuda + Aviso + Bloqueo',
      details: 'Avisar en pantalla de cobro si el cliente registra deuda y bloquear si supera cupo de crédito.',
      priority: 'Alta',
      dev: 'Carlos Mendoza',
      devBranch: 'feature/10014-alerta-deuda-bloqueo',
      devNotes: 'Modal de advertencia con posibilidad de bypass solo con PIN de supervisor.',
      smokeChecklist: [
        { text: 'Cargar cliente con deuda menor a cupo (muestra aviso)', checked: true },
        { text: 'Cargar cliente con deuda morosa (bloquea botón de cobro)', checked: true }
      ],
      devCertified: true,
      devCertifiedAt: '2026-08-09 12:45',
      smokeNotes: 'Probado con credenciales de cajero y supervisor.',
      qa: 'Ignacio Silva',
      qaStatus: 'APROBADO',
      useCases: [
        { title: 'Aviso visual en color ámbar para deuda normal', status: 'PASSED' },
        { title: 'Bloqueo estricto con modal rojo para deuda vencida', status: 'PASSED' },
        { title: 'Autorización por PIN de supervisor', status: 'PASSED' }
      ],
      qaFeedback: 'Casos de uso cubiertos al 100%.',
      changelogTech: '[Deuda clie] Sistema de alertas y bloqueo transaccional por saldo moroso.',
      changelogUser: 'Control de riesgo crediticio con avisos y bloqueo de ventas a clientes morosos.',
      flowStatus: 'OK',
      status: 'OK',
      audit: [{ user: 'Carlos Mendoza', action: 'Desarrollado y probado', date: '2026-08-09' }]
    },
    {
      id: 10015,
      version: '1.0.19',
      module: 'Baja clien',
      type: 'Seguridad / Validación',
      description: 'Baja de Cliente / Mensaje + bloqueo',
      details: 'Bloquear transacciones a clientes dados de baja en el sistema maestro.',
      priority: 'Media',
      dev: 'David Hernandez',
      devBranch: 'fix/10015-baja-cliente-bloqueo',
      devNotes: 'Filtro de búsqueda excluye inactivos excepto para consulta histórica.',
      smokeChecklist: [
        { text: 'Intento de venta a cliente inactivo (bloqueado)', checked: true },
        { text: 'Consulta de historial de cliente inactivo (permitido)', checked: true }
      ],
      devCertified: true,
      devCertifiedAt: '2026-08-09 14:00',
      smokeNotes: 'Flujo probado ok.',
      qa: 'Ignacio Silva',
      qaStatus: 'APROBADO',
      useCases: [{ title: 'Cliente inactivo bloqueado en ventas', status: 'PASSED' }],
      qaFeedback: 'Verificado.',
      changelogTech: '[Baja clien] Restricción de operaciones para registros en estado baja.',
      changelogUser: 'Mensaje de aviso y bloqueo preventivo para clientes dados de baja.',
      flowStatus: 'OK',
      status: 'OK',
      audit: [{ user: 'David Hernandez', action: 'Aprobado', date: '2026-08-09' }]
    },
    {
      id: 10016,
      version: '1.0.19',
      module: 'Boleta',
      type: 'Mejora',
      description: 'Si el vuelto es mayor a cero tiene que aparecer en la boleta',
      details: 'Imprimir el detalle de vuelto exacto en el voucher físico y digital.',
      priority: 'Media',
      dev: 'David Hernandez',
      devBranch: 'fix/10016-boleta-vuelto',
      devNotes: 'Ajuste en plantilla ESC/POS y PDF.',
      smokeChecklist: [
        { text: 'Pago con efectivo exacto (no muestra vuelto)', checked: true },
        { text: 'Pago con efectivo mayor (imprime Vuelto: $X)', checked: true }
      ],
      devCertified: true,
      devCertifiedAt: '2026-08-09 15:30',
      smokeNotes: 'Impresión térmica probada en impresora de prueba.',
      qa: 'Valeria Soto',
      qaStatus: 'APROBADO',
      useCases: [{ title: 'Vuelto impreso claramente en el ticket', status: 'PASSED' }],
      qaFeedback: 'Impresión correcta.',
      changelogTech: '[Boleta] Renderizado condicional del vuelto en plantilla de tickets.',
      changelogUser: 'Visualización clara del vuelto en boletas cuando corresponda.',
      flowStatus: 'OK',
      status: 'OK',
      audit: [{ user: 'David Hernandez', action: 'Completado', date: '2026-08-09' }]
    },
    {
      id: 10017,
      version: '1.0.19',
      module: 'Cierre de Caja',
      type: 'UI/UX',
      description: 'Modificar cierre de caja apartado diferencia(rojo)',
      details: 'Resaltar en color rojo vivo si existe diferencia negativa en el arqueo.',
      priority: 'Media',
      dev: 'Carlos Mendoza',
      devBranch: 'ui/10017-cierre-caja-diferencia-rojo',
      devNotes: 'Aplicación de clase .text-danger-highlight según cálculo numérico.',
      smokeChecklist: [
        { text: 'Cierre de caja cuadrado (diferencia $0 en verde)', checked: true },
        { text: 'Cierre con faltante (diferencia en rojo)', checked: true }
      ],
      devCertified: true,
      devCertifiedAt: '2026-08-09 16:00',
      smokeNotes: 'Probado en cierre de turno.',
      qa: 'Valeria Soto',
      qaStatus: 'APROBADO',
      useCases: [{ title: 'Diferencia negativa en rojo destacado', status: 'PASSED' }],
      qaFeedback: 'Diseño impecable.',
      changelogTech: '[Cierre de Caja] Estilizado de diferencias de cuadratura.',
      changelogUser: 'Alerta visual en color rojo para diferencias en cierre de caja.',
      flowStatus: 'OK',
      status: 'OK',
      audit: [{ user: 'Carlos Mendoza', action: 'Aprobado', date: '2026-08-09' }]
    },
    {
      id: 10018,
      version: '1.0.19',
      module: 'Cierre de Caja',
      type: 'Seguridad / Validación',
      description: 'Bloquear botón imprimir cierre de caja mientras se imprime',
      details: 'Evitar doble impresión accidental por clicks repetidos.',
      priority: 'Alta',
      dev: 'Carlos Mendoza',
      devBranch: 'fix/10018-disable-print-button',
      devNotes: 'Estado isPrinting booleano con spinner en el botón.',
      smokeChecklist: [
        { text: 'Click en imprimir -> botón deshabilitado hasta recibir respuesta', checked: true }
      ],
      devCertified: true,
      devCertifiedAt: '2026-08-09 17:00',
      smokeNotes: 'Sin errores de concurrencia.',
      qa: 'Ignacio Silva',
      qaStatus: 'APROBADO',
      useCases: [{ title: 'Doble click rápido no genera segundo ticket', status: 'PASSED' }],
      qaFeedback: 'Validado.',
      changelogTech: '[Cierre de Caja] Protección contra re-impresiones por debounce y loading state.',
      changelogUser: 'Protección contra impresiones duplicadas al cerrar la caja.',
      flowStatus: 'OK',
      status: 'OK',
      audit: [{ user: 'Carlos Mendoza', action: 'Aprobado', date: '2026-08-09' }]
    },
    {
      id: 10019,
      version: '1.0.19',
      module: 'Venta',
      type: 'Mejora',
      description: 'Boletas por 1 o 10 pesos',
      details: 'Permitir emitir documentos por montos mínimos de $1 y $10 sin redondeo forzoso.',
      priority: 'Media',
      dev: 'David Hernandez',
      devBranch: 'fix/10019-montos-minimos',
      devNotes: 'Validación de monto mínimo ajustada a >= $1.',
      smokeChecklist: [{ text: 'Emisión de venta por $1 peso chileno', checked: true }],
      devCertified: true,
      devCertifiedAt: '2026-08-09 17:30',
      smokeNotes: 'Aprobado.',
      qa: 'Valeria Soto',
      qaStatus: 'APROBADO',
      useCases: [{ title: 'Venta de $1 emitida con éxito', status: 'PASSED' }],
      qaFeedback: 'Aprobado.',
      changelogTech: '[Venta] Ajuste de límites mínimos de cobro.',
      changelogUser: 'Soporte para cobros de montos pequeños desde $1.',
      flowStatus: 'OK',
      status: 'OK',
      audit: [{ user: 'David Hernandez', action: 'OK', date: '2026-08-09' }]
    },
    {
      id: 10020,
      version: '1.0.19',
      module: 'Venta',
      type: 'Mejora',
      description: 'Habilitar Ticket de Venta',
      details: 'Opción de emitir comprobante no fiscal / ticket interno de control.',
      priority: 'Media',
      dev: 'David Hernandez',
      devBranch: 'feature/10020-ticket-interno',
      devNotes: 'Agregado nuevo tipo de documento interno.',
      smokeChecklist: [{ text: 'Emisión de ticket interno y actualización de stock', checked: true }],
      devCertified: true,
      devCertifiedAt: '2026-08-09 18:00',
      smokeNotes: 'Probado.',
      qa: 'Valeria Soto',
      qaStatus: 'APROBADO',
      useCases: [{ title: 'Generación de ticket no tributario', status: 'PASSED' }],
      qaFeedback: 'Aprobado.',
      changelogTech: '[Venta] Incorporado flujo de ticket interno de venta.',
      changelogUser: 'Habilitada la opción de emitir Ticket de Venta no fiscal.',
      flowStatus: 'OK',
      status: 'OK',
      audit: [{ user: 'David Hernandez', action: 'OK', date: '2026-08-09' }]
    },
    {
      id: 10021,
      version: '1.0.19',
      module: 'Monto',
      type: 'UI/UX',
      description: 'Formatear con punto de separación',
      details: 'Formato de moneda internacional con separador de miles por punto ($1.000.000).',
      priority: 'Media',
      dev: 'Carlos Mendoza',
      devBranch: 'ui/10021-formato-miles',
      devNotes: 'Helper de formateo Intl.NumberFormat(es-CL).',
      smokeChecklist: [{ text: 'Revisión en tablas, recibos y modales', checked: true }],
      devCertified: true,
      devCertifiedAt: '2026-08-09 18:30',
      smokeNotes: 'Todo formateado.',
      qa: 'Valeria Soto',
      qaStatus: 'APROBADO',
      useCases: [{ title: 'Puntos de miles visibles en todas las pantallas', status: 'PASSED' }],
      qaFeedback: 'Excelente legibilidad.',
      changelogTech: '[Monto] Formateo estándar con separadores de miles.',
      changelogUser: 'Formato de montos más claro y legible con separadores de miles.',
      flowStatus: 'OK',
      status: 'OK',
      audit: [{ user: 'Carlos Mendoza', action: 'OK', date: '2026-08-09' }]
    },
    {
      id: 10022,
      version: '1.0.19',
      module: 'Escanear',
      type: 'Mejora',
      description: 'Borrar toda la información al momento de borrar el código',
      details: 'Limpiar campos de descripción y precio si se borra el código de barras escaneado.',
      priority: 'Media',
      dev: 'Carlos Mendoza',
      devBranch: 'fix/10022-clear-scan-fields',
      devNotes: 'Listener onChange reset state on empty input.',
      smokeChecklist: [{ text: 'Escanear producto -> borrar input -> campos vuelven a vacío', checked: true }],
      devCertified: true,
      devCertifiedAt: '2026-08-09 19:00',
      smokeNotes: 'OK.',
      qa: 'Ignacio Silva',
      qaStatus: 'APROBADO',
      useCases: [{ title: 'Limpieza reactiva de formulario al vaciar código', status: 'PASSED' }],
      qaFeedback: 'OK.',
      changelogTech: '[Escanear] Reset reactivo de campos dependientes del código de barras.',
      changelogUser: 'Mejora al escanear: limpia los datos si se borra el código ingresado.',
      flowStatus: 'OK',
      status: 'OK',
      audit: [{ user: 'Carlos Mendoza', action: 'OK', date: '2026-08-09' }]
    },
    {
      id: 10023,
      version: '1.0.19',
      module: 'Volver atrás',
      type: 'Corrección',
      description: 'Se cae la aplicación al presionar volver atrás y presionar...',
      details: 'Fix al error fatal NullPointer al regresar rápidamente desde el detalle de venta.',
      priority: 'Alta',
      dev: 'David Hernandez',
      devBranch: 'fix/10023-crash-navigation-back',
      devNotes: 'Cancelación de promesas pendientes en ciclo de desmontaje.',
      smokeChecklist: [{ text: 'Navegación rápida de ida y vuelta múltiple', checked: true }],
      devCertified: true,
      devCertifiedAt: '2026-08-09 19:30',
      smokeNotes: 'No se reproducen caídas.',
      qa: 'Valeria Soto',
      qaStatus: 'APROBADO',
      useCases: [{ title: 'Regresar desde modal de venta sin freeze ni caídas', status: 'PASSED' }],
      qaFeedback: 'Crash solucionado.',
      changelogTech: '[Volver atrás] Fix de memory leak y desmontaje asíncrono en navegación.',
      changelogUser: 'Corrección de error crítico al presionar el botón de volver atrás.',
      flowStatus: 'OK',
      status: 'OK',
      audit: [{ user: 'David Hernandez', action: 'OK', date: '2026-08-09' }]
    },

    // --- Versión 1.0.20 (En Proceso / QA & Dev) ---
    {
      id: 10024,
      version: '1.0.20',
      module: 'Caja',
      type: 'Nuevo',
      description: 'Ingreso y salida de dinero',
      details: 'Módulo para registrar movimientos de caja chica, gastos menores y aportes de sencillo.',
      priority: 'Alta',
      dev: 'Carlos Mendoza',
      devBranch: 'feature/10024-movimientos-caja',
      devNotes: 'Desarrollo de endpoints /cash/inflow y /cash/outflow con comprobante imprimible.',
      smokeChecklist: [
        { text: 'Apertura de turno de caja', checked: true },
        { text: 'Registro de ingreso de $5.000 por sencillo', checked: true },
        { text: 'Registro de salida de $2.000 para insumos', checked: false },
        { text: 'Verificación en arqueo final del saldo calculado', checked: false }
      ],
      devCertified: false,
      devCertifiedAt: '',
      smokeNotes: 'Falta validar la impresión del comprobante de egreso.',
      qa: 'Valeria Soto',
      qaStatus: 'PENDIENTE',
      useCases: [
        { title: 'Registrar ingreso con motivo y responsable', status: 'PASSED' },
        { title: 'Registrar egreso validando que no supere el disponible', status: 'PENDING' },
        { title: 'Impresión térmica del voucher de movimiento', status: 'PENDING' }
      ],
      qaFeedback: 'Esperando finalización de smoke test por el desarrollador.',
      changelogTech: '[Caja] Módulo completo de ingresos y salidas con impacto en arqueo.',
      changelogUser: 'Nueva opción para registrar ingresos y salidas de dinero de caja con comprobante.',
      flowStatus: 'EN_DESARROLLO',
      status: 'Pendiente',
      audit: [{ user: 'Carlos Mendoza', action: 'Inició desarrollo', date: '2026-08-11' }]
    },
    {
      id: 10025,
      version: '1.0.20',
      module: 'Venta',
      type: 'Mejora',
      description: 'Impresión al terminar el pago',
      details: 'Disparar la impresión automática del comprobante inmediatamente tras confirmar el pago.',
      priority: 'Alta',
      dev: 'David Hernandez',
      devBranch: 'feature/10025-auto-print-after-payment',
      devNotes: 'Hook post-pago conectado con driver de impresión.',
      smokeChecklist: [
        { text: 'Cobro con tarjeta -> Impresión inmediata', checked: true },
        { text: 'Cobro en efectivo -> Impresión y apertura de gaveta', checked: true },
        { text: 'Verificación de no duplicación de folios', checked: true }
      ],
      devCertified: true,
      devCertifiedAt: '2026-08-12 14:00',
      smokeNotes: 'Smoke test de flujo completo ejecutado con éxito.',
      qa: 'Valeria Soto',
      qaStatus: 'EN_PRUEBAS',
      useCases: [
        { title: 'Impresión automática en pago exitoso', status: 'PASSED' },
        { title: 'Comportamiento si la impresora no tiene papel', status: 'PENDING' }
      ],
      qaFeedback: 'En validación de casos borde.',
      changelogTech: '[Venta] Automatización del disparador de impresión tras confirmación de pasarela.',
      changelogUser: 'Impresión inmediata y fluida al finalizar el pago.',
      flowStatus: 'QA_REVIEW',
      status: 'Pendiente',
      audit: [
        { user: 'David Hernandez', action: 'Flujo completo certificado', date: '2026-08-12 14:00' },
        { user: 'Valeria Soto', action: 'Inició revisión de QA', date: '2026-08-12 16:00' }
      ]
    },
    {
      id: 10026,
      version: '1.0.20',
      module: 'Productos',
      type: 'Seguridad / Validación',
      description: 'Agregar restriccion a modificación y creación de productos',
      details: 'Solo usuarios con permiso explícito "ADMIN_CATALOG" pueden alterar precios o crear productos.',
      priority: 'Alta',
      dev: 'Carlos Mendoza',
      devBranch: 'security/10026-permisos-productos',
      devNotes: 'Control RBAC en backend y ocultamiento de botones de acción en interfaz.',
      smokeChecklist: [
        { text: 'Login con usuario Cajero (botones editar/crear ocultos)', checked: true },
        { text: 'Login con Administrador (acceso total)', checked: true },
        { text: 'Intento de acceso directo por URL (bloqueo 403)', checked: true }
      ],
      devCertified: true,
      devCertifiedAt: '2026-08-13 11:20',
      smokeNotes: 'Permisos validados en todas las pantallas.',
      qa: 'Ignacio Silva',
      qaStatus: 'APROBADO',
      useCases: [
        { title: 'Usuario estándar sin permisos de edición', status: 'PASSED' },
        { title: 'Supervisor con permisos edita correctamente', status: 'PASSED' }
      ],
      qaFeedback: 'Aprobado sin observaciones.',
      changelogTech: '[Productos] Implementada política RBAC para protección de catálogo y precios.',
      changelogUser: 'Mayor seguridad: solo usuarios autorizados pueden modificar o crear productos.',
      flowStatus: 'OK',
      status: 'OK',
      audit: [
        { user: 'Carlos Mendoza', action: 'Smoke test OK', date: '2026-08-13' },
        { user: 'Ignacio Silva', action: 'Aprobado QA', date: '2026-08-13' }
      ]
    },
    {
      id: 10027,
      version: '1.0.20',
      module: 'Venta',
      type: 'UI/UX',
      description: 'Luego de venta, dirigir a pantalla inicio',
      details: 'Tras cerrar la venta con éxito, retornar de inmediato al punto de venta listo para el siguiente cliente.',
      priority: 'Media',
      dev: 'David Hernandez',
      devBranch: 'ui/10027-redirect-home-after-sale',
      devNotes: 'Ajustado timeout de pantalla de éxito a 1.2 segundos con opción de skip manual.',
      smokeChecklist: [
        { text: 'Venta completada -> Transición limpia al inicio', checked: true }
      ],
      devCertified: true,
      devCertifiedAt: '2026-08-14 09:30',
      smokeNotes: 'Flujo probado ok.',
      qa: 'Valeria Soto',
      qaStatus: 'APROBADO',
      useCases: [{ title: 'Retorno automático al terminal de venta', status: 'PASSED' }],
      qaFeedback: 'Flujo mucho más rápido y ágil.',
      changelogTech: '[Venta] Redirección automática al home con reseteo de formulario.',
      changelogUser: 'Retorno instantáneo a la pantalla inicial tras completar cada venta.',
      flowStatus: 'OK',
      status: 'OK',
      audit: [{ user: 'David Hernandez', action: 'Aprobado QA', date: '2026-08-14' }]
    },
    {
      id: 10028,
      version: '1.0.20',
      module: 'Productos',
      type: 'UI/UX',
      description: 'Icono parte superior derecha(+) da entender que es caja...',
      details: 'Cambiar el icono (+) confuso por un icono explícito de producto/catálogo con tooltip informativo.',
      priority: 'Baja',
      dev: 'Carlos Mendoza',
      devBranch: 'ui/10028-icono-productos',
      devNotes: 'Reemplazado SVG genérico por IconPackagePlus y añadido label accesible.',
      smokeChecklist: [
        { text: 'Verificación visual en header de inventario', checked: false }
      ],
      devCertified: false,
      devCertifiedAt: '',
      smokeNotes: 'En desarrollo.',
      qa: 'Valeria Soto',
      qaStatus: 'PENDIENTE',
      useCases: [{ title: 'Nuevo icono claramente diferenciado de operaciones de caja', status: 'PENDING' }],
      qaFeedback: '',
      changelogTech: '[Productos] Actualización de iconografía para evitar ambigüedad con caja.',
      changelogUser: 'Mejora visual en el botón de agregar producto para mayor claridad.',
      flowStatus: 'EN_DESARROLLO',
      status: 'Pendiente',
      audit: [{ user: 'Carlos Mendoza', action: 'Iniciado', date: '2026-08-14' }]
    },
    {
      id: 10029,
      version: '1.0.20',
      module: 'Stock',
      type: 'Nuevo',
      description: 'Cargar productos por empresa',
      details: 'Permitir filtro y carga masiva de stock separada por empresa/sucursal en multi-empresa.',
      priority: 'Alta',
      dev: 'David Hernandez',
      devBranch: 'feature/10029-stock-multiempresa',
      devNotes: 'Modificación de consultas para respetar tenant_id y subida por Excel con validación de RUT.',
      smokeChecklist: [
        { text: 'Descargar plantilla Excel por empresa', checked: true },
        { text: 'Cargar 500 productos a Empresa A', checked: true },
        { text: 'Verificar que Empresa B no ve los datos de Empresa A', checked: true }
      ],
      devCertified: true,
      devCertifiedAt: '2026-08-15 15:00',
      smokeNotes: 'Smoke test completo de aislamiento multitenant ejecutado.',
      qa: 'Ignacio Silva',
      qaStatus: 'EN_PRUEBAS',
      useCases: [
        { title: 'Carga masiva sin errores', status: 'PASSED' },
        { title: 'Aislamiento estricto de catálogo entre empresas', status: 'PASSED' },
        { title: 'Manejo de códigos duplicados en el Excel', status: 'PENDING' }
      ],
      qaFeedback: 'Pruebas avanzadas en curso con datasets de 1.000 items.',
      changelogTech: '[Stock] Carga masiva segmentada por tenant_id con validación de esquema.',
      changelogUser: 'Carga y gestión de stock independiente por cada empresa asociada.',
      flowStatus: 'QA_REVIEW',
      status: 'Pendiente',
      audit: [{ user: 'David Hernandez', action: 'Enviado a QA', date: '2026-08-15' }]
    },
    {
      id: 10030,
      version: '1.0.20',
      module: 'Post venta',
      type: 'Nuevo',
      description: 'Crear opción de crear nota de crédito en mobile',
      details: 'Habilitar emisión y referencia de notas de crédito desde tablets y teléfonos móviles.',
      priority: 'Alta',
      dev: 'David Hernandez',
      devBranch: 'feature/10030-nc-mobile',
      devNotes: 'Diseño responsive de modal de selección de documento de referencia y motivos SII.',
      smokeChecklist: [
        { text: 'Búsqueda de boleta original en pantalla táctil', checked: true },
        { text: 'Selección de productos a devolver (devolución parcial)', checked: false }
      ],
      devCertified: false,
      devCertifiedAt: '',
      smokeNotes: 'Ajustando teclado virtual en pantallas pequeñas.',
      qa: 'Valeria Soto',
      qaStatus: 'PENDIENTE',
      useCases: [
        { title: 'Nota de crédito total en dispositivo móvil', status: 'PENDING' },
        { title: 'Nota de crédito parcial con ajuste de inventario', status: 'PENDING' }
      ],
      qaFeedback: '',
      changelogTech: '[Post venta] Adaptación táctil y flujo mobile para Notas de Crédito.',
      changelogUser: 'Emisión de Notas de Crédito directamente desde dispositivos móviles.',
      flowStatus: 'SMOKE_TEST_DEV',
      status: 'Pendiente',
      audit: [{ user: 'David Hernandez', action: 'Desarrollado, realizando smoke test', date: '2026-08-16' }]
    },
    {
      id: 10031,
      version: '1.0.20',
      module: 'Venta',
      type: 'Mejora',
      description: 'Permitir previsualizar documento luego de la venta',
      details: 'Mostrar vista previa digital interactiva antes de enviar a la impresora.',
      priority: 'Media',
      dev: 'Carlos Mendoza',
      devBranch: 'feature/10031-preview-documento',
      devNotes: 'Canvas render del ticket con zoom.',
      smokeChecklist: [
        { text: 'Previsualización de boleta', checked: false },
        { text: 'Previsualización de factura', checked: false }
      ],
      devCertified: false,
      devCertifiedAt: '',
      smokeNotes: '',
      qa: 'Valeria Soto',
      qaStatus: 'PENDIENTE',
      useCases: [{ title: 'Vista previa fiel al ticket impreso', status: 'PENDING' }],
      qaFeedback: '',
      changelogTech: '[Venta] Modal de vista previa digital de documentos generados.',
      changelogUser: 'Opción de previsualizar el documento en pantalla al concluir la venta.',
      flowStatus: 'PENDIENTE',
      status: 'Pendiente',
      audit: [{ user: 'Carlos Mendoza', action: 'Planificada', date: '2026-08-16' }]
    },
    {
      id: 10032,
      version: '1.0.20',
      module: 'Configura',
      type: 'Configuración',
      description: 'Actualizar Changelog',
      details: 'Generar y consolidar el Changelog oficial de la versión 1.0.20 para su distribución.',
      priority: 'Alta',
      dev: 'David Hernandez',
      devBranch: 'docs/10032-changelog-v1020',
      devNotes: 'Integración automática a través del Changelog Studio de TaskTracer Pro.',
      smokeChecklist: [
        { text: 'Verificación de todas las tareas cerradas en 1.0.20', checked: false },
        { text: 'Generación y exportación de CHANGELOG.md', checked: false }
      ],
      devCertified: false,
      devCertifiedAt: '',
      smokeNotes: '',
      qa: 'Valeria Soto',
      qaStatus: 'PENDIENTE',
      useCases: [{ title: 'Compilación técnica y ejecutiva sin inconsistencias', status: 'PENDING' }],
      qaFeedback: '',
      changelogTech: '[Configura] Generación y publicación del registro de cambios v1.0.20.',
      changelogUser: 'Publicación oficial del registro de mejoras y correcciones de la versión.',
      flowStatus: 'PENDIENTE',
      status: 'Pendiente',
      audit: [{ user: 'David Hernandez', action: 'Asignada', date: '2026-08-16' }]
    }
  ];

  // =========================================================================
  // STATE MANAGEMENT & LOCAL STORAGE PERSISTENCE
  // =========================================================================
  const STORAGE_KEY_TASKS = 'tasktracer_tasks_v2';
  const STORAGE_KEY_VERSIONS = 'tasktracer_versions_v2';
  const STORAGE_KEY_USERS = 'tasktracer_users_v2';
  const STORAGE_KEY_THEME = 'tasktracer_theme_v2';

  let state = {
    versions: [],
    users: [],
    tasks: [],
    currentView: 'grid',
    activeFilters: {
      version: 'all',
      module: 'all',
      status: 'all',
      search: ''
    },
    sortColumn: 'id',
    sortDirection: 'asc',
    currentEditingTaskId: null,
    currentModalStep: 1
  };

  function initState() {
    // Load theme
    const savedTheme = localStorage.getItem(STORAGE_KEY_THEME) || 'theme-dark';
    document.body.className = savedTheme;

    // Load versions
    const savedVersions = localStorage.getItem(STORAGE_KEY_VERSIONS);
    if (savedVersions) {
      try {
        state.versions = JSON.parse(savedVersions);
      } catch (e) {
        state.versions = [...DEFAULT_VERSIONS];
      }
    } else {
      state.versions = [...DEFAULT_VERSIONS];
      saveVersions();
    }

    // Load users
    const savedUsers = localStorage.getItem(STORAGE_KEY_USERS);
    if (savedUsers) {
      try {
        state.users = JSON.parse(savedUsers);
      } catch (e) {
        state.users = [...DEFAULT_USERS];
      }
    } else {
      state.users = [...DEFAULT_USERS];
      saveUsers();
    }

    // Load tasks
    const savedTasks = localStorage.getItem(STORAGE_KEY_TASKS);
    if (savedTasks) {
      try {
        state.tasks = JSON.parse(savedTasks);
      } catch (e) {
        state.tasks = [...DEFAULT_TASKS];
      }
    } else {
      state.tasks = [...DEFAULT_TASKS];
      saveTasks();
    }
  }

  function saveTasks() {
    localStorage.setItem(STORAGE_KEY_TASKS, JSON.stringify(state.tasks));
  }

  function saveVersions() {
    localStorage.setItem(STORAGE_KEY_VERSIONS, JSON.stringify(state.versions));
  }

  function saveUsers() {
    localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(state.users));
  }

  // =========================================================================
  // HELPERS & FORMATTERS
  // =========================================================================
  function getNextTaskId() {
    if (!state.tasks || state.tasks.length === 0) return 10001;
    const maxId = Math.max(...state.tasks.map(t => parseInt(t.id, 10) || 10000));
    return maxId + 1;
  }

  function getUniqueModules() {
    const set = new Set();
    state.tasks.forEach(t => { if (t.module) set.add(t.module.trim()); });
    return Array.from(set).sort();
  }

  function getVersionObj(verName) {
    return state.versions.find(v => v.name === verName) || null;
  }

  function getUserObjByName(userName) {
    if (!userName) return null;
    return state.users.find(u => u.name.trim().toLowerCase() === userName.trim().toLowerCase()) || null;
  }

  function getInitials(name) {
    if (!name) return '?';
    const parts = name.trim().split(' ');
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }

  function showToast(msg, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icon = type === 'success' ? '✅' : '⚠️';
    toast.innerHTML = `<span>${icon}</span> <span>${escapeHtml(msg)}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 250);
    }, 3200);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // =========================================================================
  // VIEW SWITCHING & NAVIGATION
  // =========================================================================
  function initNavigation() {
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const view = tab.getAttribute('data-view');
        switchView(view);
      });
    });

    // Theme Toggle
    const themeBtn = document.getElementById('btn-theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        if (document.body.classList.contains('theme-light')) {
          document.body.classList.remove('theme-light');
          document.body.classList.add('theme-dark');
          localStorage.setItem(STORAGE_KEY_THEME, 'theme-dark');
          showToast('Modo Oscuro Activado');
        } else {
          document.body.classList.remove('theme-dark');
          document.body.classList.add('theme-light');
          localStorage.setItem(STORAGE_KEY_THEME, 'theme-light');
          showToast('Modo Claro Activado');
        }
      });
    }

    // Modal Trigger Buttons
    document.getElementById('btn-version-manager')?.addEventListener('click', openVersionModal);
    document.getElementById('btn-data-export-import')?.addEventListener('click', openBackupModal);
    document.getElementById('btn-new-task')?.addEventListener('click', () => openTaskModal(null));
    document.getElementById('btn-quick-add-row')?.addEventListener('click', handleQuickAddRow);
    document.getElementById('btn-export-excel-csv')?.addEventListener('click', exportToCSV);

    // Filter controls
    document.getElementById('filter-version')?.addEventListener('change', (e) => {
      state.activeFilters.version = e.target.value;
      renderAllViews();
    });

    document.getElementById('filter-module')?.addEventListener('change', (e) => {
      state.activeFilters.module = e.target.value;
      renderAllViews();
    });

    document.getElementById('filter-status')?.addEventListener('change', (e) => {
      state.activeFilters.status = e.target.value;
      renderAllViews();
    });

    const searchInput = document.getElementById('input-search');
    const clearSearchBtn = document.getElementById('btn-clear-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.activeFilters.search = e.target.value.toLowerCase().trim();
        if (state.activeFilters.search) {
          clearSearchBtn?.classList.remove('hidden');
        } else {
          clearSearchBtn?.classList.add('hidden');
        }
        renderAllViews();
      });
    }

    clearSearchBtn?.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      state.activeFilters.search = '';
      clearSearchBtn.classList.add('hidden');
      renderAllViews();
    });

    // Sort table headers
    document.querySelectorAll('.excel-table th.sortable').forEach(th => {
      th.addEventListener('click', () => {
        const col = th.getAttribute('data-sort');
        if (state.sortColumn === col) {
          state.sortDirection = state.sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
          state.sortColumn = col;
          state.sortDirection = 'asc';
        }
        renderGridTable();
      });
    });
  }

  function switchView(viewName) {
    state.currentView = viewName;
    document.querySelectorAll('.nav-tab').forEach(t => {
      t.classList.toggle('active', t.getAttribute('data-view') === viewName);
    });
    document.querySelectorAll('.view-panel').forEach(p => {
      p.classList.toggle('active', p.id === `view-${viewName}`);
    });

    if (viewName === 'changelog') {
      renderChangelogStudio();
    } else if (viewName === 'dashboard') {
      renderDashboard();
    } else if (viewName === 'pipeline') {
      renderPipelineBoard();
    } else if (viewName === 'settings') {
      renderTeamSettings();
    } else {
      renderGridTable();
    }
  }

  // =========================================================================
  // FILTERING & SORTING LOGIC
  // =========================================================================
  function getFilteredTasks() {
    return state.tasks.filter(t => {
      // Filter by version
      if (state.activeFilters.version !== 'all' && t.version !== state.activeFilters.version) {
        return false;
      }
      // Filter by module
      if (state.activeFilters.module !== 'all' && t.module !== state.activeFilters.module) {
        return false;
      }
      // Filter by status
      if (state.activeFilters.status !== 'all') {
        if (state.activeFilters.status === 'OK' && t.status !== 'OK') return false;
        if (state.activeFilters.status === 'PENDIENTE' && t.status === 'OK') return false;
        if (['EN_DESARROLLO', 'SMOKE_TEST_DEV', 'QA_REVIEW'].includes(state.activeFilters.status)) {
          if (t.flowStatus !== state.activeFilters.status) return false;
        }
      }
      // Search term
      if (state.activeFilters.search) {
        const q = state.activeFilters.search;
        const matchId = String(t.id).includes(q);
        const matchVer = (t.version || '').toLowerCase().includes(q);
        const matchMod = (t.module || '').toLowerCase().includes(q);
        const matchDesc = (t.description || '').toLowerCase().includes(q);
        const matchDev = (t.dev || '').toLowerCase().includes(q);
        const matchQa = (t.qa || '').toLowerCase().includes(q);
        if (!matchId && !matchVer && !matchMod && !matchDesc && !matchDev && !matchQa) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      let valA = a[state.sortColumn] ?? '';
      let valB = b[state.sortColumn] ?? '';

      if (state.sortColumn === 'id') {
        valA = parseInt(valA, 10) || 0;
        valB = parseInt(valB, 10) || 0;
      } else {
        valA = String(valA).toLowerCase();
        valB = String(valB).toLowerCase();
      }

      if (valA < valB) return state.sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return state.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  // =========================================================================
  // VIEW 1: EXCEL / SPREADSHEET TABLE GRID RENDERING
  // =========================================================================
  function renderGridTable() {
    const tbody = document.getElementById('tasks-table-body');
    const emptyState = document.getElementById('table-empty-state');
    if (!tbody) return;

    const filtered = getFilteredTasks();
    tbody.innerHTML = '';

    if (filtered.length === 0) {
      if (emptyState) emptyState.classList.remove('hidden');
      return;
    } else {
      if (emptyState) emptyState.classList.add('hidden');
    }

    filtered.forEach(task => {
      const tr = document.createElement('tr');

      // Version row highlight matching original photo
      if (task.version === '1.0.19') {
        tr.className = 'version-row-1-0-19';
      } else if (task.version === '1.0.20') {
        tr.className = 'version-row-1-0-20';
      } else {
        tr.className = 'version-row-custom';
        const vObj = getVersionObj(task.version);
        if (vObj && vObj.color) {
          tr.style.setProperty('--row-custom-bg', `${vObj.color}22`);
        }
      }

      // Flow stage badge logic
      let flowBadgeHtml = '';
      const fStatus = task.flowStatus || (task.status === 'OK' ? 'OK' : 'PENDIENTE');
      if (fStatus === 'OK') {
        flowBadgeHtml = `<span class="badge-status badge-status-ok">✅ Listo / OK</span>`;
      } else if (fStatus === 'QA_REVIEW') {
        flowBadgeHtml = `<span class="badge-status badge-status-qa">🔍 Revisión QA</span>`;
      } else if (fStatus === 'SMOKE_TEST_DEV') {
        flowBadgeHtml = `<span class="badge-status badge-status-smoke">🧪 Flujo Dev</span>`;
      } else if (fStatus === 'EN_DESARROLLO') {
        flowBadgeHtml = `<span class="badge-status badge-status-dev">💻 En Desarrollo</span>`;
      } else {
        flowBadgeHtml = `<span class="badge-status badge-status-pending">📋 Planificado</span>`;
      }

      // Status Badge (OK vs Pendiente)
      const isOk = task.status === 'OK';
      const statusBadgeHtml = isOk
        ? `<span class="badge-status badge-status-ok">OK</span>`
        : `<span class="badge-status badge-status-pending">Pendiente</span>`;

      // Version badge class
      let vBadgeClass = 'v-badge-custom';
      if (task.version === '1.0.19') vBadgeClass = 'v-badge-19';
      if (task.version === '1.0.20') vBadgeClass = 'v-badge-20';

      const devUser = getUserObjByName(task.dev);
      const qaUser = getUserObjByName(task.qa);

      tr.innerHTML = `
        <td class="table-id-cell">#${task.id}</td>
        <td><span class="table-version-badge ${vBadgeClass}">${escapeHtml(task.version)}</span></td>
        <td class="table-module-cell editable-cell" data-field="module" contenteditable="true" spellcheck="false">${escapeHtml(task.module || '')}</td>
        <td class="table-desc-cell editable-cell" data-field="description" contenteditable="true" spellcheck="false" title="${escapeHtml(task.description)}">${escapeHtml(task.description)}</td>
        <td>
          <div class="user-tag" title="Desarrollador: ${escapeHtml(task.dev || 'Sin asignar')}">
            <span class="user-avatar-circle" style="background: ${devUser?.color ? devUser.color + '33' : 'var(--bg-surface-hover)'}; color: ${devUser?.color || 'var(--text-primary)'}; border-color: ${devUser?.color || 'var(--border-subtle)'};">${escapeHtml(getInitials(task.dev))}</span>
            <span>${escapeHtml(task.dev || 'Sin asignar')}</span>
          </div>
        </td>
        <td>
          <div class="user-tag" title="Revisor QA: ${escapeHtml(task.qa || 'Sin asignar')}">
            <span class="user-avatar-circle" style="background: ${qaUser?.color ? qaUser.color + '33' : 'var(--bg-surface-hover)'}; color: ${qaUser?.color || '#38bdf8'}; border-color: ${qaUser?.color || '#38bdf8'};">${escapeHtml(getInitials(task.qa))}</span>
            <span>${escapeHtml(task.qa || 'Sin asignar')}</span>
          </div>
        </td>
        <td>${flowBadgeHtml}</td>
        <td>${statusBadgeHtml}</td>
        <td class="table-actions-cell">
          <button class="btn-table-action btn-open-modal" title="Abrir Asistente de Flujo y QA">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
        </td>
      `;

      // Click to open modal (unless editing inline cell)
      tr.addEventListener('click', (e) => {
        if (e.target.classList.contains('editable-cell') || e.target.closest('.editable-cell')) {
          return;
        }
        openTaskModal(task.id);
      });

      // Inline edit listeners
      tr.querySelectorAll('.editable-cell').forEach(cell => {
        cell.addEventListener('blur', () => {
          const field = cell.getAttribute('data-field');
          const newVal = cell.innerText.trim();
          if (task[field] !== newVal) {
            task[field] = newVal;
            saveTasks();
            showToast(`Actualizado ${field} de #${task.id}`);
            updateStatsPill();
          }
        });
        cell.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            cell.blur();
          }
        });
      });

      tbody.appendChild(tr);
    });
  }

  function handleQuickAddRow() {
    const newId = getNextTaskId();
    const activeVer = state.activeFilters.version !== 'all' ? state.activeFilters.version : (state.versions[0]?.name || '1.0.21');
    const newTask = {
      id: newId,
      version: activeVer,
      module: 'Venta',
      type: 'Mejora',
      description: 'Nueva tarea sin título (Clic para editar)',
      details: '',
      priority: 'Media',
      dev: state.users.find(u => u.role === 'DEV' || u.role === 'LEAD')?.name || '',
      devBranch: '',
      devNotes: '',
      smokeChecklist: [
        { text: 'Validación del flujo principal de la aplicación', checked: false }
      ],
      devCertified: false,
      devCertifiedAt: '',
      smokeNotes: '',
      qa: state.users.find(u => u.role === 'QA')?.name || '',
      qaStatus: 'PENDIENTE',
      useCases: [
        { title: 'Caso de uso principal de la mejora', status: 'PENDING' }
      ],
      qaFeedback: '',
      changelogTech: `[Venta] Nueva mejora en versión ${activeVer}`,
      changelogUser: 'Nueva mejora incorporada.',
      flowStatus: 'PENDIENTE',
      status: 'Pendiente',
      audit: [{ user: 'Sistema', action: 'Tarea creada en hoja', date: new Date().toISOString().split('T')[0] }]
    };

    state.tasks.push(newTask);
    saveTasks();
    renderAllViews();
    showToast(`Fila creada con ID #${newId}. Puedes editarla directamente.`);
    setTimeout(() => {
      const rows = document.querySelectorAll('#tasks-table-body tr');
      if (rows.length > 0) {
        const lastRow = rows[rows.length - 1];
        const descCell = lastRow.querySelector('.table-desc-cell');
        descCell?.focus();
      }
    }, 100);
  }

  function exportToCSV() {
    const tasks = getFilteredTasks();
    let csv = '\uFEFFID,Versión,Módulo,Tipo,Descripción,Desarrollador,Revisor QA,Flujo,Estado,Certificación Dev,Dictamen QA\n';
    tasks.forEach(t => {
      const line = [
        t.id,
        `"${(t.version || '').replace(/"/g, '""')}"`,
        `"${(t.module || '').replace(/"/g, '""')}"`,
        `"${(t.type || '').replace(/"/g, '""')}"`,
        `"${(t.description || '').replace(/"/g, '""')}"`,
        `"${(t.dev || '').replace(/"/g, '""')}"`,
        `"${(t.qa || '').replace(/"/g, '""')}"`,
        `"${t.flowStatus || ''}"`,
        `"${t.status || ''}"`,
        t.devCertified ? 'Certificado' : 'No certificado',
        `"${t.qaStatus || ''}"`
      ].join(',');
      csv += line + '\n';
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `TaskTracer_Export_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Archivo CSV exportado exitosamente.');
  }

  // =========================================================================
  // VIEW 2: PIPELINE & QA FLOW BOARD RENDERING
  // =========================================================================
  function renderPipelineBoard() {
    const filtered = getFilteredTasks();
    const stages = ['PENDIENTE', 'EN_DESARROLLO', 'SMOKE_TEST_DEV', 'QA_REVIEW', 'OK'];
    
    // Update board version badge
    const badge = document.getElementById('pipeline-current-version-badge');
    if (badge) {
      badge.innerText = state.activeFilters.version !== 'all' ? `Versión: ${state.activeFilters.version}` : 'Todas las Versiones';
    }

    const counts = { PENDIENTE: 0, EN_DESARROLLO: 0, SMOKE_TEST_DEV: 0, QA_REVIEW: 0, OK: 0 };

    stages.forEach(stage => {
      const container = document.getElementById(`cards-${getStageSuffix(stage)}`);
      if (!container) return;
      container.innerHTML = '';
    });

    filtered.forEach(task => {
      let stage = task.flowStatus;
      if (!stage || !stages.includes(stage)) {
        stage = task.status === 'OK' ? 'OK' : 'PENDIENTE';
      }
      counts[stage] = (counts[stage] || 0) + 1;

      const container = document.getElementById(`cards-${getStageSuffix(stage)}`);
      if (!container) return;

      const card = document.createElement('div');
      card.className = 'task-card';
      card.draggable = true;
      card.setAttribute('data-id', task.id);

      const smokeIcon = task.devCertified ? '🧪 Flujo Dev ✅' : '🧪 Flujo Dev ⏳';
      const qaTotal = task.useCases ? task.useCases.length : 0;
      const qaPassed = task.useCases ? task.useCases.filter(c => c.status === 'PASSED').length : 0;

      let vColor = '#38bdf8';
      const vObj = getVersionObj(task.version);
      if (vObj && vObj.color) vColor = vObj.color;

      const devUser = getUserObjByName(task.dev);

      card.innerHTML = `
        <div class="card-top">
          <div class="card-tags">
            <span class="card-id">#${task.id}</span>
            <span class="card-module-pill">${escapeHtml(task.module || 'Gral')}</span>
          </div>
          <span class="table-version-badge" style="color: ${vColor}; border-color: ${vColor}; font-size: 0.68rem; padding: 0.1rem 0.35rem;">${escapeHtml(task.version)}</span>
        </div>
        <div class="card-desc">${escapeHtml(task.description)}</div>
        <div class="card-bottom">
          <div class="card-meta-badges">
            <span class="card-smoke-check" title="Certificación de Flujo Completo por el Desarrollador">${smokeIcon}</span>
            ${qaTotal > 0 ? `<span class="card-qa-cases-count" title="Casos de QA validados">🔍 ${qaPassed}/${qaTotal}</span>` : ''}
          </div>
          <div class="user-tag" title="Dev: ${escapeHtml(task.dev || 'N/A')} | QA: ${escapeHtml(task.qa || 'N/A')}">
            <span class="user-avatar-circle" style="font-size: 0.6rem; background: ${devUser?.color ? devUser.color + '33' : 'var(--bg-surface-hover)'}; color: ${devUser?.color || 'var(--text-primary)'};">${escapeHtml(getInitials(task.dev || task.qa))}</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openTaskModal(task.id));

      card.addEventListener('dragstart', (e) => {
        card.classList.add('dragging');
        e.dataTransfer.setData('text/plain', task.id);
      });
      card.addEventListener('dragend', () => {
        card.classList.remove('dragging');
      });

      container.appendChild(card);
    });

    document.getElementById('count-backlog').innerText = counts.PENDIENTE;
    document.getElementById('count-dev').innerText = counts.EN_DESARROLLO;
    document.getElementById('count-smoke').innerText = counts.SMOKE_TEST_DEV;
    document.getElementById('count-qa').innerText = counts.QA_REVIEW;
    document.getElementById('count-ok').innerText = counts.OK;

    const activeInFlight = (counts.EN_DESARROLLO || 0) + (counts.SMOKE_TEST_DEV || 0) + (counts.QA_REVIEW || 0);
    const navCounter = document.getElementById('pipeline-active-count');
    if (navCounter) navCounter.innerText = activeInFlight;
  }

  function getStageSuffix(stage) {
    if (stage === 'PENDIENTE') return 'backlog';
    if (stage === 'EN_DESARROLLO') return 'dev';
    if (stage === 'SMOKE_TEST_DEV') return 'smoke';
    if (stage === 'QA_REVIEW') return 'qa';
    if (stage === 'OK') return 'ok';
    return 'backlog';
  }

  function initDragAndDrop() {
    const columns = document.querySelectorAll('.pipeline-column');
    columns.forEach(col => {
      col.addEventListener('dragover', (e) => {
        e.preventDefault();
        col.style.background = 'var(--bg-surface-elevated)';
      });
      col.addEventListener('dragleave', () => {
        col.style.background = 'var(--bg-surface)';
      });
      col.addEventListener('drop', (e) => {
        e.preventDefault();
        col.style.background = 'var(--bg-surface)';
        const taskId = parseInt(e.dataTransfer.getData('text/plain'), 10);
        const newStage = col.getAttribute('data-stage');
        if (taskId && newStage) {
          const task = state.tasks.find(t => t.id === taskId);
          if (task) {
            task.flowStatus = newStage;
            if (newStage === 'OK') {
              task.status = 'OK';
            } else {
              task.status = 'Pendiente';
            }
            saveTasks();
            renderAllViews();
            showToast(`Tarea #${task.id} movida a ${newStage}`);
          }
        }
      });
    });
  }

  // =========================================================================
  // VIEW 3: CHANGELOG STUDIO RENDERING
  // =========================================================================
  function renderChangelogStudio() {
    const versionSelect = document.getElementById('cl-version-select');
    if (!versionSelect) return;

    const currentSelected = versionSelect.value;
    versionSelect.innerHTML = '';
    state.versions.forEach(v => {
      const opt = document.createElement('option');
      opt.value = v.name;
      opt.innerText = `Versión ${v.name} (${v.status})`;
      versionSelect.appendChild(opt);
    });

    if (currentSelected && state.versions.some(v => v.name === currentSelected)) {
      versionSelect.value = currentSelected;
    } else if (state.versions.length > 0) {
      versionSelect.value = state.versions[0].name;
    }

    generateAndPreviewChangelog();
  }

  function generateAndPreviewChangelog() {
    const versionSelect = document.getElementById('cl-version-select');
    const selectedVersion = versionSelect?.value || '1.0.20';
    const isTech = document.getElementById('cl-format-tech')?.checked ?? true;
    const includePending = document.getElementById('cl-opt-include-pending')?.checked ?? true;
    const groupByModule = document.getElementById('cl-opt-group-module')?.checked ?? true;
    const includeStats = document.getElementById('cl-opt-include-stats')?.checked ?? true;

    const vObj = getVersionObj(selectedVersion) || { name: selectedVersion, targetDate: '2026-08-20', status: 'En Proceso' };
    const versionTasks = state.tasks.filter(t => t.version === selectedVersion);
    const tasksToInclude = includePending ? versionTasks : versionTasks.filter(t => t.status === 'OK');

    let md = '';
    const dateStr = vObj.targetDate || new Date().toISOString().split('T')[0];

    if (isTech) {
      md += `# CHANGELOG TÉCNICO - Versión ${selectedVersion}\n\n`;
      md += `> **Estado de Release:** ${vObj.status} | **Fecha:** ${dateStr} | **Alcance:** ${vObj.description || 'Actualización de módulos'}\n\n`;

      if (includeStats) {
        const total = versionTasks.length;
        const ok = versionTasks.filter(t => t.status === 'OK').length;
        const certifiedDev = versionTasks.filter(t => t.devCertified).length;
        const qaApproved = versionTasks.filter(t => t.qaStatus === 'APROBADO').length;

        md += `### 📊 Métricas de Validación Técnica\n`;
        md += `- **Total de Tareas Registradas:** ${total}\n`;
        md += `- **Tareas Cerradas (OK):** ${ok} (${total > 0 ? Math.round((ok/total)*100) : 0}%)\n`;
        md += `- **Flujos Completos Certificados por Dev (Smoke Test):** ${certifiedDev} de ${total}\n`;
        md += `- **Casos de Uso Aprobados en QA:** ${qaApproved} de ${total}\n\n`;
        md += `---\n\n`;
      }

      if (groupByModule) {
        const moduleMap = {};
        tasksToInclude.forEach(t => {
          const mod = t.module || 'General';
          if (!moduleMap[mod]) moduleMap[mod] = [];
          moduleMap[mod].push(t);
        });

        Object.keys(moduleMap).sort().forEach(mod => {
          md += `### Módulo: ${mod}\n`;
          moduleMap[mod].forEach(t => {
            const devInfo = t.dev ? ` (Dev: @${t.dev})` : '';
            const qaInfo = t.qa ? ` [QA: ${t.qa} - ${t.qaStatus || 'OK'}]` : '';
            const certMark = t.devCertified ? '🧪[Smoke: OK]' : '⚠️[Smoke: Pendiente]';
            const techText = t.changelogTech || t.description;
            md += `- **#${t.id}** [${t.type || 'Mejora'}] ${techText}${devInfo}${qaInfo} ${certMark}\n`;
          });
          md += `\n`;
        });
      } else {
        md += `### Detalles de Cambios e Implementaciones\n`;
        tasksToInclude.forEach(t => {
          const devInfo = t.dev ? ` (@${t.dev})` : '';
          const techText = t.changelogTech || t.description;
          md += `- **#${t.id}** [${t.module}] ${techText}${devInfo}\n`;
        });
        md += `\n`;
      }

    } else {
      md += `# Notas de la Versión ${selectedVersion}\n\n`;
      md += `📅 **Fecha de Liberación:** ${dateStr}\n\n`;
      md += `Nos complace presentar las mejoras y optimizaciones incorporadas en esta nueva versión para agilizar la experiencia de usuario y la estabilidad del sistema.\n\n`;

      const moduleMap = {};
      tasksToInclude.forEach(t => {
        const mod = t.module || 'General';
        if (!moduleMap[mod]) moduleMap[mod] = [];
        moduleMap[mod].push(t);
      });

      Object.keys(moduleMap).sort().forEach(mod => {
        md += `### ✨ ${mod}\n`;
        moduleMap[mod].forEach(t => {
          const userText = t.changelogUser || t.description;
          md += `- ${userText}\n`;
        });
        md += `\n`;
      });
    }

    const rawView = document.getElementById('changelog-raw-view');
    const renderedView = document.getElementById('changelog-rendered-view');
    const summaryBox = document.getElementById('cl-version-summary-box');

    if (rawView) rawView.value = md;
    if (renderedView) renderedView.innerHTML = renderMarkdownToHtml(md);

    if (summaryBox) {
      summaryBox.innerHTML = `
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;">
          <strong>Versión ${escapeHtml(selectedVersion)}</strong>
          <span class="badge-status badge-status-ok" style="font-size: 0.65rem;">${escapeHtml(vObj.status)}</span>
        </div>
        <div style="color: var(--text-secondary); font-size: 0.75rem;">
          Total tareas asociadas: <strong>${tasksToInclude.length}</strong> | Fecha: <strong>${escapeHtml(dateStr)}</strong>
        </div>
      `;
    }
  }

  function renderMarkdownToHtml(md) {
    let html = escapeHtml(md);
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^> (.*$)/gim, '<blockquote style="border-left: 3px solid var(--accent-primary); padding-left: 1rem; color: var(--text-secondary); margin: 0.8rem 0;">$1</blockquote>');
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');
    html = html.replace(/`(.*?)`/gim, '<code>$1</code>');
    html = html.replace(/^---$/gim, '<hr style="border: 0; height: 1px; background: var(--border-subtle); margin: 1.25rem 0;" />');
    html = html.replace(/^- (.*$)/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    html = html.replace(/\n\n/g, '<br/>');
    return html;
  }

  function initChangelogEvents() {
    const versionSelect = document.getElementById('cl-version-select');
    versionSelect?.addEventListener('change', generateAndPreviewChangelog);

    document.querySelectorAll('input[name="cl-format"]').forEach(radio => {
      radio.addEventListener('change', generateAndPreviewChangelog);
    });

    document.getElementById('cl-opt-include-pending')?.addEventListener('change', generateAndPreviewChangelog);
    document.getElementById('cl-opt-group-module')?.addEventListener('change', generateAndPreviewChangelog);
    document.getElementById('cl-opt-include-stats')?.addEventListener('change', generateAndPreviewChangelog);

    const btnRendered = document.getElementById('btn-preview-rendered');
    const btnRaw = document.getElementById('btn-preview-raw');
    const renderedView = document.getElementById('changelog-rendered-view');
    const rawView = document.getElementById('changelog-raw-view');

    btnRendered?.addEventListener('click', () => {
      btnRendered.classList.add('active');
      btnRaw?.classList.remove('active');
      renderedView?.classList.remove('hidden');
      rawView?.classList.add('hidden');
    });

    btnRaw?.addEventListener('click', () => {
      btnRaw.classList.add('active');
      btnRendered?.classList.remove('active');
      rawView?.classList.remove('hidden');
      renderedView?.classList.add('hidden');
    });

    document.getElementById('btn-copy-changelog')?.addEventListener('click', () => {
      const rawText = document.getElementById('changelog-raw-view')?.value || '';
      navigator.clipboard.writeText(rawText).then(() => {
        showToast('Changelog en Markdown copiado al portapapeles.');
      }).catch(() => {
        showToast('Error al copiar al portapapeles', 'error');
      });
    });

    document.getElementById('btn-download-changelog')?.addEventListener('click', () => {
      const rawText = document.getElementById('changelog-raw-view')?.value || '';
      const ver = document.getElementById('cl-version-select')?.value || 'release';
      const blob = new Blob([rawText], { type: 'text/markdown;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `CHANGELOG-v${ver}.md`;
      a.click();
      URL.revokeObjectURL(url);
      showToast(`Archivo CHANGELOG-v${ver}.md descargado.`);
    });
  }

  // =========================================================================
  // VIEW 4: METRICS & DASHBOARD RENDERING
  // =========================================================================
  function renderDashboard() {
    const total = state.tasks.length;
    const okTasks = state.tasks.filter(t => t.status === 'OK').length;
    const okPercent = total > 0 ? Math.round((okTasks / total) * 100) : 0;

    let totalQACases = 0;
    let passedQACases = 0;
    state.tasks.forEach(t => {
      if (t.useCases) {
        totalQACases += t.useCases.length;
        passedQACases += t.useCases.filter(c => c.status === 'PASSED').length;
      }
    });
    const qaRate = totalQACases > 0 ? Math.round((passedQACases / totalQACases) * 100) : 0;

    const activeVer = state.versions.find(v => v.status === 'QA_FREEZE' || v.status === 'EN_DESARROLLO') || state.versions[0];
    if (activeVer) {
      document.getElementById('dash-active-version-name').innerText = activeVer.name;
      document.getElementById('dash-active-version-status').innerText = `${activeVer.status} (${activeVer.targetDate || 'En curso'})`;
    }

    document.getElementById('dash-global-rate').innerText = `${okPercent}%`;
    document.getElementById('dash-global-rate-sub').innerText = `${okTasks} de ${total} tareas en estado OK`;

    document.getElementById('dash-qa-rate').innerText = `${qaRate}%`;
    document.getElementById('dash-qa-rate-sub').innerText = `${passedQACases} de ${totalQACases} casos de uso aprobados`;

    document.getElementById('dash-team-count').innerText = state.users.length;

    // Render Version table
    const vTbody = document.getElementById('dash-versions-tbody');
    if (vTbody) {
      vTbody.innerHTML = '';
      state.versions.forEach(v => {
        const vTasks = state.tasks.filter(t => t.version === v.name);
        const vTotal = vTasks.length;
        const vOk = vTasks.filter(t => t.status === 'OK').length;
        const vPercent = vTotal > 0 ? Math.round((vOk / vTotal) * 100) : 0;

        const vDevs = new Set(vTasks.map(t => t.dev).filter(Boolean));
        const vQAs = new Set(vTasks.map(t => t.qa).filter(Boolean));

        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>
            <span class="table-version-badge" style="color: ${v.color}; border-color: ${v.color}; font-size: 0.85rem;">${escapeHtml(v.name)}</span>
          </td>
          <td><span class="badge-status badge-status-dev">${escapeHtml(v.status)}</span></td>
          <td><strong>${vTotal}</strong> tareas</td>
          <td><span style="font-size: 0.78rem; color: var(--text-secondary);">${vDevs.size} Devs / ${vQAs.size} QA</span></td>
          <td style="width: 180px;">
            <div class="stat-progress-bar" style="width: 100%; height: 8px;">
              <div class="progress-fill" style="width: ${vPercent}%;"></div>
            </div>
          </td>
          <td><strong style="color: var(--color-success-bright);">${vPercent}%</strong></td>
          <td>
            <button class="btn btn-sm btn-secondary btn-jump-version" data-ver="${escapeHtml(v.name)}">Filtrar</button>
          </td>
        `;

        tr.querySelector('.btn-jump-version')?.addEventListener('click', () => {
          state.activeFilters.version = v.name;
          const selectVer = document.getElementById('filter-version');
          if (selectVer) selectVer.value = v.name;
          switchView('grid');
        });

        vTbody.appendChild(tr);
      });
    }

    // Render Module Breakdown
    const modContainer = document.getElementById('dash-module-list');
    if (modContainer) {
      modContainer.innerHTML = '';
      const modCounts = {};
      state.tasks.forEach(t => {
        const m = t.module || 'General';
        modCounts[m] = (modCounts[m] || 0) + 1;
      });

      const sortedMods = Object.entries(modCounts).sort((a, b) => b[1] - a[1]).slice(0, 6);
      sortedMods.forEach(([mName, count]) => {
        const pct = Math.round((count / total) * 100);
        const row = document.createElement('div');
        row.className = 'module-dist-row';
        row.innerHTML = `
          <div class="module-dist-name" title="${escapeHtml(mName)}">${escapeHtml(mName)}</div>
          <div class="module-dist-bar-wrapper">
            <div class="module-dist-bar" style="width: ${pct}%;"></div>
          </div>
          <div class="module-dist-count">${count}</div>
        `;
        modContainer.appendChild(row);
      });
    }

    // Render Pipeline Bottlenecks
    const healthContainer = document.getElementById('dash-pipeline-health');
    if (healthContainer) {
      const counts = { PENDIENTE: 0, EN_DESARROLLO: 0, SMOKE_TEST_DEV: 0, QA_REVIEW: 0, OK: 0 };
      state.tasks.forEach(t => {
        const st = t.flowStatus || (t.status === 'OK' ? 'OK' : 'PENDIENTE');
        counts[st] = (counts[st] || 0) + 1;
      });

      healthContainer.innerHTML = `
        <div class="module-distribution-list">
          <div class="module-dist-row">
            <div class="module-dist-name">1. Backlog</div>
            <div class="module-dist-bar-wrapper"><div class="module-dist-bar" style="width: ${(counts.PENDIENTE/total)*100}%; background: #64748b;"></div></div>
            <div class="module-dist-count">${counts.PENDIENTE}</div>
          </div>
          <div class="module-dist-row">
            <div class="module-dist-name">2. En Dev</div>
            <div class="module-dist-bar-wrapper"><div class="module-dist-bar" style="width: ${(counts.EN_DESARROLLO/total)*100}%; background: #0284c7;"></div></div>
            <div class="module-dist-count">${counts.EN_DESARROLLO}</div>
          </div>
          <div class="module-dist-row">
            <div class="module-dist-name">3. Flujo Dev</div>
            <div class="module-dist-bar-wrapper"><div class="module-dist-bar" style="width: ${(counts.SMOKE_TEST_DEV/total)*100}%; background: #9333ea;"></div></div>
            <div class="module-dist-count">${counts.SMOKE_TEST_DEV}</div>
          </div>
          <div class="module-dist-row">
            <div class="module-dist-name">4. Revisión QA</div>
            <div class="module-dist-bar-wrapper"><div class="module-dist-bar" style="width: ${(counts.QA_REVIEW/total)*100}%; background: #ec4899;"></div></div>
            <div class="module-dist-count">${counts.QA_REVIEW}</div>
          </div>
          <div class="module-dist-row">
            <div class="module-dist-name">5. Listo / OK</div>
            <div class="module-dist-bar-wrapper"><div class="module-dist-bar" style="width: ${(counts.OK/total)*100}%; background: #22c55e;"></div></div>
            <div class="module-dist-count">${counts.OK}</div>
          </div>
        </div>
      `;
    }
  }

  // =========================================================================
  // VIEW 5: SETTINGS & TEAM MANAGEMENT RENDERING
  // =========================================================================
  function renderTeamSettings() {
    const tbody = document.getElementById('team-users-tbody');
    const totalCountBadge = document.getElementById('users-total-count');
    if (!tbody) return;

    tbody.innerHTML = '';
    if (totalCountBadge) totalCountBadge.innerText = `${state.users.length} Usuarios`;

    state.users.forEach(user => {
      const devTasksCount = state.tasks.filter(t => t.dev === user.name).length;
      const qaTasksCount = state.tasks.filter(t => t.qa === user.name).length;

      let roleBadgeClass = 'badge-role-dev';
      let roleLabel = 'Desarrollador';
      if (user.role === 'QA') { roleBadgeClass = 'badge-role-qa'; roleLabel = 'Revisor QA'; }
      if (user.role === 'LEAD') { roleBadgeClass = 'badge-role-lead'; roleLabel = 'Tech Lead'; }
      if (user.role === 'PO') { roleBadgeClass = 'badge-role-po'; roleLabel = 'Product Owner'; }

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <div class="user-tag">
            <span class="user-avatar-circle" style="background: ${user.color}33; color: ${user.color}; border-color: ${user.color}; font-weight: 800;">
              ${escapeHtml(getInitials(user.name))}
            </span>
            <strong style="color: var(--text-primary); font-size: 0.85rem;">${escapeHtml(user.name)}</strong>
          </div>
        </td>
        <td><span class="badge-role ${roleBadgeClass}">${escapeHtml(roleLabel)}</span></td>
        <td><span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-secondary);">${escapeHtml(user.email || 'N/A')}</span></td>
        <td><strong>${devTasksCount}</strong> asignadas</td>
        <td><strong>${qaTasksCount}</strong> revisadas</td>
        <td style="text-align: right;">
          <button class="btn btn-sm btn-secondary btn-edit-user" title="Editar datos del usuario">✏️ Editar</button>
          <button class="btn btn-sm btn-danger-outline btn-del-user" title="Eliminar usuario" style="margin-left: 0.35rem;">🗑️</button>
        </td>
      `;

      tr.querySelector('.btn-edit-user')?.addEventListener('click', () => editUserForm(user));
      tr.querySelector('.btn-del-user')?.addEventListener('click', () => deleteUser(user.id));

      tbody.appendChild(tr);
    });
  }

  function editUserForm(user) {
    document.getElementById('user-form-title').innerText = `Editar Usuario: ${user.name}`;
    document.getElementById('u-form-edit-id').value = user.id;
    document.getElementById('u-input-name').value = user.name;
    document.getElementById('u-input-role').value = user.role;
    document.getElementById('u-input-email').value = user.email || '';
    document.getElementById('u-input-color').value = user.color || '#38bdf8';
    document.getElementById('btn-save-user').innerText = 'Guardar Cambios';
    document.getElementById('btn-cancel-edit-user')?.classList.remove('hidden');
    document.getElementById('u-input-name')?.focus();
  }

  function resetUserForm() {
    document.getElementById('user-form-title').innerText = '+ Registrar Nuevo Usuario';
    document.getElementById('u-form-edit-id').value = '';
    document.getElementById('team-user-form')?.reset();
    document.getElementById('u-input-color').value = '#38bdf8';
    document.getElementById('btn-save-user').innerText = 'Guardar Usuario';
    document.getElementById('btn-cancel-edit-user')?.classList.add('hidden');
  }

  function deleteUser(userId) {
    const user = state.users.find(u => u.id === userId);
    if (!user) return;
    if (confirm(`¿Eliminar al usuario "${user.name}" del directorio?`)) {
      state.users = state.users.filter(u => u.id !== userId);
      saveUsers();
      renderTeamSettings();
      renderAllViews();
      showToast(`Usuario "${user.name}" eliminado.`);
    }
  }

  function initTeamSettingsEvents() {
    const form = document.getElementById('team-user-form');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const editId = document.getElementById('u-form-edit-id').value;
      const name = document.getElementById('u-input-name').value.trim();
      const role = document.getElementById('u-input-role').value;
      const email = document.getElementById('u-input-email').value.trim();
      const color = document.getElementById('u-input-color').value;

      if (!name) {
        showToast('El nombre de usuario es obligatorio', 'error');
        return;
      }

      if (editId) {
        // Update existing user
        const idx = state.users.findIndex(u => u.id === editId);
        if (idx >= 0) {
          const oldName = state.users[idx].name;
          state.users[idx] = { id: editId, name, role, email, color };
          // If name changed, update tasks
          if (oldName !== name) {
            state.tasks.forEach(t => {
              if (t.dev === oldName) t.dev = name;
              if (t.qa === oldName) t.qa = name;
            });
            saveTasks();
          }
          showToast(`Usuario "${name}" actualizado con éxito.`);
        }
      } else {
        // Create new user
        if (state.users.some(u => u.name.toLowerCase() === name.toLowerCase())) {
          showToast('Ya existe un usuario registrado con ese nombre', 'error');
          return;
        }
        const newUser = {
          id: `usr-${Date.now()}`,
          name,
          role,
          email,
          color
        };
        state.users.push(newUser);
        showToast(`Usuario "${name}" agregado al equipo.`);
      }

      saveUsers();
      resetUserForm();
      renderTeamSettings();
      renderAllViews();
    });

    document.getElementById('btn-cancel-edit-user')?.addEventListener('click', resetUserForm);
  }

  // =========================================================================
  // MODAL 1: TASK WORKFLOW & AUDIT WIZARD MODAL
  // =========================================================================
  function populateUserSelects(selectedDev, selectedQa) {
    const devSelect = document.getElementById('m-input-dev');
    const qaSelect = document.getElementById('m-input-qa');

    if (devSelect) {
      devSelect.innerHTML = '<option value="">(Sin Desarrollador Asignado)</option>';
      state.users.forEach(u => {
        const opt = document.createElement('option');
        opt.value = u.name;
        opt.innerText = `[${u.role}] ${u.name}`;
        devSelect.appendChild(opt);
      });
      // If task has a dev not in list, add it
      if (selectedDev && !state.users.some(u => u.name === selectedDev)) {
        const customOpt = document.createElement('option');
        customOpt.value = selectedDev;
        customOpt.innerText = `[Externo] ${selectedDev}`;
        devSelect.appendChild(customOpt);
      }
      devSelect.value = selectedDev || '';
    }

    if (qaSelect) {
      qaSelect.innerHTML = '<option value="">(Sin Revisor QA Asignado)</option>';
      state.users.forEach(u => {
        const opt = document.createElement('option');
        opt.value = u.name;
        opt.innerText = `[${u.role}] ${u.name}`;
        qaSelect.appendChild(opt);
      });
      if (selectedQa && !state.users.some(u => u.name === selectedQa)) {
        const customOpt = document.createElement('option');
        customOpt.value = selectedQa;
        customOpt.innerText = `[Externo] ${selectedQa}`;
        qaSelect.appendChild(customOpt);
      }
      qaSelect.value = selectedQa || '';
    }
  }

  function openTaskModal(taskId) {
    const modal = document.getElementById('task-modal');
    if (!modal) return;

    let task = null;
    if (taskId) {
      task = state.tasks.find(t => t.id === taskId);
    }

    state.currentEditingTaskId = task ? task.id : null;
    state.currentModalStep = 1;

    // Populate versions select in modal
    const verSelect = document.getElementById('m-input-version');
    if (verSelect) {
      verSelect.innerHTML = '';
      state.versions.forEach(v => {
        const opt = document.createElement('option');
        opt.value = v.name;
        opt.innerText = `Versión ${v.name}`;
        verSelect.appendChild(opt);
      });
    }

    // Populate datalists for module autocomplete
    populateDatalist('modules-datalist', getUniqueModules());

    // Populate Dev & QA User Selects
    populateUserSelects(task ? task.dev : '', task ? task.qa : '');

    if (task) {
      document.getElementById('m-task-id').innerText = `#${task.id}`;
      document.getElementById('m-task-version-tag').innerText = task.version;
      document.getElementById('m-task-module-tag').innerText = task.module || 'Módulo';
      document.getElementById('m-task-status-badge').innerText = task.status || 'Pendiente';
      document.getElementById('m-task-title-display').innerText = task.description;

      // Step 1
      document.getElementById('m-task-raw-id').value = task.id;
      if (verSelect) verSelect.value = task.version;
      document.getElementById('m-input-module').value = task.module || '';
      document.getElementById('m-input-type').value = task.type || 'Mejora';
      document.getElementById('m-input-desc').value = task.description || '';
      document.getElementById('m-input-details').value = task.details || '';
      document.getElementById('m-input-priority').value = task.priority || 'Media';
      document.getElementById('m-input-flow-state').value = task.flowStatus || 'PENDIENTE';

      // Step 2: Dev
      document.getElementById('m-input-dev').value = task.dev || '';
      document.getElementById('m-input-dev-branch').value = task.devBranch || '';
      document.getElementById('m-input-dev-notes').value = task.devNotes || '';

      // Step 3: Smoke Test Checklist
      renderSmokeChecklist(task.smokeChecklist || []);
      const certCheck = document.getElementById('m-input-dev-certified');
      if (certCheck) certCheck.checked = !!task.devCertified;
      document.getElementById('m-dev-cert-meta').innerText = task.devCertifiedAt ? `Certificado el: ${task.devCertifiedAt}` : 'Aún no certificado';
      document.getElementById('m-input-smoke-notes').value = task.smokeNotes || '';

      // Step 4: QA Cases
      document.getElementById('m-input-qa').value = task.qa || '';
      document.getElementById('m-input-qa-status').value = task.qaStatus || 'PENDIENTE';
      renderQACases(task.useCases || []);
      document.getElementById('m-input-qa-feedback').value = task.qaFeedback || '';

      // Step 5: Changelog & Audit
      document.getElementById('m-input-changelog-tech').value = task.changelogTech || `[${task.module || 'Gral'}] ${task.description}`;
      document.getElementById('m-input-changelog-user').value = task.changelogUser || task.description;
      renderAuditTimeline(task.audit || []);

      document.getElementById('btn-delete-task').style.display = 'inline-flex';
    } else {
      // New Task Blank Template
      const nextId = getNextTaskId();
      const defVer = state.activeFilters.version !== 'all' ? state.activeFilters.version : (state.versions[0]?.name || '1.0.21');

      document.getElementById('m-task-id').innerText = `#${nextId}`;
      document.getElementById('m-task-version-tag').innerText = defVer;
      document.getElementById('m-task-module-tag').innerText = 'Nuevo';
      document.getElementById('m-task-status-badge').innerText = 'Pendiente';
      document.getElementById('m-task-title-display').innerText = 'Crear Nueva Tarea';

      document.getElementById('m-task-raw-id').value = '';
      if (verSelect) verSelect.value = defVer;
      document.getElementById('m-input-module').value = 'Venta';
      document.getElementById('m-input-type').value = 'Mejora';
      document.getElementById('m-input-desc').value = '';
      document.getElementById('m-input-details').value = '';
      document.getElementById('m-input-priority').value = 'Media';
      document.getElementById('m-input-flow-state').value = 'PENDIENTE';

      document.getElementById('m-input-dev').value = '';
      document.getElementById('m-input-dev-branch').value = '';
      document.getElementById('m-input-dev-notes').value = '';

      renderSmokeChecklist([
        { text: 'Verificación del flujo principal de la aplicación sin regresión', checked: false }
      ]);
      document.getElementById('m-input-dev-certified').checked = false;
      document.getElementById('m-dev-cert-meta').innerText = 'Sin certificar';
      document.getElementById('m-input-smoke-notes').value = '';

      document.getElementById('m-input-qa').value = '';
      document.getElementById('m-input-qa-status').value = 'PENDIENTE';
      renderQACases([
        { title: 'Validación del caso de uso principal', status: 'PENDING' }
      ]);
      document.getElementById('m-input-qa-feedback').value = '';

      document.getElementById('m-input-changelog-tech').value = '';
      document.getElementById('m-input-changelog-user').value = '';
      renderAuditTimeline([]);

      document.getElementById('btn-delete-task').style.display = 'none';
    }

    setModalStep(1);
    modal.classList.remove('hidden');
  }

  function setModalStep(stepNum) {
    state.currentModalStep = stepNum;

    document.querySelectorAll('.workflow-stepper .step-btn').forEach(btn => {
      const s = parseInt(btn.getAttribute('data-step'), 10);
      btn.classList.toggle('active', s === stepNum);
      btn.classList.toggle('completed', s < stepNum);
    });

    document.querySelectorAll('.modal-body .step-pane').forEach(pane => {
      const s = parseInt(pane.getAttribute('data-step-pane'), 10);
      pane.classList.toggle('active', s === stepNum);
    });

    const prevBtn = document.getElementById('btn-modal-prev-step');
    const nextBtn = document.getElementById('btn-modal-next-step');
    if (prevBtn) prevBtn.style.display = stepNum > 1 ? 'inline-flex' : 'none';
    if (nextBtn) {
      if (stepNum === 5) {
        nextBtn.innerText = 'Finalizar Flujo';
      } else {
        nextBtn.innerText = 'Siguiente →';
      }
    }
  }

  function renderSmokeChecklist(items) {
    const container = document.getElementById('smoke-checklist-container');
    if (!container) return;
    container.innerHTML = '';

    items.forEach((item) => {
      const row = document.createElement('div');
      row.className = 'checklist-item-row';
      row.innerHTML = `
        <label class="custom-checkbox">
          <input type="checkbox" class="smoke-item-check" ${item.checked ? 'checked' : ''}>
          <span class="checkmark"></span>
        </label>
        <input type="text" class="smoke-item-text" value="${escapeHtml(item.text)}" placeholder="Descripción de prueba del flujo...">
        <button type="button" class="btn-remove-item" title="Eliminar punto">&times;</button>
      `;

      row.querySelector('.btn-remove-item')?.addEventListener('click', () => row.remove());
      container.appendChild(row);
    });
  }

  function renderQACases(cases) {
    const container = document.getElementById('qa-cases-container');
    if (!container) return;
    container.innerHTML = '';

    cases.forEach((c) => {
      const card = document.createElement('div');
      card.className = 'qa-case-card';
      card.innerHTML = `
        <div class="qa-case-header">
          <input type="text" class="qa-case-title-input" value="${escapeHtml(c.title)}" placeholder="Nombre del Caso de Uso / Criterio de Aceptación...">
          <select class="qa-case-select" value="${escapeHtml(c.status || 'PENDING')}">
            <option value="PENDING" ${c.status === 'PENDING' ? 'selected' : ''}>⏳ Pendiente</option>
            <option value="PASSED" ${c.status === 'PASSED' ? 'selected' : ''}>✅ Passed (Aprobado)</option>
            <option value="FAILED" ${c.status === 'FAILED' ? 'selected' : ''}>❌ Failed (Falló)</option>
          </select>
          <button type="button" class="btn-remove-item" title="Eliminar caso">&times;</button>
        </div>
      `;

      card.querySelector('.btn-remove-item')?.addEventListener('click', () => card.remove());
      container.appendChild(card);
    });
  }

  function renderAuditTimeline(auditList) {
    const container = document.getElementById('task-audit-timeline');
    if (!container) return;
    container.innerHTML = '';

    if (!auditList || auditList.length === 0) {
      container.innerHTML = '<p style="color: var(--text-secondary); font-size: 0.78rem;">No hay registros previos en el historial.</p>';
      return;
    }

    auditList.forEach(entry => {
      const item = document.createElement('div');
      item.style.cssText = 'padding: 0.5rem 0; border-bottom: 1px solid var(--border-subtle); font-size: 0.78rem; display: flex; justify-content: space-between;';
      item.innerHTML = `
        <div><strong>${escapeHtml(entry.user || 'Usuario')}:</strong> ${escapeHtml(entry.action)}</div>
        <span style="color: var(--text-tertiary); font-family: var(--font-mono); font-size: 0.72rem;">${escapeHtml(entry.date)}</span>
      `;
      container.appendChild(item);
    });
  }

  function saveTaskFromModal() {
    const rawId = document.getElementById('m-task-raw-id').value;
    const isNew = !rawId;
    const id = isNew ? getNextTaskId() : parseInt(rawId, 10);

    const version = document.getElementById('m-input-version').value;
    const module = document.getElementById('m-input-module').value.trim() || 'General';
    const type = document.getElementById('m-input-type').value;
    const description = document.getElementById('m-input-desc').value.trim();
    const details = document.getElementById('m-input-details').value.trim();
    const priority = document.getElementById('m-input-priority').value;
    const flowStatus = document.getElementById('m-input-flow-state').value;

    if (!description) {
      showToast('Por favor ingresa una descripción para la tarea', 'error');
      setModalStep(1);
      return;
    }

    // Step 2 Dev
    const dev = document.getElementById('m-input-dev').value.trim();
    const devBranch = document.getElementById('m-input-dev-branch').value.trim();
    const devNotes = document.getElementById('m-input-dev-notes').value.trim();

    // Step 3 Smoke
    const smokeItems = [];
    document.querySelectorAll('#smoke-checklist-container .checklist-item-row').forEach(row => {
      const checked = row.querySelector('.smoke-item-check')?.checked || false;
      const text = row.querySelector('.smoke-item-text')?.value.trim();
      if (text) smokeItems.push({ text, checked });
    });
    const devCertified = document.getElementById('m-input-dev-certified').checked;
    const smokeNotes = document.getElementById('m-input-smoke-notes').value.trim();

    // Step 4 QA
    const qa = document.getElementById('m-input-qa').value.trim();
    const qaStatus = document.getElementById('m-input-qa-status').value;
    const useCases = [];
    document.querySelectorAll('#qa-cases-container .qa-case-card').forEach(card => {
      const title = card.querySelector('.qa-case-title-input')?.value.trim();
      const status = card.querySelector('.qa-case-select')?.value || 'PENDING';
      if (title) useCases.push({ title, status });
    });
    const qaFeedback = document.getElementById('m-input-qa-feedback').value.trim();

    // Step 5 Changelog
    const changelogTech = document.getElementById('m-input-changelog-tech').value.trim() || `[${module}] ${description}`;
    const changelogUser = document.getElementById('m-input-changelog-user').value.trim() || description;

    // Global status
    const status = (flowStatus === 'OK' || qaStatus === 'APROBADO') ? 'OK' : 'Pendiente';

    let existingTask = state.tasks.find(t => t.id === id);
    const nowStr = new Date().toISOString().replace('T', ' ').substring(0, 16);

    const auditHistory = existingTask ? (existingTask.audit || []) : [];
    auditHistory.push({
      user: dev || qa || 'Usuario',
      action: isNew ? 'Tarea creada' : `Actualizado estado a ${flowStatus}`,
      date: nowStr
    });

    const taskObj = {
      id,
      version,
      module,
      type,
      description,
      details,
      priority,
      dev,
      devBranch,
      devNotes,
      smokeChecklist: smokeItems,
      devCertified,
      devCertifiedAt: devCertified ? (existingTask?.devCertifiedAt || nowStr) : '',
      smokeNotes,
      qa,
      qaStatus,
      useCases,
      qaFeedback,
      changelogTech,
      changelogUser,
      flowStatus,
      status,
      audit: auditHistory
    };

    if (isNew) {
      state.tasks.push(taskObj);
      showToast(`Tarea #${id} creada exitosamente.`);
    } else {
      const idx = state.tasks.findIndex(t => t.id === id);
      if (idx >= 0) state.tasks[idx] = taskObj;
      showToast(`Tarea #${id} actualizada.`);
    }

    saveTasks();
    closeTaskModal();
    renderAllViews();
  }

  function closeTaskModal() {
    document.getElementById('task-modal')?.classList.add('hidden');
    state.currentEditingTaskId = null;
  }

  function deleteTaskFromModal() {
    if (!state.currentEditingTaskId) return;
    if (confirm(`¿Estás seguro de eliminar la tarea #${state.currentEditingTaskId}?`)) {
      state.tasks = state.tasks.filter(t => t.id !== state.currentEditingTaskId);
      saveTasks();
      closeTaskModal();
      renderAllViews();
      showToast('Tarea eliminada correctamente.');
    }
  }

  function initTaskModalEvents() {
    document.getElementById('btn-close-task-modal')?.addEventListener('click', closeTaskModal);
    document.getElementById('btn-save-task')?.addEventListener('click', saveTaskFromModal);
    document.getElementById('btn-delete-task')?.addEventListener('click', deleteTaskFromModal);

    document.querySelectorAll('.workflow-stepper .step-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const step = parseInt(btn.getAttribute('data-step'), 10);
        setModalStep(step);
      });
    });

    document.getElementById('btn-modal-prev-step')?.addEventListener('click', () => {
      if (state.currentModalStep > 1) setModalStep(state.currentModalStep - 1);
    });

    document.getElementById('btn-modal-next-step')?.addEventListener('click', () => {
      if (state.currentModalStep < 5) {
        setModalStep(state.currentModalStep + 1);
      } else {
        saveTaskFromModal();
      }
    });

    document.getElementById('btn-add-smoke-item')?.addEventListener('click', () => {
      const container = document.getElementById('smoke-checklist-container');
      if (!container) return;
      const row = document.createElement('div');
      row.className = 'checklist-item-row';
      row.innerHTML = `
        <label class="custom-checkbox">
          <input type="checkbox" class="smoke-item-check">
          <span class="checkmark"></span>
        </label>
        <input type="text" class="smoke-item-text" placeholder="Nuevo punto de validación del flujo...">
        <button type="button" class="btn-remove-item" title="Eliminar punto">&times;</button>
      `;
      row.querySelector('.btn-remove-item')?.addEventListener('click', () => row.remove());
      container.appendChild(row);
      row.querySelector('.smoke-item-text')?.focus();
    });

    document.getElementById('btn-add-use-case')?.addEventListener('click', () => {
      const container = document.getElementById('qa-cases-container');
      if (!container) return;
      const card = document.createElement('div');
      card.className = 'qa-case-card';
      card.innerHTML = `
        <div class="qa-case-header">
          <input type="text" class="qa-case-title-input" placeholder="Nombre del caso de prueba / comportamiento esperado...">
          <select class="qa-case-select">
            <option value="PENDING" selected>⏳ Pendiente</option>
            <option value="PASSED">✅ Passed (Aprobado)</option>
            <option value="FAILED">❌ Failed (Falló)</option>
          </select>
          <button type="button" class="btn-remove-item" title="Eliminar caso">&times;</button>
        </div>
      `;
      card.querySelector('.btn-remove-item')?.addEventListener('click', () => card.remove());
      container.appendChild(card);
      card.querySelector('.qa-case-title-input')?.focus();
    });
  }

  // =========================================================================
  // MODAL 2: VERSION MANAGER
  // =========================================================================
  function openVersionModal() {
    const modal = document.getElementById('version-modal');
    if (!modal) return;
    renderVersionsList();
    modal.classList.remove('hidden');
  }

  function closeVersionModal() {
    document.getElementById('version-modal')?.classList.add('hidden');
  }

  function renderVersionsList() {
    const container = document.getElementById('versions-list-container');
    if (!container) return;
    container.innerHTML = '';

    state.versions.forEach(v => {
      const taskCount = state.tasks.filter(t => t.version === v.name).length;
      const okCount = state.tasks.filter(t => t.version === v.name && t.status === 'OK').length;

      const row = document.createElement('div');
      row.className = 'version-card-row';
      row.innerHTML = `
        <div class="v-card-left">
          <span class="v-card-pill" style="color: ${v.color}; background: ${v.color}22; border: 1px solid ${v.color};">${escapeHtml(v.name)}</span>
          <div class="v-card-meta">
            <span class="v-card-title">${escapeHtml(v.description || 'Sin descripción')}</span>
            <span class="v-card-desc">Estado: <strong>${v.status}</strong> | Tareas: <strong>${okCount}/${taskCount} OK</strong> | Target: <strong>${v.targetDate || 'N/A'}</strong></span>
          </div>
        </div>
        <div class="v-card-right">
          <button class="btn btn-sm btn-danger-outline btn-del-version" ${taskCount > 0 ? 'disabled title="No puedes eliminar una versión con tareas asignadas"' : ''}>Eliminar</button>
        </div>
      `;

      row.querySelector('.btn-del-version')?.addEventListener('click', () => {
        if (confirm(`¿Eliminar la versión ${v.name}?`)) {
          state.versions = state.versions.filter(ver => ver.name !== v.name);
          saveVersions();
          renderVersionsList();
          renderVersionDropdowns();
          showToast(`Versión ${v.name} eliminada.`);
        }
      });

      container.appendChild(row);
    });
  }

  function initVersionModalEvents() {
    document.getElementById('btn-close-version-modal')?.addEventListener('click', closeVersionModal);

    document.getElementById('new-version-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('v-name').value.trim();
      const color = document.getElementById('v-color').value;
      const status = document.getElementById('v-status').value;
      const targetDate = document.getElementById('v-target-date').value;
      const description = document.getElementById('v-description').value.trim();

      if (!name) {
        showToast('El número de versión es obligatorio', 'error');
        return;
      }

      if (state.versions.some(v => v.name === name)) {
        showToast('Esta versión ya se encuentra registrada', 'error');
        return;
      }

      const newVer = {
        id: `v-${name.replace(/\./g, '-')}`,
        name,
        color,
        status,
        targetDate,
        description
      };

      state.versions.unshift(newVer);
      saveVersions();
      renderVersionsList();
      renderVersionDropdowns();
      document.getElementById('new-version-form').reset();
      showToast(`Versión ${name} agregada correctamente.`);
    });
  }

  // =========================================================================
  // MODAL 3: DATA BACKUP & EXPORT/IMPORT
  // =========================================================================
  function openBackupModal() {
    document.getElementById('backup-modal')?.classList.remove('hidden');
  }

  function closeBackupModal() {
    document.getElementById('backup-modal')?.classList.add('hidden');
  }

  function initBackupModalEvents() {
    document.getElementById('btn-close-backup-modal')?.addEventListener('click', closeBackupModal);

    document.getElementById('btn-download-json-backup')?.addEventListener('click', () => {
      const data = {
        app: 'TaskTracer Pro',
        version: '2.1',
        exportedAt: new Date().toISOString(),
        versions: state.versions,
        users: state.users,
        tasks: state.tasks
      };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `TaskTracer_Backup_${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showToast('Copia de seguridad descargada.');
    });

    const fileInput = document.getElementById('input-json-file');
    document.getElementById('btn-trigger-file-import')?.addEventListener('click', () => fileInput?.click());

    fileInput?.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          if (parsed && parsed.tasks && parsed.versions) {
            state.tasks = parsed.tasks;
            state.versions = parsed.versions;
            if (parsed.users) state.users = parsed.users;
            saveTasks();
            saveVersions();
            saveUsers();
            renderAllViews();
            closeBackupModal();
            showToast('¡Datos importados y restaurados exitosamente!');
          } else {
            showToast('Formato de archivo inválido', 'error');
          }
        } catch (err) {
          showToast('Error al parsear el archivo JSON', 'error');
        }
      };
      reader.readAsText(file);
    });

    document.getElementById('btn-reset-demo-data')?.addEventListener('click', () => {
      if (confirm('¿Restablecer los datos originales de la captura (IDs 10011 a 10032)? Se sobreescribirán los cambios.')) {
        state.versions = [...DEFAULT_VERSIONS];
        state.users = [...DEFAULT_USERS];
        state.tasks = [...DEFAULT_TASKS];
        saveVersions();
        saveUsers();
        saveTasks();
        renderAllViews();
        closeBackupModal();
        showToast('Datos de demostración restablecidos.');
      }
    });
  }

  // =========================================================================
  // GLOBAL UI UPDATES
  // =========================================================================
  function renderVersionDropdowns() {
    const filterVer = document.getElementById('filter-version');
    if (filterVer) {
      const current = filterVer.value;
      filterVer.innerHTML = '<option value="all">📁 Todas las versiones</option>';
      state.versions.forEach(v => {
        const opt = document.createElement('option');
        opt.value = v.name;
        opt.innerText = `Versión ${v.name}`;
        filterVer.appendChild(opt);
      });
      if (current) filterVer.value = current;
    }

    const filterMod = document.getElementById('filter-module');
    if (filterMod) {
      const current = filterMod.value;
      filterMod.innerHTML = '<option value="all">Todos los módulos</option>';
      getUniqueModules().forEach(m => {
        const opt = document.createElement('option');
        opt.value = m;
        opt.innerText = m;
        filterMod.appendChild(opt);
      });
      if (current) filterMod.value = current;
    }
  }

  function populateDatalist(id, items) {
    const dl = document.getElementById(id);
    if (!dl) return;
    dl.innerHTML = '';
    items.forEach(it => {
      const opt = document.createElement('option');
      opt.value = it;
      dl.appendChild(opt);
    });
  }

  function updateStatsPill() {
    const total = state.tasks.length;
    const ok = state.tasks.filter(t => t.status === 'OK').length;
    const pending = total - ok;
    const pct = total > 0 ? Math.round((ok / total) * 100) : 0;

    document.getElementById('stat-total-tasks').innerText = total;
    document.getElementById('stat-ok-tasks').innerText = ok;
    document.getElementById('stat-pending-tasks').innerText = pending;
    document.getElementById('stat-progress-fill').style.width = `${pct}%`;
  }

  function renderAllViews() {
    renderVersionDropdowns();
    updateStatsPill();
    if (state.currentView === 'grid') renderGridTable();
    if (state.currentView === 'pipeline') renderPipelineBoard();
    if (state.currentView === 'changelog') renderChangelogStudio();
    if (state.currentView === 'dashboard') renderDashboard();
    if (state.currentView === 'settings') renderTeamSettings();
  }

  // =========================================================================
  // BOOTSTRAP APPLICATION
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    initState();
    initNavigation();
    initDragAndDrop();
    initTaskModalEvents();
    initVersionModalEvents();
    initBackupModalEvents();
    initChangelogEvents();
    initTeamSettingsEvents();
    renderAllViews();
  });

})();
