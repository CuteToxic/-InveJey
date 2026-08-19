// URL DE GOOGLE APPS SCRIPT (Reemplaza con tu nuevo link)
const GOOGLE_SCRIPT_URL = "AQUI_PONDRAS_EL_LINK_DE_TU_NUEVO_APPS_SCRIPT";

const inventario = [
    // BODEGA
    { categoria: 'BODEGA', nombre: 'LECHE EN BOLSA' }, { categoria: 'BODEGA', nombre: 'LECHE EN TARRO' }, { categoria: 'BODEGA', nombre: 'FREJOL' }, { categoria: 'BODEGA', nombre: 'PAYARES' }, { categoria: 'BODEGA', nombre: 'LENTEJAS' }, { categoria: 'BODEGA', nombre: 'HUEVO' }, { categoria: 'BODEGA', nombre: 'ACEITE' }, { categoria: 'BODEGA', nombre: 'CREMAS EN SACKET' }, { categoria: 'BODEGA', nombre: 'MORON' }, { categoria: 'BODEGA', nombre: 'CEMOLA' }, { categoria: 'BODEGA', nombre: 'ARROZ' }, { categoria: 'BODEGA', nombre: 'PAPA INSTANTANEA' }, { categoria: 'BODEGA', nombre: 'AJINOMOTO' }, { categoria: 'BODEGA', nombre: 'SAL' }, { categoria: 'BODEGA', nombre: 'AZUCAR' }, { categoria: 'BODEGA', nombre: 'MAICENA' }, { categoria: 'BODEGA', nombre: 'POMOROLA' }, { categoria: 'BODEGA', nombre: 'PAN HAMBURGUESA' }, { categoria: 'BODEGA', nombre: 'HOT DOG' }, { categoria: 'BODEGA', nombre: 'CHORIZO' }, { categoria: 'BODEGA', nombre: 'MOSTAZA GRANDE' }, { categoria: 'BODEGA', nombre: 'KETCHUP GRANDE' }, { categoria: 'BODEGA', nombre: 'FIDEO ESPAGUETI PAQ' }, { categoria: 'BODEGA', nombre: 'VINAGRE' }, { categoria: 'BODEGA', nombre: 'SILLAO' }, { categoria: 'BODEGA', nombre: 'OSTION' }, { categoria: 'BODEGA', nombre: 'STEVIA' }, { categoria: 'BODEGA', nombre: 'TAMARINDO' }, { categoria: 'BODEGA', nombre: 'CANCHA' }, { categoria: 'BODEGA', nombre: 'ACEITE DE AJONJOLI' },
    // BEBIDAS
    { categoria: 'BEBIDAS', nombre: 'INKA COLA' }, { categoria: 'BEBIDAS', nombre: 'COCA COLA' }, { categoria: 'BEBIDAS', nombre: 'AGUA MINERAL' }, { categoria: 'BEBIDAS', nombre: 'CHICHA DE JORA' },
    // VERDURAS
    { categoria: 'VERDURAS', nombre: 'VERDURA PARA SOPA' }, { categoria: 'VERDURAS', nombre: 'PAPA YUNGAY' }, { categoria: 'VERDURAS', nombre: 'PAPA AMARILLA' }, { categoria: 'VERDURAS', nombre: 'ZANAHORA' }, { categoria: 'VERDURAS', nombre: 'ALVERJITA' }, { categoria: 'VERDURAS', nombre: 'VAINITAA' }, { categoria: 'VERDURAS', nombre: 'VETERRAGA' }, { categoria: 'VERDURAS', nombre: 'LECHUGA ORGANICA (HOJA)' }, { categoria: 'VERDURAS', nombre: 'LECHUGA AMERICANA (CABEZA)' }, { categoria: 'VERDURAS', nombre: 'AJI AMARILLO' }, { categoria: 'VERDURAS', nombre: 'CEBOLLA' }, { categoria: 'VERDURAS', nombre: 'CEBOLLA CHINA' }, { categoria: 'VERDURAS', nombre: 'ZANAHORIA Y ALVERJA CUADROS' }, { categoria: 'VERDURAS', nombre: 'ZANAHORIA Y ALVERJA RODAJAS' }, { categoria: 'VERDURAS', nombre: 'ALBACA' }, { categoria: 'VERDURAS', nombre: 'ESPINACA' }, { categoria: 'VERDURAS', nombre: 'HUACATAI' }, { categoria: 'VERDURAS', nombre: 'LOCHE' }, { categoria: 'VERDURAS', nombre: 'ACEITUNA' }, { categoria: 'VERDURAS', nombre: 'AJO' }, { categoria: 'VERDURAS', nombre: 'AJI PANCA' }, { categoria: 'VERDURAS', nombre: 'OLLUQUITO' },
    // FRUTAS
    { categoria: 'FRUTAS', nombre: 'PAPAYA' }, { categoria: 'FRUTAS', nombre: 'PIÑA' }, { categoria: 'FRUTAS', nombre: 'FRESA' }, { categoria: 'FRUTAS', nombre: 'MANGO' }, { categoria: 'FRUTAS', nombre: 'LUCUMA' }, { categoria: 'FRUTAS', nombre: 'MARACUYA' }, { categoria: 'FRUTAS', nombre: 'MANZANA' }, { categoria: 'FRUTAS', nombre: 'COCONA' }, { categoria: 'FRUTAS', nombre: 'CARAMBOLA' }, { categoria: 'FRUTAS', nombre: 'PLATANO FREIR' }, { categoria: 'FRUTAS', nombre: 'PLATANO JUGO' },
    // CARNES
    { categoria: 'CARNES', nombre: 'POLLO' }, { categoria: 'CARNES', nombre: 'GALLINA' }, { categoria: 'CARNES', nombre: 'LOMO' }, { categoria: 'CARNES', nombre: 'PAVITA' }, { categoria: 'CARNES', nombre: 'HIGADO' }, { categoria: 'CARNES', nombre: 'PESCADO FILETE' }, { categoria: 'CARNES', nombre: 'PESCADO CEVICHE' }, { categoria: 'CARNES', nombre: 'CHULETA' }, { categoria: 'CARNES', nombre: 'CHURRASCO' }, { categoria: 'CARNES', nombre: 'MILANESA' }, { categoria: 'CARNES', nombre: 'HUESO CON CARNE' }, { categoria: 'CARNES', nombre: 'MOLLEJITAA' }, { categoria: 'CARNES', nombre: 'PECHUGA' }, { categoria: 'CARNES', nombre: 'ALITAS' }, { categoria: 'CARNES', nombre: 'CABRITO' }, { categoria: 'CARNES', nombre: 'MOLIDA' }, { categoria: 'CARNES', nombre: 'TRUCHA' }, { categoria: 'CARNES', nombre: 'FILETE DE POLLO' },
    // SUMINISTROS
    { categoria: 'SUMINISTROS', nombre: 'TAPER ENTRADA' }, { categoria: 'SUMINISTROS', nombre: 'TAPER SEGUNDOS' }, { categoria: 'SUMINISTROS', nombre: 'VASOS DE JUGOS' }, { categoria: 'SUMINISTROS', nombre: 'SERVILLETAS' }, { categoria: 'SUMINISTROS', nombre: 'SORBETES' }, { categoria: 'SUMINISTROS', nombre: 'LIMPIA TODO' }, { categoria: 'SUMINISTROS', nombre: 'TIZAS' }, { categoria: 'SUMINISTROS', nombre: 'COMANDAS' }, { categoria: 'SUMINISTROS', nombre: 'HOJAS DE MENU' }, { categoria: 'SUMINISTROS', nombre: 'LEJIA' }, { categoria: 'SUMINISTROS', nombre: 'DETERGENTE' }
];

