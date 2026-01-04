import * as React from 'react';
import ThemeRegistry from './ThemeRegistry';
import Navigation from '../component/Navigation';

export const metadata = {
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: 'mui' }}>
            {/* <Navigation/> */}
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
