const nav = document.getElementById("nav");
window.addEventListener("scroll", () =>
  nav.classList.toggle("scrolled", window.scrollY > 60),
);
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        obs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));

/**/
 const menuToggle = document.getElementById('menuToggle');
    const navbar = document.getElementById("nav");
    const overlay = document.getElementById('overlay');

    menuToggle.addEventListener('click', function() {
      navbar.classList.toggle('open');
      overlay.classList.toggle('show');
      menuToggle.classList.toggle('active');
    });

    overlay.addEventListener('click', function() {
      navbar.classList.remove('open');
      overlay.classList.remove('show');
      menuToggle.classList.remove('active');
    });
    /*
    // Ajoute à chaque lien du menu
document.querySelectorAll('.nav ul li a').forEach(link => {
  link.addEventListener('click', function() {
    navbar.classList.remove('open');
    overlay.classList.remove('show');
    menuToggle.classList.remove('active');
  });
  // localisation//
  const mapFrame = document.getElementById("mapFrame");
  const openMapBtn = document.getElementById("openMapBtn");

  // Affiche un message quand la carte est chargée
  mapFrame.addEventListener("load", () => {
    console.log("Carte Google Maps chargée !");
    alert("La carte est prête !");
  });

  // Bouton pour ouvrir la carte dans un nouvel onglet
  openMapBtn.addEventListener("click", () => {
    window.open(
      "https://www.google.com/maps/place/6.098765432109876,1.2345678901234567",
      "_blank"
    );
  });
});
  /**/