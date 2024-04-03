/**
 * Oppgave 1:
 * Jeg ønsker å dele små deler av artikler på min Twitter, men da behøver jeg teksten splittet opp i kortere deler. Du har et tekstutdrag av ubetydelig lengde ord, av typen streng.

 * Lag en funksjon som tar inn tekstutdraget og deler det opp i mindre utklipp, hver med en lengde på nærmest 140 tegn. Returner disse utklippene som et string array.

 * Funksjonskrav:

 * Funksjonen skal akseptere et tekstutdrag som en streng.
 * Den skal dele teksten opp i utklipp på nærmest 140 tegn, inkludert ord og mellomrom.
 * Returner utklippene som et string array, hvor hvert element representerer et utklipp av teksten.
 * Det siste utklippet kan være kortere enn 140 tegn dersom teksten ikke har nok gjenværende tegn.
 * 
 * Eksempel:
 * 
 * const tekstutdrag = "Dette er et eksempeltekstutdrag som skal deles opp i mindre utklipp for Twitter. Hver del skal være nærmest 140 tegn lang.";
 * const utklipp = splitArticleIntoChunks(tekstutdrag);
 * "utklipp" kan være ["Dette er et eksempeltekstutdrag som skal deles opp i mindre utklipp", "for Twitter. Hver del skal være nærmest 140 tegn lang."]
 */

const text =
  "– Dette er uakseptabel bruk av medlemmenes penger. Å bruke millioner på jakt og sjøfly er definitivt ikke innafor. Vi er og skal være svært bevisste på hvordan vi bruker medlemmenes penger og hvordan vi opptrer på vegne av norske bedrifter, sier Ole Erik Almlid, administrerende direktør i NHO til E24 i en uttalelse. – NHO og NHOs 18 landsforeninger lever av tillit, sier Almlid. I går fortalte E24 hvordan gjester av Norsk Industri ble fløyet ut og inn med sjøfly til jakteiendommen for 1,3 millioner kroner mellom 2019 og 2023. Mangeårig direktør Stein Lier-Hansen brukte også området til jakt med familie og venner.";

export const splitArticleIntoChunks = (text: string): string[] => {
  const chunks: string[] = [];
  let currentChunk = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (currentChunk.length + char.length <= 140 || char === " ") {
      currentChunk += char;
      if (char === " " || i === text.length - 1) {
        chunks.push(currentChunk.trim());
        currentChunk = "";
      }
    } else {
      chunks.push(currentChunk.trim());
      currentChunk = char;
    }
  }

  return chunks;
};

const textChunks = splitArticleIntoChunks(text);

/**
 * Oppgave 2:
 *
 * Gitt en streng, ønsker jeg å få informasjon om ordfrekvensen i teksten. Lag en funksjon som tar inn en tekststreng og returnerer ordfrekvensen i et ønsket dataformat.
 *
 * Funksjonskrav:
 *
 * Funksjonen skal akseptere en tekststreng som input.
 * Den skal analysere teksten og generere en ordfrekvens, der hvert unike ord i teksten representeres som en nøkkel, og verdien er antall forekomster av hvert ord.
 * Returner resultatet i et dataformat etter eget valg.
 * Eksempel:
 * const tekst = "Dette er et eksempeltekst. Eksempeltekst brukes for å illustrere en tekstoppgave.";
 * const ordfrekvens = wordCount(tekst);
 * "ordfrekvens" kan være { "Dette": 1, "er": 1, "et": 2, "eksempeltekst": 2, "brukes": 1, "for": 1, "å": 1, "illustrere": 1, "en": 1, "tekstoppgave": 1 }
 */

export type WordFrequency = {
  [word: string]: number;
};

export const wordCount = (text: string): WordFrequency => {
  if (!text.trim()) {
    return {};
  }

  const wordArray = text.split(" ");

  const wordFrequency: WordFrequency = {};
  wordArray.forEach((word) => {
    const sanitizedWord = word.toLowerCase();
    if (wordFrequency[sanitizedWord]) {
      wordFrequency[sanitizedWord]++;
    } else {
      wordFrequency[sanitizedWord] = 1;
    }
  });

  return wordFrequency;
};
