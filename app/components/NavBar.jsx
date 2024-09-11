import Link from 'next/link';
import { Syncopate, Cagliostro } from 'next/font/google';

const syncopate = Syncopate({
  weight: ['400', '700'], 
  subsets: ['latin'],     
});

const cagliostro = Cagliostro({
  weight: ['400'], 
  subsets: ['latin'],     
});

const Navbar = () => {
  return (
    <nav className={`bg-black text-white p-6 flex justify-between items-center text-sm ${syncopate.className}`}>
      <div className="space-x-20 flex">
        <div className="">
          <p>
            [DHARANI SRI]
          </p>
          <p>
            CHENNAI, TAMILNADU
          </p>
        </div>
        <div className="">
          <p>CURRENTLY AVAILABLE FOR</p> 
          <p>FREELANCE PROJECTS</p>
        </div>
      </div>
      <div className={`space-x-24 ${syncopate.className}`}>
        <Link href="/works" className="cursor-none hover:underline">
          [Works]
        </Link>
        <Link href="/about" className="cursor-none hover:underline">
          [About]
        </Link>
        <Link href="/contact" className="cursor-none pr-4 hover:underline">
          [Contact]
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
