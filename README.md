# 🔒 SecureHeaders Checker — Browser Extension



A powerful browser extension for developers to analyze and evaluate website security headers in real time.

---

## 🌟 Overview

**SecureHeaders Checker** is a comprehensive browser extension for web developers, security professionals, and anyone curious about web security. It provides instant analysis of critical security headers—**COOP** (Cross-Origin Opener Policy), **COEP** (Cross-Origin Embedder Policy), and **CORP** (Cross-Origin Resource Policy)—plus other best-practice headers.



---

## ✨ Key Features

- 🚀 **Real-time Analysis:** Instantly check security headers of the active tab  
- 📊 **Comprehensive Reports:** Pass/Warn/Fail with reasoning and “how to fix”  
- 🌍 **Multilingual Support:** i18n-ready UI with multiple locales  
- 📄 **Export Functionality:** Download JSON and Markdown audit reports  
- 🎯 **Developer-Focused:** Lightweight, no external services, built by devs for devs  
- 🔍 **Educational Content:** Inline “What/Why/How” per header

---

## 🛠️ Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **APIs:** Chrome Extension APIs (MV3)
- **Architecture:** Manifest V3 compliant (Service Worker + Popup + Options + DevTools)
- **Security:** Strict **Content Security Policy (CSP)** for extension pages

---

## 📋 What It Checks

| Header Type          | Description                           | Security Impact                                              |
|----------------------|---------------------------------------|--------------------------------------------------------------|
| **COOP**             | Cross-Origin Opener Policy            | Prevents cross-origin attacks via window references          |
| **COEP**             | Cross-Origin Embedder Policy          | Controls embedding of cross-origin resources                 |
| **CORP**             | Cross-Origin Resource Policy          | Protects resources from unauthorized cross-origin embedding  |
| **CSP**              | Content Security Policy               | Prevents XSS and injection attacks                           |
| **HSTS**             | HTTP Strict Transport Security        | Enforces secure HTTPS connections                            |
| **X-Frame-Options**  | Frame embedding protection            | Prevents clickjacking attacks                                |

---
## 💻 Usage

1. Navigate to any website you want to analyze.
2. Click the **SecureHeaders Checker** extension icon.
3. Review the instant security header analysis (pass / warn / fail).
4. Learn from the educational content provided for each header (What / Why / How to fix).
5. Export detailed reports (JSON / Markdown) for documentation or compliance.

### Example Use Cases
- **Security Audits:** Quickly assess a site’s security posture.
- **Development:** Verify headers during local development and staging.
- **Learning:** Understand web security best practices with inline explainers.
- **Compliance:** Generate reports for security documentation and reviews.

---


## 🔧 Development

### Prerequisites
- **Chrome Browser** (latest version)
- **Basic JavaScript (ES6+)** and **Chrome Extension APIs**
- **Text editor/IDE** (VS Code recommended)

### Key Files Explained
- **`manifest.json`** — Defines extension metadata, permissions, and MV3 configuration.
- **`background.js`** — Background service worker; manages lifecycle events and background processes.
- **`popup.html`** — UI displayed when the extension icon is clicked.
- **`popup.js`** — Core logic for header analysis, rendering results, and report generation.
  <p align="center">
  <img src="assets/screenshot-popup.png" alt="SecureHeaders Checker — Popup UI" width="720"> 
  </p>
  
---
## 🔒 Privacy & Security

- **No Data Collection:** This extension does not collect, track, or store personal data.
- **Local Processing:** All analysis is performed locally in your browser—no external servers involved.
- **Minimal Permissions:** Requests only the permissions required for core functionality.
- **Open Source:** Full transparency with publicly available source code.
