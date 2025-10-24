import { About } from "@/app/components/about/About";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Featurs | SiEducational",
};

export default function Page() {
    return (
        <>
            <About />
        </>
    );
};