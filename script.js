// Arreglos de items dinámicos
let experiencias = [];
let educaciones = [];
let referencias = [];

// Cambiar color de acento
function cambiarTema(nombreTema) {
  const doc = document.getElementById('cvDocument');
  doc.className = `print-area ${nombreTema} w-full bg-white text-slate-800 rounded-xl shadow-2xl p-8 md:p-10 border border-slate-200 transition-all min-h-[842px] flex flex-col justify-between`;
}

// Agregar nuevo ítem de Experiencia
function agregarExperiencia(puesto = '', empresa = '', periodo = '', desc = '') {
  const id = Date.now() + Math.random();
  experiencias.push({ id, puesto, empresa, periodo, desc });
  renderFormExperiencia();
  actualizarCV();
}

function eliminarExperiencia(id) {
  experiencias = experiencias.filter(e => e.id !== id);
  renderFormExperiencia();
  actualizarCV();
}

function renderFormExperiencia() {
  const contenedor = document.getElementById('listaExperiencia');
  contenedor.innerHTML = '';

  experiencias.forEach((exp) => {
    const item = document.createElement('div');
    item.className = 'bg-slate-900 border border-slate-700/70 p-3 rounded-xl space-y-2 relative';
    item.innerHTML = `
      <button onclick="eliminarExperiencia(${exp.id})" class="absolute top-2 right-2 text-xs text-rose-400 hover:text-rose-300 p-1" title="Eliminar">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <div class="grid grid-cols-2 gap-2 text-xs">
        <input type="text" value="${exp.puesto}" oninput="actualizarExpVal(${exp.id}, 'puesto', this.value)" placeholder="Puesto / Cargo" class="bg-slate-800 border border-slate-700 rounded p-1.5 text-white">
        <input type="text" value="${exp.empresa}" oninput="actualizarExpVal(${exp.id}, 'empresa', this.value)" placeholder="Empresa" class="bg-slate-800 border border-slate-700 rounded p-1.5 text-white">
      </div>
      <input type="text" value="${exp.periodo}" oninput="actualizarExpVal(${exp.id}, 'periodo', this.value)" placeholder="Periodo (Ej: 2021 - Presente)" class="w-full bg-slate-800 border border-slate-700 rounded p-1.5 text-xs text-white">
      <textarea oninput="actualizarExpVal(${exp.id}, 'desc', this.value)" rows="2" placeholder="Responsabilidades y logros..." class="w-full bg-slate-800 border border-slate-700 rounded p-1.5 text-xs text-white">${exp.desc}</textarea>
    `;
    contenedor.appendChild(item);
  });
}

function actualizarExpVal(id, campo, valor) {
  const exp = experiencias.find(e => e.id === id);
  if (exp) exp[campo] = valor;
  actualizarCV();
}

// Agregar nuevo ítem de Educación
function agregarEducacion(titulo = '', centro = '', periodo = '') {
  const id = Date.now() + Math.random();
  educaciones.push({ id, titulo, centro, periodo });
  renderFormEducacion();
  actualizarCV();
}

function eliminarEducacion(id) {
  educaciones = educaciones.filter(e => e.id !== id);
  renderFormEducacion();
  actualizarCV();
}

function renderFormEducacion() {
  const contenedor = document.getElementById('listaEducacion');
  contenedor.innerHTML = '';

  educaciones.forEach((edu) => {
    const item = document.createElement('div');
    item.className = 'bg-slate-900 border border-slate-700/70 p-3 rounded-xl space-y-2 relative';
    item.innerHTML = `
      <button onclick="eliminarEducacion(${edu.id})" class="absolute top-2 right-2 text-xs text-rose-400 hover:text-rose-300 p-1" title="Eliminar">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <div class="grid grid-cols-2 gap-2 text-xs">
        <input type="text" value="${edu.titulo}" oninput="actualizarEduVal(${edu.id}, 'titulo', this.value)" placeholder="Grado / Título" class="bg-slate-800 border border-slate-700 rounded p-1.5 text-white">
        <input type="text" value="${edu.centro}" oninput="actualizarEduVal(${edu.id}, 'centro', this.value)" placeholder="Institución / Universidad" class="bg-slate-800 border border-slate-700 rounded p-1.5 text-white">
      </div>
      <input type="text" value="${edu.periodo}" oninput="actualizarEduVal(${edu.id}, 'periodo', this.value)" placeholder="Año (Ej: 2017 - 2021)" class="w-full bg-slate-800 border border-slate-700 rounded p-1.5 text-xs text-white">
    `;
    contenedor.appendChild(item);
  });
}

