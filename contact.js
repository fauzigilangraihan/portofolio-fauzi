(function () {
  emailjs.init("SRGY3CpF43jHGBqjK");
})();

function sendEmail(e) {
  e.preventDefault();
  const notif = document.getElementById("notification");

  emailjs.sendForm('service_3r6nyir', 'template_vhrlfcd', e.target)
    .then(() => {
      notif.innerText = "✅ Pesan berhasil dikirim!";
      notif.className = "custom-notification success";
      notif.style.display = "block";
      setTimeout(() => {
        notif.style.display = "none";
      }, 3000);
    }, (error) => {
      notif.innerText = "❌ Gagal mengirim pesan!";
      notif.className = "custom-notification error";
      notif.style.display = "block";
      setTimeout(() => {
        notif.style.display = "none";
      }, 3000);
    });
}
