"use client"

import React from 'react';
import { Search as SearchIcon } from 'lucide-react';

interface SearchProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  showIcon?: boolean;
  onSubmit?: (e: React.FormEvent) => void;
}

export function Search({
  placeholder = "Search...",
  value,
  onChange,
  className = "",
  showIcon = true,
  onSubmit,
}: SearchProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(e);
  };

  return (
    <form 
      className={`relative flex items-center w-full ${className}`}
      onSubmit={handleSubmit}
    >
        
      {showIcon && (
        <SearchIcon 
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" 
          size={20}
        />
      )}

      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 
          ${showIcon ? 'pl-10' : 'pl-4'}`}
        placeholder={placeholder}

      />
    </form>
  );
}
