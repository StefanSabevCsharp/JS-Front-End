function oddPrinter(string) {

    let array = string.split(" ").map(w => w.toLowerCase());
    let obj = {};

    for (const word of array) {
        if(obj.hasOwnProperty(word)){
            obj[word]++;
        }else{
            obj[word] = 1;
        }
    }

    let sorted = Object.entries(obj).filter(w => w[1] % 2 !== 0);
    
    let result = [];
    for (const [key,value] of sorted) {
        result.push(key);
    }
    console.log(result.join(" "));
}

oddPrinter("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
