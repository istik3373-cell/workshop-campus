const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const role =
    document.getElementById("role").value;

    if(role === "admin"){

        alert("Login Admin berhasil!");

        window.location.href =
        "dashboard.html";

    }

    else if(role === "peserta"){

        alert("Login Peserta berhasil!");

        window.location.href =
        "dashboardPeserta.html";

    }

    else{

        alert("Silakan pilih role terlebih dahulu!");

    }

});