import React, { useRef, useState, useCallback, SyntheticEvent } from 'react';
import { useGetUsersQuery } from "./../redux/store";


const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [filter, setFilter] = useState("");
    const { data: users } = useGetUsersQuery();
    const textRef = useRef<HTMLInputElement>(null);

    const handleLogin = useCallback(
        () => {
            setIsLoggedIn(true);
            setFilter((textRef.current!.value ?? ""));
            textRef.current!.value = "";
        }, []
    );

    const handleLogout = async (e: SyntheticEvent) => {
        e.preventDefault();
        setIsLoggedIn(false);
        setFilter("");
    }


    return (
            <div className="Container">
                {!isLoggedIn ? (
                    <div>
                        <input type="text" placeholder="Name" id="login-input" ref={ textRef } />
                        <button id="login-btn" onClick={ handleLogin }>Login</button>
                    </div>
                    ) :
                    (<div>
                        <button id="logout-btn" onClick={ handleLogout }>Logout</button>
                        <div className="Card-Container">
                        {users ? (users.filter(user => user.name.toLowerCase()===filter.toLowerCase()).map(
                            (item, index) => (
                                <div className="Card-Body" key={index}>                                    
                                    <h3>Name</h3>
                                    <div className="user-name-data"><p className="user-name">{item.name}</p></div>
                                    <hr />
                                    <h3>Address</h3>
                                    <div className="user-address-data"><p className="user-address">{item.address.city}</p></div>
                                </div>
                            )
                        )) : ("")}
                        </div>
                    </div>
                )}
            </div>
        );
}

export default Home;
