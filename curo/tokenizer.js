class Token {
  constructor(name, value, string = false) {
    this.name = name;
    this.value = value;
    this.string = string;
  }
}
Token.prototype.toString = function () {
  if (!this.string) {
    return `Token(${this.value})`;
  } else {
    return `Token("${this.value}")`;
  }
};

class TokenType {
  static NUMBER = "number";
}

class IsType {
  static number(char) {
    return !!char.match(/\d/);
  }
  static element(char) {}
}

function tokenize(code) {
  var current_num = false;
  var number = "";
  var tokens = [];

  for (let char of code) {
    if (!IsType.number(char)) {
      if (current_num) {
        tokens.push(new Token(TokenType.NUMBER, number));
        current_num = false;
        number = "";
      }
    } else {
      number += char;
      if (!current_num) {
        current_num = true;
      }
    }
  }

  if (current_num) {
    tokens.push(new Token(TokenType.NUMBER, number));
  }

  return tokens;
}

// console.log(tokenize("123 234 "));
