export const metadata = {
  title: 'Tomie Choi',
  description: 'English & Korean Conversation Coach',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
