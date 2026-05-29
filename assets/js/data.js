export const DEFAULT_SITE_CONFIG = {
  announcement: "New: Conviction Journal™ now ties every watchlist alert to thesis risks, valuation assumptions, and macro catalysts.",
  featuredTicker: "NVDA",
  supportEmail: "support@fincept.doozy247.net",
  featuredTheme: "AI Infrastructure",
  heroHeadline: "A cleaner financial research experience with explainable AI and decision memory.",
  adminPasswordHint: "Prototype only — demo mode enabled"
};

export const DEFAULT_FAQS = [
  {
    q: "What makes Fincept different from other research platforms?",
    a: "Fincept combines company analysis, portfolio monitoring, macro context, and a Conviction Journal™ that records thesis assumptions, catalysts, and invalidation triggers. The result is not just faster research, but better decision discipline."
  },
  {
    q: "Is the financial data live?",
    a: "This demo uses realistic sample market, company, and portfolio data to demonstrate the customer experience. A production deployment would connect the same layouts to live market, fundamentals, filings, and news APIs."
  },
  {
    q: "What premium AI features are included in the concept?",
    a: "The premium concept adds Explainable AI Deep Research, transcript summarization, thesis-aware alerts, portfolio copilots, and earnings call intelligence with citations and scenario prompts."
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

export const PREMIUM_FEATURES = [
  {
    icon: "🧠",
    title: "AI Deep Research",
    text: "Premium users can ask complex investment questions and receive synthesized answers with evidence-oriented reasoning, transcript takeaways, and follow-up paths inspired by premium document intelligence tools."
  },
  {
    icon: "📝",
    title: "Earnings Call Copilot",
    text: "Summarizes what changed, flags tone shifts, isolates management guidance changes, and suggests where the thesis strengthened or weakened."
  },
  {
    icon: "🎯",
    title: "Thesis-Aware Smart Alerts",
    text: "Alerts are tied to your original thesis, not just price. They explain what moved, why it matters, and whether the original setup is still intact."
  },
  {
    icon: "📂",
    title: "Research Workspace Memory",
    text: "Saved memos, watchlists, catalysts, and invalidation triggers become reusable research memory across company pages and portfolios."
  },
  {
    icon: "📊",
    title: "Portfolio Copilot",
    text: "Scans holdings for concentration, macro sensitivity, earnings risk, and factor drift, then explains the highest-impact changes first."
  },
  {
    icon: "🔎",
    title: "Explainable AI with Citations",
    text: "Premium outputs are designed around visible assumptions, sentence-level references, and structured evidence to improve trust in AI-assisted workflows."
  }
];

export const FIRST_VISIT_FLOW = [
  {
    step: "01",
    title: "See the market in one glance",
    text: "Start with a clean dashboard covering indices, macro, watchlists, news, and economic events."
  },
  {
    step: "02",
    title: "Open a company page",
    text: "Review catalysts, risks, revisions, valuation scenarios, and management highlights without jumping between tools."
  },
  {
    step: "03",
    title: "Save the decision logic",
    text: "Use Conviction Journal™ to record why the idea matters, what could go right, and what would break the thesis."
  }
];

export const MARKET_DATA = {
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

export const COMPANY_DATA = {
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

export const DASHBOARD_PANELS = {
  portfolio: {
    nav: "$4.28M",
    dayPnl: "+$48,210",
    weekPnl: "+2.8%",
    drawdown: "-5.4%",
    beta: "1.06"
  },
  journalEntries: [
    { company: "NVDA", thesis: "Maintain overweight while inference demand broadens beyond hyperscalers.", trigger: "Cloud capex guide cut or GM below 72%.", confidence: "84/100" },
    { company: "AMZN", thesis: "Retail margin upside plus AWS stabilization supports multiple expansion.", trigger: "AWS growth decelerates below consensus for 2 quarters.", confidence: "76/100" },
    { company: "ELF", thesis: "Brand strength and international expansion continue to outgrow category.", trigger: "Inventory build without sell-through confirmation.", confidence: "71/100" }
  ],
  aiModules: [
    { title: "Explainable Research", description: "Ask natural-language questions and receive evidence-oriented summaries with transparent assumptions.", badge: "Premium" },
    { title: "Transcript Intel", description: "Summaries detect what changed in guidance, tone, and capital allocation narrative.", badge: "Premium" },
    { title: "Portfolio Copilot", description: "Highlights concentration, macro sensitivity, and catalyst overlaps before they become problems.", badge: "Premium" }
  ],
  adminMetrics: [
    { label: "Pages", value: "7" },
    { label: "FAQ entries", value: "6" },
    { label: "Watchlist records", value: "6" },
    { label: "Last config save", value: "Today" }
  ]
};

export const STORAGE_KEYS = {
  config: "fincept_site_config_v3",
  faqs: "fincept_site_faqs_v3"
};

export function getSiteConfig() {
  try {
    return { ...DEFAULT_SITE_CONFIG, ...(JSON.parse(localStorage.getItem(STORAGE_KEYS.config)) || {}) };
  } catch {
    return { ...DEFAULT_SITE_CONFIG };
  }
}

export function saveSiteConfig(config) {
  localStorage.setItem(STORAGE_KEYS.config, JSON.stringify(config));
}

export function getFaqs() {
  try {
    const faqs = JSON.parse(localStorage.getItem(STORAGE_KEYS.faqs));
    return Array.isArray(faqs) && faqs.length ? faqs : [...DEFAULT_FAQS];
  } catch {
    return [...DEFAULT_FAQS];
  }
}

export function saveFaqs(faqs) {
  localStorage.setItem(STORAGE_KEYS.faqs, JSON.stringify(faqs));
}

export function resetAdminData() {
  localStorage.removeItem(STORAGE_KEYS.config);
  localStorage.removeItem(STORAGE_KEYS.faqs);
}

export function formatCurrency(value, digits = 2) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: digits }).format(value);
}

export function formatPercent(value) {
  const sign = value >= 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
}
