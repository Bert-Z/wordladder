//Get Json
var dictionary = {};
var submit = 0;
$("#submit").hide();
$("#upfile").click(function () {
    $("#upfile").on("change", function () {
        var resultFile = document.getElementById("upfile").files[0];

        Array.prototype.notempty = function () {
            for (var i = 0; i < this.length; i++) {
                if (this[i] == "" || typeof (this[i]) == "undefined") {
                    this.splice(i, 1);
                    i--;
                }
            }
            return this;
        };

        if (resultFile) {
            var reader = new FileReader();

            reader.readAsText(resultFile, "UTF-8");
            reader.onload = function (e) {
                var Data1 = this.result.replace(/\s/ig, '');
                var Data = Data1.split(/[,\[\]\"]/).notempty();

                for (var i = 0; i < Data.length; i++) {
                    dictionary[Data[i]] = 0;
                }
                console.log(dictionary);

                $("#submit").show();
            };
        }


        // $.ajax({
        //     url: val.toString(),
        //     type: "GET",
        //     dataType: "json",
        //     success: function (data) {
        //         console.log(data.length);
        //         $.each(data, function (i, item) {
        //             if (i < 100)
        //                 dictionary[item] = 0;
        //         })
        //         console.log(dictionary);
        //     }
        // })


    });
});


//wordladder

var flag = 0;
var word1 = "cat";
var word2 = "dog";


function wordladder() {

    var targertStack = [];
    var wordLadderQue = [];

    var partialLadder = [];
    partialLadder.push(word1);

    dictionary[word1] = 1;

    wordLadderQue.push(partialLadder);

    while (wordLadderQue.length != 0) {
        var currentWordStack = wordLadderQue[0];
        wordLadderQue.splice(0, 1);

        var currentWord = currentWordStack[currentWordStack.length - 1];

        for (var m = 0; m < currentWord.length; m++) {

            var alphabet = "abcdefghijklmnopqrstuvwxyz"

            for (var i = 0; i < alphabet.length; i++) {
                var newword = currentWord.substring(0, m) + alphabet[i] + currentWord.substring(m + 1);

                if (newword == word2) {
                    flag = 1;
                    var newStack = currentWordStack.splice(0);
                    newStack.push(word2);
                    targertStack = newStack;
                    break;
                }
                else {
                    if (dictionary.hasOwnProperty(newword) && dictionary[newword] != 1) {
                        var newStack = currentWordStack.splice(0);
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

    var size = targertStack.length;
    // console.log(size);
    for (var k = 0; k < size; k++) {
        console.log(targertStack[0]);
        targertStack.splice(0, 1);
    }

}


