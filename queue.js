function Queue() {
    this.queue = [];
}

Queue.prototype.enqueue = function (value) {
    this.queue.push(value);
};

Queue.prototype.dequeue = function () {
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


// var queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.print(); // => 1 2 3
// console.log('length is 3:', queue.length()); // => 3
// console.log('front is 1:', queue.front()); // => 3
// console.log('dequeue is 1:', queue.dequeue()); // => 1
// queue.print(); // => 2 3
// console.log('dequeue is 2:', queue.dequeue());  // => 2
// console.log('length is 1:', queue.length()); // => 1
// console.log('dequeue is 3:', queue.dequeue()); // => 3
// queue.print(); // => ''
// console.log('front is undefined:', queue.front()); // => undefined
// console.log('dequeue is undefined:', queue.dequeue()); // => undefined