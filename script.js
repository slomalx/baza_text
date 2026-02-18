const textarea = document.getElementById('textarea');
const lite = document.getElementById('lite_button');
const medium = document.getElementById('medium_button');
const goida = document.getElementById('goida_button');
const baza = document.getElementById('baza_button');
const check = document.querySelector('.check_tarif')


let selectedMode = null;


function setActiveMode(mode) {

    lite.classList.remove('active');
    medium.classList.remove('active');
    goida.classList.remove('active');


    if (mode === 'lite') {
        lite.classList.add('active');
    } else if (mode === 'medium') {
        medium.classList.add('active');
    } else if (mode === 'goida') {
        goida.classList.add('active'); 
    }
}


lite.addEventListener('click', () => {
    selectedMode = 'lite';
    setActiveMode('lite');
    check.textContent = 'Выбрана ЛАЙТ БАZА'
});

medium.addEventListener('click', () => {
    selectedMode = 'medium';
    setActiveMode('medium');
    check.textContent = 'Выбрана МЕДИУМ БАZА'
});

goida.addEventListener('click', () => {
    selectedMode = 'goida';
    setActiveMode('goida');
    check.textContent = 'Выбрана ГОЙДА БАZА'
});


function replaceLite(text) {
    return text
        .replace(/з/g, 'z')
        .replace(/З/g, 'Z');
}

function replaceMedium(text) {
    return text
        .replace(/з/g, 'z')
        .replace(/З/g, 'Z')
        .replace(/в/g, 'v')
        .replace(/В/g, 'V');
}


function replaceGoida(text) {
    return text
        .replace(/з/g, 'Z')
        .replace(/З/g, 'Z')
        .replace(/в/g, 'V')
        .replace(/В/g, 'V')
        .replace(/о/g, 'O')
        .replace(/с/g, 'Z')
        .replace(/С/g, 'Z');
}


baza.addEventListener('click', function() {

    const originalText = textarea.value;
    let bazedText = originalText;
    
    if (!selectedMode) {
        alert('Выберите баZOVость');
        return;
    }
    
    if (selectedMode === 'lite') {
        bazedText = replaceLite(originalText);
    } else if (selectedMode === 'medium') {
        bazedText = replaceMedium(originalText);
    } else if (selectedMode === 'goida') {
        bazedText = replaceGoida(originalText);
    }

    textarea.value = bazedText;
    

});