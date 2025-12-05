
# Informe breve de accesibilidad
- HTML semántico: uso de header, main, section y footer para estructurar el contenido.
- Navegación: menú responsive con `sidenav` y `aria-hidden` correctamente actualizado en JS.
- Formularios: etiquetas `label` asociadas, `aria-required` en campos obligatorios, y mensajes de error mostrados con `M.toast` y en una región `aria-live` (id=form-note).
- Contraste: se usaron tonos de azul oscuro sobre fondos claros para mantener relación de contraste aceptable (se recomienda revisar con herramienta como WebAIM Contrast Checker).
- Teclado: todos los elementos interactivos son botones, enlaces o inputs nativos (navegables con Tab).
