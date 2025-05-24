### ✅ Caso de uso: Registrar paciente

**Actor:** Administrador

**Precondiciones:** El administrador ha iniciado sesión

**Flujo principal:**

1. El administrador selecciona "Registrar paciente"
2. Ingresa nombre, documento, teléfono y otros datos
3. Confirma la operación
4. El sistema guarda al paciente

**Postcondición:** El paciente queda registrado en la base de datos

---

### ✅ Caso de uso: Eliminar paciente

**Actor:** Administrador

**Precondiciones:** El paciente existe en el sistema

**Flujo principal:**

1. El administrador selecciona al paciente
2. Hace clic en "Eliminar"
3. Confirma la eliminación
4. El sistema elimina al paciente

**Postcondición:** El paciente es eliminado del sistema

---

### ✅ Caso de uso: Registrar Doctor

**Actor:** Administrador

**Precondiciones:** El administrador ha iniciado sesión

**Flujo principal:**

1. El administrador selecciona "Registrar Doctor"
2. Ingresa nombre, documento, teléfono y otros datos
3. Confirma la operación
4. El sistema guarda al Doctor

**Postcondición:** El Doctor queda registrado en la base de datos

---

### ✅ Caso de uso: Eliminar Doctor

**Actor:** Administrador

**Precondiciones:** El Doctor existe en el sistema

**Flujo principal:**

1. El administrador selecciona al Doctor
2. Hace clic en "Eliminar"
3. Confirma la eliminación
4. El sistema elimina al paciente

**Postcondición:** El Doctor es eliminado del sistema

---

### ✅ Caso de uso: Registrar cita

**Actor:** Administrador

**Precondiciones:** El paciente y el doctor deben estar registrados

**Flujo principal:**

1. El administrador selecciona "Nueva cita"
2. Escoge al paciente y al doctor
3. Define fecha, hora y motivo
4. Guarda la cita

**Postcondición:** La cita queda registrada y vinculada al paciente y al doctor

---

### ✅ Caso de uso: Editar cita

**Actor:** Administrador

**Precondiciones:** La cita ya existe

**Flujo principal:**

1. El administrador selecciona la cita
2. Modifica los datos necesarios
3. Guarda los cambios

**Postcondición:** La cita queda actualizada

---

### ✅ Caso de uso: Eliminar cita

**Actor:** Administrador

**Precondiciones:** La cita ya existe en el sistema

**Flujo principal:**

1. El administrador accede al calendario o lista de citas
2. Selecciona la cita a eliminar
3. Confirma la acción de eliminación
4. El sistema borra la cita del calendario

**Postcondición:** La cita es eliminada y deja de mostrarse en el sistema

---

### ✅ Caso de uso: Ver calendario de citas

**Actor:** Administrador

**Precondiciones:** El usuario ha iniciado sesión como administrador

**Flujo principal:**

1. El administrador abre el calendario
2. El sistema muestra todas las citas programadas, con opción de filtrado
3. Puede ver detalles, modificar o eliminar citas

**Postcondición:** El administrador visualiza la agenda completa de citas

---

### ✅ Caso de uso: Ver citas asignadas

**Actor:** Doctor

**Precondiciones:** El doctor ha iniciado sesión

**Flujo principal:**

1. El doctor accede a "Mis citas"
2. El sistema muestra solo las citas donde él está asignado
3. Puede ver fecha, hora, paciente y motivo

**Postcondición:** El doctor visualiza únicamente sus citas programadas

---

### ✅ Caso de uso: Acceder a funcionalidades administrativas (rol mixto)

**Actor:** Usuario con doble rol (Doctor + Administrador)

**Precondiciones:** Ha iniciado sesión como usuario con ambos permisos

**Flujo principal:**

1. El sistema detecta permisos duales
2. Muestra todas las opciones: ver citas propias y funciones administrativas
3. El usuario actúa como doctor o administrador según necesidad

**Postcondición:** El usuario puede operar en ambas áreas sin restricción

---

### ✅ Caso de uso: Mostrar personas cumpiendo años en la seman

**Actor:** Usuario con doble rol (Doctor + Administrador)

**Precondiciones:** Ha iniciado sesión como usuario con ambos permisos

**Flujo principal:**

1. El sistema detecta permisos duales
2. Muestra todas las opciones: ver citas propias y funciones administrativas
3. El usuario actúa como doctor o administrador según necesidad

**Postcondición:** El usuario puede operar en ambas áreas sin restricción

---