function actualizarEduVal(id, campo, valor) {
  const edu = educaciones.find(e => e.id === id);
  if (edu) edu[campo] = valor;
  actualizarCV();
}

// Agregar nuevo ítem de Referencia
function agregarReferencia(nombre = '', cargo = '', empresa = '', contacto = '') {
  const id = Date.now() + Math.random();
  referencias.push({ id, nombre, cargo, empresa, contacto });
  renderFormReferencias();
  actualizarCV();
}

function eliminarReferencia(id) {
  referencias = referencias.filter(r => r.id !== id);
  renderFormReferencias();
  actualizarCV();
}

function renderFormReferencias() {
  const contenedor = document.getElementById('listaReferencias');
  if (!contenedor) return;
  contenedor.innerHTML = '';

  referencias.forEach((ref) => {
    const item = document.createElement('div');
    item.className = 'bg-slate-900 border border-slate-700/70 p-3 rounded-xl space-y-2 relative';
    item.innerHTML = `
      <button onclick="eliminarReferencia(${ref.id})" class="absolute top-2 right-2 text-xs text-rose-400 hover:text-rose-300 p-1" title="Eliminar">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <div class="grid grid-cols-2 gap-2 text-xs">
        <input type="text" value="${ref.nombre}" oninput="actualizarRefVal(${ref.id}, 'nombre', this.value)" placeholder="Nombre de la referencia" class="bg-slate-800 border border-slate-700 rounded p-1.5 text-white">
        <input type="text" value="${ref.cargo}" oninput="actualizarRefVal(${ref.id}, 'cargo', this.value)" placeholder="Cargo / Relación" class="bg-slate-800 border border-slate-700 rounded p-1.5 text-white">
      </div>
      <div class="grid grid-cols-2 gap-2 text-xs">
        <input type="text" value="${ref.empresa}" oninput="actualizarRefVal(${ref.id}, 'empresa', this.value)" placeholder="Empresa" class="bg-slate-800 border border-slate-700 rounded p-1.5 text-white">
        <input type="text" value="${ref.contacto}" oninput="actualizarRefVal(${ref.id}, 'contacto', this.value)" placeholder="Teléfono o Email" class="bg-slate-800 border border-slate-700 rounded p-1.5 text-white">
      </div>
    `;
    contenedor.appendChild(item);
  });
}

function actualizarRefVal(id, campo, valor) {
  const ref = referencias.find(r => r.id === id);
  if (ref) ref[campo] = valor;
  actualizarCV();
}

