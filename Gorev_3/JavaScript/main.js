
const getLocation = async () => {
    const ip = document.getElementById("ip").value
    await axios.get(`http://ip-api.com/json/${ip}`)
    .then(function (res) {
        if(res.data.status === 'fail'){
            throw 'IP Adresi Geçerli Değil'
        }
        let out = `ip: ${res.data.query}\nlatitude: ${res.data.lat}\nlongitude: ${res.data.lon}\ncountry: ${res.data.country}`;
        document.getElementById("result").innerText = `${out}`;
        console.log(res);
    })
    .catch(function (res) {
        // handle error
        document.getElementById("result").innerText = `${res}`;
    })
    .then(function () {
        // always executed
    });
}