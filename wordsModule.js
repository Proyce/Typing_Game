let wordsModule = (function(){
    let words = [
        "word1 word2 word3 etc",
        "word1 word2 word3 etc",
        "word1 word2 word3 etc"
    ];

    return{
        getWords(textNumber){
            return words[textNumber];
        }
    }
})();