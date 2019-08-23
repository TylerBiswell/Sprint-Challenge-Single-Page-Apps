import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
export default function TabNav() {
    return (
        <Menu>
            <Menu.Item>
                <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item>
                <NavLink to="/characters">Characters</NavLink>
            </Menu.Item>
            <Menu.Item>
                <NavLink to="/locations">Locations</NavLink>
            </Menu.Item>
            <Menu.Item>
                <NavLink to="/episodes">Episodes</NavLink>
            </Menu.Item>
            <Menu.Item>
                <NavLink to="/search">Search</NavLink>
            </Menu.Item>
        </Menu>
    )
};

