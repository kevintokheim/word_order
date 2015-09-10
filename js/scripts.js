var wordOrder = function(string) {
    var wordsArray = (string.toLowerCase()).split(" ");
    var words = {};

    for (var i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i] in words) {
            words[wordsArray[i]] += 1;
        } else {
            words[wordsArray[i]] = 1;
        }
    }

    var sortable = [];
    for (var word in words) {
        sortable.push([word, words[word]]);
    }
    return sortable.sort(function(a, b) {return a[1] + b[1]});
};


$(document).ready(function(){
  $("form#wordOrder").submit(function(event) {
        var string = $("input#string").val();
        var result = wordOrder(string);

        $(".wordOrder").text(result);

        $("#result").show();
        event.preventDefault();
    });
});
