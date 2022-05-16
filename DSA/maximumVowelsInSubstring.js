// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/

// "Geekster", 4
//


var maxVowels = function(s, k) {
    const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    if(s.length < k) {
      return 0;
    }

    let max   = 0;
    let w_ctr = 0;
    let p1 = 0;
    let p2 = 0;
    while(p2 < k) {
      if(vowels.includes(s[p2])) {
        w_ctr++;
      }
      p2++;
    }
    max = w_ctr;


    while(p2 < s.length) {
      if(vowels.includes(s[p2])) {
        w_ctr++;
      }
      if(vowels.includes(s[p1])) {
        w_ctr--;
      }

      max = Math.max(max, w_ctr);

      p1++;
      p2++;
    }

    return max;

};


console.assert(maxVowels("abciiidef", 3) == 3, "First testcase failed");
console.assert(maxVowels("aeiou", 2) == 2, "Second testcase failed");
console.assert(maxVowels("leetcode", 3) == 2, "Third Testcase failed");
console.assert(maxVowels("Geekster", 4) == 2, "Fourth testcase failed");
console.assert(maxVowels("AbhishekDiwate", 4) == 2, "Fifth testcase failed");