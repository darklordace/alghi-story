import { p as patchBrowser, g as globals, b as bootstrapLazy } from './chunk-e4c3f803.js';

patchBrowser().then(resourcesUrl => {
  globals();
  return bootstrapLazy([["breaking-news",[[1,"breaking-news",{"newsCount":[2,"news-count"],"countryId":[1,"country-id"],"newsList":[32]}]]],["custom-weather",[[1,"custom-weather",{"canGeolocation":[32],"doneGeolocation":[32],"weatherInfo":[32],"weatherForecast":[32]}]]],["numbers-fact",[[1,"numbers-fact",{"mathFactResult":[32],"triviaFactResult":[32],"dateFactResult":[32],"yearFactResult":[32]}]]],["random-quote",[[1,"random-quote",{"startText":[1,"start-text"],"highlightText":[1,"highlight-text"],"endText":[1,"end-text"],"backgroundImg":[32],"content":[32],"author":[32]}]]]], { resourcesUrl });
});
