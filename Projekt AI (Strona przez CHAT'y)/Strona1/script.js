// Tablice przechowujące opłaty pojedyncze i cykliczne
let pojedynczeOpłaty = [];
let cykliczneOpłaty = [];

// Funkcja do wyświetlania opłat na stronie
function wyświetlOpłaty() {
    const listaPojedynczych = document.getElementById('pojedyncze');
    const listaCyklicznych = document.getElementById('cykliczne');

    // Wyczyszczenie list przed ponownym wyświetleniem
    listaPojedynczych.innerHTML = '';
    listaCyklicznych.innerHTML = '';

    // Wyświetlenie opłat pojedynczych
    pojedynczeOpłaty.forEach((opłata, index) => {
        const li = document.createElement('li');
        li.textContent = opłata.nazwa + ' - ' + opłata.kwota + ' zł';
        const btn = document.createElement('button');
        btn.textContent = 'Usuń';
        btn.addEventListener('click', () => {
            pojedynczeOpłaty.splice(index, 1);
            wyświetlOpłaty();
        });
        li.appendChild(btn);
        listaPojedynczych.appendChild(li);
    });

    // Wyświetlenie opłat cyklicznych
    cykliczneOpłaty.forEach((opłata, index) => {
        const li = document.createElement('li');
        li.textContent = opłata.nazwa + ' - ' + opłata.kwota + ' zł (Cykliczna)';
        const btn = document.createElement('button');
        btn.textContent = 'Usuń';
        btn.addEventListener('click', () => {
            cykliczneOpłaty.splice(index, 1);
            wyświetlOpłaty();
        });
        li.appendChild(btn);
        listaCyklicznych.appendChild(li);
    });

    // Wyświetlenie powiadomienia o najbliższej opłacie
    wyświetlPowiadomienie();
}

// Funkcja do wyświetlania powiadomienia
function wyświetlPowiadomienie() {
    // Znalezienie najbliższej opłaty
    let najbliższaOpłata = null;
    let najbliższaData = new Date('9999-12-31'); // Ustawienie początkowej daty na bardzo odległą przyszłość

    cykliczneOpłaty.forEach(opłata => {
        const dataOpłaty = new Date(opłata.data); // Załóżmy, że każda opłata cykliczna ma określoną datę
        if (dataOpłaty > new Date() && dataOpłaty < najbliższaData) {
            najbliższaData = dataOpłaty;
            najbliższaOpłata = opłata;
        }
    });

    // Jeśli nie ma opłat w przyszłości, wyjdź z funkcji
    if (!najbliższaOpłata) return;

    // Wyświetlenie powiadomienia
    alert(`Najbliższa opłata: ${najbliższaOpłata.nazwa} - ${najbliższaOpłata.kwota} zł. Termin płatności: ${najbliższaData.toLocaleDateString()}`);
}

// Funkcja obsługująca dodawanie opłat
function dodajOpłatę() {
    const nazwa = document.getElementById('nazwa').value;
    const kwota = document.getElementById('kwota').value;
    const data = document.getElementById('data').value;
    const cykliczna = document.getElementById('cykliczny').checked;

    if (nazwa && kwota && data) {
        const opłata = { nazwa: nazwa, kwota: kwota, data: data };
        if (cykliczna) {
            cykliczneOpłaty.push(opłata);
        } else {
            pojedynczeOpłaty.push(opłata);
        }
        wyświetlOpłaty();
        // Wyczyszczenie pól formularza po dodaniu opłaty
        document.getElementById('nazwa').value = '';
        document.getElementById('kwota').value = '';
        document.getElementById('data').value = '';
        document.getElementById('cykliczny').checked = false;
    } else {
        alert('Proszę wypełnić wszystkie pola formularza.');
    }
}

// Event listener dla formularza
document.getElementById('formularz').addEventListener('submit', function(event) {
    event.preventDefault();
    dodajOpłatę();
});
