import {FC, useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './sidebar.module.scss'
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SidebarProps {
    classes?: string
}

export const Sidebar:FC<SidebarProps> = (props) => {
    const {classes} = props;
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = (): void => {
        setCollapsed(prev => !prev);
    }

    return (
        <div className={classNames(cls.sidebar, {[cls.collapsed]:collapsed}, [classes])}>
            <span>sidebar</span>

            <button onClick={toggleCollapsed}>
                toggle
            </button>

            <div className={cls.switcher}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};