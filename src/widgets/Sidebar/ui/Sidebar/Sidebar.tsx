import React, {useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LanguageSwitcher} from "widgets/LanguageSwitcher/ui/LanguageSwitcher";
import {useTranslation} from "react-i18next";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const {t} = useTranslation();
    const onToggle = () => {
        setCollapsed(prev => !prev);
    }
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>{t('toggle')}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LanguageSwitcher className={cls.ml}/>
            </div>
        </div>
    );
};

