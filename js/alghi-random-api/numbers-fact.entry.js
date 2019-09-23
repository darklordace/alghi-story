import { r as registerInstance, c as createEvent, h } from './chunk-e4c3f803.js';

class NumbersFactComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.mathFactResult = "";
        this.triviaFactResult = "";
        this.dateFactResult = "";
        this.yearFactResult = "";
        this.submitMathFact = (event) => {
            event.preventDefault();
            fetch(`https://numbersapi.p.rapidapi.com/${this.numberMathFact}/math`, {
                headers: {
                    'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
                    'X-RapidAPI-Key': '1bd45d7bffmsh6fdc929b409c600p1727fajsn2e0aec4c9e4c'
                }
            }).then(resp => resp.text())
                .then(data => {
                this.mathFactResult = data;
                this.mathFactReceived.emit(data);
            });
        };
        this.submitTriviaFact = (event) => {
            event.preventDefault();
            fetch(`https://numbersapi.p.rapidapi.com/${this.numberTriviaFact}/trivia`, {
                headers: {
                    'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
                    'X-RapidAPI-Key': '1bd45d7bffmsh6fdc929b409c600p1727fajsn2e0aec4c9e4c'
                }
            }).then(resp => resp.text())
                .then(data => {
                this.triviaFactResult = data;
                this.triviaFactReceived.emit(data);
            });
        };
        this.dateLoaded = () => {
            return this.dateFactResult !== "" && this.yearFactResult !== "";
        };
        this.submitDateFact = (event) => {
            event.preventDefault();
            let dateLst = this.dateFact.split('-'), year = dateLst[0], month = dateLst[1], day = dateLst[2];
            fetch(`https://numbersapi.p.rapidapi.com/${month}/${day}/date`, {
                headers: {
                    'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
                    'X-RapidAPI-Key': '1bd45d7bffmsh6fdc929b409c600p1727fajsn2e0aec4c9e4c'
                }
            }).then(resp => resp.text())
                .then(data => {
                this.dateFactResult = data;
                if (this.dateLoaded()) {
                    this.dateFactReceived.emit({
                        dateFact: this.dateFactResult,
                        yearFact: this.yearFactResult
                    });
                }
            });
            fetch(`https://numbersapi.p.rapidapi.com/${year}/year`, {
                headers: {
                    'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
                    'X-RapidAPI-Key': '1bd45d7bffmsh6fdc929b409c600p1727fajsn2e0aec4c9e4c'
                }
            }).then(resp => resp.text())
                .then(data => {
                this.yearFactResult = data;
                if (this.dateLoaded()) {
                    this.dateFactReceived.emit({
                        dateFact: this.dateFactResult,
                        yearFact: this.yearFactResult
                    });
                }
            });
        };
        this.mathFactReceived = createEvent(this, "mathFactReceived", 7);
        this.triviaFactReceived = createEvent(this, "triviaFactReceived", 7);
        this.dateFactReceived = createEvent(this, "dateFactReceived", 7);
    }
    handleMathFact(event) {
        this.numberMathFact = event.target.value;
    }
    handleTriviaFact(event) {
        this.numberTriviaFact = event.target.value;
    }
    handleDateFact(event) {
        this.dateFact = event.target.value;
    }
    render() {
        return (h("div", null, h("h1", null, "Numbers Fact"), h("h3", null, "Math Fact:"), h("form", { onSubmit: (e) => this.submitMathFact(e) }, h("label", { htmlFor: "math-fact" }, "Enter any number:"), h("br", null), h("input", { type: "number", onInput: e => this.handleMathFact(e) }), h("button", { class: "button bg-green", type: "Submit" }, "Submit"), h("h4", { class: "green" }, this.mathFactResult)), h("h3", null, "Trivia Fact:"), h("form", { onSubmit: (e) => this.submitTriviaFact(e) }, h("label", { htmlFor: "trivia-fact" }, "Enter any number:"), h("br", null), h("input", { type: "number", onInput: e => this.handleTriviaFact(e) }), h("button", { class: "button bg-blue", type: "Submit" }, "Submit"), h("h4", { class: "blue" }, this.triviaFactResult)), h("h3", null, "Date Fact:"), h("form", { onSubmit: (e) => this.submitDateFact(e) }, h("label", { htmlFor: "date-fact" }, "Enter any date:"), h("br", null), h("input", { type: "date", onInput: e => this.handleDateFact(e) }), h("button", { class: "button bg-red", type: "Submit" }, "Submit"), h("h4", { class: "red" }, this.dateFactResult, h("br", null), this.dateLoaded() ? h("hr", null) : h("span", null), this.yearFactResult, h("br", null)))));
    }
    static get style() { return "h1 {\n    font-size: 1.75rem;\n}\n\ninput {\n    max-width: 200px;\n    width: 100%;\n}\n\nbutton {\n    margin-left: 10px;\n    cursor: pointer;\n}\n\n.button {\n    border: none;\n    color: white;\n    padding: 4px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n}\n\n.bg-green {\n    background-color: #4CAF50;\n}\n\n.green {\n    color: #4CAF50;\n}\n\n.bg-blue {\n    background-color: #008CBA;\n}\n\n.blue {\n    color: #008CBA;\n}\n\n.bg-red {\n    background-color: #f44336;\n}\n\n.red {\n    color: #f44336;\n}"; }
}

export { NumbersFactComponent as numbers_fact };
