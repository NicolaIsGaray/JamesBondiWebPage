const sideNav = document.querySelector(".mobile-sidebar");

function openSideNav() {
    sideNav.classList.toggle("mobile-sidebar-open")
}

const easterEgg = document.querySelector("#secret");

easterEgg.addEventListener("click", (e) => {
    e.preventDefault();
    Swal.fire({
        title: "Waos",
        text: "¡Has encontrado a Arif Supremo!.",
        imageUrl: "https://scontent.faep8-2.fna.fbcdn.net/v/t39.30808-6/267788809_247502317484314_4111323471834816071_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=joTADpSB6ugQ7kNvgHvTfgz&_nc_zt=23&_nc_ht=scontent.faep8-2.fna&_nc_gid=AVIa44ZP_NRsr6kIglGeCIw&oh=00_AYAyfWhAEsOBokW0HztDb1qMrXzGcUCgyFx_XCdiDZihVg&oe=6735FCA0",
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: "Aqui ta Arif"
      });
})

const subscribed = () => {
    Swal.fire({
        title: "¡Enhorabuena!",
        text: "Te has suscrito con éxito a este plan.",
        icon: "success"
      });
}