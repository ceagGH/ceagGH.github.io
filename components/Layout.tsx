import { Collapse, Fade, Grow } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, PropsWithChildren, useState } from "react";
import { useMediaQuery } from "react-responsive";
import CEAGLogo from '../public/assets/logo/CEAG Logo v1_edited.jpg';
import Facebook from "./Icons/Facebook";
import Instagram from "./Icons/Instagram";

const NavItem: FC<{ href: string; label: string }> = ({
    href,
    label,
}) => {
    const router = useRouter();
    const isActive = router.pathname === href;
    return (
        <Link href={href}><a className={`text-xl ${isActive?'text-[#011e76] font-bold': 'text-gray-400 font-semibold'} transition-colors`}>{label}</a></Link>
    );
}


const Layout: FC<PropsWithChildren<{title?: string}>> = ({ title = "CEC Alumni-Advisor Group", children }) => {
    const router = useRouter();
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [menuOpen, setMenuOpen] = useState(false);
    const showMenu = menuOpen || !isMobile;

    return <div className="grid grid-rows-[64px_auto] md:grid-rows-1 md:grid-cols-[18rem_auto] h-screen overflow-hidden">
        <Head>
            <title>{`${title} | CEAG`}</title>
        </Head>
        {isMobile && <div className="sticky top-0 bottom-0 flex flex-row h-16 items-center px-2 z-50 bg-white">
            <div className="w-6 h-6 m-4 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                {!menuOpen?
                <Image src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png" width={24} height={24} alt="Menu"/>:
                <Image src="https://img.icons8.com/material-outlined/24/000000/delete-sign.png" width={24} height={24} alt="Close"/>}
            </div>
            <div className="w-24">
                <Image onClick={() => router.push('/')} src={CEAGLogo} layout="responsive" alt="CEAG Logo"/> 
            </div>
        </div>}
        <Grow appear={isMobile} in={showMenu} style={{ transformOrigin: '0 0 0' }}>
            <div className="fixed md:static top-16 left-0 h-[calc(100vh-64px)] md:h-screen w-screen md:w-auto flex flex-col px-4 py-6 z-50 bg-white">
                <div className="w-40 hidden md:block cursor-pointer">
                    <Image onClick={() => router.push('/')} src={CEAGLogo} layout="responsive" alt="CEAG Logo" /> 
                </div>
                <nav className="flex-1 md:flex-0 mt-8 ml-5 flex flex-col space-y-3">
                    <NavItem href='/' label='Home' />
                    <NavItem href='/aboutus' label='About Us' />
                    <NavItem href='/members' label='Members' />
                    <NavItem href='/activities' label='Activities' />
                </nav>
                <footer className="space-y-2 mt-8">
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/cec_clphs/" className="text-sm text-gray-600 flex flex-row space-x-2 items-center">
                        <Instagram/>
                        <span>Instagram</span>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://facebook.com/clphscec" className="text-sm text-gray-600 flex flex-row space-x-2 items-center">
                        <Facebook/>
                        <span>Facebook</span>
                    </a>
                    <p className="text-sm text-gray-600">Copyright © 2022 CEAG</p>
                </footer>
            </div>
        </Grow>
        <Fade in>
            <div className="px-4 py-8 md:px-16 md:py-20 overflow-auto z-0">
                {children}
            </div>
        </Fade>
    </div>
}

export default Layout;