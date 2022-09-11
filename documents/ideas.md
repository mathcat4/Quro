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
- Sumods: see below

# Sumods
- stands for suffixed modifiers
- can be suffixed to every item to change its action

- Example:
  - `-`  -> Subtraction (default)
  - `-@` -> Remove duplicates
  - `L`  -> Lambda
  - `L%` -> Filter Lambda

# If-Structure
`1Y"Yeah"]"Nah`
```
1Y"Yeah"]"Nah
1                Push 1
 Y      ]       If statement
  "Yeah"         If true, push "Yeah"
         "Nah   If false, push "Nah" (Implicitly end string and if structure)
```

# Fibonacci
`λ+@VS]`
```
λ+]@vS
λ     Lambda
 +]     Add 2 args
   @V   Constant [0, 1]
     S  Generate Infinite Sequence
```