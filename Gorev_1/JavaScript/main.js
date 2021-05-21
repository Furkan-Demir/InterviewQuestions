const isEqual = () => {
    const word = document.getElementById("word").value.toLocaleLowerCase().replace(/\s/g, ''); // https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript
    arr = [...word]

    var start = 0;
    var end = arr.length - 1;
    var result = true
    while (start < end) {
        if(arr[start] !== arr[end]){
            result = false
            break
        }
        start++;
        end--;
    }
    document.getElementById("result").innerText = `Result: ${result}`;


}