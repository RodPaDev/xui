interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <main className="flex flex-col min-h-screen max-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background dark:bg-[radial-gradient(#393e4a_1px,transparent_1px)] bg-[radial-gradient(#dadde2_1px,transparent_1px)] [background-size:33px_33px]" />
      <div className="relative flex flex-col min-h-screen overflow-auto px-4 pb-4">
        {children}
      </div>
    </main>
  );
}
