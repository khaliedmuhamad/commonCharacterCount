function commonCharacterCount(s1, s2) {
    let s1Arr = s1.split(''),
        s2Arr = s2.split(''),
        count = 0 ;
  for(let i = 0; i < s1Arr.length; i++ ){
    if(s2Arr.indexOf(s1Arr[i]) !== -1){
                s2Arr.splice(s2Arr.indexOf(s1[i]),1);             
                count++;  
            }
  }
  return count;
}

console.log(commonCharacterCount("aabcc", "adcaa"))
