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
  static QURO = "quro";
  static STR_DELIM = "string";
}

class IsType {
  static number(char) {
    return !!char.match(/\d/);
  }
  static quro(char) {
    return elements.includes(char);
  }
  static str_delim(char) {
    return char == '"';
  }
  static unic(char) {
    return unics.includes(char);
  }
}

function tokenize(code) {
  var current_num = false;
  var current_str = false;
  var current_dec = false;

  var number = "";
  var string = "";
  var decimal = "";
  var tokens = [];

  for (let char of code) {
    if (!IsType.number(char)) {
      if (char == DEC) {
        decimal += number + ".";

        current_dec = true;
        current_num = false; // so the next digits get added to `number`
        number = "";
      } else if (current_dec) {
        decimal += number;
        if (decimal.startsWith(".")) {
          decimal = "0" + decimal;
        }
        if (decimal.endsWith(".")) {
          decimal += "5";
        }

        tokens.push(new Token(TokenType.NUMBER, parseFloat(decimal)));
        current_dec = current_num = false;
        number = decimal = "";
      } else if (current_num) {
        tokens.push(new Token(TokenType.NUMBER, parseInt(number)));
        current_num = false;
        number = "";
      }
    }

    if (!IsType.str_delim(char) && current_str) {
      string += char;
    } else if (IsType.quro(char)) {
      tokens.push(new Token(TokenType.QURO, char));
    } else if (IsType.number(char)) {
      number += char;
      if (!current_num) {
        current_num = true;
      }
    } else if (IsType.str_delim(char)) {
      if (!current_str) {
        current_str = true;
      } else {
        tokens.push(new Token(TokenType.STRING, string, (string = true)));
        current_str = false;
        string = "";
      }
    }
  }

  if (current_dec) {
    decimal += number;
    if (decimal.startsWith(".")) {
      decimal + "0" + decimal;
    }
    if (decimal.endsWith(".")) {
      decimal += "5";
    }

    tokens.push(new Token(TokenType.NUMBER, parseFloat(decimal)));
  } else if (current_num) {
    tokens.push(new Token(TokenType.NUMBER, parseInt(number)));
  }

  if (current_str) {
    tokens.push(new Token(TokenType.STRING, string, (string = true)));
  }

  return tokens;
}

// console.log(tokenize("123 234 "))
