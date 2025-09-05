interface PageControlProps {
  total: number;
  current: number;
}

const PageControl = ({ total, current }: PageControlProps) => {
  const dots = Array.from({ length: total }, (_, i) => {
    const isActive = i === current - 1;

    return (
      <div
        key={i}
        className={`h-2 w-2 rounded-full bg-primary ${
          !isActive ? 'opacity-30' : ''
        }`}
      />
    );
  });
  return (
    <>
      <div className="px-2 py-2 gap-2 flex flex-row justify-center items-center">
        {dots}
      </div>
    </>
  );
};

export default PageControl;
