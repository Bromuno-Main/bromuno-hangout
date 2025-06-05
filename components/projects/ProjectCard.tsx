import React from 'react';
import Image from 'next/image';
import { Avatar, AvatarImage } from '../ui/avatar';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    thumbnail?: string;
    teamMembers: {
        id: string;
        name: string;
        avatar: string;
    }[];
    onClick?: () => void;
}

export function ProjectCard({ title, description, tags, thumbnail, teamMembers, onClick }: ProjectCardProps) {
    return (
        <div
            onClick={onClick}
            className="bg-white rounded-lg min-h-48  flex flex-col py-4 cursor-pointer border border-gray-100"
        >
             <div className="flex justify-between px-3 items-center w-full mb-2 border-b pb-2 ">
                <div className="flex -space-x-2">
                    {teamMembers.slice(0, 3).map((member) => (
                        <Avatar key={member.id} className="border-2 border-white">
                            <AvatarImage src={member.avatar} alt={member.name} />
                        </Avatar>
                    ))}
                    {teamMembers.length > 3 && (
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-600">
                            +{teamMembers.length - 3}
                        </div>
                    )}
                </div>
            </div>


            <div className="flex px-3 gap-4 flex-1  ">

                <div className="flex items-start justify-between">
                    <div className="w-full">
                        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{description}</p>
                    </div>
                </div>
                {thumbnail && (
                    <Image
                        src={thumbnail}
                        alt={`${title} thumbnail`}
                        width={400}
                        height={192}
                        priority
                        className=" h-24 w-24 aspect-square  object-cover bg-gray-100 rounded-lg"
                    />

                )}
            </div>
            <div className="flex flex-wrap gap-2 px-3">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="py-1 text-xs rounded-full  text-gray-700"
                    >
                        {tag}
                    </span>
                ))}
            </div>

           
        </div>
    );
}
