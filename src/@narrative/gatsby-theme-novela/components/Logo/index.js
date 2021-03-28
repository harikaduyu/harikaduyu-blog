import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property value called `fill`. `fill` is useful
 * when you want to change your logo depending on the theme you are on.
 */
export default function Logo({ fill }) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      height="25px"
      viewBox="0 0 141.000000 123.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,123.000000) scale(0.100000,-0.100000)"
        fill={fill}
        stroke="none"
      >
        <path
          d="M603 1108 c-35 -5 -63 -14 -63 -19 0 -5 -8 -9 -18 -9 -11 0 -30 -9
-43 -20 -13 -11 -28 -23 -34 -28 -5 -4 -18 -11 -27 -15 -10 -3 -18 -11 -18
-16 0 -5 -9 -12 -19 -16 -11 -3 -24 -19 -30 -35 -5 -17 -15 -30 -20 -30 -6 0
-11 -7 -11 -15 0 -8 -4 -15 -10 -15 -5 0 -14 -19 -21 -42 -6 -24 -14 -45 -19
-48 -4 -3 -10 -29 -13 -58 -5 -47 -4 -52 8 -42 9 7 15 29 15 51 0 20 7 44 15
53 8 8 15 23 15 34 0 11 7 22 15 26 8 3 15 14 15 25 0 10 7 21 15 25 8 3 15
10 15 16 0 18 43 60 63 60 10 0 21 8 24 18 2 10 19 24 37 30 43 16 44 16 38
-13 -4 -21 -1 -25 20 -25 14 0 33 9 42 19 17 18 17 20 -1 30 -17 9 -17 11 0
28 14 14 21 15 37 6 15 -10 22 -10 34 2 16 17 96 21 96 5 0 -5 22 -10 49 -10
28 0 52 -4 55 -9 3 -5 21 -12 40 -15 19 -4 51 -20 71 -36 21 -17 41 -30 46
-30 12 0 109 -126 109 -143 0 -8 7 -20 15 -27 8 -7 15 -21 15 -31 0 -10 5 -21
10 -24 6 -3 10 -23 10 -44 0 -38 -1 -39 -45 -45 -25 -4 -45 -11 -45 -15 0 -16
-39 -19 -51 -5 -8 10 -8 14 0 14 6 0 11 14 11 30 0 17 -4 30 -10 30 -5 0 -10
-9 -10 -20 0 -11 -7 -23 -15 -26 -8 -4 -15 -14 -15 -23 0 -14 -2 -14 -11 -1
-8 11 -12 12 -16 3 -2 -7 -11 -13 -18 -13 -9 0 -11 -8 -7 -22 3 -14 2 -19 -6
-14 -7 4 -12 2 -12 -4 0 -7 -7 -9 -16 -6 -8 3 -22 -1 -30 -9 -9 -8 -26 -15
-40 -15 -13 0 -24 -4 -24 -9 0 -6 -14 -11 -32 -13 -43 -4 -50 -28 -7 -28 l32
0 -27 -21 c-14 -11 -26 -27 -26 -35 0 -8 -9 -14 -20 -14 -11 0 -20 -4 -20 -10
0 -5 7 -10 15 -10 8 0 19 -10 26 -21 11 -21 10 -22 -22 -15 -23 4 -29 3 -19
-3 12 -9 12 -11 -3 -17 -9 -3 -17 -14 -17 -24 0 -24 -32 -50 -63 -50 -16 0
-27 -6 -27 -13 0 -8 -9 -22 -20 -32 -13 -12 -18 -25 -14 -38 5 -17 3 -19 -22
-13 -16 4 -30 12 -32 17 -2 5 -8 9 -13 9 -30 0 -165 126 -174 162 -4 16 -11
28 -16 28 -5 0 -9 7 -9 15 0 8 -5 15 -11 15 -6 0 -8 7 -5 16 4 9 2 22 -3 28
-5 6 -11 24 -13 40 -1 16 -9 31 -16 34 -9 3 -11 -7 -6 -40 4 -23 10 -45 13
-48 4 -3 12 -27 19 -55 7 -27 17 -51 23 -53 5 -2 9 -8 9 -14 0 -6 14 -24 30
-40 17 -15 30 -35 30 -43 0 -8 6 -15 13 -15 7 0 23 -9 35 -20 12 -11 25 -20
31 -20 5 0 11 -7 15 -15 3 -8 14 -15 25 -15 11 0 26 -7 35 -15 8 -8 24 -15 34
-15 11 0 22 -4 24 -9 5 -14 108 -24 108 -10 0 19 -33 38 -70 40 -34 2 -34 2
-5 6 17 2 39 8 50 13 11 5 41 11 68 15 26 3 47 10 47 16 0 5 8 9 18 9 13 0 14
2 3 9 -7 5 -10 14 -7 20 4 6 12 9 17 6 5 -3 6 0 4 7 -3 8 1 22 9 33 12 16 16
17 30 6 11 -9 20 -10 29 -3 6 5 27 13 45 17 31 6 32 6 32 -28 0 -19 -7 -40
-15 -47 -8 -7 -15 -19 -15 -26 0 -8 -7 -14 -15 -14 -8 0 -15 -4 -15 -10 0 -5
-13 -7 -32 -3 -26 5 -30 4 -25 -10 5 -14 0 -17 -28 -17 -18 0 -37 -4 -40 -10
-3 -5 -17 -10 -31 -10 -15 0 -24 -6 -24 -16 0 -14 9 -15 68 -9 37 4 69 11 70
16 2 5 15 9 28 9 13 0 24 4 24 10 0 5 16 13 35 19 18 5 46 21 60 35 14 14 30
26 34 26 13 0 45 33 60 63 8 15 18 27 23 27 4 0 8 6 8 14 0 8 6 16 14 19 8 3
17 24 21 46 4 23 11 41 16 41 5 0 9 14 9 30 0 17 5 30 10 30 6 0 10 37 10 90
0 53 -4 90 -10 90 -5 0 -10 16 -10 35 0 19 -4 35 -10 35 -5 0 -10 7 -10 16 0
37 -24 94 -42 99 -10 4 -18 13 -18 21 0 8 -9 23 -20 34 -11 11 -20 25 -20 30
0 6 -5 10 -10 10 -6 0 -21 10 -33 23 -12 13 -30 26 -39 30 -10 3 -18 11 -18
17 0 5 -9 10 -19 10 -11 0 -26 7 -35 15 -9 9 -50 19 -108 25 -107 11 -130 11
-215 -2z"
        />
        <path
          d="M580 939 c0 -4 -12 -12 -27 -17 -16 -6 -22 -11 -15 -11 36 -3 -15
