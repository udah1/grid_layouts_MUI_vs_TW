import { ReactNode } from 'react';

interface ContentContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * ContentContainer - Constrains content to 1200px max-width
 * Even when used inside edge-to-edge containers, this ensures
 * the actual content respects the 1200px limit
 */
export const ContentContainer = ({ children, className = '' }: ContentContainerProps) => {
  return (
    <div className={`max-w-[1200px] mx-auto px-4 sm:px-6 md:px-6 ${className}`}>
      {children}
    </div>
  );
};

