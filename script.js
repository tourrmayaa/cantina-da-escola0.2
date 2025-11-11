document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // 1. Verificar e aplicar o tema salvo no localStorage
    // 'localStorage' permite salvar dados pequenos no navegador do usuário
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        // Atualiza o texto do botão com base no tema salvo
        themeToggleBtn.textContent = currentTheme === 'dark-mode' ? '☀️ Modo Claro' : '🌙 Modo Escuro';
    } else {
        // Se não houver tema salvo, define o padrão como Modo Claro
        localStorage.setItem('theme', 'light-mode');
        themeToggleBtn.textContent = '🌙 Modo Escuro';
    }

    // 2. Adicionar o evento de clique ao botão
    themeToggleBtn.addEventListener('click', () => {
        // Verifica se o corpo (body) tem a classe 'dark-mode'
        if (body.classList.contains('dark-mode')) {
            // Se estiver escuro, muda para claro
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
            themeToggleBtn.textContent = '🌙 Modo Escuro';
        } else {
            // Se estiver claro, muda para escuro
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            themeToggleBtn.textContent = '☀️ Modo Claro';
        }
    });
});