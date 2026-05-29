const DEFAULT_SITE_CONFIG = {
  announcement: "New: Conviction Journal™ now ties every watchlist alert to thesis risks, valuation assumptions, and macro catalysts.",
  featuredTicker: "NVDA",
  supportEmail: "support@fincept.doozy247.net",
  featuredTheme: "AI Infrastructure",
  heroHeadline: "A cleaner financial research experience with explainable AI and decision memory.",
  adminPasswordHint: "Prototype only — demo mode enabled"
};

const DEFAULT_FAQS = [
  {
    q: "What makes Fincept different from other research platforms?",
    a: "Fincept combines company analysis, portfolio monitoring, macro context, and a Conviction Journal™ that records thesis assumptions, catalysts, and invalidation triggers. The result is not just faster research, but better decision discipline."
  },
  {
    q: "Is the financial data live?",
    a: "This demo uses realistic sample market, company, and portfolio data to demonstrate the customer experience. A production deployment would connect the same layouts to live market, fundamentals, filings, and news APIs."
  },
  {
    q: "Can teams collaborate on ideas?",
    a: "Yes. The product concept is built around shared watchlists, research rooms, comments, and thesis tracking so advisors, PMs, and serious retail investors can work from one source of truth."
  },
  {
    q: "What is Conviction Journal™?",
    a: "It is the competitive advantage feature designed to capture why you entered a position, what you expect to happen, which catalysts matter, and what evidence would break the thesis. Most platforms stop at analysis; this one preserves decision quality over time."
  },
  {
    q: "Can the platform support custom domains and static hosting?",
    a: "Yes. The repository includes a GitHub Pages workflow and custom domain file so the site is structured for static deployment once repository visibility and DNS settings allow publishing."
  }
];

const MARKET_DATA = {
  indices: [
    { name: "S&P 500", symbol: "SPX", value: 5326.80, change: 0.74, ytd: 11.2 },
    { name: "Nasdaq 100", symbol: "NDX", value: 18872.42, change: 1.12, ytd: 14.6 },
    { name: "Dow Jones", symbol: "DJI", value: 39188.76, change: -0.18, ytd: 4.1 },
    { name: "Russell 2000", symbol: "RUT", value: 2108.33, change: 0.44, ytd: 3.8 }
  ],
  macro: [
    { label: "US 10Y", value: "4.28%", change: "+3 bps", direction: "negative" },
    { label: "VIX", value: "14.7", change: "-0.8", direction: "positive" },
    { label: "WTI Crude", value: "$79.42", change: "+1.3%", direction: "positive" },
    { label: "Bitcoin", value: "$68,420", change: "+2.1%", direction: "positive" }
  ],
  watchlist: [
    { ticker: "NVDA", name: "NVIDIA", price: 1143.55, change: 2.84, signal: "Estimate revisions improving", conviction: "High" },
    { ticker: "MSFT", name: "Microsoft", price: 428.33, change: 0.92, signal: "Cloud growth stable", conviction: "High" },
    { ticker: "AMZN", name: "Amazon", price: 186.74, change: 1.34, signal: "Margin expansion", conviction: "Medium" },
    { ticker: "GOOGL", name: "Alphabet", price: 177.12, change: -0.41, signal: "Ad recovery intact", conviction: "Medium" },
    { ticker: "META", name: "Meta", price: 502.44, change: 0.56, signal: "Capex scrutiny", conviction: "Medium" },
    { ticker: "AMD", name: "AMD", price: 171.26, change: 1.91, signal: "AI pipeline momentum", conviction: "Speculative" }
  ],
  news: [
    { title: "Semiconductor capital spending continues to outpace prior cycle expectations", source: "Market Intelligence", time: "18m ago" },
    { title: "Fed speakers reinforce data-dependent rate path as inflation cools unevenly", source: "Macro Desk", time: "52m ago" },
    { title: "Mega-cap earnings revisions stay positive despite rising compute infrastructure costs", source: "Equity Research", time: "1h ago" },
    { title: "US manufacturing orders improve while logistics bottlenecks remain below 2022 peaks", source: "Global Macro", time: "2h ago" }
  ],
  calendar: [
    { event: "US Core PCE", actual: "2.8%", expected: "2.8%", prior: "2.9%" },
    { event: "Nonfarm Payrolls", actual: "214K", expected: "205K", prior: "188K" },
    { event: "ISM Manufacturing", actual: "51.2", expected: "50.6", prior: "49.8" },
    { event: "ECB Rate Decision", actual: "3.75%", expected: "3.75%", prior: "4.00%" }
  ],
  breadth: [
    { sector: "Technology", move: 1.6, tone: "positive" },
    { sector: "Communication Services", move: 0.8, tone: "positive" },
    { sector: "Consumer Discretionary", move: 0.3, tone: "neutral" },
    { sector: "Healthcare", move: -0.5, tone: "negative" },
    { sector: "Financials", move: 0.2, tone: "neutral" },
    { sector: "Industrials", move: 0.7, tone: "positive" },
    { sector: "Energy", move: 1.1, tone: "positive" },
    { sector: "Utilities", move: -0.6, tone: "negative" }
  ],
  equityCurve: [100, 104, 101, 109, 114, 118, 124, 129, 133, 139, 145, 152],
  portfolioCurve: [100, 102, 103, 106, 108, 112, 115, 117, 121, 126, 131, 136],
  companyCurve: [100, 108, 111, 119, 128, 132, 146, 154, 160, 168, 174, 182],
  valuationCurve: [13, 14, 15, 16, 17, 16, 18, 19, 20, 21, 22, 23]
};

