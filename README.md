# PS 1 - 13.11.2021

Przed przystąpieniem do popniższysz zadań upewnij się, że masz zainstalowane:
- NodeJS w wersji 14.0.0 lub wyższej
- npm w wersji 5.6 lub wyższej
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

Jednym z filarów aplikacji pisanych w ReactJS jest reużywalność. Reużywać możemy nie tylko komponenty ale również style (np. za pomocą zmiennych). Aby robić to w przyjemniejszy sposób doinstalujmy preprocesor SASS który będzie "dopingiem" dla CSS'a. Krótką wzmiankę o samym SASSI'e możesz przeczytać np. tu - https://ui2web.com/baza-wiedzy/co-to-jest-sass (znajduje się tutaj przykład który może Ci pomóc w poniższym zadaniu).

Instalacja: Postępuj zgodnie z oficjalną instrukcją od create-react-app - https://create-react-app.dev/docs/adding-a-sass-stylesheet/ 

Po zainstalowaniu sprawdź czy wszystko działa zgodnie z oczekiwaniami, zmień zatem nazwę pliku App.css na **App.scss** oraz popraw import w 2-giej linii pliku App.js. Po tych zmianach aplikacja powinna działać jak poprzednio.

Jedną funkcji którą daje nam SASS jest łatwe tworzenie i reużywnie zmiennych. Utwórz zatem na górze pliku App.scss zmienną odpowiadającą za kolor np. "$red-color: red;" i użyj ją w dwóch miejscach zastępując aktualne kolory w klasach ".App-header" oraz ".App-link". Upewnij się w przeglądarce czy wprowadzone zmiany działają poprawnie. 

## Zadanie 7 - CSS Modules stylesheet - integracja

- Każdy tworzony komponent powinien być możliwie jak najbardziej reużywalny oraz modularny, dotyczy to również stylowania. Aby traktować style każdego komponentu jako oddzielne "moduły" w parze z komponentami zastosujmy konwencję CSS Modules stylesheet. To proste rozwiązanie które umożliwi nam min. stosowanie takich samych nazw klas pochodzących z różnych źródeł w jednym komponencie. 

Postępuj zgodnie z instrukcją: https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/ i zastosuj zmiany w pliku App.js oraz powiązanym plikiem ze stylami.

W rezultacie powinieneś zmodyfikować nazwę pliku ze stylami oraz sposób importowania tego pliku.

## Zadanie 8 - Nowy komponent (klasowy)

W końcu czas utworzyć nowy komponent !!

- w folderze "src" utwórz nowy folder "components", będzie to miejsce w którym będziemy trzymać wszystkie komponenty aplikacji. Utworzenie takiego folderu nie jest konieczne (pliki mogą znajdować się w dowolnym miejscu), ale dobra praktyka wymaga trzymanie tego w miejscu uporządkowanym

Celem tego zadanie jest stworzenie nowego komponentu (klasowego), który będzie robił dokładnie to samo, co komponent App.js (nowy komponent będzie wyświetlał dokładnie tą samą zawartość).

Aby to zrobić powinieneś:
- w folderze components utwórz folder o takie samej nazwie jaką będzie miał nowy komponent (./src/components/NazwaTwojegoKomponentu)
- folder ten powinen zawierać 2 pliki NazwaTwojegoKomponentu.js oraz NazwaTwojegoKomponentu.modules.scss
- plik NazwaTwojegoKomponentu.js powinien odwzorowywać plik App.js w formie komponentu klasowego
- NazwaTwojegoKomponentu.modules.scss - na ten moment do tego pliku skopiuj style z App.modules.scss
- wyświetl zawartość Twojego komponentu na ekranie (dodaj wywołanie nowo utworzonego komponentu w pliku index.js pod wywołaniem <App />)
- sprawdź wynik w przeglądarce

## Zadanie 9 - Kompozycja (uporządkowanie głównego komponentu aplikacji App.js)

Celem tego zadania jest lekkie uporządkowanie kodu (im wcześniej dbamy o jakość tym łatwiej potem wprowadza się nowe zmiany). Aktualnie, jak możemy zauważyć w naszym głównym pliku (index.js) renderujemy dwa komponenty (App oraz NazwaTwojegoKomponentu). Docelowo chcielibyśmy aby ten plik renderował tylko nasz głowny komponent, czyli App.js

W ramach tego zadania powinieneś:
- utworzyć nowy folder w src/components/NazwaTwojegoKomponentu2
- przenieść do tego komponentu to co aktualnie znajduje się w App.js
- komponent App.js powinien jedynie renderować (wyświetlać) komponenty NazwaTwojegoKomponentu oraz NazwaTwojegoKomponentu2 (pqtrz pseudokod poniżej)

```
function App() {
  return (
    <>
      < NazwaTwojegoKomponentu />
      < NazwaTwojegoKomponentu2 />
    </>
  );
} 
```

- główny plik index.js powinien renderować jedynie komponent App.js jak na samym początku

```
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

## Zadanie 10 - Dodanie właściwości (props) do komponentów.

Zmodyfikuj komponenty NazwaTwojegoKomponentu oraz NazwaTwojegoKomponentu2 w taki sposób, aby wyświetlały teksty wewnątrz paragrafu < p> oraz linku < a> z właściwości (propsów) zamiast bezposrednio z funkcji render.

## Zadanie 11 - Dodanie nowych styli - wyświetl komponenty obok siebie

Jeżeli nie modyfikowałeś w znaczącym stopniu styli to na aktualnym etapie komponenty wyrenderowane są jeden pod drugim. W ramach tego zadania wyświetlmy je obok siebie. Jeżeli czujesz się na siłach spróbuj zrobić to samemu, w przciwnym wypadku postępuj zgodnie z poniższymi instrukcjami:

Wyświetlane komponenty potrzebują rodzica, który będzie miał możliwość posiadania styli. Aktualnie komponenty opakowuje React.Fragment <> który takiej możliwości nie ma, zatem:
-zastąp go znacznikiem < div>
-do znacznika div dodaj właściwość classNames={styles.appWrapper}
- w pliku ze stylami tj. Add.modules.scss dodaj poniższy kod: 
	.appWrapper {
		display: 'flex
	}



## Praca domowa

https://css-tricks.com/difference-between-types-of-css-variables/
