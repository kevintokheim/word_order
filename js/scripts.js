var wordOrder = function(string) {
    var string = string.toLowerCase();
    //removes special characters
    var string = string.replace(/[^a-zA-Z" "]+/g, ' ');
    //removes extra whitespace
    var string = string.replace(/(\s+\s+)/g, ' ')
    //turns string into an array of words
    var wordsArray = string.split(" ");
    var words = {};

    for (var i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i] in words) {
            words[wordsArray[i]] += 1;
        } else {
            words[wordsArray[i]] = 1;
        }
    }

    // var sortable = [];
    // for (var word in words) {
    //     sortable.push([word, words[word]]);
    // }
    // return sortable.sort(function(a, b) {return a[1] + b[1]});

    var wordCountSorted = Object.keys(words).sort(function(a, b) {
        return words[b] - words[a];
    });

    var finalWordCount = {};
    for (var i = 0; i < wordCountSorted.length; i++) {
        finalWordCount[wordCountSorted[i]] = words[wordCountSorted[i]];
    }
    return finalWordCount;
};


$(document).ready(function(){
  $("form#wordOrder").submit(function(event) {
        var string = $("input#string").val();
        var result = wordOrder(string);
        $('.wordOrder').empty();
        for (key in result) {
            $('.wordOrder').append(key + ": " + result[key] + " ");
        }
        event.preventDefault();
    });
});
