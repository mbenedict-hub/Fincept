import {
  PREMIUM_FEATURES,
  FIRST_VISIT_FLOW,
  MARKET_DATA,
  COMPANY_DATA,
  DASHBOARD_PANELS,
  getSiteConfig,
  saveSiteConfig,
  getFaqs,
  saveFaqs,
  resetAdminData,
  formatCurrency,
  formatPercent
} from "./data.js";
import { chartSvg } from "./charts.js";

function injectGlobalUI() {
  const config = getSiteConfig();
  document.querySelectorAll("[data-site-announcement]").forEach(el => (el.textContent = config.announcement));
  document.querySelectorAll("[data-support-email]").forEach(el => (el.textContent = config.supportEmail));
  document.querySelectorAll("[data-site-headline]").forEach(el => (el.textContent = config.heroHeadline));

  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a[data-page]").forEach(link => {
    if (link.getAttribute("data-page") === path) link.classList.add("active");
  });
}

function renderHomePage() {
  const config = getSiteConfig();
  const headline = document.querySelector("[data-home-headline]");
  if (headline) headline.textContent = config.heroHeadline;
  const ticker = document.querySelector("[data-featured-ticker]");
  if (ticker) ticker.textContent = config.featuredTicker;
  const heroChart = document.querySelector("[data-chart='hero']");
  if (heroChart) heroChart.innerHTML = chartSvg(MARKET_DATA.equityCurve, "#63e6be", "rgba(79,140,255,0.18)");

  const premiumList = document.querySelector("[data-premium-features]");
  if (premiumList) {
    premiumList.innerHTML = PREMIUM_FEATURES.map(item => `
      <div class="feature-card">
        <div class="icon-badge">${item.icon}</div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>`).join("");
  }

  const firstVisit = document.querySelector("[data-first-visit-flow]");
  if (firstVisit) {
    firstVisit.innerHTML = FIRST_VISIT_FLOW.map(item => `
      <div class="mini-card">
        <div class="small muted">Step ${item.step}</div>
        <div style="font-size:22px; font-weight:800; margin:8px 0;">${item.title}</div>
        <div class="muted">${item.text}</div>
      </div>`).join("");
  }
}

function renderDashboard() {
  const indicesEl = document.querySelector("[data-indices]");
  if (indicesEl) {
    indicesEl.innerHTML = MARKET_DATA.indices.map(item => `
      <div class="kpi">
        <div class="kpi-label">${item.name} · ${item.symbol}</div>
        <div class="kpi-value">${item.value.toLocaleString()}</div>
        <div class="kpi-trend ${item.change >= 0 ? "positive" : "negative"}">${formatPercent(item.change)} today · ${item.ytd}% YTD</div>
      </div>`).join("");
  }

  const macroEl = document.querySelector("[data-macro]");
  if (macroEl) {
    macroEl.innerHTML = MARKET_DATA.macro.map(item => `
      <div class="metric-box">
        <div class="label">${item.label}</div>
        <div class="value">${item.value}</div>
        <div class="kpi-trend ${item.direction}">${item.change}</div>
      </div>`).join("");
  }

  const watchlistEl = document.querySelector("[data-watchlist]");
  if (watchlistEl) {
    watchlistEl.innerHTML = MARKET_DATA.watchlist.map(row => `
      <tr>
        <td class="ticker">${row.ticker}</td>
        <td>${row.name}</td>
        <td>${formatCurrency(row.price)}</td>
        <td class="${row.change >= 0 ? "positive" : "negative"}">${formatPercent(row.change)}</td>
        <td>${row.signal}</td>
        <td>${row.conviction}</td>
      </tr>`).join("");
  }

  const newsEl = document.querySelector("[data-news]");
  if (newsEl) {
    newsEl.innerHTML = MARKET_DATA.news.map(item => `
      <div class="list-item">
        <div>
          <div class="title">${item.title}</div>
          <div class="meta">${item.source}</div>
        </div>
        <div class="meta">${item.time}</div>
      </div>`).join("");
  }

  const calEl = document.querySelector("[data-calendar]");
  if (calEl) {
    calEl.innerHTML = MARKET_DATA.calendar.map(item => `
      <tr>
        <td class="ticker">${item.event}</td>
        <td>${item.actual}</td>
        <td>${item.expected}</td>
        <td>${item.prior}</td>
      </tr>`).join("");
  }

  const heatmap = document.querySelector("[data-heatmap]");
  if (heatmap) {
    heatmap.innerHTML = MARKET_DATA.breadth.map(item => `
      <div class="heatbox ${item.tone}">
        <div class="ticker">${item.sector}</div>
        <div class="kpi-trend ${item.tone}">${formatPercent(item.move)}</div>
      </div>`).join("");
  }

  const portfolioStats = document.querySelector("[data-portfolio-stats]");
  if (portfolioStats) {
    const p = DASHBOARD_PANELS.portfolio;
    portfolioStats.innerHTML = `
      <div class="kpi-grid">
        <div class="kpi"><div class="kpi-label">Net asset value</div><div class="kpi-value">${p.nav}</div><div class="kpi-trend positive">${p.dayPnl} today</div></div>
        <div class="kpi"><div class="kpi-label">1 week return</div><div class="kpi-value">${p.weekPnl}</div><div class="kpi-trend positive">Thesis signals improving</div></div>
        <div class="kpi"><div class="kpi-label">Max drawdown</div><div class="kpi-value">${p.drawdown}</div><div class="kpi-trend neutral">Within mandate</div></div>
        <div class="kpi"><div class="kpi-label">Portfolio beta</div><div class="kpi-value">${p.beta}</div><div class="kpi-trend neutral">Balanced vs benchmark</div></div>
      </div>`;
  }

  const journalEl = document.querySelector("[data-journal]");
  if (journalEl) {
    journalEl.innerHTML = DASHBOARD_PANELS.journalEntries.map(item => `
      <div class="mini-card">
        <div style="display:flex; justify-content:space-between; gap:10px; align-items:flex-start; margin-bottom:10px;">
          <strong>${item.company}</strong>
          <span class="pill purple">Confidence ${item.confidence}</span>
        </div>
        <p style="margin:0 0 10px;">${item.thesis}</p>
        <div class="small muted">Invalidation trigger: ${item.trigger}</div>
      </div>`).join("");
  }

  const aiTools = document.querySelector("[data-ai-tools]");
  if (aiTools) {
    aiTools.innerHTML = DASHBOARD_PANELS.aiModules.map(item => `
      <div class="mini-card">
        <div style="display:flex; justify-content:space-between; gap:10px; align-items:center; margin-bottom:8px;">
          <strong>${item.title}</strong>
          <span class="pill purple">${item.badge}</span>
        </div>
        <div class="muted">${item.description}</div>
      </div>`).join("");
  }

  document.querySelectorAll("[data-chart='equity-curve']").forEach(el => (el.innerHTML = chartSvg(MARKET_DATA.equityCurve, "#63e6be", "rgba(79,140,255,0.18)")));
  document.querySelectorAll("[data-chart='portfolio-curve']").forEach(el => (el.innerHTML = chartSvg(MARKET_DATA.portfolioCurve, "#4f8cff", "rgba(79,140,255,0.12)")));
}

