function extractText() {
    let elements = document.querySelectorAll("li");
    let arr = [];
    for (const iterator of elements) {
        arr.push(iterator.textContent);
    }
    let result = document.getElementById("result");
    result.textContent = arr.join('\n');
}