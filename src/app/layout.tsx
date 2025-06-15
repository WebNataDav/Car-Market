import "../styles/global.scss";

export const metadata = {
  title: "Car Market",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="vsc-initialized">{children}</body>
    </html>
  );
}
