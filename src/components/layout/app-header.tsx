import Image from 'next/image';

interface AppHeaderProps {
  content: React.ReactNode;
}

const AppHeader = ({ content }: AppHeaderProps) => {
  return (
    <div className="w-full h-8 px-4 mt-8 z-1 flex flex-row justify-between absolute top-0">
      <Image
        src="/icon/logo_header.svg"
        width={120}
        height={30}
        alt="Logo"
      />
      <div className="h-full">{content}</div>
    </div>
  );
};

export default AppHeader;
