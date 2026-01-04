const cards = document.querySelectorAll('.home-card');
const popupOverlay = document.getElementById('popupOverlay');
const popupMedia = document.getElementById('popupMedia');
const popupTitle = document.getElementById('popupTitle');
const popupDesc = document.getElementById('popupDesc');
const closePopup = document.getElementById('closePopup');

// tipe bisa: image | video | youtube
const cardMedia = {
  "🎧 Playlist": { 
    type: "image", 
    src: "https://i.pinimg.com/736x/16/83/a9/1683a9505e0b3172a22a542b50060640.jpg"
  },
  "📖 Bookshelf": { 
    type: "image", 
    src: "https://i.pinimg.com/736x/21/6b/ea/216bea5f96770abe7423abd963692080.jpg"
  },
  "🎬 Videos": { 
    type: "video", 
    src: "video/motivasi.mp4"
  },
  "🎞️ Movies": { 
    type: "video", 
    src: "video/arriety.mp4"
  }
};

cards.forEach(card => {
  card.addEventListener('click', e => {
    e.preventDefault();

    const title = card.querySelector('h4').innerText.trim();
    const desc = card.querySelector('p').innerText.trim();
    const media = cardMedia[title];

    popupTitle.innerText = title;
    popupDesc.innerText = desc;
    popupMedia.innerHTML = ""; // kosongkan sebelumnya

    // tampilkan media sesuai tipe
    if (media.type === "video") {
      const video = document.createElement('video');
      video.src = media.src;
      video.controls = true;
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      popupMedia.appendChild(video);
    } 
    else if (media.type === "youtube") {
      const iframe = document.createElement('iframe');
      iframe.src = media.src + "?autoplay=1&mute=1";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      popupMedia.appendChild(iframe);
    } 
    else {
      const img = document.createElement('img');
      img.src = media.src;
      popupMedia.appendChild(img);
    }

    popupOverlay.style.display = 'flex';
  });
});

// tombol X
closePopup.addEventListener('click', () => {
  popupOverlay.style.display = 'none';
  popupMedia.innerHTML = "";
});

// klik luar
popupOverlay.addEventListener('click', e => {
  if (e.target === popupOverlay) {
    popupOverlay.style.display = 'none';
    popupMedia.innerHTML = "";
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const themeToggle = document.getElementById("themeToggle");
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");
  const body = document.body;

  // --- DARK MODE ---
  // cek apakah dark mode tersimpan di localStorage
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
  }

  themeToggle.addEventListener("click", function() {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      themeToggle.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      themeToggle.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  });

  // --- BURGER MENU ---
  burger.addEventListener("click", function() {
    navLinks.classList.toggle("active");
  });

  // --- TUTUP MENU KETIKA KLIK LINK ---
  const navItems = document.querySelectorAll(".nav-links a");
  navItems.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const popup = document.getElementById("welcomeOverlay");
  const closeBtn = document.getElementById("welcomeClose");

  // Tampilkan popup setiap kali halaman dimuat
  popup.style.display = "flex";

  // Tutup popup saat klik tombol
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });
});