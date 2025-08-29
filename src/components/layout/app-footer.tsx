import Image from 'next/image';
import Link from 'next/link';

const AppFooter = () => {
  return (
    <div className="w-full grid grid-cols-5">
      <MenuItems
        text="1"
        link="/"
        image="file.svg"
      />
      <MenuItems
        text="2"
        link="/"
        image="globe.svg"
      />
      <MenuItems
        text="3"
        link="/"
        image="next.svg"
      />
      <MenuItems
        text="4"
        link="/"
        image="vercel.svg"
      />
      <MenuItems
        text="5"
        link="/"
        image="window.svg"
      />
    </div>
  );
};

interface MenuItemsProps {
  text: string;
  link: string;
  image: string;
}

const MenuItems = ({ text, link, image }: MenuItemsProps) => {
  return (
    <div>
      <Link
        className="flex flex-col items-center justify-center"
        href={link}
      >
        <Image
          width={40}
          height={40}
          src={image}
          alt={text}
        />
        <p>{text}</p>
      </Link>
    </div>
  );
};

export default AppFooter;
