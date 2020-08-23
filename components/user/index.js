import React from 'react';

export default function User(props) {
    const { index, user } = props;
    //ID, Name, Status, Species, Gender, Image, Created, Origin, Last Location,
    return (
        <>
            <div key={user.id} className="user">
                <figure className="image">
                    <img src={user.image} alt={user.name} />
                    <figcaption>
                        <span>{user.name}</span>
                        <span>Id: {user.id} - created {user.Created}</span>
                    </figcaption>
                </figure>
                <ul>
                    <li><span>Status</span> <small>{user.status}</small></li>
                    <li><span>Gender</span> <small>{user.gender}</small></li>
                    <li><span>Species</span> <small>{user.species}</small></li>
                    <li><span>Origin</span> <small>{user.origin.name}</small></li>
                </ul>
            </div>
            <style jsx>{`
            .user {
                width: 230px;
                margin: 10px;
                background: #222;
                border-radius: 5px;
                color: #eee;
                overflow: hidden;
                font-size: 14px;
            }

            .image img {
                max-width: 100%;
            }

            figure {
                margin: 0;
                position: relative;
            }

            figcaption {
                left: 0;
                right: 0;
                background: rgba(0,0,0,0.5);
                position: absolute;
                bottom: 0;
                padding: 5px;
                z-index: 1;
            }

            ul {
                margin: 0;
                padding: 0;
                list-style: none;
            }

            ul li {
                display: flex;
                justify-content: space-between;
                height: 30px;
                align-items: center;
                padding: 5px;
                border-bottom: 1px solid #111;
                
            }
            li small {
                color: #E8970F;
            }
        `}
            </style>
        </>
    )
}