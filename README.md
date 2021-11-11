# PS 1 - 13.11.2021

Przed przystąpieniem do popniższysz zadań upewnij się, że masz zainstalowane:
- NodeJS w wersji 14.0.0 lub wyższej
- npm w wersji 5.6 lub wyższej
- skonfigurowanego GIT'a
- Visual Studio Code
- Przeglądarkę Chrome - (doinstaluj rozszerzenie React Developer Tools) - https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi 

## Zadanie 1 - utworzenie aplikacji

- utwórz folder w którym będzie się znajdować twój projekt
- z poziomu konsoli / terminala wejdź do nowo utworzonego folderu i za pomocą narzędzia create-react-app stwórz nową aplikację - https://reactjs.org/docs/create-a-new-react-app.html#create-react-app
- wejdź do folderu z aplikacją / odpal ją za pomocą komendy npm start i upewnij się że wyświetliła się ona w przeglądarce

## Zadanie 2 - analiza plików

- prześledź w edytorze kodu pliki które zostały wygenerowane (pomijająć na razie folder node modules) - postaraj się zrozumieć za co odpowiadają (omówienie plików z prowadzącym)


## Zadanie 3 - integracja z dodatkiem "React Developer Tools"

Upewnij się że zainstalowanny wcześniej dodatek "React Developer Tools" działa poprawnie. 

W tym celu zbadaj w przeglądarce stronę aplikacji (F12), w zakładkach DevTools powinna się pojawić pozycja "Components", po jej kliknięciu wyświetlone zostanie drzewo komponentów, aktualnie posiadamy jedynie główny komponent App. 

## Zadanie 4 - wprowadzenie i obserwacja przykładowych zmian -JS

- Jeżeli jeszcze tego nie zrobiłeś zmodyfikuj plik src/App.js i sprawdź czy dokonane zmiany po zapisaniu są widoczne w przeglądarce (utworzona przez create-rect-app aplikacja posiada moduł hot-reload odpowiadający za nasłuchiwannie i samoczynne odświeżanie aplikacji po dokonanych zmianach, jest to bardzo pomocne narzędzie które z pewnością docenisz. W ramach tego zadania możesz np. zmomdyfikować dowolny tekst / usunąć lub dodać nowy paragraf < p > 
	
## Zadanie 5 - wprowadzenie i obserwacja przykładowych zmian - style CSS

- React to nie tylko JS, zwróć uwagę na klasy które zostały dodane do poszczególnych elementów w komponencie App.js (klasy dodajemy za pomocą właściwości "className"), odpowiadają one za otoczkę wizualną renderowanych elementow (CSS). Komponent App.js w 2-giej linii importuje powiazane klasy z pliku App.css, zlokalizuj tam wspomniane style, zmodyfikuj np. kolor tła / rozmiar czcionki, czy wysokość logo i sprawdź wyniki w przeglądarce.

## Zadanie 6 - preprocesor SASS - instalacja i przykład użycia

Jednym z motywów przewodnich aplikacji pisanych w ReactJS jest reużywalność. Reużywać możemy nie tylko komponenty ale również style (np. za pomocą zmiennych). Aby robić to w przyjemniejszy sposób doinstalujmy preprocesor SASS który będzie niejako "dopingiem" dla CSS'a. Krótką wzmiankę o samym SASSI'e możesz przeczytać np. tu - https://ui2web.com/baza-wiedzy/co-to-jest-sass (znajduje się tutaj przykład który może Ci pomóc w poniższym zadaniu).

Instalacja: Postępuj zgodnie z oficjalną instrukcją od create-react-app - https://create-react-app.dev/docs/adding-a-sass-stylesheet/ 

Po zainstalowaniu sprawdź czy wszystko działa zgodnie z oczekiwaniami, zmień zatem nazwę pliku App.css na **App.scss** oraz popraw import w 2-giej linii pliku App.js. Po tych zmianach aplikacja powinna działać jak poprzednio.

Jedną funkcji którą daje nam SASS jest łatwe tworzenie i reużywnie zmiennych. Utwórz zatem na górze pliku App.scss zmienną odpowiadającą za kolor np. "$red-color: red;" i użyj ją w dwóch miejscach zastępując aktualne kolory w klasach ".App-header" oraz ".App-link". Upewnij się w przeglądarce czy wprowadzone zmiany działają poprawnie. 

## Zadanie 7 - CSS Mdules - instalacja ?

- React to nie tylko JS, zwróć uwagę na klasy które zostały dodane do poszczególnych elementów w komponencie App.js (klasy dodajemy za pomocą właściwości "className"), odpowiadają one za otoczkę wizualną renderowanych elementow (CSS). Komponent App.js w 2-giej linii importuje powiazane klasy z pliku App.css, zlokalizuj tam wspomniane style, zmodyfikuj np. kolor tła / rozmiar czcionki, czy wysokość logo i sprawdź wyniki w przeglądarce.


## Zadanie 6 - instalacja  - style CSS

- React to nie tylko JS, zwróć uwagę na klasy które zostały dodane do poszczególnych elementów w komponencie App.js (klasy dodajemy za pomocą właściwości "className"), odpowiadają one za otoczkę wizualną renderowanych elementow (CSS). Komponent App.js w 2-giej linii importuje powiazane klasy z pliku App.css, zlokalizuj tam wspomniane style, zmodyfikuj np. kolor tła / rozmiar czcionki, czy wysokość logo i sprawdź wyniki w przeglądarce.


## Create files and folders

The file explorer is accessible using the button in left corner of the navigation bar. You can create a new file by clicking the **New file** button in the file explorer. You can also create folders by clicking the **New folder** button.

## Switch to another file

All your files and folders are presented as a tree in the file explorer. You can switch from one to another by clicking a file in the tree.

## Praca domowa

https://css-tricks.com/difference-between-types-of-css-variables/
