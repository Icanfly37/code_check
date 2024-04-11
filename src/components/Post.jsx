/* eslint-disable react/prop-types */
function Post(props) {
    function onClickLike (message){
        return (
            alert(message)
        );
    }
    return (
        // eslint-disable-next-line react/prop-types
    <div className="post">
        <div className="title bg-blue">
            <h3>{props.title}</h3>
        </div>
        <div className="content">
            <img className="pic_size" src={props.img}></img>
            <p>{props.children}</p>
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