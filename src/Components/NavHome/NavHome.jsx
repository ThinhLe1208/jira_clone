import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavHome() {
    return (
        <>
            <NavLink to='/signin'>Sign in</NavLink>
            <NavLink to='/project/board/12464'>Project</NavLink>
        </>
    );
}