import { ReactNode } from 'react';

interface GridContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * GridContainer - A Grid container with automatic column configuration
 * - Mobile (xs): 6 columns, 16px gutters
 * - Tablet (sm): 12 columns, 24px gutters  
 * - Desktop (md): 12 columns, 24px gutters
 */
export const GridContainer = ({ children, className = '' }: GridContainerProps) => {
  return (
    <div className={`grid grid-cols-6 sm:grid-cols-12 md:grid-cols-12 gap-[16px] sm:gap-[24px] md:gap-[24px] ${className}`}>
      {children}
    </div>
  );
};

