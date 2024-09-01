import React from "react";
import { Avatar, Menu } from "@mantine/core";


const ProfileMenu = ({user, logout}) =>{
    return (
        <Menu>
            <Menu.Target>
                <Avatar src={user?.picture} alt="userImage" radius={"xl"}/>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item> Aplication </Menu.Item>
                <Menu.Item> Favorites </Menu.Item>
                <Menu.Item> Bookings </Menu.Item>
                <Menu.Item> Go Back </Menu.Item>
                <Menu.Item 
                onClick={() =>{
                    localStorage.clear();
                    logout();
                }} color="red" > Logout </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}

export default ProfileMenu
