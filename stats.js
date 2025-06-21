const bodymain2 = document.getElementById("bodymain2")

const gambar = document.getElementById("gambar")
const judul = document.getElementById("judul")
const deskripsi = document.getElementById("deskripsi")
const gambargrafik = document.getElementById("gambargrafik")
const asm = document.getElementById("asm")
const asd = document.getElementById("asd")
const rating = document.getElementById("rating")
const apm = document.getElementById("apm")
const net = document.getElementById("net")
const sdetail = document.getElementById("sdetail")
const grafik = document.getElementById("grafik")
const bagian1 = document.getElementById("bagian1")

let tabel = []

function kapitalisasi(value) {
    let newone = "";
    newone = value.charAt(0).toUpperCase() + value.slice(1);
    return newone;
}

function clicko(banh) {
    banh.addEventListener("click", () => {
        bodymain2.style.display = "block"
        fetch('./stats.json')
            .then(response => response.json())
            .then(data => {  
            data.forEach(element => {
                if(element.produk == banh.getAttribute("id")) {
                console.log()
                gambar.src = element.gambar
                judul.innerHTML = kapitalisasi(element.produk) + " / Rp" + element.harga
                deskripsi.innerHTML = element.desc
                asm.innerHTML = element.asm
                asd.innerHTML = element.asd
                rating.innerHTML = element.rating
                apm.innerHTML = element.apm
                net.innerHTML = element.net
                gambargrafik.src = element.grafik
                sdetail.style.backgroundColor = element.warna
                grafik.style.backgroundColor = element.warna
                bagian1.style.backgroundColor = element.warna                
            }});
         });
    });

}

clicko(document.getElementById("nabati"));
clicko(document.getElementById("matcha"));
clicko(document.getElementById("chocolatos"));
clicko(document.getElementById("coca-cola"));
clicko(document.getElementById("gorengan"));
clicko(document.getElementById("aqua")); 
clicko(document.getElementById("sosis Hotang"));
clicko(document.getElementById("indomie Goreng"));
clicko(document.getElementById("teh Botol"));
clicko(document.getElementById("yupi"));
clicko(document.getElementById("donat"));
clicko(document.getElementById("makaroni"));
clicko(document.getElementById("chitato"));