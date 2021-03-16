---
title: Algorithmic Time Complexity
author: Harika Duyu
date: 2021-03-18
hero: ./images/hero.jpg
---



## What is this famous big O notation exactly?

In the simplest terms, it measures how well the algorithm scales. It also describes the worst case scenerio based on the amount of input an algorithm takes. There are other types of notations which I'll also explain in a section below.



## Meaning of different notations with some examples

### O(1)

This notation O(1) or "Order of One" represents an algorithm in the same amount of time, no matter how big the input gets.

```py
def print_input(input):
  output = f"Thanks, the input is {input}" 
  print(output)
```
There you go. In this example, it doesn't matter how big your input gets, it will perform the same.

### O(N)

This is an algorithm, in which the completion time grows proportional to the input.