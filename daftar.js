document
.getElementById("formDaftar")
.addEventListener("submit", function(e){

e.preventDefault();

const peserta = {

nama:
document.getElementById("nama").value,

email:
document.getElementById("email").value,

nim:
document.getElementById("nim").value,

workshop:
document.getElementById("workshop").value

};

let dataPeserta =
JSON.parse(
localStorage.getItem("peserta")
) || [];

dataPeserta.push(peserta);

localStorage.setItem(
"peserta",
JSON.stringify(dataPeserta)
);

alert("Pendaftaran berhasil!");

this.reset();

window.location.href =
"login.html";

});