function renderCompanyPage() {
  const config = getSiteConfig();
  document.querySelectorAll("[data-featured-theme]").forEach(el => (el.textContent = config.featuredTheme));
  const companyHeading = document.querySelector("[data-company-heading]");
  if (companyHeading) companyHeading.textContent = `${COMPANY_DATA.company} (${config.featuredTicker || COMPANY_DATA.ticker})`;
  const companyPrice = document.querySelector("[data-company-price]");
  if (companyPrice) companyPrice.textContent = formatCurrency(COMPANY_DATA.price);
  const companyThesis = document.querySelector("[data-company-thesis]");
  if (companyThesis) companyThesis.textContent = COMPANY_DATA.thesis;

  const metrics = document.querySelector("[data-company-metrics]");
  if (metrics) {
    metrics.innerHTML = [
      ["Market cap", COMPANY_DATA.marketCap],
      ["Enterprise value", COMPANY_DATA.enterpriseValue],
      ["Revenue growth", COMPANY_DATA.revenueGrowth],
      ["Gross margin", COMPANY_DATA.grossMargin],
      ["Operating margin", COMPANY_DATA.operatingMargin],
      ["Free cash flow", COMPANY_DATA.freeCashFlow]
    ].map(([label, value]) => `<div class="metric-box"><div class="label">${label}</div><div class="value">${value}</div></div>`).join("");
  }

  const catalysts = document.querySelector("[data-catalysts]");
  if (catalysts) catalysts.innerHTML = COMPANY_DATA.catalysts.map(item => `<li>${item}</li>`).join("");
  const risks = document.querySelector("[data-risks]");
  if (risks) risks.innerHTML = COMPANY_DATA.risks.map(item => `<li>${item}</li>`).join("");
  const segments = document.querySelector("[data-segments]");
  if (segments) segments.innerHTML = COMPANY_DATA.segmentRows.map(row => `<tr><td class="ticker">${row[0]}</td><td>${row[1]}</td><td class="positive">${row[2]}</td><td>${row[3]}</td></tr>`).join("");
  const estimates = document.querySelector("[data-estimates]");
  if (estimates) estimates.innerHTML = COMPANY_DATA.estimateRows.map(row => `<tr><td class="ticker">${row[0]}</td><td>${row[1]}</td><td class="positive">${row[2]}</td></tr>`).join("");
  const scenarios = document.querySelector("[data-scenarios]");
  if (scenarios) scenarios.innerHTML = COMPANY_DATA.scenarios.map(row => `<tr><td class="ticker">${row.case}</td><td>${row.revenueCagr}</td><td>${row.margin}</td><td>${row.value}</td><td class="${row.delta.startsWith("-") ? "negative" : "positive"}">${row.delta}</td></tr>`).join("");
  const transcript = document.querySelector("[data-transcript-highlights]");
  if (transcript) transcript.innerHTML = COMPANY_DATA.transcriptHighlights.map(item => `<div class="list-item"><div class="title">Management takeaway</div><div class="meta">${item}</div></div>`).join("");

  document.querySelectorAll("[data-chart='company-curve']").forEach(el => (el.innerHTML = chartSvg(MARKET_DATA.companyCurve, "#63e6be", "rgba(79,140,255,0.18)")));
  document.querySelectorAll("[data-chart='valuation-curve']").forEach(el => (el.innerHTML = chartSvg(MARKET_DATA.valuationCurve, "#9f7aea", "rgba(159,122,234,0.16)")));
}

