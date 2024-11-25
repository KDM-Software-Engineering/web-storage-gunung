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
  const tabelGunung = document.getElementById('tbGunung')
  tabelGunung.innerHTML = ""

  for (let item of gunung) {
    tabelGunung.innerHTML += `<tr>
              <td>${item.nama}</td>
              <td>${item.provinsi}</td>
              <td align="right">${item.tinggi} mdpl</td>
              <td align="center">${item.gunungBerapi ? 'Ya' : 'Tidak'}</td>
              <td><a href="${item.urlGambar}" target="_blank">Link</a></td>
            </tr>`
  }
}

const tambahGunung = () => {
  const nama = document.getElementById('inputNama').value
  const provinsi = document.getElementById('inputProvinsi').value
  const tinggiPuncak = document.getElementById('inputTinggi').value
  const gunungBerapi = document.getElementById('inputGunungBerapi').checked
  const urlGambar = document.getElementById('inputUrlGambar').value

  if (nama == "" || provinsi == "" || tinggiPuncak == "" || urlGambar == "") {
    alert('Lengkapi Data Input')
    return
  }

  const newGunung = {
    nama, provinsi, tinggi: tinggiPuncak, gunungBerapi , urlGambar
  }

  gunung.push(newGunung)
  tampilData()
  resetForm()
}


const resetForm = () => {
  document.getElementById('inputNama').value = ""
  document.getElementById('inputProvinsi').value = ""
  document.getElementById('inputTinggi').value = ""
  document.getElementById('inputGunungBerapi').checked = false
  document.getElementById('inputUrlGambar').value = ""
}

const init = () => {
  tampilData()
}

init()