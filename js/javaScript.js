document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })
});



window.onload = function () {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`compra${i}`).addEventListener("click", function () {
            let unidades = document.getElementById("unidades" + i).value;

            if (i == 1 && unidades > 0) {
                if (unidades > 1) {
                    document.getElementById("mensaje").textContent = ("¡Ha comprado " + unidades + " entradas generales para el DebugFest 2025!");
                } else {
                    document.getElementById("mensaje").textContent = ("¡Ha comprado " + unidades + " entrada general para el DebugFest 2025!");
                }
            } else if (i == 2 && unidades > 0) {
                if (unidades > 1) {
                    document.getElementById("mensaje").textContent = ("¡Ha comprado " + unidades + " entradas premium para el DebugFest 2025!");
                } else {
                    document.getElementById("mensaje").textContent = ("¡Ha comprado " + unidades + " entrada premium para el DebugFest 2025!");
                }
            }
            else if (i == 3 && unidades > 0) {
                if (unidades > 1) {
                    document.getElementById("mensaje").textContent = ("¡Ha comprado " + unidades + " entradas VIP para el DebugFest 2025!");
                } else {
                    document.getElementById("mensaje").textContent = ("¡Ha comprado " + unidades + " entrada VIP para el DebugFest 2025!");
                }
            }
            else if (i == 4 && unidades > 0) {
                if (unidades > 1) {
                    document.getElementById("mensaje").textContent = ("¡Ha comprado " + unidades + " entradas platino para el DebugFest 2025!");
                } else {
                    document.getElementById("mensaje").textContent = ("¡Ha comprado " + unidades + " entrada platino para el DebugFest 2025!");
                }
            }
            document.getElementById("mensaje").classList.add("mensaje");
        });
    }
}