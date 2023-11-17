const btn = document.getElementById('btnEncuentranos');
btn.addEventListener('click', () => {
    const ventana = document.querySelector('#ventanaModal');
    console.log(ventana);
    ventana.showModal();
})

const btnDialog = document.getElementById('btnDialogo');
btnDialog.addEventListener('click',() => {
    const ventana = document.querySelector('#ventanaModal');
    ventana.close();
})

