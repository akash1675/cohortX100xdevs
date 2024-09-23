// ------x----------
// anagram 

function isAnagram(str1, str2){
    const arr1 = str1.split("");
    arr1.sort();
    const sortedStr1 = arr1.join("");

    const arr2 = str2.split("");
    arr2.sort();
    const sortedStr2 = arr2.join("");

    if(sortedStr1==sortedStr2)return true;
    else return false;
}

console.log(isAnagram("rahuls", "rahul"))