const COMPANY_DATA = {
  ticker: "NVDA",
  company: "NVIDIA Corporation",
  price: 1143.55,
  marketCap: "$2.82T",
  enterpriseValue: "$2.79T",
  revenueGrowth: "+92.4% YoY",
  grossMargin: "75.8%",
  operatingMargin: "61.2%",
  freeCashFlow: "$28.4B",
  netCash: "$23.9B",
  forwardPE: "39.6x",
  evSales: "24.1x",
  ruleOf40: "153.6",
  moat: "Scale in accelerated computing + software ecosystem",
  thesis: "The company remains the prime beneficiary of AI infrastructure demand, but valuation now depends on sustained data center utilization, software monetization, and capex durability across hyperscalers.",
  catalysts: [
    "Next-generation accelerator rollout supports mix upgrade and software attach rates.",
    "Cloud capex budgets remain elevated, with enterprise inference demand broadening beyond training.",
    "Networking and platform revenue deepen wallet share inside AI clusters."
  ],
  risks: [
    "Supply normalization lowers urgency purchasing behavior.",
    "Customer concentration and sovereign export restrictions increase earnings volatility.",
    "Competitive custom silicon could compress long-term platform pricing."
  ],
  scenarios: [
    { case: "Bear", revenueCagr: "24%", margin: "52%", value: "$860", delta: "-24.8%" },
    { case: "Base", revenueCagr: "32%", margin: "58%", value: "$1,165", delta: "+1.9%" },
    { case: "Bull", revenueCagr: "39%", margin: "63%", value: "$1,410", delta: "+23.3%" }
  ],
  segmentRows: [
    ["Data Center", "$39.1B", "+136%", "79%"],
    ["Gaming", "$10.4B", "+18%", "21%"],
    ["Networking & OEM", "$4.7B", "+61%", "9%"],
    ["Automotive", "$1.1B", "+21%", "2%"]
  ],
  estimateRows: [
    ["FY+1 Revenue", "$142.8B", "+4.7% in 90d"],
    ["FY+1 EPS", "$29.84", "+6.3% in 90d"],
    ["Gross Margin", "75.2%", "+40 bps in 90d"],
    ["Operating Margin", "59.8%", "+110 bps in 90d"]
  ],
  transcriptHighlights: [
    "Management emphasized sustained demand for accelerated compute from both training and inference workloads.",
    "Software and networking were framed as margin-supporting layers, not just hardware adjacencies.",
    "Commentary suggested customer urgency remains elevated, but investors should still monitor cluster utilization and procurement cycles."
  ]
};

const DASHBOARD_PANELS = {
  portfolio: {
    nav: "$4.28M",
    dayPnl: "+$48,210",
    weekPnl: "+2.8%",
    drawdown: "-5.4%",
    beta: "1.06",
    sectors: [
      { name: "Technology", weight: "38%" },
      { name: "Consumer Discretionary", weight: "14%" },
      { name: "Healthcare", weight: "11%" },
      { name: "Industrials", weight: "9%" }
    ]
  },
  journalEntries: [
    { company: "NVDA", thesis: "Maintain overweight while inference demand broadens beyond hyperscalers.", trigger: "Cloud capex guide cut or GM below 72%.", confidence: "84/100" },
    { company: "AMZN", thesis: "Retail margin upside plus AWS stabilization supports multiple expansion.", trigger: "AWS growth decelerates below consensus for 2 quarters.", confidence: "76/100" },
    { company: "ELF", thesis: "Brand strength and international expansion continue to outgrow category.", trigger: "Inventory build without sell-through confirmation.", confidence: "71/100" }
  ],
  adminMetrics: [
    { label: "Pages", value: "7" },
    { label: "FAQ entries", value: "5" },
    { label: "Watchlist records", value: "6" },
    { label: "Last config save", value: "Today" }
  ]
};

