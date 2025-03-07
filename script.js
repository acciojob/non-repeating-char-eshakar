function firstNonRepeatedChar(str) {
 // Write your code here
	let frequencyMap = [];

	for(let i = 0; i < str.length; i++){
		let char = str[i];
		if (char in frequencyMap) {
			frequencyMap[char] += 1;
		} else {
			frequencyMap[char] = 1;
		}
	}
	
	for(let i = 0; i < str.length; i++){
        if(frequencyMap[str[i]] === 1){
            return str[i];
        }
    }

    return null;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
