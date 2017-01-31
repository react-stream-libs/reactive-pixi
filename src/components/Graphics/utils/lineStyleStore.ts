import { Graphics } from 'pixi.js';

export class GraphicsWithLineAlpha extends Graphics {
  lineAlpha: number;
};

export type LineStyleType = {
  color?: number,
  width?: number,
  alpha?: number,
};

export function getLineStyle(g: Graphics) {
  const graphicsWithLineAlpha = g as GraphicsWithLineAlpha;
  return {
    color: graphicsWithLineAlpha.lineColor,
    width: graphicsWithLineAlpha.lineWidth,
    alpha: graphicsWithLineAlpha.lineAlpha,
  };
}

export function setLineStyle(g: Graphics, lineStyle?: LineStyleType) {
  const _lineStyle = lineStyle || {};
  g.lineStyle(_lineStyle.width || 0, _lineStyle.color || 0, _lineStyle.alpha || 1);
}