import fs from "fs";
import ReactMarkdown from 'react-markdown';
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";
import Nav from "@/components/Nav";

const getPostcontent = (slug: string) => {
    const folder = "articles/partnerships/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf-8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
    const posts = getPostMetadata({ folder: "articles/partnerships/" });
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostcontent(slug);
    let html = <div className="w-4/5 lg:w-2/5 mx-auto pt-4">
            <img className="w-full rounded-lg shadow" src={post.data.img} alt="" />
            <div className="p-8">
                <h1 className="text-4xl font-bold">{post.data.title}</h1>
                <p className="text-neutral-300 mb-8">{post.data.date}</p>
                <article className="prose">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </article>
            </div>
        </div>;
    for (const link in post.data.links) {
        console.log(post.data.links[link]);
    }
    return (
        html
    );
};

export default PostPage;