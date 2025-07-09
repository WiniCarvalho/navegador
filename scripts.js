function irParaUrl() {
    const url = document.getElementById('url').value;
    if (url) {
        const prefixedUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `http://${url}`;
        window.location.href = prefixedUrl;
    } else {
        alert('Por favor, insira uma URL válida.');
    }
}

function pesquisar() {
    const query = document.getElementById('pesquisa').value;
    if (query) {
        
        const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        
        
        window.location.href = url;
    } else {
        alert('Por favor, insira um termo de pesquisa.');
    }
}

function voltar() { 
    window.history.back();
}

function avancar() {
    window.history.forward();
}

function recarregar() {
    window.location.reload();
}
document.getElementById('pesquisa').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // impede envio automático de formulário, se existir
        pesquisar();
    }
});


