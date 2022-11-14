var dataLaundry = [];

function ribuan(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function showLaundry() {
  var listLaundry = document.getElementById("list-Laundry");
  listLaundry.innerHTML = "";
  var totalText = document.getElementById("total");
  totalText.innerHTML = 0;
  totalHarga = 0;
  dataLaundry.map((data, i) => {
    var btnEdit = `<a class="btnEdit" href='#' onclick='editLaundry(${i})'>Edit</a>`;
    var btnHapus = `<a class="hapusLaundry" href='#' onclick='hapusLaundry(${i})'>Hapus</a>`;
    var harga = 0;
    var hargaAwal = 0;

    if (data.jenisLaundry == "pakaian") {
      harga = data.berat * 10000;
    } else if (data.jenisLaundry == "selimut") {
      harga = data.berat * 20000;
    } else if (data.jenisLaundry == "karpet") {
      harga = data.berat * 30000;
    }

    listLaundry.innerHTML += `<ul class="form"> ${data.jenisLaundry}, ${data.berat}kg, ${
      hargaAwal !== 0 ? `<s class="form">Rp.${ribuan(hargaAwal)},-</s><b class="form">Rp.${ribuan(harga)},-</b>` : `Rp.${ribuan(harga)},-`
    }  ${btnEdit} ${btnHapus}`;
    totalHarga += harga;
  });
  totalText.innerHTML = `Rp.${ribuan(totalHarga)},-`;
}

function tambahLaundry() {
  var namaLaundry = document.querySelector("input[name=Laundry]");
  var beratLaundry = document.querySelector("input[name=berat]");
  if (namaLaundry.value == "pakaian" || namaLaundry.value == "selimut" || namaLaundry.value == "karpet") {
    dataLaundry.push({
      jenisLaundry: namaLaundry.value,
      berat: beratLaundry.value,
    });
    showLaundry();
  } else {
    alert('Hanya bisa memasukan data "pakaian", "selimut", dan "karpet"');
  }
}

function editLaundry(id) {
  var namaLaundryBaru = prompt("Jenis Laundry", dataLaundry[id].jenisLaundry);
  var beratLaundryBaru = prompt("Berat Laundry", dataLaundry[id].berat);

  dataLaundry[id].jenisLaundry = namaLaundryBaru;
  dataLaundry[id].berat = beratLaundryBaru;
  showLaundry();
}

function hapusLaundry(id) {
  dataLaundry.splice(id, 1);
  showLaundry();
}

showLaundry();
