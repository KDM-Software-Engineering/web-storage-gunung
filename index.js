const gunung = [
  {
    nama: "Kerinci",
    provinsi: "Jambi",
    tinggi: 1754,
    gunungBerapi: true,
    urlGambar: 'https://datagunung.com/images/Kerinci.webp'
  },
  {
    nama: "Rinjani",
    provinsi: "Nusa Tenggara Barat",
    tinggi: 163,
    gunungBerapi: true,
    urlGambar: 'https://datagunung.com/images/Rinjani.webp'
  },
  {
    nama: "Prau",
    provinsi: "Jawa Tengah",
    tinggi: 2590,
    gunungBerapi: false,
    urlGambar: 'https://datagunung.com/images/Prau.webp'
  }
]


const tampilData = () => {
  document.getElementById('dataHolder')

  for (let item of gunung) {
    document.getElementById('dataHolder').innerHTML += `<div class="col-4">
            <div class="card">
              <img src="${item.urlGambar}" class="card-img-top" alt="">
              <div class="card-body">
                <span>Gunung ${item.nama}</span>
              </div>
            </div>
          </div>`
  }
}


tampilData()