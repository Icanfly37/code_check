import Post from "./Post";

const posts = [
    {
        title : "ธรรมะกระตุกจิตกระชากใจ เพื่อบรรลุอรหันต์",
        image : "https://us-tuna-sounds-images.voicemod.net/8fab1c3e-1cb9-47b6-8fe3-699bc7c2aaa9-1655706403347.jpg",
        contain : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, temporibus quaerat laborum quis incidunt impedit alias. Alias, doloribus officiis nemo laudantium id dicta fugiat deserunt voluptate hic quaerat, voluptas ab!"
    },
    {
        title : "ธรรมะกระตุกจิตกระชากใจ เพื่อบรรลุอรหันต์",
        image : "https://us-tuna-sounds-images.voicemod.net/8fab1c3e-1cb9-47b6-8fe3-699bc7c2aaa9-1655706403347.jpg",
        contain : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, temporibus quaerat laborum quis incidunt impedit alias. Alias, doloribus officiis nemo laudantium id dicta fugiat deserunt voluptate hic quaerat, voluptas ab!"
    },
    {
        title : "ธรรมะกระตุกจิตกระชากใจ เพื่อบรรลุอรหันต์",
        image : "https://us-tuna-sounds-images.voicemod.net/8fab1c3e-1cb9-47b6-8fe3-699bc7c2aaa9-1655706403347.jpg",
        contain : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, temporibus quaerat laborum quis incidunt impedit alias. Alias, doloribus officiis nemo laudantium id dicta fugiat deserunt voluptate hic quaerat, voluptas ab!"
    }
]
function News() {
    return (
    <div className="news">
        {posts.map(
            (post) => {
                return (
                    // eslint-disable-next-line react/jsx-key
                    <Post title={post.title}img = {post.image}>
                        {post.contain}
                    </Post>
                );
            }
            /*function (post) {
                return (
                    <Post title={post.title}img = {post.image}>
                        {post.contain}
                    </Post>
                );
            }*/
        )}

        
    </div>
    );
}

export default News;