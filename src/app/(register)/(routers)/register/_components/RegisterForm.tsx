'use client'

import { Button } from "@/components/ui/button"
import type React from "react"

import { useState } from "react"

const  RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="w-full max-w-md">
      <h2 className="text-[#5444E5] text-2xl md:text-3xl font-semibold mb-8 hidden md:flex">Experimente novas experiências</h2>
      <form onSubmit={handleSubmit} className="space-y-4 px-4 py-6 md:px-0 md:py-0">
        <div>
          <label htmlFor="name" className="block mb-2 text-lg">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2.5 rounded  text-[#757575] bg-[#f1f1f1]"
            placeholder="Nome"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block  mb-2 text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2.5 rounded  text-[#757575] bg-[#f1f1f1]"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label htmlFor="username" className="block mb-2 text-lg">
              Nome de usuário
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2.5 rounded  text-[#757575] bg-[#f1f1f1]"
              placeholder="Nome de usuário"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block mb-2 text-lg">
            Número do celular
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2.5 rounded text-[#757575] bg-[#f1f1f1]"
            placeholder="(DDD)99999-9999"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <label htmlFor="password" className="block mb-2 text-lg">
              Senha
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2.5 rounded text-[#757575] bg-[#f1f1f1]"
                placeholder="Senha"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block  mb-2 text-lg">
              Repita sua Senha
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2.5 rounded text-[#757575] bg-[#f1f1f1]"
              placeholder="Senha"
              required
            />
          </div>
        </div>

        <div className="flex items-start mt-4">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            className="mt-1"
            required
          />
          <label htmlFor="terms" className="ml-2 text-lg">
            Termos e condições de uso
            <br />
            <a href="#" className="underline text-lg">
              Termos e condições
            </a>
          </label>
        </div>

        <div className="mt-6 flex justify-center">
          <Button
            variant="ghost"
            className="text-black border-1 px-16 text-lg"
          >
            Criar conta
          </Button>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm