---
title: Algorithmic Time Complexity
author: Harika Duyu
date: 2021-03-18
hero: ./images/clock.jpg
---

## What is this famous big Oh notation exactly?

In the simplest terms, it measures how well the algorithm scales. It also describes the worst case scenerio based on the amount of input an algorithm takes. There are other types of notations which I'll also explain below.

### In Academia

#### Big O (O()) describes the upper bound of the complexity

In mathematical terms, a function f(n) is O(g(n)) if there is a constant C and some initial value n0 such that f(n) <= Cg(n) for all n > n0.

Let's look at it in an example. Take the function f(n) = 4n^2 + 16n + 2
and we'll ask ourselves,
Is f(n) O(n^4)? To answer this question we'll look at this expression 4n^2 + 16n + 2 < Cn^4 and we'll try to find out if there is a constant C that satisfies this expression.

Let's take C = 1

| n   | 4n^2 + 16n + 2 < n^4 | Is it True |
| --- | -------------------- | ---------- |
| 0   | 2 < 0                | False      |
| 1   | 22 < 1               | False      |
| 2   | 50 < 16              | False      |
| 3   | 86 < 81              | False      |
| 4   | 130 < 256            | True       |

So for n0 >= 4 the statement above becomes true. Then the answer to the question above (is this function big O(n^4)?) is YES. And if we could never find a constant and a particular n0 so that this statement becomes true forever, then the answer would be NO.

#### Omega (Ω()) describes the lower bound of the complexity

A function f(n) is Ω(g(n)) if there is a constant C and some initial value n0 such that f(n) >= Cg(n) for all n > n0. Let's look at the same example function as above

f(n) = 4n^2 + 16n + 2

Is f(n), Ω(n^2)?

Now, we need to come up with a constant C and an initial value of n (n0) such that 4n^2 + 16n + 2 >= C \* n^2. As for this example it is pretty straightforward when C = 1, 4n^2 + 16n + 2 > n^2 will always be true for every n > 0. Then we can say, f(n) is Ω(n^2) for this example.

Let's try another example with the same function f(n) = 4n^2 + 16n + 2 and ask ourselves,

Is f(n), Ω(n^3)?

In another words, is there a constant C and an initial value of n (n0), such that 4n^2 + 16n + 2 > C \* n^3 will always be true for n > n0?

As n gets really big, 7n + 2 will lose importance compared to 4n^2 in f(n), as 4n^2 is the dominating term. Since C > 1 , 4n^2 won't be able to keep up with n^3 and we can say that there is no such initial value of n where 4n^2 + 16n + 2 > C \* n^3 is true for all n > n0. Therefore, f(n) is not Ω(n^3).

#### Theta (Θ()) describes the exact bound of the complexity

This is where, we combine Big Oh and Omega. A function f(n) is Θ(g(n)), if and only if both of the following statements are true.

1. f(n) is O(g(n))
1. f(n) is Ω(g(n))

Let's look at the same function f(n) = 4n^2 + 16n + 2 and check if it is Θ(n^2). We already know that it's Ω(n^2) from previous section. We just need to check if f(n) is O(n^2). Is there a constant C, and an initial value of n (n0) that 4n^2 + 16n + 2 <= Cn^2 is true for every n > n0?

Let's take C = 5

| n   | 4n^2 + 16n + 2 < 5 n^2 | Is it True |
| --- | ---------------------- | ---------- |
| 0   | 2 < 0                  | False      |
| 1   | 22 < 5                 | False      |
| 2   | 50 < 20                | False      |
| 3   | 130 < 45               | False      |
| ... | ...                    | ...        |
| 17  | 1430 < 1445            | True       |

4n^2 + 16n + 2 < 5 n^2 will be true for every n > 17, therefore f(n) is O(n^2) as well, which means our function f(n) is Θ(n^2).

### In Industry

What people mean by big O is actually closer to what Θ means in academia. So, Big Oh is the tightest description of the runtime of an algorithm.

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
