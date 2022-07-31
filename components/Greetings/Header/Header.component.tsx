//Types
import { ReactElement } from "react";

//Next Components
import Image from "next/image"

//Components
import Button from "@components/Defaults/Button/Button.component";
import ImageButton from "@components/Defaults/ImageButton/ImageButton.component";

export default function Header():ReactElement {
    const headerFields = [
        "Home",
        "Product",
        "Pricing",
        "Contact",
    ]
    return <header className="fixed flex items-center md:justify-center bg-dark-background w-full h-24 px-1">
        <nav className="flex w-full max-w-[1180px] items-center justify-between pr-4 md:pr-2">
        <section className="flex items-center justify-between w-[50vw] max-w-[500px]">
        <Image width={56} height={56} className="brightness-0 invert active:invert-0" alt="Smiling Egg Image" src="/egg.png" />
        <div className="hidden md:flex md:justify-between gap-7">
            {headerFields.map((item) => <p className="font-montserrat font-bold text-white cursor-pointer select-none hover:opacity-80" key={item}>{item}</p>)}
        </div>
        </section>
        <section className="flex gap-10 items-center">
            <ImageButton src={"/user.png"} className="brightness-0 invert" size="28px" buttonStyle="block md:hidden" alt="User Icon" />
            <ImageButton src={"/menu.png"} className="brightness-0 invert" size="28px" buttonStyle="block md:hidden" alt="Burger Menu Icon" />
            <p className="hidden md:block font-montserrat font-bold text-white cursor-pointer select-none hover:opacity-80" >Login</p>
            <div className="hidden md:block">
            <Button>JOIN US &#8594;</Button>
            </div>
        </section>
        </nav>
    </header>
}