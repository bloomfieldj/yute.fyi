interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="container h-screen w-screen flex flex-col items-center justify-center">
      {children}
    </div>
  );
}
