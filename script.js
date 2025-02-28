function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let str = s1.toLowerCase();
	let substr = s2.toLowerCase();
	for(let i = 0;i<str.length - substr.length;i++){
        let found = true;
	for(let j=0;j<substr.length;j++){
		if(str[i+j] !== substr[j]){
			found = false;
			break;
		}
	}
		if(found) return i;
    }
	return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
