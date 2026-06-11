// ALERT HALAMAN
console.log("Halaman Peserta Aktif 🚀");

// SEARCH PESERTA
const searchInput = document.getElementById("searchPeserta");

if(searchInput){

    searchInput.addEventListener("keyup", function(){

        let filter = searchInput.value.toLowerCase();

        let rows = document.querySelectorAll("table tr");

        rows.forEach((row, index)=>{

            if(index === 0) return;

            let text = row.innerText.toLowerCase();

            row.style.display = text.includes(filter)
            ? ""
            : "none";

        });

    });

}
