
const arr = [0,1,3,4,5,6,7,8,9,10]
console.log(arr)
for (i=20;i>0;i--) {
    document.write(""+i+"<br> ");

    if (i>7) {
        document.write("");
    }
    else if (i>4) {
        document.write("");
    }
    else {
        document.write("");
    }
}
if (arr === 'зеленый') {
    console.log('идти');
} else if (arr === 'желтый') {
    console.log('жди');
} else if (arr === 'красный') {
    console.log('стой');
}