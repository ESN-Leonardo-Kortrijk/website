import PostMetadata from "./PostMetadata";
import fs from "fs";
import matter from "gray-matter";

const getPostMetadata = ({folder}: { folder: string }): PostMetadata[] => {
    const files = fs.readdirSync(folder);
    const markdownFiles = files.filter((file) => file.endsWith(".md"));
    console.log(markdownFiles, folder);
    
    const posts = markdownFiles.map((file) => {
        const content = fs.readFileSync(`${folder}${file}`, "utf-8");
        const matterResult = matter(content);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            slug: `${file.replace(".md", "")}`,
            img: matterResult.data.img
        }

    });
    return posts;
};

export default getPostMetadata;