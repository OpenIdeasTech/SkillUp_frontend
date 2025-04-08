"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ProjectCard from "@/components/ProjectCard"
import Pagination from "@/components/Pagination"

const PROJECTS = Array(12)
  .fill(null)
  .map((_, i) => ({
    id: i + 1,
    title: "PetShow",
    description: "Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    category: ["Analista de Dados", "Dev FullStack", "Designer Gráfico", "UX"],
    image: "https://i.ibb.co/HfH32Xck/image-3.png",
    authors: [
      { id: 1, avatar: "https://thispersondoesnotexist.com" },
      { id: 2, avatar: "https://thispersondoesnotexist.com" },
      { id: 3, avatar: "https://thispersondoesnotexist.com" },
    ],
  }))

const ITEMS_PER_PAGE = 6

export default function CardList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)

  
  const filteredProjects = PROJECTS.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = activeFilter === "All" || project.category === activeFilter

    return matchesSearch && matchesCategory
  })

  
  const indexOfLastProject = currentPage * ITEMS_PER_PAGE
  const indexOfFirstProject = indexOfLastProject - ITEMS_PER_PAGE
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)


  const categories = ["All", "Analista de Dados", "Desenvolvedor FullStack", "QA", "Designer Gráfico", "UX"]

  return (
    <div>
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <Input
          className="pl-10 bg-gray-100 border-none"
          placeholder="Pesquisar projetos..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value)
            setCurrentPage(1) 
          }}
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto pb-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeFilter === category ? "default" : "outline"}
            className={`rounded-full text-sm px-4 py-1 h-auto ${
              activeFilter === category ? "bg-primary" : "bg-transparent"
            }`}
            onClick={() => {
              setActiveFilter(category)
              setCurrentPage(1) 
            }}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length > ITEMS_PER_PAGE && (
        <div className="mt-8 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredProjects.length / ITEMS_PER_PAGE)}
            onPageChange={paginate}
          />
        </div>
      )}

    </div>
  )
}
