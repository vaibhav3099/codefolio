---
title: 'Understanding the JavaScript Event Loop'
seoTitle: 'Understanding the JavaScript Event Loop'
slug: 'javascript-event-loop'
description: 'Learn how JavaScript manages asynchronous operations using the call stack, Web APIs, and task queues'
pubDate: '2026-07-08'
updatedDate: '2026-07-08'
tags: ['Javascript', 'event-loop']
coverImage: '/public/blog-placeholder-about.jpg'
---

One of the first things you'll hear about JavaScript is that it's **single-threaded**. Naturally, the next question is:

> If JavaScript can only do one thing at a time, how does it fetch data from an API, respond to clicks, or wait for timers without freezing the page?

The answer lies in the **event loop**.

In this article, we'll build an intuition for how it works without diving too deep into implementation details.

## The Call Stack

The **call stack** is where JavaScript executes your code. Every time a function is called, it's pushed onto the stack. Once it finishes, it's removed.

```js
function greet() {
	console.log('Hello');
}

greet();
console.log('World');
```

Output:

```text
Hello
World
```

Everything here runs synchronously, one line after another.

---

## Where Asynchronous Tasks Go

Consider this code:

```js
console.log('Start');

setTimeout(() => {
	console.log('Timeout');
}, 1000);

console.log('End');
```

Output:

```text
Start
End
Timeout
```

`setTimeout` doesn't pause JavaScript.

Instead:

1. JavaScript registers the timer.
2. The browser keeps track of it.
3. JavaScript continues executing the remaining code.
4. Once the timer expires, the callback is added to the task queue.

---

## The Event Loop

The event loop has one simple responsibility:

> If the call stack is empty, move the next task from the queue onto the stack.

You can think of it like a receptionist who keeps checking whether the developer is free before handing over the next task.

```
Call Stack      ← executes code
      ↑
Event Loop
      ↑
Task Queue      ← completed async callbacks
```

---

## Promises Have Higher Priority

Promises don't enter the normal task queue.

Instead, they use the **microtask queue**, which is processed **before** the task queue.

```js
console.log('A');

setTimeout(() => console.log('B'));

Promise.resolve().then(() => console.log('C'));

console.log('D');
```

Output:

```text
A
D
C
B
```

Even though the timer was registered first, the Promise callback executes before it.

---

## Putting It All Together

When JavaScript runs:

1. Execute synchronous code.
2. Hand asynchronous work to the browser/runtime.
3. Continue executing remaining synchronous code.
4. Process all pending microtasks.
5. Process the next task from the task queue.
6. Repeat.

This cycle happens continuously while your application is running.

---

## Common Misconception

Many beginners assume that `setTimeout(fn, 0)` runs immediately.

It doesn't.

A timeout of `0` milliseconds simply means:

> "Run this callback as soon as the current call stack is empty and higher-priority tasks have finished."

---

## Final Thoughts

The event loop isn't a complex algorithm you need to memorize. It's simply the mechanism that allows JavaScript to remain responsive while coordinating work between synchronous code, browser APIs, promises, and queued callbacks.

Once you understand the relationship between the **call stack**, **Web APIs**, **microtask queue**, **task queue**, and the **event loop**, debugging asynchronous code becomes much less mysterious.
