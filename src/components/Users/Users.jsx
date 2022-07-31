import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./users.module.css";

import userAvatar from "../../images/content/user.jpg";


const Users = props => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 15) {
            pages.push(i);
        }
    }

    return (
        <section>
            {pages.map(page => {
                return <span
                    key={page}
                    className={props.currentPage === page ? styles.activePage : undefined}
                    onClick={() => props.onPageChange(page)}>{page}</span>
            })}
            {
                props.users.map(user =>
                    <div key={user.id}>
                        <div>
                            <img src={user.photos.small !== null ? user.photos.small : userAvatar} alt="user avatar"/>
                            <NavLink to={'/profile/' + user.id} >
                                <div>View Profile</div>
                            </NavLink>
                        </div>
                        <div>
                            <div>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </div>
                            <div>
                                <div>Czech Republic</div>
                                <div>Prague</div>
                            </div>
                            <div>
                                {user.followed
                                    ? <button
                                        disabled={props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => props.unfollow(user.id)}
                                      >Unfollow</button>

                                    : <button
                                        disabled={props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => props.follow(user.id)}
                                      >Follow</button>
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </section>
    );
}

export default Users;
