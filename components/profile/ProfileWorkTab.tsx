"use client";

import React from 'react';
import Image from 'next/image';

export const ProfileWorkTab: React.FC = () => {
    const workHistory = [
        {
            title: "Senior Project Manager",
            company: "Tech Solutions Inc.",
            period: "2023 - Present",
            description: "Leading digital transformation projects and managing cross-functional teams.",
            skills: ["Project Management", "Agile", "Team Leadership"]
        },
        {
            title: "Video Editor",
            company: "Creative Studios",
            period: "2021 - 2023",
            description: "Produced and edited high-quality video content for various platforms.",
            skills: ["Video Editing", "Adobe Premier", "Final Cut Pro"]
        }
    ];

    const certifications = [
        {
            name: "PMP Certification",
            issuer: "Project Management Institute",
            date: "2023"
        },
        {
            name: "Agile Scrum Master",
            issuer: "Scrum Alliance",
            date: "2022"
        }
    ];

    return (
        <div className="space-y-8">
            {/* Work Experience Section */}
            <section className="space-y-6">
                <h3 className="font-semibold text-lg">Work Experience</h3>
                <div className="space-y-6">
                    {workHistory.map((work, index) => (
                        <div key={index} className="border-b pb-6 last:border-0">
                            <div className="flex justify-between mb-2">
                                <h4 className="font-semibold">{work.title}</h4>
                                <span className="text-gray-600">{work.period}</span>
                            </div>
                            <p className="text-[#188268] mb-2">{work.company}</p>
                            <p className="text-gray-600 mb-4">{work.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {work.skills.map((skill, skillIndex) => (
                                    <span 
                                        key={skillIndex}
                                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Certifications Section */}
            <section className="space-y-6">
                <h3 className="font-semibold text-lg">Certifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">{cert.name}</h4>
                            <p className="text-gray-600 text-sm">{cert.issuer}</p>
                            <p className="text-gray-500 text-sm">{cert.date}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills Overview */}
            <section className="space-y-4">
                <h3 className="font-semibold text-lg">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-2">
                    {[
                        "Project Management",
                        "Video Editing",
                        "Team Leadership",
                        "Agile Methodologies",
                        "Content Creation",
                        "Strategic Planning",
                        "Budget Management",
                        "Risk Assessment"
                    ].map((skill, index) => (
                        <span 
                            key={index}
                            className="px-3 py-1 bg-[#E4FBEC] text-[#188268] rounded-full text-sm"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </section>
        </div>
    );
};
