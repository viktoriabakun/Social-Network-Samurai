import React from 'react';
import s from './Post.module.css';

type Message = {
    message: string;
    count: number;
}

const Post = (props: Message) => {
    return (
        <div className={s.item}>
            <img
                src='https://cdn.imgbin.com/13/18/14/imgbin-avatar-vk-user-profile-deadpool-pixel-art-avatar-nRH7iwPxqeg72u0hC6SZmXfga.jpg'/>
            <div>
                {props.message}
            </div>
           <div>
               Likes: {props.count}
           </div>
        </div>
    )
}

export default Post;