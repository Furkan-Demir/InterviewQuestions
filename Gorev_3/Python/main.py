import requests
def main(ip):
    req = requests.get(f'http://ip-api.com/json/{ip}')
    res = req.json()
    try:
        return f'ip: {res["query"]}\nlatitude: {res["lat"]}\nlongitude: {res["lon"]}\ncountry: {res["country"]}'
    except:
        return f'Status: {res["status"]}! Message: {res["message"]}'

if __name__ == '__main__':
    inp = input('IP Adres Giriniz: ')
    print(main(inp))