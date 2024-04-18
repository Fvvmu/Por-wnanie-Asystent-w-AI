// Funkcja do pobierania danych z tabeli
function pobierzDaneZTabeli(tabelaId) {
    // ... (bez zmian)
}

// Funkcja do wyświetlania danych w tabeli
function wyswietlDaneWTabeli(tabelaId, dane) {
    // ... (bez zmian)
}

// Funkcja do dodawania nowego wiersza do tabeli (nieużywana)
// ... (funkcja dodajWiersz bez zmian)

// Funkcja do usuwania wiersza z tabeli
function usunWiersz(wiersz) {
    wiersz.parentNode.removeChild(wiersz);
}

// Obsługa formularza dodawania (nieużywana)
// ... (funkcja formularzDodawania bez zmian)

// Przykładowe dane
const daneCykliczne = [
    { nazwa: 'Abonament telefoniczny', kwota: 50, data: '2024-04-01', typ: 'cykliczne' },
    { nazwa: 'Ubezpieczenie mieszkania', kwota: 200, data: '2024-05-01', typ: 'cykliczne' }
];

const danePojedyncze = [
    { nazwa: 'Zakupy spożywcze', kwota: 150, data: '2024-03-20', typ: 'pojedyncze' },
    { nazwa: 'Rachunek za prąd', kwota: 120, data: '2024-02-15', typ: 'pojedyncze' }
];

// Funkcja inicjalizująca aplikację
function inicjalizacja() {
    // Wyświetl początkowe dane w tabelach
    wyswietlDaneWTabeli('przelewyCykliczne', daneCykliczne);
    wyswietlDaneWTabeli('przelewyPojedyncze', danePojedyncze);

    // Dodaj obsługę przycisku dodawania (tutaj dodajesz funkcjonalność)

    // Dodaj obsługę błędów (opcjonalnie)

    // Dodaj formatowanie daty (opcjonalnie)

    // Dodaj dodatkowe funkcje (opcjonalnie)
}

// Wywołaj funkcję inicjalizującą po załadowaniu strony
window.addEventListener('load', inicjalizacja);