let pedidoConfirmado = JSON.parse(localStorage.getItem('pedidoDelDia')) || [];

function checkResetMedianoche() {
    const opciones = { timeZone: 'America/Lima', year: 'numeric', month: 'numeric', day: 'numeric' };
    const fechaPeru = new Intl.DateTimeFormat('es-PE', opciones).format(new Date());
    
    const fechaGuardada = localStorage.getItem('fechaApp');
    if (fechaGuardada !== fechaPeru) {
        limpiarAlmacenamientoLocal(fechaPeru);
    }
}

function limpiarAlmacenamientoLocal(fechaPeru) {
    localStorage.removeItem('pedidoDelDia');
    localStorage.removeItem('bloqueo-cocinero');
    localStorage.removeItem('bloqueo-comprador');
    if (fechaPeru) localStorage.setItem('fechaApp', fechaPeru);
    pedidoConfirmado = [];
}

function renderCocinero() {
    const contenedor = document.getElementById('contenedor-productos-cocinero');
    contenedor.innerHTML = '';
    
    // Verificar si el cocinero ya guardó su pedido
    const estaBloqueado = localStorage.getItem('bloqueo-cocinero') === 'true';
    const btnGuardar = document.getElementById('btn-guardar-cocinero');
    
    if (estaBloqueado) {
        btnGuardar.disabled = true;
        btnGuardar.textContent = "✅ Pedido del Cocinero Guardado";
    } else {
        btnGuardar.disabled = false;
        btnGuardar.textContent = "Guardar Pedido del Día";
    }
    
    const categorias = [...new Set(inventario.map(p => p.categoria))];
    
    categorias.forEach(cat => {
        const catDiv = document.createElement('div');
        catDiv.innerHTML = `<h3 class="category">${cat}</h3>`;
        const grid = document.createElement('div');
        grid.className = 'product-list';
        
        inventario.filter(p => p.categoria === cat).forEach(prod => {
            const yaPedido = pedidoConfirmado.some(p => p.nombre === prod.nombre);
            grid.innerHTML += `
                <label class="product-item ${yaPedido || estaBloqueado ? 'disabled' : ''} prod-search-cocinero">
                    <input type="checkbox" value="${prod.nombre}" data-cat="${prod.categoria}" ${yaPedido ? 'checked' : ''} ${estaBloqueado ? 'disabled' : ''}>
                    <span class="prod-name">${prod.nombre}</span>
                </label>
            `;
        });
        catDiv.appendChild(grid);
        contenedor.appendChild(catDiv);
    });
}

