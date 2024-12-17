import React from 'react';

export const ExpandCollapseButton = ({ isExpanded, onClick, className = '' }) => {
    return (
        <button
            className={`flex items-center justify-center text-blue-700 text-lg ${className}`}
            onClick={onClick}
        >
            {isExpanded ? '▲' : '▼'}
        </button>
    );
};
