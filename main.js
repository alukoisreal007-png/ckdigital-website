// ============================================================
// Addepto Agency - Main JavaScript
// ============================================================

// Replace this with your actual WhatsApp number when ready to receive live leads.
// Format: country code + number, NO '+' or spaces. E.g. "2348012345678"
var WHATSAPP_NUMBER = "2348012345678"; 
var FALLBACK_EMAIL = "hello@addepto.com";

// Auto-update footer copyright year
var yrElem = document.getElementById("yr");
if (yrElem) {
  yrElem.textContent = new Date().getFullYear();
}

// Handle Leak Audit Form Submission
var auditForm = document.getElementById("audit-form");
if (auditForm) {
  auditForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target;
    var name = f.name ? f.name.value.trim() : "";
    var biz = f.biz ? f.biz.value.trim() : "";
    var phone = f.phone ? f.phone.value.trim() : "";
    var pain = f.pain ? f.pain.value.trim() : "Looking to review where my business is leaking time and sales.";

    var msg = "Hi Addepto! I'd like to book a free 45-Minute Leak Audit for my business." +
      "\n\n👤 Name: " + name +
      "\n🏢 Business: " + biz +
      (phone ? "\n📱 Phone: " + phone : "") +
      "\n🔍 Biggest Bottleneck: " + pain;

    var hasValidWhatsApp = WHATSAPP_NUMBER && WHATSAPP_NUMBER.indexOf("X") === -1 && WHATSAPP_NUMBER.length >= 10;

    if (hasValidWhatsApp) {
      window.location.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg);
    } else {
      window.location.href = "mailto:" + FALLBACK_EMAIL +
        "?subject=" + encodeURIComponent("Free Leak Audit Request - " + biz) +
        "&body=" + encodeURIComponent(msg);
    }
  });
}
