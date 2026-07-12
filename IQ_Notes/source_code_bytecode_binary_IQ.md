# Source Code vs Bytecode vs Binary Code

**Example file:** `01_helloworld.js` → `console.log("Hello World!!");`

| Aspect | Source Code | Bytecode | Binary Code (Machine Code) |
|--------|-------------|----------|----------------------------|
| **What it is** | Human-readable code you write | Intermediate representation between source & machine code | 0s and 1s the CPU executes directly |
| **Example** | `console.log("Hello World!!");` | `get_prop r0, console, "log"` `push r1, "Hello World!!"` `call r0, 1` | `10110000 00000001 01111000 10000100 ...` |
| **Readability** | Readable by humans | Semi-readable (mnemonics/opcodes) | Not readable by humans |
| **Who/What processes it** | You (the developer) | Interpreter/VM (e.g., V8, JVM, CPython) | CPU hardware |
| **Execution speed** | Slowest (interpreted directly) | Faster than source, slower than binary | Fastest |
| **Example tooling** | VS Code, any text editor | V8 Ignition (JS), JVM (Java), CPython (Python) | x86/ARM CPU, assembler |
| **How JS reaches it** | You write it → | V8's Ignition compiler parses source → bytecode | TurboFan (V8) compiles hot bytecode → native machine code |
| **Portability** | Portable (same code, many OS/CPUs) | Portable (same bytecode, any platform with the right VM) | NOT portable (tied to CPU architecture: x86 vs ARM) |
| **Storage** | `.js` files (text) | Memory during execution (not persisted for JS) | `.exe` / `.out` / CPU registers |

## Key Takeaway for JavaScript

Unlike C/C++ which compile directly to binary, JavaScript goes through:

1. **Source Code** → You write `.js` files in a text editor
2. **Bytecode** → V8's Ignition interpreter parses source and generates bytecode at runtime (in memory)
3. **Binary (Machine Code)** → V8's TurboFan JIT compiler identifies "hot" (frequently executed) bytecode and compiles it to native CPU instructions for maximum speed

The bytecode and binary stages happen entirely at runtime inside the JavaScript engine — they are never saved to disk as files.
