import { r as registerInstance, c as createEvent, h } from './chunk-e4c3f803.js';

class BreakingNewsComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.newsCount = 10;
        this.countryId = "us";
        this.newsList = [];
        this.breakingNewsLoaded = createEvent(this, "breakingNewsLoaded", 7);
    }
    componentWillLoad() {
        fetch(`https://newsapi.org/v2/top-headlines?country=${this.countryId}&apikey=ecd340d3eb194e1b82a9dcaac4e8e197`).then(resp => resp.json())
            .then(value => {
            let newNewsList = [];
            value.articles.forEach(news => {
                newNewsList.push(h("div", null, h("a", { href: news.url, target: "_blank" }, news.title), " (", news.source.name, ")", h("br", null), "(Published at ", news.publishedAt.slice(0, 10), ")", h("br", null), h("hr", null)));
            });
            this.newsList = newNewsList;
            this.breakingNewsLoaded.emit(value);
        });
    }
    render() {
        let currentNewsList = this.newsList.slice(0, this.newsCount);
        return (this.newsList.length === 0 ?
            h("h2", { style: { textAlign: 'center' } }, "Loading...")
            :
                h("div", null, h("h1", { style: { textAlign: 'center' } }, "Breaking news"), h("div", { class: "little-space" }, h("hr", null), currentNewsList)));
    }
    static get style() { return ".little-space {\n    line-height: 1.25;\n}"; }
}

export { BreakingNewsComponent as breaking_news };
