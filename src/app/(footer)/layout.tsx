import AppFooter from '@/components/layout/app-footer';

const FooterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full flex flex-col">
      {children}
      <AppFooter />
    </div>
  );
};

export default FooterLayout;
