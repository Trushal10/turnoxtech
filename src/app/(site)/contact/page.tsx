import { Contact } from "@/app/components/contact/Contact";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact Us | SiEducational",
};

export default function Page() {
    return (
        <>
            <Contact />
        </>
    );
};