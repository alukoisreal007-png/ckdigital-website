# Addepto - Operations Automation Agency Website

High-converting static landing page designed specifically for Nigerian and emerging-market SME operations automation.

## 🚀 Key Features Built-In
- **The 45-Minute Leak Audit Offer:** Low-friction, high-trust entry hook.
- **Direct WhatsApp Lead Routing:** Form submissions automatically format and push into WhatsApp chats with pre-filled customer qualification.
- **Humanized, Anti-Slop Copy:** Written using the GetPaid and Humanizer frameworks—no corporate fluff, zero tech jargon, focused purely on hours and Naira saved.
- **Zero Build Step:** Native, lightweight, mobile-responsive HTML5, CSS3, and Vanilla JavaScript.

---

## 🛠️ Configuration Before Deployment
In `main.js`:
```javascript
var WHATSAPP_NUMBER = "234XXXXXXXXXX"; // Your WhatsApp number (country code + number, no '+' or spaces)
var FALLBACK_EMAIL = "hello@youragency.com"; // Your fallback business email
```

---

## 💻 Local Preview
Simply open `index.html` in your web browser, or run a local Python web server:
```bash
python -m http.server 8080
```
Then visit: `http://localhost:8080`

---

## 🌐 Deploy to GitHub & GitHub Pages

### 1. Initialize Git and Commit
```bash
cd "C:\Users\user\OneDrive\Desktop\agency-website"
git init
git add .
git commit -m "feat: complete Addepto SME automation landing page"
```

### 2. Push to GitHub
Create a new public or private repository on GitHub (e.g. `addepto-agency`), then run:
```bash
git remote add origin https://github.com/YOUR_USERNAME/addepto-agency.git
git branch -M main
git push -u origin main
```

### 3. Turn on Free GitHub Pages
1. Go to your repository **Settings** on GitHub.
2. Navigate to **Pages** in the left sidebar.
3. Under **Build and deployment > Branch**, select `main` and `/ (root)`.
4. Click **Save**. Your website will be live in 60 seconds at `https://YOUR_USERNAME.github.io/addepto-agency/`.

---

## ☁️ Deploy to Google Cloud Console (Cloud Run)

The included `Dockerfile` and `nginx.conf` are pre-configured for Google Cloud Run:

```bash
# 1. Authenticate with Google Cloud
gcloud auth login

# 2. Set your Google Cloud project
gcloud config set project YOUR_PROJECT_ID

# 3. Deploy directly with Cloud Build & Cloud Run
gcloud run deploy addepto-agency \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```
Cloud Run will automatically build the container and provide you with a live HTTPS URL (e.g. `https://addepto-agency-xyz.a.run.app`).

---

## 🔥 Deploy to Firebase Hosting (Google Cloud)
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```
