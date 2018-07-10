//Stack
function Stack() {
    this.stack = [];
}

Stack.prototype.push = function (value) {
    this.stack.push(value);
};

Stack.prototype.pop = function () {
    return this.stack.pop();
};

Stack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

Stack.prototype.length = function () {
    return this.stack.length;
};

Stack.prototype.print = function () {
    console.log(this.stack.join(' '));
}

//Queue
function Queue() {
    this.queue = [];
}

Queue.prototype.push = function (value) {
    this.queue.push(value);
};

Queue.prototype.pop = function () {
    return this.queue.shift();
};

Queue.prototype.front = function () {
    return this.queue[0];
};

Queue.prototype.length = function () {
    return this.queue.length;
};

Queue.prototype.print = function () {
    console.log(this.queue.join(' '));
};

var stack1 = new Stack();
var stack2 = new Stack();
stack1.push("bt");
stack1.push("ad");
stack2.push("as");
stack2.push("fw");

var wordLadderQue = new Queue();
wordLadderQue.push(stack1);
wordLadderQue.push(stack2);
var currentWordStack = wordLadderQue.pop();

var currentWord = currentWordStack.top();

for (var m = 0; m < currentWord.length; m++) {

    var alphabet = "abcdefghijklmnopqrstuvwxyz"

    for (var i = 0; i < alphabet.length; i++) {
        var newword = currentWord.substring(0, m) + alphabet[i] + currentWord.substring(m + 1);
        console.log(newword);

    }
}