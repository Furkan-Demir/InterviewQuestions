def main(word):
    # python'da "ı" ve "i" harfi lowercase yapınca hata verdiğinden dolayı elle kendim düzeltiyorum
    word = word.replace("İ","i") 
    word = word.replace("I","ı")
    word = word.replace(" ","")
    word = word.lower() 
    return (word[::-1] == word)

if __name__ == '__main__':
    word = input("Input: ")
    out = main(word)
    print(f"Output: {out}")
    #print("Output:",out)