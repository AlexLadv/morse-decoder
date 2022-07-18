const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
  
function decode(expr) {

  let morseArr = [];
  for (let i = 0; i < expr.length; i = i + 10) {
      morseArr.push(expr.slice(i, i + 10));
  }
  let result = morseArr.map((item) => {
    let freeBits = item.replace(/00/g, '')
                       .replace(/10/g, '.')
                       .replace(/11/g, '-')
                       .replace('**********', ' ')
    if (MORSE_TABLE.hasOwnProperty(freeBits)) {
      return MORSE_TABLE[freeBits];
    } else {
      return freeBits;  
    }

  });  
  return result.join('')
}

module.exports = {
    decode
}