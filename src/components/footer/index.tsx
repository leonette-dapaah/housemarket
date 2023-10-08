import { aboutItems } from "@/data/footerItems";
import React from "react";

export const Footer: React.FC = () => {
    return (
        <section className="bg-customGray py-4 px-6 flex flex-col items-center gap-2.5">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
                <div className="flex flex-col gap-8">
                    <h2 className="text-3xl font-semibold font-faustina">HouseMarket</h2>
                    <div className="flex flex-col gap-4">
                        <p className="text-base font-medium uppercase">Get In Touch</p>
                        <p>Accra.</p>
                        <div>
                            <p>Opening Hours</p>
                            <p>Mon - Fri: 9.00am to 6.30pm</p>
                            <p>Saturday: 10.00am to 3.00pm</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-base font-medium uppercase">About</p>
                    <div>
                        {aboutItems.map((item, index) => {
                            return (
                                <p role="button" key={index}>{item.title}</p>
                            )
                        })}
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-1">
                        <p className="text-xl">Join our newsletter</p>
                        <p className="text-sm">We'll send you a nice letter once per week.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <input type="text" placeholder="Enter your email" className="py-1.5 px-3 border rounded-md" />
                        <div>
                            <button type="button" className="bg-primary text-white text-sm py-1.5 rounded uppercase">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="bg-customGray h-2 w-full" />
            <div className="text-sm">
                <span>&copy; 2023 HouseMarket. All rights reserved.</span>
            </div>
        </section>
    );
}