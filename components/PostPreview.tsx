import Link from "next/link";
import PostMetadata from "./PostMetadata";

export default function PostPreview ({ post,  }: { post: PostMetadata }) {
    const destination = `/${post.slug}`;
    return (
        <Link key={post.slug} href={destination}>
            <div className="flex flex-col lg:flex-row rounded-md w-full m-4 mx-auto bg-white shadow-md">
                <img src={post.img} className="h-48 w-full lg:w-56 rounded-md object-cover" alt="" />
                <div className="flex flex-col p-2">
                    <h2 className="text-xl font-bold">{post.title}</h2>
                    <p className="text-neutral-400">{post.date}</p>
                    <p className="w-full">{post.subtitle}</p>
                    <p className="text-blue-600 underline">Read More</p>
                </div>
            </div>
        </Link>
    );
}