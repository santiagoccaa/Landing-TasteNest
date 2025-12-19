import { Flex, Heading, Text } from "@/components/UI";
import Link from "next/link";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex">
            <div className="h-screen w-72 bg-secondary space-y-4">
                <Link href={"/"}>
                    <Heading>TasteNest</Heading>
                </Link>
                <Flex direction="col" className="mt-20" gap="6">
                    <Link href="/admin" className="px-4 w-full bg-white hover:bg-red duration-300">
                        <Text fs="lg" fw="medium">Home</Text>
                    </Link>
                    <Link href="/admin/products" className="px-4 w-full bg-white hover:bg-red duration-300">
                        <Text fs="lg" fw="medium">Productos</Text>
                    </Link>
                    <Link href="/admin/categories" className="px-4 w-full bg-white hover:bg-red duration-300">
                        <Text fs="lg" fw="medium">Categories</Text>
                    </Link>
                </Flex>
            </div>
            <div className="bg-purple-100 w-full p-4 h-screen">
                {children}
            </div>
        </div>
    );
}
