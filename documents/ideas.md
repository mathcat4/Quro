This just a file to note down my ideas.
# Quora
- uses 7-bit character set
- stack-based language
# Terms
- Elements: Usually known as functions, take input from the stack, and return output to the stack
  - E.g.: Addition, Print, Ring Translate, etc.
- Unics: Either control structures which specify the flow of controls or special (unique) characters
  - E.g.: If structure, while loop, lambda, etc.
- Items: Every character in the codepage
- Sumod: see below

# Sumod
- stands for suffixed modifier
- can be suffixed to every item to change its action

- Example:
  - `-`  -> Subtraction (default)
  - `-S` -> Remove duplicates
  - `L`  -> Lambda
  - `LS` -> Filter Lambda

# If statements
`1Y"Yeah"]"Nah"]`
<code>
1I"Yeah"]"Nah"]
1                Push 1
 I      ]     ]  If statement
  "Yeah"         If true, push "Yeah"
         "Nah"   If false, push "Nah"
</code>

# Fibonacci
`λ+cVS]`
<code>
λ+cvS]
λ    ] Lambda
 +     Add 2 args
  @V   Constant [0, 1]
    S  Generate Infinite Sequence
</code>