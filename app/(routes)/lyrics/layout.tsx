import { auth } from "@/auth";
import Footer from "@/components/Shared/Footer/Footer";
import { Navbar } from "@/components/Shared/Navbar";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export default async function AuthLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
         // Authentication and user check
    const session = await auth();
    if (!session || !session.user || !session.user.id) {
        return redirect("/login");
    }

    const usersNetflix = await db.userNetflix.findMany({
        where: {
        userId: session.user.id,
        },
    });   
    return (
        <div className="h-full">
        <Navbar users={usersNetflix} />
        <div className="relative">
            <div className="bg-black h-full absolute w-full -z-10 bg-[url('/Logo.png')] bg-no-repeat bg-cover opacity-40 ">
            <div className=" h-full " />
            </div>
            <div className="h-full w-full">
            <div className="bg-black/70 px-14 py-16">{children}</div>
            </div>
        </div>
        <Footer />
        </div>
    );
}