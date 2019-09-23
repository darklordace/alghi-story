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
            var NumbersFactComponent = /** @class */ (function () {
                function NumbersFactComponent(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.mathFactResult = "";
                    this.triviaFactResult = "";
                    this.dateFactResult = "";
                    this.yearFactResult = "";
                    this.submitMathFact = function (event) {
                        event.preventDefault();
                        fetch("https://numbersapi.p.rapidapi.com/" + _this.numberMathFact + "/math", {
                            headers: {
                                'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
                                'X-RapidAPI-Key': '1bd45d7bffmsh6fdc929b409c600p1727fajsn2e0aec4c9e4c'
                            }
                        }).then(function (resp) { return resp.text(); })
                            .then(function (data) {
                            _this.mathFactResult = data;
                            _this.mathFactReceived.emit(data);
                        });
                    };
                    this.submitTriviaFact = function (event) {
                        event.preventDefault();
                        fetch("https://numbersapi.p.rapidapi.com/" + _this.numberTriviaFact + "/trivia", {
                            headers: {
                                'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
                                'X-RapidAPI-Key': '1bd45d7bffmsh6fdc929b409c600p1727fajsn2e0aec4c9e4c'
                            }
                        }).then(function (resp) { return resp.text(); })
                            .then(function (data) {
                            _this.triviaFactResult = data;
                            _this.triviaFactReceived.emit(data);
                        });
                    };
                    this.dateLoaded = function () {
                        return _this.dateFactResult !== "" && _this.yearFactResult !== "";
                    };
                    this.submitDateFact = function (event) {
                        event.preventDefault();
                        var dateLst = _this.dateFact.split('-'), year = dateLst[0], month = dateLst[1], day = dateLst[2];
                        fetch("https://numbersapi.p.rapidapi.com/" + month + "/" + day + "/date", {
                            headers: {
                                'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
                                'X-RapidAPI-Key': '1bd45d7bffmsh6fdc929b409c600p1727fajsn2e0aec4c9e4c'
                            }
                        }).then(function (resp) { return resp.text(); })
                            .then(function (data) {
                            _this.dateFactResult = data;
                            if (_this.dateLoaded()) {
                                _this.dateFactReceived.emit({
                                    dateFact: _this.dateFactResult,
                                    yearFact: _this.yearFactResult
                                });
                            }
                        });
                        fetch("https://numbersapi.p.rapidapi.com/" + year + "/year", {
                            headers: {
                                'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
                                'X-RapidAPI-Key': '1bd45d7bffmsh6fdc929b409c600p1727fajsn2e0aec4c9e4c'
                            }
                        }).then(function (resp) { return resp.text(); })
                            .then(function (data) {
                            _this.yearFactResult = data;
                            if (_this.dateLoaded()) {
                                _this.dateFactReceived.emit({
                                    dateFact: _this.dateFactResult,
                                    yearFact: _this.yearFactResult
                                });
                            }
                        });
                    };
                    this.mathFactReceived = createEvent(this, "mathFactReceived", 7);
                    this.triviaFactReceived = createEvent(this, "triviaFactReceived", 7);
                    this.dateFactReceived = createEvent(this, "dateFactReceived", 7);
                }
                NumbersFactComponent.prototype.handleMathFact = function (event) {
                    this.numberMathFact = event.target.value;
                };
                NumbersFactComponent.prototype.handleTriviaFact = function (event) {
                    this.numberTriviaFact = event.target.value;
                };
                NumbersFactComponent.prototype.handleDateFact = function (event) {
                    this.dateFact = event.target.value;
                };
                NumbersFactComponent.prototype.render = function () {
                    var _this = this;
                    return (h("div", null, h("h1", null, "Numbers Fact"), h("h3", null, "Math Fact:"), h("form", { onSubmit: function (e) { return _this.submitMathFact(e); } }, h("label", { htmlFor: "math-fact" }, "Enter any number:"), h("br", null), h("input", { type: "number", onInput: function (e) { return _this.handleMathFact(e); } }), h("button", { class: "button bg-green", type: "Submit" }, "Submit"), h("h4", { class: "green" }, this.mathFactResult)), h("h3", null, "Trivia Fact:"), h("form", { onSubmit: function (e) { return _this.submitTriviaFact(e); } }, h("label", { htmlFor: "trivia-fact" }, "Enter any number:"), h("br", null), h("input", { type: "number", onInput: function (e) { return _this.handleTriviaFact(e); } }), h("button", { class: "button bg-blue", type: "Submit" }, "Submit"), h("h4", { class: "blue" }, this.triviaFactResult)), h("h3", null, "Date Fact:"), h("form", { onSubmit: function (e) { return _this.submitDateFact(e); } }, h("label", { htmlFor: "date-fact" }, "Enter any date:"), h("br", null), h("input", { type: "date", onInput: function (e) { return _this.handleDateFact(e); } }), h("button", { class: "button bg-red", type: "Submit" }, "Submit"), h("h4", { class: "red" }, this.dateFactResult, h("br", null), this.dateLoaded() ? h("hr", null) : h("span", null), this.yearFactResult, h("br", null)))));
                };
                Object.defineProperty(NumbersFactComponent, "style", {
                    get: function () { return "h1 {\n    font-size: 1.75rem;\n}\n\ninput {\n    max-width: 200px;\n    width: 100%;\n}\n\nbutton {\n    margin-left: 10px;\n    cursor: pointer;\n}\n\n.button {\n    border: none;\n    color: white;\n    padding: 4px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n}\n\n.bg-green {\n    background-color: #4CAF50;\n}\n\n.green {\n    color: #4CAF50;\n}\n\n.bg-blue {\n    background-color: #008CBA;\n}\n\n.blue {\n    color: #008CBA;\n}\n\n.bg-red {\n    background-color: #f44336;\n}\n\n.red {\n    color: #f44336;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return NumbersFactComponent;
            }());
            exports('numbers_fact', NumbersFactComponent);
        }
    };
});
