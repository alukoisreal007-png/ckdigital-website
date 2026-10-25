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

// ============================================================
// Interactive Eyeball Tracking (Dark Sclera & Illuminated Pupil)
// ============================================================
(function initEyeballTracking() {
  var sclera = document.getElementById("sclera");
  var pupil = document.getElementById("pupil");
  var hero = document.querySelector(".hero");
  if (!sclera || !pupil || !hero) return;

  // Respect user preference for reduced motion
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (prefersReducedMotion && prefersReducedMotion.matches) return;

  var isMouseOver = false;
  var rafId = null;

  hero.addEventListener("mousemove", function (e) {
    if (!isMouseOver) {
      isMouseOver = true;
      pupil.style.animation = "none";
    }

    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(function () {
      var rect = sclera.getBoundingClientRect();
      var centerX = rect.left + rect.width / 2;
      var centerY = rect.top + rect.height / 2;

      var dx = e.clientX - centerX;
      var dy = e.clientY - centerY;
      var dist = Math.sqrt(dx * dx + dy * dy);
      var angle = Math.atan2(dy, dx);

      // Travel boundaries within the dark sclera
      var maxTravelX = (rect.width / 2) - 30;
      var maxTravelY = (rect.height / 2) - 24;
      var travelFactor = Math.min(dist / 380, 1);

      var moveX = Math.cos(angle) * maxTravelX * travelFactor;
      var moveY = Math.sin(angle) * maxTravelY * travelFactor;

      pupil.style.transform = "translate(" + moveX.toFixed(1) + "px, " + moveY.toFixed(1) + "px)";
    });
  });

  hero.addEventListener("mouseleave", function () {
    isMouseOver = false;
    pupil.style.transform = "translate(0px, 0px)";
    pupil.style.animation = "pupilIdleGlance 8s ease-in-out infinite";
  });
})();

// ============================================================
// Scroll-Driven Rise & Zoom Viewport Reveals
// ============================================================
(function initScrollReveals() {
  // If user prefers reduced motion, elements remain fully visible
  var prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  var selector = ".trust-bar, .sec .lab, .sec h2, .lead, .leak-item, .bento-card, .mag-row, .step, .wide, details, .cta, .reveal-on-scroll";
  var elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  // Progressive enhancement: add reveal class dynamically
  elements.forEach(function (el) {
    el.classList.add("reveal-on-scroll");
  });

  // Graceful fallback for older browsers without IntersectionObserver
  if (!("IntersectionObserver" in window)) {
    elements.forEach(function (el) { el.classList.add("is-revealed"); });
    return;
  }

  var observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        obs.unobserve(entry.target); // Lock in place once revealed
      }
    });
  }, {
    root: null,
    rootMargin: "0px 0px -8% 0px", // Fires as soon as 8% of the element enters view
    threshold: 0.08
  });

  elements.forEach(function (el) {
    observer.observe(el);
  });
})();
