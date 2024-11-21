document.getElementById("boton_calcular").addEventListener("click", calcularHuellaDeCarbono);

function calcularHuellaDeCarbono() {
    // Inicializamos la huella de carbono en 0
    let huellaCarbono = 0;

    // Sección 1: Consumo de energía
    const consumoEnergia = document.getElementById("opciones").value;
    const energiaRenovable = document.querySelector('input[name="energia-renovable"]:checked').value;
    const usoAC = document.querySelector('input[name="uso-ac"]:checked').value;
    const fuenteEnergia = document.getElementById("energia").value;

    if (consumoEnergia === "opcion1") huellaCarbono += 100;
    else if (consumoEnergia === "opcion2") huellaCarbono += 300;
    else if (consumoEnergia === "opcion3") huellaCarbono += 500;

    if (energiaRenovable === "no") huellaCarbono += 50;
    if (usoAC === "ocasionalmente") huellaCarbono += 100;
    else if (usoAC === "diariamente") huellaCarbono += 200;

    if (fuenteEnergia === "gas") huellaCarbono += 300;
    else if (fuenteEnergia === "combustible") huellaCarbono += 400;

    // Sección 2: Transporte
    const kilometraje = document.getElementById("kilometraje").value;
    const tipoVehiculo = document.getElementById("tipo-vehiculo").value;
    const transportePublico = document.getElementById("frecuencia_transp").value;
    const viajesAvion = document.getElementById("frecuencia_avion").value;

    if (kilometraje === "11-50") huellaCarbono += 200;
    else if (kilometraje === "mas50") huellaCarbono += 500;

    if (tipoVehiculo === "gasolina") huellaCarbono += 400;
    else if (tipoVehiculo === "diesel") huellaCarbono += 500;
    else if (tipoVehiculo === "hibrido") huellaCarbono += 200;

    if (transportePublico === "nunca") huellaCarbono += 200;
    if (viajesAvion === "1-2_veces") huellaCarbono += 500;
    else if (viajesAvion === "3-5_veces") huellaCarbono += 1000;
    else if (viajesAvion === "mas_de_5_veces") huellaCarbono += 2000;

    // Sección 3: Alimentación
    const frecuenciaCarne = document.getElementById("frecuencia_carne").value;
    const productosLocales = document.getElementById("productos_locales").value;
    const tipoDieta = document.getElementById("dieta").value;

    if (frecuenciaCarne === "diario") huellaCarbono += 300;
    else if (frecuenciaCarne === "semanalmente") huellaCarbono += 200;

    if (productosLocales === "Nunca") huellaCarbono += 100;

    if (tipoDieta === "Omnivora") huellaCarbono += 300;
    else if (tipoDieta === "Vegetariana") huellaCarbono += 150;

    // Sección 4: Compras y estilo de vida
    const frecuenciaRopa = document.getElementById("frecuencia_compra_ropa").value;
    const frecuenciaElectro = document.getElementById("frecuencia_compra_elect").value;
    const frecuenciaReciclaje = document.getElementById("frecuencia_reciclaje").value;

    if (frecuenciaRopa === "1") huellaCarbono += 300;
    else if (frecuenciaRopa === "2") huellaCarbono += 150;

    if (frecuenciaElectro === "1") huellaCarbono += 200;

    if (frecuenciaReciclaje === "3") huellaCarbono += 200;

    // Sección 5: Residuos
    const separarResiduos = document.getElementById("separar_residuos").value;
    const bolsasBasura = document.getElementById("bolsas_basura").value;
    const composta = document.querySelector('input[name="composta"]:checked').value;

    if (separarResiduos === "3") huellaCarbono += 100;
    if (bolsasBasura === "2") huellaCarbono += 50;
    else if (bolsasBasura === "3") huellaCarbono += 100;
    if (composta === "No") huellaCarbono += 50;

    // Mostrar resultado
    alert(`Tu estimación de huella de carbono es: ${huellaCarbono} puntos.`);
}
