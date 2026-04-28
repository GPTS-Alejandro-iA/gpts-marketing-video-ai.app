export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = 0;
export const fetchCache = "force-no-store";
export const runtime = "edge";
export const preferredRegion = "auto";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}

