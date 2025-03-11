// app/login/Layout.tsx
import React from 'react';

import { ReactNode } from 'react';

interface LoginLayoutProps {
  children: ReactNode;
}

const LoginLayout: React.FC<LoginLayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Your layout components or styles go here */}
      {children}
    </div>
  );
};

export default LoginLayout;