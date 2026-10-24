# CKDIGITAL - Official Agency Website (Modernized & Humanized Edition)

A high-converting, humanized website for **CKDIGITAL**, Nigeria's premier web design and digital strategy agency established in 2011.

---

## 🌟 What This Modernized Build Delivers
- **13+ Years & 450+ Projects Track Record:** Showcases real enterprise case studies including **Vitafoam PLC, Red Star Express PLC, SIFAX Group, FMDQ OTC, and First E&P**.
- **Humanized, Anti-Slop Copy:** Written strictly under the *Humanizer* and *GetPaid* frameworks—eliminating agency buzzwords ("seamless, cutting-edge, unparalleled") and replacing them with clear, conversion-driven business outcomes.
- **Conversion Mechanisms:**
  - **30-Minute Free Strategy Session:** High-intent lead capture routing straight to CKDigital's official WhatsApp (`0703 815 1723`) and email (`sales@ckdigital.net`).
  - **The Ultimate Website Conversion Checklist:** Lead magnet capturing inbound prospects.
  - **The 4-Second Test Audit Section:** Explaining to visitors exactly why typical websites fail to convert.
- **Ultra-Fast & Mobile-Responsive:** Pure HTML5, CSS3, and vanilla JavaScript with zero framework bloat, optimized for Nigerian 3G/4G networks.

---

## 🚀 Live Preview Locally
Open `index.html` in any browser, or start a local server:
```bash
python -m http.server 8080
```
Then visit: `http://localhost:8080`

---

## 🌐 Deploy to GitHub & GitHub Pages

### 1. Commit Local Changes
```bash
cd "C:\Users\user\OneDrive\Desktop\agency-website"
git add .
git commit -m "feat: complete CKDIGITAL official humanized agency website"
```

### 2. Push to GitHub
Create a new repository on your GitHub account ([github.com/new](https://github.com/new)) named `ckdigital-website`, then run:
```bash
git remote add origin https://github.com/alukoisreal007-png/ckdigital-website.git
git branch -M main
git push -u origin main
```

### 3. Activate Free GitHub Pages
1. On GitHub, navigate to **Settings > Pages**.
2. Set the Source branch to `main` and folder to `/ (root)`.
3. Click **Save**. Your site will be live at `https://alukoisreal007-png.github.io/ckdigital-website/`.

---

## ☁️ Deploy to Google Cloud Console (Cloud Run)

The repository includes the production `Dockerfile` and `nginx.conf`:

```bash
# 1. Login to Google Cloud
gcloud auth login

# 2. Deploy directly to Cloud Run
gcloud run deploy ckdigital-website \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```
Cloud Run will automatically build the container and provide a live HTTPS URL.
