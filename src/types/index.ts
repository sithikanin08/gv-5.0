import type { ComponentType, SVGProps } from 'react';

export type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;

export interface Role {
  title: string;
  openings: number;
  icon: IconComponent;
  jobDescription: string[];
  skills: string[];
  kpis: string[];
  learningOutcomes: string[];
}
