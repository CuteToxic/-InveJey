// URL DE GOOGLE APPS SCRIPT (Recuerda reemplazar este texto por el link real)
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzYNn6JvsbjCmB5D4Eg9w1nZ-oL3-Dd6a2enJYHopNSvMitPR5I6ScK_aC6DnBWCML0/exec";

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
    // Obtener la fecha actual en Perú
    const opciones = { timeZone: 'America/Lima', year: 'numeric', month: 'numeric', day: 'numeric' };
    const fechaPeru = new Intl.DateTimeFormat('es-PE', opciones).format(new Date());
    
    const fechaGuardada = localStorage.getItem('fechaApp');
    if (fechaGuardada !== fechaPeru) {
        // Si es un nuevo día, limpiar el pedido local
        localStorage.removeItem('pedidoDelDia');
        localStorage.setItem('fechaApp', fechaPeru);
        pedidoConfirmado = [];
    }
}

function renderCocinero() {
    const contenedor = document.getElementById('contenedor-productos-cocinero');
    contenedor.innerHTML = '';
    
    const categorias = [...new Set(inventario.map(p => p.categoria))];
    
    categorias.forEach(cat => {
        const catDiv = document.createElement('div');
        catDiv.innerHTML = `<h3 class="category">${cat}</h3>`;
        
        const grid = document.createElement('div');
        grid.className = 'product-list';
        
        inventario.filter(p => p.categoria === cat).forEach(prod => {
            const yaPedido = pedidoConfirmado.some(p => p.nombre === prod.nombre);
            grid.innerHTML += `
                <label class="product-item ${yaPedido ? 'disabled' : ''} prod-search">
                    <input type="checkbox" value="${prod.nombre}" data-cat="${prod.categoria}" ${yaPedido ? 'checked disabled' : ''}>
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
    
    if(pedidoConfirmado.length === 0) {
        contenedor.innerHTML = '<p>El cocinero aún no ha confirmado ningún pedido para hoy.</p>';
        return;
    }

    const list = document.createElement('div');
    list.className = 'product-list';
    pedidoConfirmado.forEach(prod => {
        list.innerHTML += `
            <label class="product-item">
                <input type="checkbox" class="check-comprador" value="${prod.nombre}" data-cat="${prod.categoria}">
                <span>${prod.nombre}</span>
            </label>
        `;
    });
    contenedor.appendChild(list);
}

function filtrarProductos() {
    const texto = document.getElementById('buscador').value.toLowerCase();
    document.querySelectorAll('.prod-search').forEach(item => {
        const nombre = item.querySelector('.prod-name').textContent.toLowerCase();
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
    cerrarModal();
    renderCocinero(); // Renderiza de nuevo para deshabilitar y cambiar de color
}

function guardarCompraFinal() {
    const checkboxes = document.querySelectorAll('.check-comprador');
    const productosComprados = [];
    
    // Obtener fecha y hora en formato Perú para el Excel
    const opcionesFecha = { timeZone: 'America/Lima', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    const fechaHoraPeru = new Intl.DateTimeFormat('es-PE', opcionesFecha).format(new Date());

    checkboxes.forEach(cb => {
        if (cb.checked) {
            productosComprados.push({
                producto: cb.value,
                categoria: cb.getAttribute('data-cat'),
                fecha: fechaHoraPeru
            });
        }
    });

    if (productosComprados.length === 0) {
        alert('No has marcado ningún producto como comprado.');
        return;
    }

    if(!GOOGLE_SCRIPT_URL.includes("script.google.com")) {
        alert("⚠️ Primero debes configurar la URL de tu Google Apps Script en el código.");
        return;
    }

    const btn = document.querySelector('#vista-comprador .btn-action');
    btn.textContent = "Guardando...";
    btn.disabled = true;

    // Enviar a Google Sheets
    fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(productosComprados)
    })
    .then(res => res.json())
    .then(data => {
        alert("¡Registro de compras guardado exitosamente en el Excel!");
        btn.textContent = "Guardar Registro de Compra";
        btn.disabled = false;
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Hubo un error al guardar. Revisa la consola.");
        btn.textContent = "Guardar Registro de Compra";
        btn.disabled = false;
    });
}

// Inicializar
checkResetMedianoche();
renderCocinero();
