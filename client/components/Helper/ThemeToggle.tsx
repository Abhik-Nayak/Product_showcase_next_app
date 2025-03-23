"use client"
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

type Props = {}

const ThemeToggle = (props: Props) => {
    const [mounted, setMounted] = useState(false);

    const {theme, setTheme, systemTheme} = useTheme();

    useEffect(()=>{
        setMounted(true);
    },[]);

    if(!mounted) return null;
    
    const currentTheme = theme === 'system' ? systemTheme : theme;
    
  return (
    <div>ThemeToggle</div>
  )
}

export default ThemeToggle