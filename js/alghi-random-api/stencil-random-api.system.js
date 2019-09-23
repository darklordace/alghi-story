System.register(['./chunk-3309bb1e.system.js'], function () {
    'use strict';
    var patchBrowser, globals, bootstrapLazy;
    return {
        setters: [function (module) {
                patchBrowser = module.p;
                globals = module.g;
                bootstrapLazy = module.b;
            }],
        execute: function () {
            patchBrowser().then(function (resourcesUrl) {
                globals();
                return bootstrapLazy([["breaking-news.system", [[1, "breaking-news", { "newsCount": [2, "news-count"], "countryId": [1, "country-id"], "newsList": [32] }]]], ["custom-weather.system", [[1, "custom-weather", { "canGeolocation": [32], "doneGeolocation": [32], "weatherInfo": [32], "weatherForecast": [32] }]]], ["numbers-fact.system", [[1, "numbers-fact", { "mathFactResult": [32], "triviaFactResult": [32], "dateFactResult": [32], "yearFactResult": [32] }]]], ["random-quote.system", [[1, "random-quote", { "startText": [1, "start-text"], "highlightText": [1, "highlight-text"], "endText": [1, "end-text"], "backgroundImg": [32], "content": [32], "author": [32] }]]]], { resourcesUrl: resourcesUrl });
            });
        }
    };
});
