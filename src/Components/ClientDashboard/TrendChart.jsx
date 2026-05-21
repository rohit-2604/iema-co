import { Info } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const HIGH_LIMIT = 50;
const WARNING_LIMIT = 25;
const Y_MIN = 0;
const Y_MAX = 80;

const TIME_RANGES = ['1H', '6H', '12H', '24H', '7D', '30D'];

const xLabels = [
  '10:30 AM',
  '02:30 PM',
  '06:30 PM',
  '10:30 PM',
  '02:30 AM',
  '06:30 AM',
  '10:30 AM',
];

const data = [15, 24, 18, 26, 31, 52, 30];

// Map data points to their tooltip labels (matches screenshot peak)
const tooltipData = [
  { time: '10:30 AM', value: 15 },
  { time: '02:30 PM', value: 24 },
  { time: '06:30 PM', value: 18 },
  { time: '10:30 PM', value: 26 },
  { time: '02:30 AM', value: 31 },
  { time: '09:15 AM', value: 52 }, // peak — override time label to match screenshot
  { time: '10:30 AM', value: 30 },
];

export default function TrendChart({ timeRange = '24H', setTimeRange = () => {} }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, index: -1 });
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  // Chart layout constants
  const PADDING = { top: 20, right: 140, bottom: 40, left: 45 };

  const getChartDims = () => {
    const canvas = canvasRef.current;
    if (!canvas) return { W: 0, H: 0, cW: 0, cH: 0 };
    const W = canvas.clientWidth;
    const H = canvas.clientHeight;
    const cW = W - PADDING.left - PADDING.right;
    const cH = H - PADDING.top - PADDING.bottom;
    return { W, H, cW, cH };
  };

  const getX = (i, cW) => PADDING.left + (i / (data.length - 1)) * cW;
  const getY = (val, cH) =>
    PADDING.top + cH - ((val - Y_MIN) / (Y_MAX - Y_MIN)) * cH;

  // Catmull-Rom to cubic bezier helper
  const catmullRomPoints = (pts) => {
    const result = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[Math.max(i - 1, 0)];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[Math.min(i + 2, pts.length - 1)];
      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;
      result.push({ p1, cp1: { x: cp1x, y: cp1y }, cp2: { x: cp2x, y: cp2y }, p2 });
    }
    return result;
  };

  const draw = (activeIndex = -1) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { W, H, cW, cH } = getChartDims();
    ctx.clearRect(0, 0, W, H);

    const pts = data.map((v, i) => ({ x: getX(i, cW), y: getY(v, cH) }));
    const segments = catmullRomPoints(pts);

    // Grid lines
    const gridValues = [0, 20, 40, 60, 80];
    ctx.save();
    gridValues.forEach((val) => {
      const y = getY(val, cH);
      ctx.beginPath();
      ctx.moveTo(PADDING.left, y);
      ctx.lineTo(PADDING.left + cW, y);
      ctx.strokeStyle = 'rgba(148,163,184,0.18)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Y-axis labels
      ctx.fillStyle = '#94a3b8';
      ctx.font = '11px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(val, PADDING.left - 8, y + 4);
    });
    ctx.restore();

    // Area fill
    const grad = ctx.createLinearGradient(0, PADDING.top, 0, PADDING.top + cH);
    grad.addColorStop(0, 'rgba(37,99,235,0.22)');
    grad.addColorStop(1, 'rgba(37,99,235,0.01)');

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    segments.forEach(({ cp1, cp2, p2 }) => {
      ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, p2.x, p2.y);
    });
    ctx.lineTo(pts[pts.length - 1].x, getY(Y_MIN, cH));
    ctx.lineTo(pts[0].x, getY(Y_MIN, cH));
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.restore();

    // Line
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    segments.forEach(({ cp1, cp2, p2 }) => {
      ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, p2.x, p2.y);
    });
    ctx.strokeStyle = '#2563eb';
    ctx.lineWidth = 2.5;
    ctx.lineJoin = 'round';
    ctx.stroke();
    ctx.restore();

    // Reference lines
    const refLines = [
      { val: HIGH_LIMIT, color: '#ef4444', label: 'High Limit (50 ppm)' },
      { val: WARNING_LIMIT, color: '#f59e0b', label: 'Warning Limit (25 ppm)' },
    ];
    refLines.forEach(({ val, color, label }) => {
      const y = getY(val, cH);
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(PADDING.left, y);
      ctx.lineTo(PADDING.left + cW, y);
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([5, 5]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = color;
      ctx.font = '11px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(label, PADDING.left + cW + 8, y + 4);
      ctx.restore();
    });

    // Data points
    pts.forEach((pt, i) => {
      const val = data[i];
      const isActive = i === activeIndex;
      const isHigh = val >= HIGH_LIMIT;

      ctx.save();
      // Outer glow ring for active
      if (isActive) {
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 8, 0, Math.PI * 2);
        ctx.fillStyle = isHigh ? 'rgba(239,68,68,0.18)' : 'rgba(37,99,235,0.18)';
        ctx.fill();
      }
      // Dot
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, isActive ? 5 : 3.5, 0, Math.PI * 2);
      ctx.fillStyle = isHigh ? '#ef4444' : '#2563eb';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, isActive ? 5 : 3.5, 0, Math.PI * 2);
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
    });

    // X-axis labels
    pts.forEach((pt, i) => {
      ctx.fillStyle = '#94a3b8';
      ctx.font = '11px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(xLabels[i], pt.x, PADDING.top + cH + 22);
    });
  };

  // Resize canvas on mount and window resize
  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      const height = 300;
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = height + 'px';
      const ctx = canvas.getContext('2d');
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(hoveredIndex);
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  useEffect(() => {
    draw(hoveredIndex);
  }, [hoveredIndex]);

  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const { cW, cH } = getChartDims();

    let closest = -1;
    let minDist = Infinity;
    data.forEach((_, i) => {
      const px = getX(i, cW);
      const py = getY(data[i], cH);
      const dist = Math.sqrt((mx - px) ** 2 + (my - py) ** 2);
      if (dist < minDist) { minDist = dist; closest = i; }
    });

    if (minDist < 40) {
      setHoveredIndex(closest);
      const px = getX(closest, cW);
      const py = getY(data[closest], cH);
      setTooltip({ visible: true, x: px, y: py, index: closest });
    } else {
      setHoveredIndex(-1);
      setTooltip((t) => ({ ...t, visible: false }));
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
    setTooltip((t) => ({ ...t, visible: false }));
  };

  const activePoint = tooltip.index >= 0 ? tooltipData[tooltip.index] : null;
  const isHighVal = activePoint && activePoint.value >= HIGH_LIMIT;

  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 16,
        padding: '24px 24px 16px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 17, fontWeight: 600, color: '#0f172a' }}>CO Level Trend</span>
          <button
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#94a3b8', fontSize: 16, lineHeight: 1, padding: 2,
              display: 'flex', alignItems: 'center',
            }}
            title="Carbon Monoxide level over time"
          >
            <Info />
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* Unit selector */}
          <select
            style={{
              border: '1px solid #e2e8f0', borderRadius: 8,
              padding: '6px 28px 6px 10px', fontSize: 13, color: '#374151',
              background: '#fff', outline: 'none', cursor: 'pointer',
              appearance: 'none',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 8px center',
            }}
          >
            <option>ppm</option>
            <option>db</option>
          </select>

          {/* Time range buttons */}
          <div
            style={{
              display: 'flex', border: '1px solid #e2e8f0',
              borderRadius: 8, overflow: 'hidden',
            }}
          >
            {TIME_RANGES.map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                style={{
                  padding: '6px 13px', fontSize: 13, fontWeight: 500,
                  border: 'none', cursor: 'pointer', transition: 'all 0.15s',
                  background: timeRange === range ? '#2563eb' : '#fff',
                  color: timeRange === range ? '#fff' : '#64748b',
                  borderRight: range !== '30D' ? '1px solid #e2e8f0' : 'none',
                }}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chart */}
      <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
        <canvas
          ref={canvasRef}
          style={{ display: 'block', cursor: 'crosshair' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />

        {/* Tooltip */}
        {tooltip.visible && activePoint && (
          <div
            style={{
              position: 'absolute',
              left: tooltip.x - 56,
              top: tooltip.y - 72,
              background: '#fff',
              border: '1px solid #e2e8f0',
              borderRadius: 10,
              padding: '8px 16px',
              pointerEvents: 'none',
              boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
              minWidth: 110,
              zIndex: 10,
            }}
          >
            <div style={{ fontSize: 12, color: '#64748b', marginBottom: 2 }}>
              {activePoint.time}
            </div>
            <div style={{ fontSize: 18, fontWeight: 600, color: isHighVal ? '#ef4444' : '#2563eb' }}>
              {activePoint.value} ppm
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
