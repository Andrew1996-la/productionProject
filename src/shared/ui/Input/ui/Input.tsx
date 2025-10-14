import {
    ChangeEvent,
    FC, InputHTMLAttributes,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './input.module.scss';

type InputHtmlProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends InputHtmlProps {
    classes?: string
    type?: string
    value?: string
    onChange?: (e: string) => void
}

export const Input: FC<InputProps> = (props) => {
    const {
        value,
        onChange,
        classes,
        type = 'text',
        placeholder,
        ...otherProps
    } = props;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={cls.inputWrapper}>
            <span className={cls.placeholder}>
                {placeholder && `${placeholder} >`}
            </span>
            <input
                className={classNames(cls.input, {}, [classes])}
                value={value}
                onChange={handleChange}
                type={type}
                {...otherProps}
            />
        </div>
    );
};
