import React from 'react'
import Nav from '../ui/Nav'
import { Slide } from 'react-reveal'

const SideBar = ({ showSideBar }) => {
    return (
        <Slide duration={500} right in={showSideBar}>
            <div className="sidebar" style={{ display: `${showSideBar ? 'block' : 'none'}` }}>
                <Nav context="sidebar" />
            </div>
        </Slide>
    )
}

export default SideBar
