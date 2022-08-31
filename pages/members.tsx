import { NextPage } from "next";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import Layout from "../components/Layout";

const MemberItem: FC<{ name: string; course: string; image: string, linkedIn?: string }> = ({ name, course, image, linkedIn }) => {
    return (
        <div className="flex flex-col space-y-2 items-center max-w-[200px] min-h-[326px] select-text">
            <div className="w-full">
                <Image 
                    src={'/assets/profiles/'+image} 
                    width={500} 
                    height={500} 
                    layout="responsive" 
                    className="rounded-full" 
                    style={{filter: "drop-shadow(0px -3px 8px #001E7620)"}}
                    alt={`Profile of ${name}`}/>
            </div>
            <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-bold text-[#001E76]">{name}</h1>
                <p className="text-sm">{course}</p>
                {linkedIn && <a target="_blank" rel="noreferrer" href={linkedIn} className="text-sm text-gray-600">
                    <Image src="https://img.icons8.com/material-outlined/24/000000/linkedin--v1.png" width={24} height={24} alt="LinkedIn"/>
                </a>}
            </div>
        </div>
    );
}

const Members: NextPage = () => {
    return (
        <Layout title="About Us">
            <h1 className='text-4xl font-bold py-4 text-center'>Members</h1>
            <p className='leading-8 py-4 text-lg'>One cannot just belong, one must gain the right to become. That pathway is by being a graduate of CEC. Here’s a shortlist of our current members.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
                <MemberItem
                    name="Boon Jun"
                    course="Mechatronics Engineering"
                    image="BoonJun.png"
                    linkedIn="https://www.linkedin.com/in/jun-boon/"
                />
                <MemberItem
                    name="Poh Mun Hong"
                    course="Mechatronics Engineering"
                    image="PohMunHong.png"
                    linkedIn="https://www.linkedin.com/in/mun-hong-poh-031888124/"
                />
                <MemberItem
                    name="Cheah Yeok Tatt"
                    course="Unknown"
                    image="CheahYeokTatt.png"
                    linkedIn="https://www.linkedin.com/in/yeok-tatt-cheah/"
                />
                <MemberItem
                    name="Lean Xin Ying"
                    course="Computer Science Major in Data Analysis"
                    image="LeanXinYing.png"
                    linkedIn="https://www.linkedin.com/in/schonying-lean-7299a1199/"
                />
                <MemberItem
                    name="Kang Yi Chen"
                    course="Electronic Information Science and Technology"
                    image="KangYiChen.png"
                    linkedIn="https://www.linkedin.com/in/schonying-lean-7299a1199/"
                />
                <MemberItem
                    name="Ooi Teng Hao"
                    course="MEng Mechanical Engineering"
                    image="OoiTengHao.png"
                    linkedIn="https://www.linkedin.com/in/thooi998/"
                />
                <MemberItem
                    name="Koay Ji Qian"
                    course="Computer Science"
                    image="KoayJiQian.png"
                />
            </div>
        </Layout>
    )
}

export default Members;