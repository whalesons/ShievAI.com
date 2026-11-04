// ShievAI Clean Interaction Script

// Mobile Nav Toggle
const mobileBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');

if (mobileBtn && navLinks) {
  mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// Instant SEO Checker Simulator
function handleAudit(e) {
  e.preventDefault();
  const urlInput = document.getElementById('auditUrl');
  const auditBtn = document.getElementById('auditBtn');
  const auditResult = document.getElementById('auditResult');
  const scoreVal = document.getElementById('scoreVal');
  const auditFeedback = document.getElementById('auditFeedback');

  if (!urlInput.value) return;

  const originalContent = auditBtn.innerHTML;
  auditBtn.innerHTML = `<span>Checking...</span>`;
  auditBtn.disabled = true;

  setTimeout(() => {
    const domain = urlInput.value.replace(/https?:\/\//i, '').replace(/www\./i, '');
    const randomScore = Math.floor(Math.random() * (99 - 88 + 1)) + 88;
    
    scoreVal.textContent = randomScore;
    auditFeedback.innerHTML = `SEO Diagnosis for <strong>${domain}</strong>: Keyword density and speed benchmarks qualify for Top #1 Google indexing push.`;
    
    auditResult.classList.remove('hidden');
    auditBtn.innerHTML = originalContent;
    auditBtn.disabled = false;
  }, 750);
}

// Contact Form Handler
function handleContactSubmit(e) {
  e.preventDefault();
  const formSuccess = document.getElementById('formSuccess');
  const submitBtn = e.target.querySelector('button[type="submit"]');

  submitBtn.disabled = true;
  submitBtn.innerHTML = `Submitting...`;

  setTimeout(() => {
    formSuccess.classList.remove('hidden');
    submitBtn.innerHTML = `Submitted Successfully ✔`;
    e.target.reset();
  }, 700);
}
