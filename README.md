# Conversor de Algarismos v.1.0.0

**Esta biblioteca se destina à converter algarismos romanos para arábicos e vice-versa.**
Na versão atual é capaz de converter algarismos romanos de 1 à 9999 para seu equivalente arábico e vice-versa, podendo ser digitado em capslock ou não.

## Como instalar:

```shell

$  npm install convert-numbers-lib-amanda-gomes

```

## Como utilizar:

```node

> const convert = require("convert-numbers-lib-amanda-gomes");

> convert.intToRoman(560);
> // returns DLX

> convert.romanToInt('XX');
> // returns 20


```

## Roadmap oficial do projeto

#### versão 1.0.0 (released)
- funcionalidade: converter algarismos romanos para arábicos e algarismos arábicos para romanos (de 1 à 9999).
- formato da entrada de dados (argumento)/input: algarismos romanos em string (em capslock ou não) e algarismos arábicos em number (sem o "0" na frente, por exemplo: 010).
- formato da saída de dados (retorno)/output: algarismos romanos retorna seu equivalente arábico em number e algarismos arábicos retorna seu equivalente romano em string.