//Get Json
var dictionary = {};
var submit = 0;
$("#submit").hide();
$("#upfile").click(function () {
    $("#upfile").on("change", function () {
        var resultFile = document.getElementById("upfile").files[0];

        if (resultFile) {
            var reader = new FileReader();

            reader.readAsText(resultFile, "UTF-8");
            reader.onload = function (e) {
                dictionary = JSON.parse(this.result);

                $("#submit").show();
            };
        }

    });
});



var flag = 0;
var word1;
var word2;

function wordladder() {

    word1 = $("#first").val();

    word2 = $("#second").val();


    var targertStack = [];
    var wordLadderQue = [];

    var partialLadder = [];
    partialLadder.push(word1);

    dictionary[word1] = 1;

    wordLadderQue.push(partialLadder);

    while (wordLadderQue.length != 0) {
        var currentWordStack = wordLadderQue[0].slice(0);
        wordLadderQue.splice(0, 1);

        var currentWord = currentWordStack[currentWordStack.length - 1];

        for (var m = 0; m < currentWord.length; m++) {

            var alphabet = "abcdefghijklmnopqrstuvwxyz"

            for (var i = 0; i < alphabet.length; i++) {
                var newword = currentWord.substring(0, m) + alphabet[i] + currentWord.substring(m + 1);

                if (newword == word2) {
                    flag = 1;
                    let newStack = currentWordStack.slice(0);
                    newStack.push(word2);
                    targertStack = newStack;
                    break;
                }
                else {
                    if (dictionary.hasOwnProperty(newword) && dictionary[newword] != 1) {
                        let newStack = currentWordStack.slice(0);
                        
                        newStack.push(newword);
                        wordLadderQue.push(newStack);

                        dictionary[newword] = 1;
                    }
                }
            }

            if (flag == 1) {
                break;
            }
        }

        if (flag == 1) {
            break;
        }

    }

    $("#ladder").append(`<div class="text">${targertStack.join("->")}</div>`);
    var size = targertStack.length;
    for (var k = 0; k < size; k++) {
        console.log(targertStack[0]);
        targertStack.splice(0, 1);
    }

}


