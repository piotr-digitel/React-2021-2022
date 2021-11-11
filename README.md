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

## Zadanie 4 - wprowadzenie i obserwacja przykładowych zmian

- Jeżeli jeszcze tego nie zrobiłeś zmodyfikuj plik src/App.js i sprawdź czy dokonane zmiany po zapisaniu są widoczne w przeglądarce (utworzona przez create-rect-app aplikacja posiada moduł hot-reload odpowiadający za nasłuchiwannie i samoczynne odświeżanie aplikacji po dokonanych zmianach, jest to bardzo pomocne narzędzie które z pewnością docenisz. W ramach tego zadania możesz np. zmomdyfikować dowolny tekst / usunąć lub dodać nowy paragraf < p >

- React to nie tylko JS, zwróć uwagę na klasy które zostały dodane do poszczególnych elementów w komponencie App.js (klasy dodajemy za pomocą właściwości "className"), odpowiadają one za otoczkę wizualną renderowanych elementow (CSS). Komponent App.js w 2-giej linii importuje powiazane klasy z pliku App.css, zlokalizuj tam wspomniane style, zmodyfikuj np. kolor tła / rozmiar czcionki, czy wysokość logo i sprawdź wyniki w przeglądarce.

## Zadanie 4 - wprowadzenie i obserwacja przykładowych zmian -JS

- Jeżeli jeszcze tego nie zrobiłeś zmodyfikuj plik src/App.js i sprawdź czy dokonane zmiany po zapisaniu są widoczne w przeglądarce (utworzona przez create-rect-app aplikacja posiada moduł hot-reload odpowiadający za nasłuchiwannie i samoczynne odświeżanie aplikacji po dokonanych zmianach, jest to bardzo pomocne narzędzie które z pewnością docenisz. W ramach tego zadania możesz np. zmomdyfikować dowolny tekst / usunąć lub dodać nowy paragraf < p > 
	
## Zadanie 5 - wprowadzenie i obserwacja przykładowych zmian - style CSS

- React to nie tylko JS, zwróć uwagę na klasy które zostały dodane do poszczególnych elementów w komponencie App.js (klasy dodajemy za pomocą właściwości "className"), odpowiadają one za otoczkę wizualną renderowanych elementow (CSS). Komponent App.js w 2-giej linii importuje powiazane klasy z pliku App.css, zlokalizuj tam wspomniane style, zmodyfikuj np. kolor tła / rozmiar czcionki, czy wysokość logo i sprawdź wyniki w przeglądarce.

## Zadanie 6 - preprocesor SASS - instalacja i przykład użycia

Jednym z motywów przewodnich aplikacji pisanych w ReactJS jest reużywalność. Reużywać możemy nie tylko komponenty ale również style (np. za pomocą zmiennych). Aby robić to w przyjemniejszy sposób doinstalujmy preprocesor SASS który będzie niejako "dopingiem" dla CSS'a. Krótką wzmiankę o samym SASSI'e możesz przeczytać np. tu - https://ui2web.com/baza-wiedzy/co-to-jest-sass (znajduje się tutaj przykład który może Ci pomóc w poniższym zadaniu).

Instalacja: Postępuj zgodnie z oficjalną instrukcją od create-react-app - https://create-react-app.dev/docs/adding-a-sass-stylesheet/ 

Po zainstalowaniu sprawdź czy wszystko działa zgodnie z oczekiwaniami, zmień zatem nazwę pliku App.css na **App.scss** oraz popraw import w 2-giej linii pliku App.js. Po tych zmianach aplikacja powinna działać jak poprzednio.

Jedną funkcji którą daje nam SASS jest łatwe tworzenie i reużywnie zmiennych. Utwórz zatem na górze pliku App.scss zmienną odpowiadającą za kolor np. "$red-color: red;" i użyj ją w dwóch miejscach zastępując aktualne kolory w klasach ".App-header" oraz ".App-link". Upewnij się w przeglądarce czy wprowadzone zmiany działają poprawnie. 


## Zadanie 6 - instalacja  - style CSS

- React to nie tylko JS, zwróć uwagę na klasy które zostały dodane do poszczególnych elementów w komponencie App.js (klasy dodajemy za pomocą właściwości "className"), odpowiadają one za otoczkę wizualną renderowanych elementow (CSS). Komponent App.js w 2-giej linii importuje powiazane klasy z pliku App.css, zlokalizuj tam wspomniane style, zmodyfikuj np. kolor tła / rozmiar czcionki, czy wysokość logo i sprawdź wyniki w przeglądarce.


## Create files and folders

The file explorer is accessible using the button in left corner of the navigation bar. You can create a new file by clicking the **New file** button in the file explorer. You can also create folders by clicking the **New folder** button.

## Switch to another file

All your files and folders are presented as a tree in the file explorer. You can switch from one to another by clicking a file in the tree.

## Rename a file

You can rename the current file by clicking the file name in the navigation bar or by clicking the **Rename** button in the file explorer.

## Delete a file

You can delete the current file by clicking the **Remove** button in the file explorer. The file will be moved into the **Trash** folder and automatically deleted after 7 days of inactivity.

## Export a file

You can export the current file by clicking **Export to disk** in the menu. You can choose to export the file as plain Markdown, as HTML using a Handlebars template or as a PDF.


# Synchronization

Synchronization is one of the biggest features of StackEdit. It enables you to synchronize any file in your workspace with other files stored in your **Google Drive**, your **Dropbox** and your **GitHub** accounts. This allows you to keep writing on other devices, collaborate with people you share the file with, integrate easily into your workflow... The synchronization mechanism takes place every minute in the background, downloading, merging, and uploading file modifications.

There are two types of synchronization and they can complement each other:

- The workspace synchronization will sync all your files, folders and settings automatically. This will allow you to fetch your workspace on any other device.
	> To start syncing your workspace, just sign in with Google in the menu.

- The file synchronization will keep one file of the workspace synced with one or multiple files in **Google Drive**, **Dropbox** or **GitHub**.
	> Before starting to sync files, you must link an account in the **Synchronize** sub-menu.

## Open a file

You can open a file from **Google Drive**, **Dropbox** or **GitHub** by opening the **Synchronize** sub-menu and clicking **Open from**. Once opened in the workspace, any modification in the file will be automatically synced.

## Save a file

You can save any file of the workspace to **Google Drive**, **Dropbox** or **GitHub** by opening the **Synchronize** sub-menu and clicking **Save on**. Even if a file in the workspace is already synced, you can save it to another location. StackEdit can sync one file with multiple locations and accounts.

## Synchronize a file

Once your file is linked to a synchronized location, StackEdit will periodically synchronize it by downloading/uploading any modification. A merge will be performed if necessary and conflicts will be resolved.

If you just have modified your file and you want to force syncing, click the **Synchronize now** button in the navigation bar.

> **Note:** The **Synchronize now** button is disabled if you have no file to synchronize.

## Manage file synchronization

Since one file can be synced with multiple locations, you can list and manage synchronized locations by clicking **File synchronization** in the **Synchronize** sub-menu. This allows you to list and remove synchronized locations that are linked to your file.


# Publication

Publishing in StackEdit makes it simple for you to publish online your files. Once you're happy with a file, you can publish it to different hosting platforms like **Blogger**, **Dropbox**, **Gist**, **GitHub**, **Google Drive**, **WordPress** and **Zendesk**. With [Handlebars templates](http://handlebarsjs.com/), you have full control over what you export.

> Before starting to publish, you must link an account in the **Publish** sub-menu.

## Publish a File

You can publish your file by opening the **Publish** sub-menu and by clicking **Publish to**. For some locations, you can choose between the following formats:

- Markdown: publish the Markdown text on a website that can interpret it (**GitHub** for instance),
- HTML: publish the file converted to HTML via a Handlebars template (on a blog for example).

## Update a publication

After publishing, StackEdit keeps your file linked to that publication which makes it easy for you to re-publish it. Once you have modified your file and you want to update your publication, click on the **Publish now** button in the navigation bar.

> **Note:** The **Publish now** button is disabled if your file has not been published yet.

## Manage file publication

Since one file can be published to multiple locations, you can list and manage publish locations by clicking **File publication** in the **Publish** sub-menu. This allows you to list and remove publication locations that are linked to your file.


# Markdown extensions

StackEdit extends the standard Markdown syntax by adding extra **Markdown extensions**, providing you with some nice features.

> **ProTip:** You can disable any **Markdown extension** in the **File properties** dialog.


## SmartyPants

SmartyPants converts ASCII punctuation characters into "smart" typographic punctuation HTML entities. For example:

|                |ASCII                          |HTML                         |
|----------------|-------------------------------|-----------------------------|
|Single backticks|`'Isn't this fun?'`            |'Isn't this fun?'            |
|Quotes          |`"Isn't this fun?"`            |"Isn't this fun?"            |
|Dashes          |`-- is en-dash, --- is em-dash`|-- is en-dash, --- is em-dash|


## KaTeX

You can render LaTeX mathematical expressions using [KaTeX](https://khan.github.io/KaTeX/):

The *Gamma function* satisfying $\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$ is via the Euler integral

$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

> You can find more information about **LaTeX** mathematical expressions [here](http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference).


## UML diagrams

You can render UML diagrams using [Mermaid](https://mermaidjs.github.io/). For example, this will produce a sequence diagram:

```mermaid
sequenceDiagram
Alice ->> Bob: Hello Bob, how are you?
Bob-->>John: How about you John?
Bob--x Alice: I am good thanks!
Bob-x John: I am good thanks!
Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

Bob-->Alice: Checking with John...
Alice->John: Yes... John, how are you?
```

And this will produce a flow chart:

```mermaid
graph LR
A[Square Rect] -- Link text --> B((Circle))
A --> C(Round Rect)
B --> D{Rhombus}
C --> D
```