function renderComprador() {
    const contenedor = document.getElementById('contenedor-productos-comprador');
    contenedor.innerHTML = '';
    
    const estaBloqueado = localStorage.getItem('bloqueo-comprador') === 'true';
    const btnGuardar = document.getElementById('btn-guardar-comprador');
    
    if (estaBloqueado) {
        btnGuardar.disabled = true;
        btnGuardar.textContent = "✅ Registro de Compra Enviado";
    } else {
        btnGuardar.disabled = false;
        btnGuardar.textContent = "Guardar Registro de Compra";
    }
    
    if(pedidoConfirmado.length === 0) {
        contenedor.innerHTML = '<p>El cocinero aún no ha confirmado ningún pedido para hoy.</p>';
        btnGuardar.style.display = 'none';
        return;
    }
    
    btnGuardar.style.display = 'block';
    const list = document.createElement('div');
    list.className = 'product-list';
    
    pedidoConfirmado.forEach(prod => {
        list.innerHTML += `
            <label class="product-item prod-search-comprador ${estaBloqueado ? 'disabled' : ''}">
                <input type="checkbox" class="check-comprador" value="${prod.nombre}" data-cat="${prod.categoria}" ${estaBloqueado ? 'disabled' : ''}>
                <span class="prod-name-comp">${prod.nombre}</span>
            </label>
        `;
    });
    contenedor.appendChild(list);
}

// Buscador del Cocinero
function filtrarProductosCocinero() {
    const texto = document.getElementById('buscador-cocinero').value.toLowerCase();
    document.querySelectorAll('.prod-search-cocinero').forEach(item => {
        const nombre = item.querySelector('.prod-name').textContent.toLowerCase();
        item.style.display = nombre.includes(texto) ? 'flex' : 'none';
    });
}

// Buscador del Comprador
function filtrarProductosComprador() {
    const texto = document.getElementById('buscador-comprador').value.toLowerCase();
    document.querySelectorAll('.prod-search-comprador').forEach(item => {
        const nombre = item.querySelector('.prod-name-comp').textContent.toLowerCase();
        item.style.display = nombre.includes(texto) ? 'flex' : 'none';
    });
}

