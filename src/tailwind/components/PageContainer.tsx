import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * PageContainer - Wraps page content with proper margins
 * - Mobile: 16px margins
 * - Tablet: 24px margins
 * - Desktop: 24px margins
 */
export const PageContainer = ({ children, className = '' }: PageContainerProps) => {
  return (
    <div className={`w-full px-4 sm:px-6 md:px-6 ${className}`}>
      {children}
    </div>
  );
};

