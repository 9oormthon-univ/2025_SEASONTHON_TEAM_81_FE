interface PageControlProps {
  total: number;
  current: number;
  color?: 'black' | 'green';
}

const PageControl = ({ total, current, color = 'black' }: PageControlProps) => {
  const dots = Array.from({ length: total }, (_, i) => {
    const isActive = i === current;

    return (
      <div
        key={i}
        className={`h-2 w-2 rounded-full ${
          isActive && color === 'green' ? 'bg-green' : 'bg-black'
        } ${!isActive ? 'opacity-30' : ''}`}
      />
    );
  });
  return (
    <>
      <div className="px-2 py-3 gap-2 flex flex-row justify-center items-center">
        {dots}
      </div>
    </>
  );
};

export default PageControl;
