System.register(['./chunk-3309bb1e.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            var RandomQuoteComponent = /** @class */ (function () {
                function RandomQuoteComponent(hostRef) {
                    registerInstance(this, hostRef);
                    this.keywordSearch = ['panorama', 'nature', 'mountain', 'waterfall', 'cliff'];
                    this.startText = "Welcome to";
                    this.highlightText = "MyRandomApi";
                    this.endText = "";
                    this.backgroundImg = "";
                    this.content = "";
                    this.author = "";
                }
                RandomQuoteComponent.prototype.getRandomNumber = function (min, max) {
                    min = Math.ceil(min);
                    max = Math.floor(max);
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                };
                RandomQuoteComponent.prototype.componentWillLoad = function () {
                    var _this = this;
                    fetch("https://api.quotable.io/random").then(function (resp) { return resp.json(); }).then(function (data) {
                        _this.author = data.author;
                        _this.content = data.content;
                    });
                    var keyword = this.keywordSearch[this.getRandomNumber(0, this.keywordSearch.length - 1)];
                    fetch("https://api.pexels.com/v1/search?query=" + keyword + "&per_page=20&page=1", {
                        headers: {
                            'Authorization': '563492ad6f9170000100000149d6f44f24c64f8da0ce6b70d30b6eb4'
                        }
                    }).then(function (resp) { return resp.json(); })
                        .then(function (data) {
                        var imageUrl = data.photos[_this.getRandomNumber(0, data.photos.length - 1)].src.landscape;
                        _this.backgroundImg = "url('" + imageUrl + "') no-repeat center center";
                    });
                };
                RandomQuoteComponent.prototype.render = function () {
                    return (h("div", { class: "text-center" }, h("h1", null, this.startText, " ", h("span", { class: "highlight" }, this.highlightText), " ", this.endText), h("div", { class: "text-center quote-wrapper", style: { background: this.backgroundImg } }, h("div", { class: "quote-text" }, h("div", { class: "inner-quote" }, h("i", null, "\"", this.content, "\"", h("br", null), h("br", null), h("span", { class: "small-text" }, "\u2014 ", this.author)))))));
                };
                Object.defineProperty(RandomQuoteComponent, "style", {
                    get: function () { return "h1 {\n    font-size: 1.75rem;\n}\n\n.text-center {\n    text-align: center;\n}\n\n.highlight {\n    color: #4CAF50;\n}\n\n.quote-wrapper {\n    margin: 0;\n    display: inline-block;\n    height: 350px;\n    width: 75%;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n}\n\n.quote-text {\n    margin-top: 125px;\n    margin-left: 10%;\n    margin-right: 10%;\n    background-color: rgba(255, 255, 255, .6);\n    border-radius: .5rem;\n}\n\n.inner-quote {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    padding-left: 5%;\n    padding-right: 5%;\n    font-size: 1.1rem;\n}\n\n.small-text {\n    font-size: .9rem;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return RandomQuoteComponent;
            }());
            exports('random_quote', RandomQuoteComponent);
        }
    };
});
