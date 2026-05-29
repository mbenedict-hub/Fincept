export function chartSvg(values, colorMain = "#63e6be", colorFill = "rgba(79,140,255,0.30)") {
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
  const grid = [0.2, 0.4, 0.6, 0.8]
    .map(f => {
      const y = padding + (height - padding * 2) * f;
      return `<line x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}" stroke="rgba(255,255,255,0.08)" stroke-width="1" />`;
    })
    .join("");
  return `
    <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true">
      ${grid}
      <polyline points="${points.join(" ")}" fill="none" stroke="${colorMain}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></polyline>
      <path d="${areaPath}" fill="${colorFill}"></path>
    </svg>`;
}
