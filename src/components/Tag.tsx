import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props: HTMLAttributes<HTMLDivElement>) {
    const { children, className, ...otherProps } = props;
    return (
        <div
            className={twMerge(
                "inline-flex border border-lime-400 gap-2 text-lime-400 text-center px-3 py-1 rounded-full uppercase",
                className
            )}
            {...otherProps}
        >
            <span>&#10038;</span>
            <span className="text-sm">{children}</span>
        </div>
    );
}