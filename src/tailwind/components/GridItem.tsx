import { ReactNode } from 'react';

interface GridItemProps {
  children: ReactNode;
  xs?: number | 'grow' | 'auto';
  sm?: number | 'grow' | 'auto';
  md?: number | 'grow' | 'auto';
  className?: string;
}

/**
 * GridItem - A Grid item with responsive sizing
 * Handles the column differences between mobile (6 cols) and tablet/desktop (12 cols)
 * 
 * Usage:
 * <GridItem xs={6} sm={6} md={5}> // 5/12 on desktop, 6/6 on mobile
 */
export const GridItem = ({ children, xs, sm, md, className = '' }: GridItemProps) => {
  // Build Tailwind classes for column spans
  // Note: Tailwind needs full class names, so we'll use a mapping
  const colSpanMap: Record<number, string> = {
    1: 'col-span-1', 2: 'col-span-2', 3: 'col-span-3', 4: 'col-span-4',
    5: 'col-span-5', 6: 'col-span-6', 7: 'col-span-7', 8: 'col-span-8',
    9: 'col-span-9', 10: 'col-span-10', 11: 'col-span-11', 12: 'col-span-12',
  };

  const getColClass = (size: number | 'grow' | 'auto' | undefined, prefix: string) => {
    if (!size) return '';
    if (size === 0) return `${prefix}:hidden`; // Hide when size is 0
    if (size === 'grow' || size === 'auto') return `${prefix}:flex-1`;
    return `${prefix}:${colSpanMap[size]}`;
  };

  const colClasses = [
    xs !== undefined && typeof xs === 'number' && xs !== 0 ? colSpanMap[xs] : '',
    xs === 0 ? 'hidden' : '', // Hide on mobile if xs is 0
    getColClass(sm, 'sm'),
    getColClass(md, 'md'),
  ].filter(Boolean).join(' ');

  return (
    <div className={`${colClasses} ${className}`}>
      {children}
    </div>
  );
};

