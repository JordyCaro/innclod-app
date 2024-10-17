# **Gestión de Proyectos y Tareas**

Esta es una aplicación de gestión de proyectos y tareas, construida con **Angular** y utilizando varias librerías como **PrimeNG** para componentes de UI, **RxJS** para la gestión de estados asíncronos y **@auth0/angular-jwt** para la autenticación con JWT. La aplicación permite crear, editar, eliminar y visualizar proyectos y tareas, además de manejar la autenticación y protección de rutas para usuarios autenticados.

## **Tabla de Contenidos**

- [Características](#características)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Ejecución del Proyecto](#ejecución-del-proyecto)
- [Credenciales de Login](#credenciales-de-login)
- [Uso de la Aplicación](#uso-de-la-aplicación)
- [Scripts Disponibles](#scripts-disponibles)
- [Dependencias](#dependencias)
- [Información Adicional](#información-adicional)

## **Características**

- **CRUD Completo**: Permite crear, editar, eliminar y visualizar proyectos y tareas.
- **Autenticación**: Solo los usuarios autenticados pueden acceder a las rutas protegidas (proyectos y tareas).
- **Modales y Toasts**: Confirma eliminaciones y muestra notificaciones tipo toast para operaciones exitosas o errores.
- **Protección de Rutas**: Utiliza `Guards` para redirigir usuarios no autenticados.
- **Responsive**: Interfaz completamente responsiva.

## **Requisitos Previos**

Antes de ejecutar la aplicación, asegúrate de tener instalado:

- **Node.js** (versión 14 o superior)
- **NPM** (versión 6 o superior)
- **Angular CLI** (versión 12 o superior)

## **Instalación**

Sigue estos pasos para instalar y ejecutar la aplicación en tu entorno local.

1. **Clonar el Repositorio:**

   Clona el repositorio del proyecto a tu máquina local.


   Clona el repositorio del proyecto a tu máquina local.
      ```bash
   git clone https://github.com/JordyCaro/innclod-app.git

2. **Navegar al Directorio del Proyecto:**

   Dirígete al directorio donde clonaste el repositorio.
         ```bash
   cd innclod-app

3. **Instalar las Dependencias:**

   Ejecuta el siguiente comando para instalar todas las dependencias necesarias:
         ```bash
   `npm install`

4. **Configuración de Variables de Entorno:**

   Si la aplicación utiliza variables de entorno para URLs de API o configuraciones sensibles, asegúrate de configurar un archivo `.env` o añadir tus variables en el archivo `environment.ts`. También, asegúrate de que el backend esté funcionando correctamente antes de proceder.

## **Ejecución del Proyecto**

Una vez instaladas las dependencias, puedes ejecutar la aplicación con el siguiente comando:
         ```bash
`ng serve`

Esto iniciará la aplicación y estará disponible en `http://localhost:4200/`.

## **Credenciales de Login**

Para acceder a las rutas protegidas de la aplicación (proyectos y tareas), utiliza las siguientes credenciales de inicio de sesión:

- **Usuario**: `jordy`
- **Contraseña**: `innclod`

## **Uso de la Aplicación**

### **1. Autenticación**

Accede a la página de inicio de sesión (`/login`) utilizando las credenciales proporcionadas. La autenticación es gestionada a través de JWT, y los usuarios no autenticados serán redirigidos al login si intentan acceder a las rutas protegidas.

### **2. Gestión de Proyectos**

- Navega a la sección de **Proyectos** para crear, ver, editar o eliminar proyectos.
- Al crear o editar un proyecto, se mostrará un mensaje tipo **toast** confirmando el éxito de la operación.
- Si eliminas un proyecto, un **modal de confirmación** se mostrará antes de proceder, y el proyecto será eliminado visualmente de la lista inmediatamente.

### **3. Gestión de Tareas**

- Dentro de cada proyecto, navega a la sección de **Tareas**.
- Crea, edita o elimina tareas asociadas a un proyecto específico.
- Al eliminar una tarea, se mostrará un modal de confirmación, y al crear/editar tareas se mostrará un **toast**.

## **Scripts Disponibles**

En el directorio del proyecto, puedes ejecutar los siguientes scripts:

- **`npm start`**  
  Inicia la aplicación en modo de desarrollo. La aplicación estará disponible en `http://localhost:4200/`.

- **`npm run build`**  
  Compila la aplicación para producción en la carpeta `dist/`. La compilación está optimizada y minimizada para un mejor rendimiento.

- **`npm test`**  
  Ejecuta las pruebas unitarias utilizando Karma como framework de pruebas.

- **`npm run lint`**  
  Ejecuta el linter de código para verificar errores o problemas de estilo.

## **Dependencias**

La aplicación utiliza las siguientes dependencias clave:

- **Angular**  
  Framework principal para el desarrollo de la aplicación frontend.

- **PrimeNG**  
  Biblioteca de componentes de UI que ofrece tablas, botones, modales y más para mejorar la experiencia de usuario (UX) y la interfaz de usuario (UI).

- **RxJS**  
  Biblioteca para programación reactiva, utilizada para manejar peticiones HTTP y flujos de datos.

- **PrimeFlex**  
  Sistema de diseño basado en flexbox, utilizado para garantizar que los elementos como tarjetas y tablas tengan un formato consistente.

- **PrimeIcons**  
  Biblioteca de íconos que provee gráficos para botones, acciones y otras partes interactivas de la UI.

Estas son solo algunas de las principales dependencias. Para ver todas las dependencias, revisa el archivo `package.json`.

## **Información Adicional**

### **1. Manejo de Errores HTTP**

La aplicación incluye un servicio genérico para manejar las peticiones HTTP. Este servicio se asegura de capturar errores en las solicitudes, como fallos en la red o respuestas no válidas de la API. Si ocurre un error, se muestra un mensaje adecuado en la interfaz, permitiendo al usuario conocer el estado del problema.

### **2. Lazy Loading**

La aplicación implementa **Lazy Loading** para los módulos de tareas, lo que optimiza el rendimiento al cargar solo los componentes necesarios cuando son requeridos.

### **3. Modales de Confirmación**

Se implementaron **modales** de confirmación para las acciones críticas como la eliminación de proyectos y tareas, utilizando la librería PrimeNG para la gestión de los diálogos.

### **4. Guardas de Ruta**

Las rutas que permiten la visualización de proyectos y tareas están protegidas mediante **Guards de Autenticación**. Si un usuario no está autenticado, será redirigido a la página de login.

### **5. Toasts para Notificaciones**

Cada vez que se crea o edita un proyecto o tarea, se muestra un **toast de notificación** para informar al usuario sobre el éxito de la operación.