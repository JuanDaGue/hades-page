import Link from "next/link";
import { Plus } from "lucide-react";

export default function Footer() {
    return (
        <div className="fixed bottom-4 right-4">
        <Link href="/upload-lyrics" className="bg-gray-500/50 hover:bg-gray-500/40 text-white p-3 rounded-full shadow-lg transition duration-300 ease-in-out flex items-center justify-center">
            <Plus className="w-6 h-6" />
        </Link>
        </div>
    );
}
