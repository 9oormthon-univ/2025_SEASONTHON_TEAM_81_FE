import Image from 'next/image';
import Link from 'next/link';

const AppFooter = () => {
  return (
    <div className="w-full h-auto pt-2 pb-10 grid grid-cols-4 footer">
      <MenuItems
        text="홈"
        link="/"
        image="/icon/home.svg"
        width={22}
        height={22}
      />
      <MenuItems
        text="마음산책"
        link="/map"
        image="/icon/foot.svg"
        width={20}
        height={26}
      />
      <MenuItems
        text="마음정원"
        link="/"
        image="/icon/flower.svg"
        width={20}
        height={24}
      />
      <MenuItems
        text="마이"
        link="/"
        image="/icon/my.svg"
        width={22}
        height={24}
      />
    </div>
  );
};

interface MenuItemsProps {
  text: string;
  link: string;
  image: string;
  width: number;
  height: number;
}

const MenuItems = ({ text, link, image, width, height }: MenuItemsProps) => {
  return (
    <>
      <Link
        className="w-full h-auto flex flex-col items-center justify-center"
        href={link}
      >
        <Image
          width={width}
          height={height}
          src={image}
          alt={text}
        />
        <p className="w-full h-3 label7 text-sub text-center">{text}</p>
      </Link>
    </>
  );
};

export default AppFooter;
