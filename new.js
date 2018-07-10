data = [
    "abash",
    "aura",
    "awe",
    "bad",
    "bar",
    "barb",
    "bed",
    "bee",
    "beg",
    "bled",
    "blew",
    "blush",
    "bog",
    "bogus",
    "boo",
    "bough",
    "bow",
    "brew",
    "briar",
    "brow",
    "brush",
    "bug",
    "bugs",
    "bus",
    "bush",
    "bust",
    "busy",
    "but",
    "cad",
    "cade",
    "car",
    "cat",
    "cate",
    "code",
    "cog",
    "con",
    "cot",
    "data",
    "date",
    "dig",
    "dog",
    "don",
    "dot",
    "egg",
    "ego",
    "erg",
    "go",
    "goes",
    "gorge",
    "gosh",
    "grew",
    "grow",
    "grub",
    "gush",
    "he",
    "her",
    "here",
    "hew",
    "hub",
    "hug",
    "huh",
    "hush",
    "kitty",
    "owe",
    "past",
    "path",
    "push",
    "rub",
    "sew",
    "she",
    "shrub",
    "shrug",
    "sir",
    "sub",
    "surge",
    "swore",
    "war",
    "web",
    "wee",
    "were",
    "woe",
    "wore",
    "worse"
]

var dic = {};
for (var i = 0; i < data.length; i++) {
    dic[data[i]] = 0;
}

//wordladder

var flag = 0;
var word1 = "cat";
var word2 = "dog";
// var dictionary = getDic();
var dictionary = dic;

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
    console.log(size);
    for (var k = 0; k < size; k++) {
        console.log(targertStack.pop());
    }

}
wordladder();
