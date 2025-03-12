// app/components/ui/card.jsx
import React from 'react';

export function Button({ children, ...props }) {
    return <button {...props} className="p-2 rounded bg-blue-500 text-white">{children}</button>;
}


export function Card({ children, className }) {
    return (
        <div className={`p-4 bg-white rounded-lg shadow-md ${className}`}>
            {children}
        </div>
    );
}

export function CardContent({ children }) {
    return (
        <div className="p-2">
            {children}
        </div>
    );
}

export function Input(props) {
    return <input {...props} className="p-2 rounded border w-full" />;
}

export function Tabs({ children, ...props }) {
    return <div {...props} className="flex space-x-2 border-b">{children}</div>;
}

export function Tab({ value, children }) {
    return <button className="p-2">{children}</button>;
}
