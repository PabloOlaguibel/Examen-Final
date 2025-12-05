document.addEventListener('DOMContentLoaded', function() {
  M.AutoInit(); // Initialize Materialize components
  // Ensure select elements behave accessibly
  const selects = document.querySelectorAll('select');
  selects.forEach(s => s.setAttribute('aria-expanded','false'));
  
  // Sidenav: update aria when opened/closed
  const sidenavs = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenavs, {
    onOpenStart: function(el){ el.setAttribute('aria-hidden','false'); document.querySelector('.sidenav-trigger').setAttribute('aria-expanded','true'); },
    onCloseEnd: function(el){ el.setAttribute('aria-hidden','true'); document.querySelector('.sidenav-trigger').setAttribute('aria-expanded','false'); }
  });

  // Form validation
  const form = document.getElementById('admissionForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const fv = form.checkValidity();
      if(!fv){
        // Find first invalid field and focus
        const firstInvalid = form.querySelector(':invalid');
        firstInvalid.focus();
        document.getElementById('form-note').textContent = 'Corrija los campos en rojo antes de enviar.';
        // show native validation messages by adding class to label via Materialize helper
        M.toast({html: 'Corrija los campos obligatorios', classes: 'red lighten-1'});
        return;
      }
      // Simulate successful submission
      M.toast({html: 'Formulario enviado correctamente', classes: 'green darken-1'});
      form.reset();
      const selects = document.querySelectorAll('select');
      M.FormSelect.init(selects); // reset selects visual
    });
  }
});