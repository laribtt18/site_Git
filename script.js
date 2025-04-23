
// Modo escuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Botão do modo escuro
window.addEventListener('DOMContentLoaded', () => {
    const btn = document.createElement('button');
    btn.innerText = '🌓 Modo Escuro';
    btn.style.cssText = 'position:fixed; top:20px; right:20px; z-index:1000; padding:10px; border:none; border-radius:5px; background:#3498db; color:white; cursor:pointer;';
    btn.onclick = toggleDarkMode;
    document.body.appendChild(btn);
});
