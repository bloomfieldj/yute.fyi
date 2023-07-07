type PostLayoutProps = {
  children: React.ReactNode;
};

export default function PostLayout({ children }: PostLayoutProps) {
  return (
    <div className="w-full px-6 pb-6 flex flex-col items-center justify-center ">
      {children}
    </div>
  );
}
