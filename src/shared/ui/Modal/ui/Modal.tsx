import { classNames } from 'shared/lib/classNames/classNames';
import {
    FC, MouseEvent, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal';
import { useTheme } from 'app/providers/themeProvider';
import cls from './modal.module.scss';

interface IProps {
    children: ReactNode;
    closeModal: () => void;
    isOpenModal: boolean;
    lazy?: boolean;
}

export const Modal: FC<IProps> = ({
    children, closeModal, isOpenModal, lazy,
}) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const { theme } = useTheme();
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const closeModalOnBackGround = (e: MouseEvent) => {
        if (e.target === e.currentTarget) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                closeModal();
                setIsClosing(false);
            }, 300);
            setIsMounted(false);
        }
    };

    const escCloseModal = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeModal();
            setIsMounted(false);
        }
    }, [closeModal]);

    useEffect(() => {
        if (isOpenModal) {
            window.addEventListener('keydown', escCloseModal);
        }

        return () => {
            window.removeEventListener('keydown', escCloseModal);
            clearTimeout(timerRef.current);
        };
    }, [escCloseModal, isOpenModal]);

    useEffect(() => {
        if (isOpenModal) {
            setIsMounted(true);
        }
    }, [isOpenModal]);

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpenModal,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [theme])}>
                <div className={cls.overlay} onClick={closeModalOnBackGround}>
                    <div className={classNames(cls.content, mods)} onClick={(e) => e.stopPropagation()}>
                        <span className={classNames(cls.closeIcon)} onClick={closeModal}>X</span>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