const STORAGE_KEYS = {
  config: "fincept_site_config_v2",
  faqs: "fincept_site_faqs_v2"
};

function getSiteConfig() {
  try {
    return { ...DEFAULT_SITE_CONFIG, ...(JSON.parse(localStorage.getItem(STORAGE_KEYS.config)) || {}) };
  } catch {
    return { ...DEFAULT_SITE_CONFIG };
  }
}

function saveSiteConfig(config) {
  localStorage.setItem(STORAGE_KEYS.config, JSON.stringify(config));
}

function getFaqs() {
  try {
    const faqs = JSON.parse(localStorage.getItem(STORAGE_KEYS.faqs));
    return Array.isArray(faqs) && faqs.length ? faqs : [...DEFAULT_FAQS];
  } catch {
    return [...DEFAULT_FAQS];
  }
}

function saveFaqs(faqs) {
  localStorage.setItem(STORAGE_KEYS.faqs, JSON.stringify(faqs));
}

function resetAdminData() {
  localStorage.removeItem(STORAGE_KEYS.config);
  localStorage.removeItem(STORAGE_KEYS.faqs);
}

function formatCurrency(value, digits = 2) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: digits }).format(value);
}

function formatPercent(value) {
  const sign = value >= 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
}

function chartSvg(values, colorMain = "#63e6be", colorFill = "rgba(79,140,255,0.30)") {
  const width = 600;
  const height = 240;
  const padding = 18;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const points = values.map((v, i) => {
    const x = padding + (i * (width - padding * 2)) / (values.length - 1);
    const y = height - padding - ((v - min) / range) * (height - padding * 2);
    return `${x},${y}`;
  });
  const areaPath = `M ${points[0]} L ${points.slice(1).join(" L ")} L ${width - padding},${height - padding} L ${padding},${height - padding} Z`;
  const linePath = `M ${points.join(" L ")}`;
  const grid = [0.2, 0.4, 0.6, 0.8].map(f => {
    const y = padding + (height - padding * 2) * f;
    return `<line x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}" stroke="rgba(255,255,255,0.08)" stroke-width="1" />`;
  }).join("");
  return `
    <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="fill-gradient-${Math.random().toString(36).slice(2, 8)}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${colorFill}" />
          <stop offset="100%" stop-color="rgba(79,140,255,0)" />
        </linearGradient>
      </defs>
      ${grid}
      <polyline points="${points.join(" ")}" fill="none" stroke="${colorMain}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></polyline>
      <path d="${areaPath}" fill="rgba(79,140,255,0.18)"></path>
    </svg>`;
}

function injectGlobalUI() {
  const config = getSiteConfig();
  document.querySelectorAll("[data-site-announcement]").forEach(el => el.textContent = config.announcement);
  document.querySelectorAll("[data-support-email]").forEach(el => el.textContent = config.supportEmail);
  document.querySelectorAll("[data-site-headline]").forEach(el => el.textContent = config.heroHeadline);

  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a[data-page]").forEach(link => {
    if (link.getAttribute("data-page") === path) link.classList.add("active");
  });
}

function renderHomePage() {
  const homeHeroHeadline = document.querySelector("[data-home-headline]");
  if (homeHeroHeadline) homeHeroHeadline.textContent = getSiteConfig().heroHeadline;

  const ticker = document.querySelector("[data-featured-ticker]");
  if (ticker) ticker.textContent = getSiteConfig().featuredTicker;

  const trendChart = document.querySelector("[data-chart='hero']");
  if (trendChart) trendChart.innerHTML = chartSvg(MARKET_DATA.equityCurve, "#63e6be");
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

  document.querySelectorAll("[data-chart='equity-curve']").forEach(el => {
    el.innerHTML = chartSvg(MARKET_DATA.equityCurve, "#63e6be");
  });
  document.querySelectorAll("[data-chart='portfolio-curve']").forEach(el => {
    el.innerHTML = chartSvg(MARKET_DATA.portfolioCurve, "#4f8cff");
  });
}