function cambiarVista(vista) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    
    if (vista === 'cocinero') {
        document.querySelectorAll('.tab-btn')[0].classList.add('active');
        document.getElementById('vista-cocinero').classList.add('active');
        renderCocinero();
    } else {
        document.querySelectorAll('.tab-btn')[1].classList.add('active');
        document.getElementById('vista-comprador').classList.add('active');
        renderComprador();
    }
}

function abrirModal() {
    const checkboxes = document.querySelectorAll('#contenedor-productos-cocinero input[type="checkbox"]:checked:not(:disabled)');
    if(checkboxes.length === 0) {
        alert('No has seleccionado nuevos productos.');
        return;
    }
    const listaResumen = document.getElementById('lista-resumen-pedido');
    listaResumen.innerHTML = '';
    checkboxes.forEach(cb => {
        listaResumen.innerHTML += `<li>${cb.value}</li>`;
    });
    document.getElementById('modal-confirmacion').style.display = 'flex';
}

function cerrarModal() {
    document.getElementById('modal-confirmacion').style.display = 'none';
}

function confirmarPedido() {
    const checkboxes = document.querySelectorAll('#contenedor-productos-cocinero input[type="checkbox"]:checked:not(:disabled)');
    checkboxes.forEach(cb => {
        pedidoConfirmado.push({ nombre: cb.value, categoria: cb.getAttribute('data-cat') });
    });
    
    localStorage.setItem('pedidoDelDia', JSON.stringify(pedidoConfirmado));
    // Bloquear al cocinero
    localStorage.setItem('bloqueo-cocinero', 'true'); 
    
    cerrarModal();
    renderCocinero();
}

function guardarCompraFinal() {
    // Tomar todos los checkboxes de la vista comprador
    const checkboxes = document.querySelectorAll('.check-comprador');
    const productosParaEnviar = [];
    
    const opcionesFecha = { timeZone: 'America/Lima', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    const fechaHoraPeru = new Intl.DateTimeFormat('es-PE', opcionesFecha).format(new Date());

    // Crear un "diccionario" de lo que se marcó
    const compradosMap = {};
    checkboxes.forEach(cb => {
        compradosMap[cb.value] = cb.checked;
    });

    // Recorrer TODO el pedido del cocinero para enviar SI o NO
    pedidoConfirmado.forEach(prod => {
        productosParaEnviar.push({
            producto: prod.nombre,
            categoria: prod.categoria,
            fecha: fechaHoraPeru,
            seCompro: compradosMap[prod.nombre] ? "SI" : "NO"
        });
    });

    if(!GOOGLE_SCRIPT_URL.includes("script.google.com")) {
        alert("⚠️ Configura la URL de tu nuevo Google Apps Script en la primera línea de script.js");
        return;
    }

    const btn = document.getElementById('btn-guardar-comprador');
    btn.textContent = "Guardando...";
    btn.disabled = true;

    fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(productosParaEnviar)
    })
    .then(res => res.json())
    .then(data => {
        alert("¡Registro enviado al Excel! (Se guardaron comprados y no comprados)");
        // Bloquear al comprador
        localStorage.setItem('bloqueo-comprador', 'true');
        renderComprador();
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Hubo un error al guardar. Intenta de nuevo.");
        btn.textContent = "Guardar Registro de Compra";
        btn.disabled = false;
    });
}

// FUNCIONES DE ADMINISTRADOR Y PRUEBAS
function forzarReseteo() {
    if(confirm("¿Seguro que quieres borrar la memoria local y resetear el día completo? (Modo Prueba)")) {
        limpiarAlmacenamientoLocal();
        location.reload();
    }
}

function desbloquearBotones() {
    const pass = prompt("Acción de Administrador: Ingresa la contraseña para desbloquear los botones de envío (Ej. '1234')");
    // Aquí puedes cambiar "1234" por la contraseña que quieras
    if (pass === "1234") {
        localStorage.removeItem('bloqueo-cocinero');
        localStorage.removeItem('bloqueo-comprador');
        alert("Botones desbloqueados. Las vistas se actualizarán.");
        renderCocinero();
        renderComprador();
    } else if (pass !== null) {
        alert("Contraseña incorrecta.");
    }
}

// Inicializar
checkResetMedianoche();
renderCocinero();
