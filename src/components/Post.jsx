function Post(Props) {
    function onClickLike (message){
        return (
            alert(message)
        );
    }
    return (
    <div className="post">
        <div className="title bg-blue">
            <h3>{Props.title}</h3>
        </div>
        <div className="content">
            <img className="pic_size" src={Props.img}></img>
            <p>{Props.children}</p>
        </div>
        <div>
            <button onClick={
                function () {
                    return (
                        onClickLike("You liked this post")
                    );
                }
            }>Like</button>
        </div>
    </div>
    );
}

export default Post;