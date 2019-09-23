System.register(['./chunk-3309bb1e.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                createEvent = module.c;
                h = module.h;
            }],
        execute: function () {
            var BreakingNewsComponent = /** @class */ (function () {
                function BreakingNewsComponent(hostRef) {
                    registerInstance(this, hostRef);
                    this.newsCount = 10;
                    this.countryId = "us";
                    this.newsList = [];
                    this.breakingNewsLoaded = createEvent(this, "breakingNewsLoaded", 7);
                }
                BreakingNewsComponent.prototype.componentWillLoad = function () {
                    var _this = this;
                    fetch("https://newsapi.org/v2/top-headlines?country=" + this.countryId + "&apikey=ecd340d3eb194e1b82a9dcaac4e8e197").then(function (resp) { return resp.json(); })
                        .then(function (value) {
                        var newNewsList = [];
                        value.articles.forEach(function (news) {
                            newNewsList.push(h("div", null, h("a", { href: news.url, target: "_blank" }, news.title), " (", news.source.name, ")", h("br", null), "(Published at ", news.publishedAt.slice(0, 10), ")", h("br", null), h("hr", null)));
                        });
                        _this.newsList = newNewsList;
                        _this.breakingNewsLoaded.emit(value);
                    });
                };
                BreakingNewsComponent.prototype.render = function () {
                    var currentNewsList = this.newsList.slice(0, this.newsCount);
                    return (this.newsList.length === 0 ?
                        h("h2", { style: { textAlign: 'center' } }, "Loading...")
                        :
                            h("div", null, h("h1", { style: { textAlign: 'center' } }, "Breaking news"), h("div", { class: "little-space" }, h("hr", null), currentNewsList)));
                };
                Object.defineProperty(BreakingNewsComponent, "style", {
                    get: function () { return ".little-space {\n    line-height: 1.25;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return BreakingNewsComponent;
            }());
            exports('breaking_news', BreakingNewsComponent);
        }
    };
});