function renderCompanyPage() {
  const featuredTicker = getSiteConfig().featuredTicker;
  document.querySelectorAll("[data-company-ticker]").forEach(el => el.textContent = COMPANY_DATA.ticker);
  document.querySelectorAll("[data-featured-theme]").forEach(el => el.textContent = getSiteConfig().featuredTheme);
  const companyHeading = document.querySelector("[data-company-heading]");
  if (companyHeading) companyHeading.textContent = `${COMPANY_DATA.company} (${featuredTicker || COMPANY_DATA.ticker})`;
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
  if (segments) segments.innerHTML = COMPANY_DATA.segmentRows.map(row => `
    <tr><td class="ticker">${row[0]}</td><td>${row[1]}</td><td class="positive">${row[2]}</td><td>${row[3]}</td></tr>`).join("");

  const estimates = document.querySelector("[data-estimates]");
  if (estimates) estimates.innerHTML = COMPANY_DATA.estimateRows.map(row => `
    <tr><td class="ticker">${row[0]}</td><td>${row[1]}</td><td class="positive">${row[2]}</td></tr>`).join("");

  const scenarios = document.querySelector("[data-scenarios]");
  if (scenarios) scenarios.innerHTML = COMPANY_DATA.scenarios.map(row => `
    <tr><td class="ticker">${row.case}</td><td>${row.revenueCagr}</td><td>${row.margin}</td><td>${row.value}</td><td class="${row.delta.startsWith('-') ? "negative" : "positive"}">${row.delta}</td></tr>`).join("");

  const transcript = document.querySelector("[data-transcript-highlights]");
  if (transcript) transcript.innerHTML = COMPANY_DATA.transcriptHighlights.map(item => `<div class="list-item"><div class="title">Management takeaway</div><div class="meta">${item}</div></div>`).join("");

  document.querySelectorAll("[data-chart='company-curve']").forEach(el => {
    el.innerHTML = chartSvg(MARKET_DATA.companyCurve, "#63e6be");
  });
  document.querySelectorAll("[data-chart='valuation-curve']").forEach(el => {
    el.innerHTML = chartSvg(MARKET_DATA.valuationCurve, "#9f7aea");
  });
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

function renderAdmin() {
  const config = getSiteConfig();
  const faqs = getFaqs();

  const stats = document.querySelector("[data-admin-stats]");
  if (stats) {
    stats.innerHTML = DASHBOARD_PANELS.adminMetrics.map(item => `
      <div class="kpi"><div class="kpi-label">${item.label}</div><div class="kpi-value">${item.value}</div></div>`).join("");
  }

  const form = document.querySelector("[data-admin-form]");
  if (form) {
    form.querySelector("[name='announcement']").value = config.announcement;
    form.querySelector("[name='featuredTicker']").value = config.featuredTicker;
    form.querySelector("[name='supportEmail']").value = config.supportEmail;
    form.querySelector("[name='featuredTheme']").value = config.featuredTheme;
    form.querySelector("[name='heroHeadline']").value = config.heroHeadline;
    form.querySelector("[name='adminPasswordHint']").value = config.adminPasswordHint;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const updated = Object.fromEntries(data.entries());
      saveSiteConfig(updated);
      showAdminNotice("Site settings saved locally for this browser session.", "success");
      injectGlobalUI();
      const preview = document.querySelector("[data-preview-announcement]");
      if (preview) preview.textContent = updated.announcement;
    });
  }

  const faqEditor = document.querySelector("[data-faq-editor]");
  if (faqEditor) {
    faqEditor.value = JSON.stringify(faqs, null, 2);
  }

  const saveFaqBtn = document.querySelector("[data-save-faqs]");
  if (saveFaqBtn) {
    saveFaqBtn.addEventListener("click", () => {
      try {
        const parsed = JSON.parse(document.querySelector("[data-faq-editor]").value);
        if (!Array.isArray(parsed)) throw new Error("FAQs must be an array.");
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
      const payload = {
        config: getSiteConfig(),
        faqs: getFaqs(),
        exportedAt: new Date().toISOString()
      };
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

function showAdminNotice(message, tone = "info") {
  const box = document.querySelector("[data-admin-notice]");
  if (!box) return;
  box.className = `notice ${tone}`;
  box.textContent = message;
}

function renderFooterYear() {
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
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
