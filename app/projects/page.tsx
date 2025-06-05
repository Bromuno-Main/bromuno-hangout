"use client"
import React, { useState } from 'react';
import { ProjectCard } from '../../components/projects/ProjectCard';
import { ProjectModal } from '../../components/projects/ProjectModal';
import { ProjectCreationModal } from '../../components/projects/ProjectCreationModal';
import { Button } from '../../components/ui/Button';
import { Search } from '../../components/ui/search';
import { mockProjects, Project } from '../../data/projects';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProjects = mockProjects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = !selectedCategory || project.tags.includes(selectedCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex gap-6 flex-col mb-8">
        <h1 className="text-2xl font-bold">Discover Projects</h1>
        <div className="flex w-full justify-between  flex-col gap-4">
          <div className="flex justify-between   items-center w-full">
            <div className="flex gap-4 items-center">
              Make an Impact. Jion other Creators
              <Button
                onClick={() => setShowCreateModal(true)}
                className="bg-emerald-500 text-white hover:bg-emerald-600"
              >
                Create Project
              </Button>
            </div>
            <div className="flex gap-4 items-center flex-1 max-w-2xl">
              <Search
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search projects..."
                className=""
              />
            </div>
          </div>
            <ul className="flex gap-2 list-none p-0 m-0">
              {["All Categories", "Education", "Health", "Technology", "Environment", "Agriculture"].map((category) => {
                const categoryKey = category === "All Categories" ? "" : category.toLowerCase();
                const count = categoryKey
                  ? mockProjects.filter(p => p.tags.includes(categoryKey)).length
                  : mockProjects.length;
                const isSelected = selectedCategory === categoryKey;
                return (
                  <li
                    key={category}
                    className={`cursor-pointer px-3 py-1 whitespace-nowrap rounded-lg  ${isSelected ? "bg-emerald-500 text-white" : "bg-transparent text-gray-700"}`}
                    onClick={() => setSelectedCategory(categoryKey)}
                  >
                    {category} <span className="ml-1 text-xs text-inherit ">({count})</span>
                  </li>
                );
              })}
            </ul>
        </div>        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.name}
              description={project.description}
              tags={project.tags}
              thumbnail={project.thumbnail}
              teamMembers={project.teamMembers}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>      {selectedProject && (
          <ProjectModal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            project={selectedProject}
          />
        )}

        <ProjectCreationModal
          isOpen={showCreateModal}
          onClose={() => setShowCreateModal(false)}
        />
      </div>
    </div>
  );
};

export default Projects;