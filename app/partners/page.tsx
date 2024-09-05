import PostPreview from "@/components/PostPreview";
import getPostMetadata from "@/components/getPostMetadata";


const PartnerPage = () => {
    const PostMetadata = getPostMetadata({folder: "articles/partnerships/"});
    const postPreviews = PostMetadata.map((post) => {
        post.slug = `partners/${post.slug}`;
        return(
        <PostPreview key={post.slug} post={post} />
        );
    });

    return <div className="flex flex-col pt-4 w-full items-center justify-center">
                <div className="p-4 ">
                    {postPreviews}
                </div>
            </div>

}

export default PartnerPage;