// Actualización global del Preview en vivo
function actualizarCV() {
  document.getElementById('outNombre').innerText = document.getElementById('inNombre').value || 'Tu Nombre';
  document.getElementById('outTitulo').innerText = document.getElementById('inTitulo').value || 'Tu Título Profesional';
  
  const email = document.getElementById('inEmail').value;
  document.getElementById('outEmail').innerText = email;
  document.getElementById('outEmailWrap').style.display = email ? 'flex' : 'none';

  const tel = document.getElementById('inTelefono').value;
  document.getElementById('outTelefono').innerText = tel;
  document.getElementById('outTelefonoWrap').style.display = tel ? 'flex' : 'none';

  const ubi = document.getElementById('inUbicacion').value;
  document.getElementById('outUbicacion').innerText = ubi;
  document.getElementById('outUbicacionWrap').style.display = ubi ? 'flex' : 'none';

  const web = document.getElementById('inWeb').value;
  document.getElementById('outWeb').innerText = web;
  document.getElementById('outWebWrap').style.display = web ? 'flex' : 'none';

  const perfil = document.getElementById('inPerfil').value;
  document.getElementById('outPerfil').innerText = perfil;
  document.getElementById('outPerfilSec').style.display = perfil ? 'block' : 'none';

  // Experiencia Laboral
  const outExp = document.getElementById('outExperienciaLista');
  outExp.innerHTML = '';
  if (experiencias.length === 0) {
    document.getElementById('outExperienciaSec').style.display = 'none';
  } else {
    document.getElementById('outExperienciaSec').style.display = 'block';
    experiencias.forEach(exp => {
      if (exp.puesto || exp.empresa) {
        const div = document.createElement('div');
        div.className = 'page-break';
        div.innerHTML = `
          <div class="flex justify-between items-baseline">
            <h3 class="text-xs md:text-sm font-bold text-slate-800">${exp.puesto}</h3>
            <span class="text-[11px] font-semibold text-slate-500">${exp.periodo}</span>
          </div>
          <div class="text-xs font-semibold cv-accent-text mb-1">${exp.empresa}</div>
          <p class="text-xs text-slate-600 leading-relaxed whitespace-pre-line">${exp.desc}</p>
        `;
        outExp.appendChild(div);
      }
    });
  }

  // Educación
  const outEdu = document.getElementById('outEducacionLista');
  outEdu.innerHTML = '';
  if (educaciones.length === 0) {
    document.getElementById('outEducacionSec').style.display = 'none';
  } else {
    document.getElementById('outEducacionSec').style.display = 'block';
    educaciones.forEach(edu => {
      if (edu.titulo || edu.centro) {
        const div = document.createElement('div');
        div.className = 'flex justify-between items-baseline page-break';
        div.innerHTML = `
          <div>
            <h3 class="text-xs md:text-sm font-bold text-slate-800">${edu.titulo}</h3>
            <div class="text-xs text-slate-600">${edu.centro}</div>
          </div>
          <span class="text-[11px] font-semibold text-slate-500">${edu.periodo}</span>
        `;
        outEdu.appendChild(div);
      }
    });
  }

  // Habilidades (Pills)
  const habsText = document.getElementById('inHabilidades').value;
  const outHabs = document.getElementById('outHabilidadesLista');
  outHabs.innerHTML = '';
  if (!habsText.trim()) {
    document.getElementById('outHabilidadesSec').style.display = 'none';
  } else {
    document.getElementById('outHabilidadesSec').style.display = 'block';
    habsText.split(',').forEach(h => {
      const item = h.trim();
      if (item) {
        const span = document.createElement('span');
        span.className = 'text-[11px] px-2 py-0.5 rounded font-medium border cv-accent-light-bg cv-accent-text border-slate-200';
        span.innerText = item;
        outHabs.appendChild(span);
      }
    });
  }

  // Idiomas
  const idisText = document.getElementById('inIdiomas').value;
  const outIdis = document.getElementById('outIdiomasLista');
  outIdis.innerHTML = '';
  if (!idisText.trim()) {
    document.getElementById('outIdiomasSec').style.display = 'none';
  } else {
    document.getElementById('outIdiomasSec').style.display = 'block';
    idisText.split(',').forEach(i => {
      const item = i.trim();
      if (item) {
        const li = document.createElement('li');
        li.innerText = item;
        outIdis.appendChild(li);
      }
    });
  }

  // Redes Sociales
  const redesText = document.getElementById('inRedes').value;
  const outRedes = document.getElementById('outRedesLista');
  const outRedesSec = document.getElementById('outRedesSec');
  outRedes.innerHTML = '';
  if (!redesText.trim()) {
    outRedesSec.style.display = 'none';
  } else {
    outRedesSec.style.display = 'block';
    redesText.split(',').forEach(r => {
      const item = r.trim();
      if (item) {
        const span = document.createElement('span');
        span.className = 'text-xs text-slate-700 bg-slate-100 px-2 py-1 rounded border border-slate-200';
        span.innerText = item;
        outRedes.appendChild(span);
      }
    });
  }

  // Referencias
  const outRef = document.getElementById('outReferenciasLista');
  const outRefSec = document.getElementById('outReferenciasSec');
  outRef.innerHTML = '';
  if (referencias.length === 0) {
    outRefSec.style.display = 'none';
  } else {
    outRefSec.style.display = 'block';
    referencias.forEach(ref => {
      if (ref.nombre || ref.cargo) {
        const div = document.createElement('div');
        div.className = 'text-xs text-slate-700 space-y-0.5 bg-slate-50 p-2.5 rounded border border-slate-200';
        div.innerHTML = `
          <p class="font-bold text-slate-800">${ref.nombre}</p>
          <p class="text-slate-600">${ref.cargo} - ${ref.empresa}</p>
          <p class="text-slate-500">${ref.contacto}</p>
        `;
        outRef.appendChild(div);
      }
    });
  }
}

