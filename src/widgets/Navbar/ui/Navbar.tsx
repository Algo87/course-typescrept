import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className = '' }: NavbarProps) => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);

    const onToggleModal = useCallback(() => {
        setOpen((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onToggleModal}
                className={cls.links}
            >
                {t('signin')}

            </Button>
            <Modal isOpen={open} onClose={onToggleModal}>{t('lorem100')}</Modal>

        </div>
    );
};
