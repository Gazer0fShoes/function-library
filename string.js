/*
CONTENTS (ctrl + f)

Camelize - converts kebab-case > camelCase
*/

// CAMELIZE
function camelize (array) {
    if (typeof(array) !== "string" 
    || array.includes(" ") 
    || !(array.includes( "-"))) {
        alert("please enter a single word in kebab-case.");
        return;
    }
    return array.toLowerCase().split("-")
        .map( ( word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join("");
    }