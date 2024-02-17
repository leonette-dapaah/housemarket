import { aboutItems } from "@/data/footerItems";
import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FiDribbble } from "react-icons/fi"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
export const Footer: React.FC = () => {
    return (
        <section className="bg-[#060F42] py-8 px-6 flex flex-col items-center justify-center gap-2.5 w-full">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-80">
                <div className="lg:flex flex-col gap-8">
                    <h2 className="text-4xl font-semibold font-faustina text-white">HouseMarket</h2>
                    <div className="flex flex-col gap-4">
                        <p className="text-base font-medium uppercase text-white">Get In Touch</p>
                        <p className="text-white">Accra.</p>
                        <div className="text-white">
                            <p>Opening Hours</p>
                            <p>Mon - Fri: 9.00am to 6.30pm</p>
                            <p>Saturday: 10.00am to 3.00pm</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="font-semibold uppercase text-primary text-xl text-white">About</p>
                    <div className="text-white ">
                        {aboutItems.map((item, index) => {
                            return (
                                <p role="button" key={index}>{item.title}</p>
                            )
                        })}
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-1">
                        <p className="text-xl text-primary text-white">Join our newsletter</p>
                        <p className="text-sm text-white">We'll send you a nice letter once per week.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <input type="text" placeholder="Enter your email" className="py-1.5 px-3 border rounded-md bg-[#060F42] "/>
                        <div>
                            <button type="button" className="p-6 bg-[#060F42]  text-white text-sm py-3.5 rounded uppercase">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="bg-gray-eee h-px w-full [w-450px]" />
            <div className="flex justify-between items-center mt-[10px]">
                <div className="text-sm text-white">
                    <p className="ml-[-700px]">&copy; 2023 HouseMarket. All rights reserved.</p>
                </div>
                <div className="flex gap-4 mr-[-670px]">
                    <AiFillFacebook role="button" size={27} className="text-white" />
                    <FiDribbble role="button" size={27} className="text-white" />
                    <AiOutlineTwitter role="button" size={27} className="text-white" />
                    <AiFillLinkedin role="button" size={27} className="text-white" />
                </div>
            </div>
        </section>
    );
}