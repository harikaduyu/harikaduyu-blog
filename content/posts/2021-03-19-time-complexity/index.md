---
title: Algorithmic Time Complexity
author: Harika Duyu
date: 2021-03-18
hero: ./images/clock.jpg
---

## What is this famous big O notation exactly?

In the simplest terms, it measures how well the algorithm scales. It also describes the worst case scenerio based on the amount of input an algorithm takes. There are other types of notations which I'll also explain in a section below.

In mathematical terms, a function <img src="http://www.sciweavers.org/tex2img.php?eq=f%28n%29&bc=White&fc=Black&im=jpg&fs=12&ff=arev&edit=0" align="center" border="0" alt="f(n)" width="36" height="19" /> is <img src="http://www.sciweavers.org/tex2img.php?eq=O%28g%28n%29%29&bc=White&fc=Black&im=jpg&fs=12&ff=arev&edit=0" align="center" border="0" alt="O(g(n))" width="67" height="19" /> if there is a constant <img src="https://bit.ly/3eStqhx" align="center" border="0" alt="C" width="17" height="15" /> and some initial value <img src="http://www.sciweavers.org/tex2img.php?eq=%20n_%7B0%7D%20&bc=White&fc=Black&im=jpg&fs=12&ff=arev&edit=0" align="center" border="0" alt=" n_{0} " width="22" height="15" />, such that <img src="https://bit.ly/3lvTArL" align="center" border="0" alt="f(n)  \leq  Cg(n)" width="107" height="19" /> for all <img src="http://www.sciweavers.org/tex2img.php?eq=n%20%20%20%3E%20%20%20n_%7B0%7D%20&bc=White&fc=Black&im=jpg&fs=12&ff=arev&edit=0" align="center" border="0" alt="n   >   n_{0} " width="56" height="15" />.

Let's look at it in an example. Take the function <img src="http://www.sciweavers.org/tex2img.php?eq=f%28n%29%20%3D%204%20n%5E%7B2%7D%20&bc=White&fc=Black&im=jpg&fs=12&ff=arev&edit=0" align="center" border="0" alt="f(n) = 4 n^{2} " width="89" height="22" />

f(n) = 4n^2 + 7n + 2
and we'll ask ourselves,
Is f(n) O(n^4)? To answer this question we'll look at this expression 4n^2 + 7n + 2 < Cn^4 and we'll try to find out if there is a constant C that satisfies this expression.

### Take C = 1

| n   | 4n^2 + 16n + 2 < n^4 | Is it True |
| --- | -------------------- | ---------- |
| 0   | 2 < 0                | False      |
| 1   | 13 < 1               | False      |
| 2   | 32 < 16              | False      |
| 3   | 59 < 81              | False      |
| 4   | 94 < 256             | True       |

So for n0 >= 4 the statement above becomes true. Then the answer to the question above (is this function big O(n^4)?) is YES.

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

This is an algorithm, in which the completion time grows proportional to the input. Let's write a function that takes an list and prints each element. As the list size grows, the completion time also grows but relative to it.

```py
def print_elements(my_list):
    for value in my_list:
        print(f"The current item is {value}")
```

If the list has 10 items, we'll print 10 values. If the list has 50 elements, we'll print 50 values etc.

### O(N^2) - Quadratic Time

Let's say now, we have the same list but this time, we would like to see the each pair combination created by its items.

```py
def print_elements(my_list):
    for first_value in my_list:
        for second_value in my_list:
            print(f"The current values are {first_value} and {second_value}")
```

### O(log n) – Logarithmic Time

### O(n log n) – Quasilinear Time

## Comparison of different growth orders

a table here with example numbers
[Cheat Sheet](https://www.bigocheatsheet.com/)

### Other Complexity Classes

- O(n^m) - polynomial time
- O(2^n) - exponential time
- O(n!) - factorial
