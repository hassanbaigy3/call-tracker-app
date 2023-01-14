import { githubLink } from "../utils/URLS";

const Footer = ()=>{
return <footer className="w-full flex justify-center px-2 py-4 bg-white sm:px-4 shadow-xl h-full bottom-0 bg-secondary/25 text-secondary"><p>@ 2023 Copyright :</p> <a href={githubLink} className="font-bold">Hassan Baig</a></footer>
}

export default Footer;