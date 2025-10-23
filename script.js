// Tombol toggle tema
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;


function loadTheme(){
const saved = localStorage.getItem('theme');
if(saved === 'dark') document.documentElement.setAttribute('data-theme','dark');
}


themeToggle?.addEventListener('click', ()=>{
const current = document.documentElement.getAttribute('data-theme');
const next = current === 'dark' ? '' : 'dark';
if(next) document.documentElement.setAttribute('data-theme', next);
else document.documentElement.removeAttribute('data-theme');
localStorage.setItem('theme', next || 'light');
});


loadTheme();


=== assets/README.txt ===
Letakkan foto profil di `assets/profile.jpg`. Ganti file ini dengan foto Rayhan (format JPG/PNG).
