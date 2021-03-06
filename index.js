const Mecab = require('mecab-async'),
    mecab = new Mecab();

class PersonNameFilter {
    constructor(words) {
        this.words = mecab.parseSync(words, function (err, result) {
            if (err) throw err;
        });
        this.nouns = this.words.filter(word => {
            const type = word[2];
            return type === '一般' || type === '固有名詞';
        });
    }
    get hasNouns() {
        return this.nouns.length > 0;
    }
    extractPersonName() {
        const uniqueNames = this.nouns.filter(word => {
            const type = word[2];
            return type === '固有名詞';
        });
        const chosenWord = uniqueNames.length > 0 ? uniqueNames[0] : this.nouns[0];
        return chosenWord[0];
    }
}

module.exports = PersonNameFilter;