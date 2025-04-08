import React from 'react'
import { Badge } from './ui/badge'

interface Author {
    id: number
    avatar: string
  }
  
  interface Project {
    id: number
    title: string
    description: string
    category: string[]
    image: string
    authors: Author[]
  }
  
  interface ProjectCardProps {
    project: Project
  }
  

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
    <div className="relative bg-purple-100">
        <img src={project.image} alt={project.title} width={500} height={300}/>
    </div>

    <div className="p-4">
      <h3 className="font-bold text-2xl">{project.title}</h3>
      <p className="text-gray-600 text-lg mt-1">{project.description}</p>
      <div>
        {project.category.map((c) => (
            <Badge key={c} className="mt-2 mr-1 bg-[#D9D9D9] text-[#434343]">
                {c}
            </Badge>
            ))
        }
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex -space-x-2">
          {project.authors.map((author) => (
            <div key={author.id} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
              <img
                src={author.avatar}
                alt="Author"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProjectCard