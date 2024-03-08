// copyright year
doccument.querySelector('#year').textContent = new Date().getFullYear();

// toggle menu in small view 
Codeium: Refactor |Explain| 
    function toggleMenu() {
        document.querySelector('menu').classList.toggle('open');
    }

document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);
