document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.carousel-item');

    // Adicionar animação de destaque nas promoções
    items.forEach((item, index) => {
        if (index === 0) { // Destaque o primeiro item como uma promoção
            setTimeout(() => {
                item.classList.add('promocao');
            }, 2000); // Destaca após 2 segundos
        }
    });
});
// carrega carrinho
let itemCount = 0;

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('carrinho')) || [];
    itemCount = cart.length;
    document.getElementById('itemCount').innerText = itemCount;
}

function addToCart(itemName, price) {
    let cart = JSON.parse(localStorage.getItem('carrinho')) || [];
    cart.push({ servico: itemName, preco: price });
    localStorage.setItem('carrinho', JSON.stringify(cart));
    
    updateCartCount(); // Atualiza o contador após adicionar o item
    alert(itemName + ' foi adicionado ao carrinho!');
}

function viewCart() {
    window.location.href = 'carrinho.html'; // Redireciona para a página de carrinho
}

// Atualiza o número de itens no carrinho ao carregar a página
window.onload = function() {
    updateCartCount();
};
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Recupera os dados do localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Login realizado com sucesso!');
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('currentUser', username);
        window.location.href = 'inicio.html'; // Redireciona após login
    } else {
        alert('Nome de usuário ou senha incorretos.');
    }
    return false;
}