// Cargar Datos de Ejemplo
function cargarEjemplo() {
  document.getElementById('inNombre').value = 'Alexander';
  document.getElementById('inTitulo').value = 'Sistemas y Desarrollo';
  document.getElementById('inEmail').value = 'ejemplo@ejemplo.com';
  document.getElementById('inTelefono').value = '+593 99 000 0000';
  document.getElementById('inUbicacion').value = 'Guayaquil, Guayas';
  document.getElementById('inWeb').value = 'linkedin.com';
  document.getElementById('inPerfil').value = 'Profesional en sistemas con experiencia en soporte y desarrollo.';
  document.getElementById('inRedes').value = 'GitHub: github.com/usuario, Portafolio: miweb.com';
  
  experiencias = [
    {
      id: 1,
      puesto: 'Programador',
      empresa: 'Empresa Privada',
      periodo: '2026 - Presente',
      desc: '• Liderazgo del rediseño de la plataforma web principal.\nCreación del sistema de diseño.'
    },
    {
      id: 2,
      puesto: 'Soporte Técnico',
      empresa: 'Empresa Privada',
      periodo: '2026 - Presente',
      desc: '• Soporte de máquinas.\nMantenimiento a servidores.'
    }
  ];

  educaciones = [
    {
      id: 1,
      titulo: 'Desarrollo de Software',
      centro: 'Colegio Nacional Privado',
      periodo: '2025 - 2026'
    }
  ];

  referencias = [
    {
      id: 1,
      nombre: 'Ing. Carlos Pérez',
      cargo: 'Jefe de Sistemas',
      empresa: 'Tech Solutions',
      contacto: '+593 98 123 4567'
    }
  ];

  document.getElementById('inHabilidades').value = 'Soporte Técnico, HTML5, JavaScript, CSS, Git';
  document.getElementById('inIdiomas').value = 'Español (Nativo), Inglés (Intermedio)';

  renderFormExperiencia();
  renderFormEducacion();
  renderFormReferencias();
  actualizarCV();
}

// Limpiar todos los campos
function limpiarTodo() {
  document.getElementById('inNombre').value = '';
  document.getElementById('inTitulo').value = '';
  document.getElementById('inEmail').value = '';
  document.getElementById('inTelefono').value = '';
  document.getElementById('inUbicacion').value = '';
  document.getElementById('inWeb').value = '';
  document.getElementById('inPerfil').value = '';
  document.getElementById('inHabilidades').value = '';
  document.getElementById('inIdiomas').value = '';
  document.getElementById('inRedes').value = '';

  experiencias = [];
  educaciones = [];
  referencias = [];

  borrarFoto();
  renderFormExperiencia();
  renderFormEducacion();
  renderFormReferencias();
  actualizarCV();
}

// Función para imprimir/descargar PDF
function imprimirCV() {
  window.print();
}

// Función para manejar la carga de la imagen
function cargarImagen(event) {
  const archivo = event.target.files[0];
  if (archivo) {
    const lector = new FileReader();
    lector.onload = function(e) {
      const imgElement = document.getElementById('outFoto');
      const wrapElement = document.getElementById('outFotoWrap');
      imgElement.src = e.target.result;
      wrapElement.classList.remove('hidden');
    }
    lector.readAsDataURL(archivo);
  }
}

// Función para quitar/borrar la foto
function borrarFoto() {
  const imgElement = document.getElementById('outFoto');
  const wrapElement = document.getElementById('outFotoWrap');
  const inputElement = document.getElementById('inFoto');

  if (wrapElement) {
    wrapElement.classList.add('hidden');
  }
  if (imgElement) {
    imgElement.src = '';
  }
  if (inputElement) {
    inputElement.value = '';
  }
}
// Cargar los datos de ejemplo automáticamente al abrir la página
cargarEjemplo();