const main = () => {
    const sentence = document.getElementById("sentence").value.toLocaleLowerCase()
    const sentence_list = sentence.split(" ");
    out_reverse = reverse(sentence_list);
    document.getElementById("result").innerText = `Output: ${out_reverse}`;

    out_count_char = count_char(sentence)
    let result2 = "Cümlede Geçen Karakterlerin Tekrar Sayısı:\n";
    for (let i = 0; i < out_count_char.length; i++) {
        let element = out_count_char[i];
        result2 += `${element[0]} => ${element[1]} adet\n`;
        
    }
    document.getElementById("result2").innerText = `${result2}`;
}

const reverse = (sentence_list) => {
    
    var sentence_list_copy = [...sentence_list]
    var front = 0;
    var rear = sentence_list_copy.length - 1;
    var result = true
    while (front < rear) {
        first = sentence_list_copy[front];
        second = sentence_list_copy[rear];
        sentence_list_copy[front] = second;
        sentence_list_copy[rear] = first
        front++;
        rear--;
    }

    const conjunctions = ["ama", "ve", "veya", "göre", "ile", "yalnız", "ise", "ne", "nasıl", "ancak", "çünkü", "neden", "oysa", "için"];
    for (let i = 0; i < sentence_list_copy.length; i++) {
        for (let j = 0; j < conjunctions.length; j++) {
            if (sentence_list_copy[i] == conjunctions[j]){
                sentence_list_copy[i] = sentence_list_copy[i].split("").reverse().join("");
            }
            
        }
        
    }
    var out = "";
    for (let i = 0; i < sentence_list_copy.length; i++) {
        out += sentence_list_copy[i] +" ";
        
    }
    return out;
}

const count_char = (sentence) => {
    const chars = sentence.split("");
    let counted_chars = [ ];
    
    for (let i = 0; i < chars.length; i++) {
        let isExist = false
        for (let j = 0; j < counted_chars.length; j++) {
            if(chars[i] === counted_chars[j][0]){
                counted_chars[j][1]++;
                isExist = true;
            }
            
        }
        if(isExist === false){
            counted_chars.push([chars[i],1])
        }
    }
    const out = sort_by_key(counted_chars).splice(1,counted_chars.length);
    return out;
}

function sort_by_key(array)
{
 return array.sort(function(a, b)
 {
  var x = a[0]; var y = b[0];
  return ((x < y) ? -1 : ((x > y) ? 1 : 0));
 });
}