function renderFaqPage() {
  const list = document.querySelector("[data-faq-list]");
  if (!list) return;
  list.innerHTML = getFaqs().map((item, index) => `
    <div class="faq-item ${index === 0 ? "open" : ""}">
      <button class="faq-question" type="button">
        <span>${item.q}</span>
        <span>${index === 0 ? "−" : "+"}</span>
      </button>
      <div class="faq-answer">${item.a}</div>
    </div>`).join("");
  list.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const isOpen = item.classList.contains("open");
      list.querySelectorAll(".faq-item").forEach(el => {
        el.classList.remove("open");
        el.querySelector(".faq-question span:last-child").textContent = "+";
      });
      if (!isOpen) {
        item.classList.add("open");
        btn.querySelector("span:last-child").textContent = "−";
      }
    });
  });
}

function showAdminNotice(message, tone = "info") {
  const box = document.querySelector("[data-admin-notice]");
  if (!box) return;
  box.className = `notice ${tone}`;
  box.textContent = message;
}

function renderAdmin() {
  const config = getSiteConfig();
  const faqs = getFaqs();

  const stats = document.querySelector("[data-admin-stats]");
  if (stats) {
    stats.innerHTML = DASHBOARD_PANELS.adminMetrics.map(item => `<div class="kpi"><div class="kpi-label">${item.label}</div><div class="kpi-value">${item.value}</div></div>`).join("");
  }

  const form = document.querySelector("[data-admin-form]");
  if (form) {
    form.querySelector("[name='announcement']").value = config.announcement;
    form.querySelector("[name='featuredTicker']").value = config.featuredTicker;
    form.querySelector("[name='supportEmail']").value = config.supportEmail;
    form.querySelector("[name='featuredTheme']").value = config.featuredTheme;
    form.querySelector("[name='heroHeadline']").value = config.heroHeadline;
    form.querySelector("[name='adminPasswordHint']").value = config.adminPasswordHint;
    form.addEventListener("submit", event => {
      event.preventDefault();
      const data = new FormData(form);
      saveSiteConfig(Object.fromEntries(data.entries()));
      injectGlobalUI();
      renderHomePage();
      showAdminNotice("Site settings saved locally for this browser preview.", "success");
      const preview = document.querySelector("[data-preview-announcement]");
      if (preview) preview.textContent = getSiteConfig().announcement;
    });
  }

  const faqEditor = document.querySelector("[data-faq-editor]");
  if (faqEditor) faqEditor.value = JSON.stringify(faqs, null, 2);

  const saveFaqBtn = document.querySelector("[data-save-faqs]");
  if (saveFaqBtn) {
    saveFaqBtn.addEventListener("click", () => {
      try {
        const parsed = JSON.parse(document.querySelector("[data-faq-editor]").value);
        if (!Array.isArray(parsed)) throw new Error("FAQs must be an array");
        saveFaqs(parsed);
        showAdminNotice("FAQ library updated locally.", "success");
      } catch (error) {
        showAdminNotice(`Unable to save FAQs: ${error.message}`, "warning");
      }
    });
  }

  const exportBtn = document.querySelector("[data-export-config]");
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      const payload = { config: getSiteConfig(), faqs: getFaqs(), exportedAt: new Date().toISOString() };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "fincept-admin-config.json";
      a.click();
      URL.revokeObjectURL(url);
    });
  }

  const resetBtn = document.querySelector("[data-reset-config]");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      resetAdminData();
      window.location.reload();
    });
  }

  const preview = document.querySelector("[data-preview-announcement]");
  if (preview) preview.textContent = config.announcement;
}

function renderFooterYear() {
  document.querySelectorAll("[data-year]").forEach(el => (el.textContent = new Date().getFullYear()));
}

function boot() {
  injectGlobalUI();
  renderFooterYear();
  renderHomePage();
  renderDashboard();
  renderCompanyPage();
  renderFaqPage();
  renderAdmin();
}

document.addEventListener("DOMContentLoaded", boot);
