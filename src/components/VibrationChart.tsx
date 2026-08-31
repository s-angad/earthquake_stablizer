import React, { useRef, useEffect } from 'react';
import { SensorReading, SafetyDecisionMetrics } from '../types/esds';
import { Waves } from 'lucide-react';

interface VibrationChartProps {
  history: SensorReading[];
  metrics: SafetyDecisionMetrics;
  phase: string;
}

export const VibrationChart: React.FC<VibrationChartProps> = ({ history, metrics, phase }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;

    ctx.clearRect(0, 0, width, height);

    // Grid lines
    ctx.strokeStyle = 'rgba(30, 45, 74, 0.4)';
    ctx.lineWidth = 1;
    const gridRows = 4;
    const gridCols = 8;
    for (let i = 0; i <= gridRows; i++) {
      const y = (height / gridRows) * i;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
    for (let j = 0; j <= gridCols; j++) {
      const x = (width / gridCols) * j;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    if (history.length < 2) return;

    const zeroY = height - 16;
    const scaleY = (height - 30) / 1.5;

    // Threshold Line (+0.25g)
    const threshY = zeroY - metrics.detectionThreshold * scaleY;
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.7)';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(0, threshY);
    ctx.lineTo(width, threshY);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = 'rgba(245, 158, 11, 0.9)';
    ctx.font = '10px monospace';
    ctx.fillText(`0.25g THRESHOLD`, 8, threshY - 4);

    const stepX = width / (history.length - 1);

    // Dynamic Acceleration Line (Cyan)
    ctx.strokeStyle = '#06b6d4';
    ctx.lineWidth = 2.2;
    ctx.beginPath();

    history.forEach((point, idx) => {
      const x = idx * stepX;
      const y = zeroY - point.dynamicAcceleration * scaleY;
      if (idx === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Latest Reading Indicator Dot
    const lastPoint = history[history.length - 1];
    const lastX = (history.length - 1) * stepX;
    const lastY = zeroY - lastPoint.dynamicAcceleration * scaleY;

    ctx.fillStyle = lastPoint.dynamicAcceleration > metrics.detectionThreshold ? '#ef4444' : '#06b6d4';
    ctx.beginPath();
    ctx.arc(lastX, lastY, 4.5, 0, Math.PI * 2);
    ctx.fill();

  }, [history, metrics, phase]);

  return (
    <div className="panel-glass rounded-xl p-4 border border-console-border flex flex-col justify-between h-full shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-console-border mb-2">
        <div className="flex items-center gap-2">
          <Waves className="w-4 h-4 text-cyan-400" />
          <h2 className="font-mono font-bold text-xs lg:text-sm text-slate-200 tracking-wide uppercase">
            LIVE VIBRATION
          </h2>
        </div>
        <span className="text-[10px] font-mono text-cyan-400">
          DYNAMIC ACCELERATION WAVEFORM
        </span>
      </div>

      {/* Canvas */}
      <div className="relative w-full h-[150px] lg:h-[160px] bg-console-card/90 border border-console-border rounded-lg overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
    </div>
  );
};
