import React from 'react';

const Button = ({
    children,
    variant = 'outline',
    size = 'md',
    className = '',
    icon: Icon,
    isActive = false,
    ...props
}) => {
    const baseStyles = "flex items-center justify-center gap-2 rounded-full font-medium transition-all shadow-sm whitespace-nowrap active:scale-95";

    const variants = {
        primary: "bg-[#B4EFB6] text-green-900 border border-transparent hover:opacity-90",
        outline: "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50",
        ghost: "bg-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100 border border-transparent",
        active: "bg-[#B4EFB6] text-green-900 shadow-sm border border-transparent"
    };

    const sizes = {
        sm: "px-4 py-2 text-xs",
        md: "px-5 py-2.5 text-sm",
        lg: "px-6 py-3 text-base"
    };

    const selectedVariant = isActive ? variants.active : (variants[variant] || variants.outline);

    return (
        <button
            className={`${baseStyles} ${selectedVariant} ${sizes[size]} ${className}`}
            {...props}
        >
            {Icon && <Icon size={16} />}
            {children}
        </button>
    );
};

export default Button;
