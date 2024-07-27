'use client';
// import authStore from '@/stores/auth';
import React, { useState, useEffect, useRef, memo } from 'react';
import { IoIosLogOut } from 'react-icons/io';
import { ImageToolbar, ToolbarContainer, ToolbarOptionContainer, ToolbarOptionLeft, ToolbarOptionLeftInside, ToolbarTitle } from './toolbar.styled';

function Toolbar() {
    const [isShowPopup, setIsShowPopup] = useState(false);
    // const { _onLogout } = authStore();
    const popupContainerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsShowPopup(false);
            }
        };
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                popupContainerRef.current &&
                !popupContainerRef.current.contains(event.target as Node)
            ) {
                setIsShowPopup(false);
            }
        };

        window.addEventListener('keydown', handleEscapeKey);
        window.addEventListener('mousedown', handleOutsideClick);

        return () => {
            window.removeEventListener('keydown', handleEscapeKey);
            window.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <ToolbarContainer>
            <ToolbarTitle>E-commerce Dashboard Management System</ToolbarTitle>
            <ToolbarOptionContainer>
                <ToolbarOptionLeft>
                    <ToolbarOptionLeftInside>
                        <IoIosLogOut size={32} onClick={() => {}} />
                    </ToolbarOptionLeftInside>
                </ToolbarOptionLeft>
                <ImageToolbar src='https://via.placeholder.com/56x56' />
            </ToolbarOptionContainer>
        </ToolbarContainer>
    );
}

export default memo(Toolbar);
