let str = prompt(`Enter Sentence : `);

function cntVowels(str) {
    let vowels = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            vowels++;
        }
    }
    return vowels;
}

alert(`Total Vowels : ${cntVowels(str)}`);