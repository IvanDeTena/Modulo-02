# Módulo-02   :lemon:

**Bootcamp JS 2 - Tipos de datos y Operadores**

En JavaScript, los tipos de datos se dividen en dos categorías principales: primitivos y objetos.

## Tipos Primitivos

### :one: **Number**:
Representa tanto números enteros como decimales. Ejemplo: `42`, `3.14`.

### :two: **String**:
Representa secuencias de caracteres. Ejemplo: `"Hola, mundo"`, `'JavaScript'`.

### :three: **Boolean**:
Solo tiene dos valores: `true` o `false`.

### :four: **Undefined**:
Indica que una variable ha sido declarada pero no ha sido asignada aún. Ejemplo: `let x;` (x es `undefined`).

### :five: **Null**:
Representa la ausencia intencional de valor. Ejemplo: `let y = null;`.

### :six: **Symbol**:
Representa un identificador único y no modificable. Ejemplo: `Symbol('desc')`.

### :seven: **BigInt**:
Representa números enteros grandes que no pueden ser representados con el tipo `Number`. Ejemplo: `9007199254740991n`.

## Tipos de Objetos

### :one: **Object**:
Representa colecciones de datos y entidades más complejas. Ejemplo: `{ nombre: "Juan", edad: 30 }`.

### :two: **Array**:
Tipo especial de objeto que representa una lista ordenada de valores. Ejemplo: `[1, 2, 3]`.

### :three: **Function**:
Es un objeto que se puede invocar. Ejemplo: `function saludar() { console.log("Hola"); }`.

### :four: **Date**:
Representa fechas y horas. Ejemplo: `new Date()`.

### :five: **RegExp**:
Representa expresiones regulares para buscar y manipular texto. Ejemplo: `/^a/` (una expresión regular para buscar una 'a' al inicio de una cadena).

Cada tipo de dato tiene sus propias características y métodos asociados que permiten manipularlos y utilizarlos de diversas formas en el lenguaje.

## 🧮 Operadores Aritméticos

- `+` : Suma
- `-` : Resta
- `*` : Multiplicación
- `/` : División
- `%` : Módulo (resto de una división)
- `**` : Exponenciación (potencia)

## 🔢 Operadores de Asignación

- `=` : Asignación simple
- `+=` : Asignación con suma (x += 5 es equivalente a x = x + 5)
- `-=` : Asignación con resta
- `*=` : Asignación con multiplicación
- `/=` : Asignación con división
- `%=` : Asignación con módulo

## 🔄 Operadores de Comparación

- `==` : Igualdad (sin tipo de datos)
- `===` : Igualdad estricta (con tipo de datos)
- `!=` : Desigualdad (sin tipo de datos)
- `!==` : Desigualdad estricta (con tipo de datos)
- `>` : Mayor que
- `<` : Menor que
- `>=` : Mayor o igual que
- `<=` : Menor o igual que