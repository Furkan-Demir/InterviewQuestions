def sentence_reverse(sentece):
    sentece_list = sentece.split(" ")
    sentece_list = sentece_list[::-1]
    
    conjunctions = ["ama", "ve", "veya", "göre", "ile", "yalnız", "ise", "ne", "nasıl", "ancak", "çünkü", "neden", "oysa", "için"]
    for conjunction in conjunctions:
        if conjunction in sentece_list:
            conj_index = sentece_list.index(conjunction)
            sentece_list[conj_index] = conjunction[::-1]
    out = ''
    for word in sentece_list:
        out += " "+ word 
    return out[1:] ## Baştaki boşluktan dolayı 1. indisten itibaren döndürüyorum
    #return " ".join(sentece_list) # easy way

def sentence_lowercase(sentece):
    sentece = sentece.replace("İ","i") 
    sentece = sentece.replace("I","ı")
    sentece = sentece.lower()
    return sentece

def count_character(sentence):
    characters = []
    for letter in sentence:
        isExist = False
        for character in characters:
            if character[0] == letter:
                character[1] += 1
                isExist = True
        if isExist == False:
            characters.append([letter,1])
    out_list = sorted(characters,key=lambda x: x[0])[1:]
    out_string = 'Cümlede Geçen Karakterlerin Tekrar Sayısı:\n'

    for i in out_list:
        out_string += f'{i[0].upper()} => {i[1]} adet \n'
    return out_string

if __name__ == '__main__':
    inp = input("Input: ")
    normalize_input = sentence_lowercase(inp)
    out = sentence_reverse(normalize_input)
    out2 = count_character(normalize_input)
    print(f'Output: {out}')
    print(f'{out2}')
    