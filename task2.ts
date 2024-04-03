/**
 * Oppgave 2:
 * 
 * Du skal lage en funksjon som tar en tekst av vilkårlig lengde og et tall som input.
 * Funksjonen skal returnere en liste med tekster, hvor lengden på hver tekst ikke overskrider tallet du får som input.
 * 
 */

const text =
  "– Dette er uakseptabel bruk av medlemmenes penger. Å bruke millioner på jakt og sjøfly er definitivt ikke innafor. Vi er og skal være svært bevisste på hvordan vi bruker medlemmenes penger og hvordan vi opptrer på vegne av norske bedrifter, sier Ole Erik Almlid, administrerende direktør i NHO til E24 i en uttalelse. – NHO og NHOs 18 landsforeninger lever av tillit, sier Almlid. I går fortalte E24 hvordan gjester av Norsk Industri ble fløyet ut og inn med sjøfly til jakteiendommen for 1,3 millioner kroner mellom 2019 og 2023. Mangeårig direktør Stein Lier-Hansen brukte også området til jakt med familie og venner.";

splitArticleIntoChunks(text, 30);
