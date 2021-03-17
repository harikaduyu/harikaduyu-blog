---
title: Algorithmic Time Complexity
author: Harika Duyu
date: 2021-03-18
hero: ./images/clock.jpg
---

## What is this famous big O notation exactly?

In the simplest terms, it measures how well the algorithm scales. It also describes the worst case scenerio based on the amount of input an algorithm takes. There are other types of notations which I'll also explain in a section below.

## Meaning of different notations

- Big O (O()) describes the upper bound of the complexity.
- Omega (Ω()) describes the lower bound of the complexity.
- Theta (Θ()) describes the exact bound of the complexity.
- Little O (o()) describes the upper bound excluding the exact bound.

## Different Complexity Classes with Some Examples

### O(1) - Constant Time

This notation O(1) or "Order of One" represents an algorithm in the same amount of time, no matter how big the input gets.

```py
def print_input(input):
  output = f"Thanks, the input is {input}"
  print(output)
```

There you go. In this example, it doesn't matter how big your input gets, it will perform the same.

### O(N) - Linear Time

This is an algorithm, in which the completion time grows proportional to the input.

### O(N^2) - Quadratic Time

### O(log n) – Logarithmic Time

### O(n log n) – Quasilinear Time

## Comparison of different growth orders

a table here with example numbers
[Cheat Sheet](https://www.bigocheatsheet.com/)

### Other Complexity Classes

- O(n^m) - polynomial time
- O(2^n) - exponential time
- O(n!) - factorial
