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

    // Background Grid lines matching reference oscilloscope
    ctx.strokeStyle = 'rgba(217, 225, 234, 0.8)';
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

    const zeroY = height / 2;
    const scaleY = (height - 16) / 1.2;

    // Threshold Line (+0.25g)
    const threshY = zeroY - metrics.detectionThreshold * scaleY;
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.7)';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(0, threshY);
    ctx.lineTo(width, threshY);
    ctx.stroke();
    ctx.setLineDash([]);

    const stepX = width / (history.length - 1);

    // Dynamic Waveform Line (Amber/Orange - Matching Reference Oscilloscope)
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 2.2;
    ctx.beginPath();

    history.forEach((point, idx) => {
      const x = idx * stepX;
      // Alternate sign around zero line for waveform look
      const signalVal = (idx % 2 === 0 ? 1 : -1) * point.dynamicAcceleration;
      const y = zeroY - signalVal * scaleY;
      if (idx === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Latest Reading Indicator Dot
    const lastPoint = history[history.length - 1];
    const lastX = (history.length - 1) * stepX;
    const lastY = zeroY - lastPoint.dynamicAcceleration * scaleY;

    ctx.fillStyle = lastPoint.dynamicAcceleration > metrics.detectionThreshold ? '#dc2626' : '#d97706';
    ctx.beginPath();
    ctx.arc(lastX, lastY, 4, 0, Math.PI * 2);
    ctx.fill();

  }, [history, metrics, phase]);

  return (
    <div className="bg-white rounded-xl p-3 border border-[#D9E1EA] flex flex-col justify-between shadow-sm space-y-1.5 w-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-1.5 border-b border-[#D9E1EA]">
        <div className="flex items-center gap-2">
          <Waves className="w-4 h-4 text-cyan-600" />
          <div className="flex items-center gap-2">
            <h2 className="font-mono font-bold text-xs lg:text-sm text-slate-800 tracking-wide uppercase">
              LIVE VIBRATION WAVEFORM
            </h2>
            <span className="text-[10px] text-slate-500 font-normal hidden sm:inline">&bull; Real-time acceleration data</span>
          </div>
        </div>
        <span className="text-[10px] font-mono text-cyan-700 font-bold">
          100 Hz STREAM
        </span>
      </div>

      {/* Oscilloscope Canvas with Y-Axis Ticks - Stretched Full Width */}
      <div className="relative w-full h-[85px] lg:h-[95px] bg-slate-50 border border-[#D9E1EA] rounded-lg overflow-hidden flex">
        {/* Y Axis Ticks */}
        <div className="flex flex-col justify-between py-1 px-1.5 font-mono text-[9px] text-slate-500 border-r border-[#D9E1EA] bg-white">
          <span>0.5g</span>
          <span>0</span>
          <span>-0.5g</span>
        </div>

        {/* Canvas */}
        <div className="relative flex-1 h-full bg-[#FAFAFA]">
          <canvas ref={canvasRef} className="w-full h-full block" />
        </div>
      </div>

      <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 pt-0.5">
        <span className="font-bold">TIME &rarr;</span>
        <span className="text-amber-600 font-bold">THRESHOLD: 0.25g</span>
      </div>
    </div>
  );
};
