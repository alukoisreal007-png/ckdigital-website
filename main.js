// ============================================================
// CKDIGITAL Official Website - Client Lead Routing Script
// ============================================================

// CKDIGITAL Official Contact Routing
var WHATSAPP_NUMBER = "2347038151723"; // Official CKDigital line: 0703 815 1723
var FALLBACK_EMAIL = "sales@ckdigital.net";

// Auto-update footer copyright year
var yrElem = document.getElementById("yr");
if (yrElem) {
  yrElem.textContent = new Date().getFullYear();
}

// Handle 30-Minute Strategy Session Form
var auditForm = document.getElementById("audit-form");
if (auditForm) {
  auditForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target;
    var name = f.name ? f.name.value.trim() : "";
    var biz = f.biz ? f.biz.value.trim() : "";
    var phone = f.phone ? f.phone.value.trim() : "";
    var pain = f.pain ? f.pain.value.trim() : "Interested in discussing a website design or conversion project.";

    var msg = "Hi CKDIGITAL! I would like to book a 30-Minute Web Strategy Session." +
      "\n\n👤 Name: " + name +
      "\n🏢 Organization: " + biz +
      (phone ? "\n📱 Phone: " + phone : "") +
      "\n🎯 Project Goals / Challenge: " + pain;

    var useWhatsApp = WHATSAPP_NUMBER && WHATSAPP_NUMBER.indexOf("X") === -1;

    if (useWhatsApp) {
      window.location.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg);
    } else {
      window.location.href = "mailto:" + FALLBACK_EMAIL +
        "?subject=" + encodeURIComponent("30-Minute Web Strategy Request - " + biz) +
        "&body=" + encodeURIComponent(msg);
    }
  });
}

// Handle Free Checklist Download Form
var checkForm = document.getElementById("checklist-form");
if (checkForm) {
  checkForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target;
    var name = f.name ? f.name.value.trim() : "";
    var email = f.email ? f.email.value.trim() : "";

    var msg = "Hi CKDIGITAL! Please send me 'The Ultimate Website Conversion Checklist'." +
      "\n\n👤 Name: " + name +
      "\n📧 Email: " + email;

    window.location.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg);
  });
}