-61 -53 -61 -13 0 -25 -7 -29 -15 -3 -8 -15 -15 -26 -15 -28 0 -15 -20 13 -21
15 0 17 -2 7 -6 -35 -14 -68 -83 -39 -83 7 0 21 -7 31 -17 10 -9 18 -11 18 -5
0 7 9 7 30 -1 25 -9 33 -9 47 6 16 16 16 17 0 17 -9 0 -17 5 -17 10 0 6 14 10
30 10 37 0 39 -20 5 -46 -30 -23 -31 -31 -4 -39 24 -8 59 19 59 45 0 21 -31
50 -53 50 -21 0 -33 20 -17 30 7 4 9 13 6 19 -4 6 0 11 8 11 9 0 16 -7 16 -15
0 -36 99 7 119 52 11 25 11 29 -8 41 -15 11 -19 21 -14 42 5 28 4 28 -41 28
-25 -1 -46 -5 -46 -9z"
        />
        <path
          d="M350 600 c0 -5 5 -10 10 -10 6 0 10 -6 10 -14 0 -8 8 -16 18 -19 9
-2 4 -3 -13 -3 -28 1 -30 -1 -27 -29 2 -16 8 -42 15 -57 10 -24 17 -28 56 -28
42 0 43 1 37 28 -5 22 -4 24 4 10 15 -24 26 -23 26 2 0 12 -7 20 -18 20 -14 0
-16 6 -11 35 5 29 1 40 -16 56 -21 20 -23 20 -35 4 -11 -16 -14 -16 -28 -1
-19 18 -28 20 -28 6z"
        />
      </g>
    </svg>
  );
}
