import { Icons } from "@/components/Icons";

const Footer = () => {
  return (
    <footer className="m-4 rounded-lg bg-white shadow dark:bg-gray-800 dark:shadow-lg">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-600 dark:text-gray-400 sm:text-center">
      
          <a
            target="_blank"
            href="https://biliweb.com"
            className="mx-1 hover:underline"
          >
            Made By Bili
          </a>
   
        </span>
        
        
      </div>
    </footer>
  );
};

export default Footer;
