import { Instagram, Linkedin, Github} from 'lucide-react'
import React from 'react'
import logo from '../assets/logo-skill-up.png'
import Image from 'next/image'
import Link from 'next/link'

const HomeFooter = () =>{
  return (
    <footer className="bg-gradient-to-r from-[#9233E9] to-[#5045E5] text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div>
          <Image src={logo} alt="logo skill up" />
          <p className="mb-6 mt-6 text-xl">
            Destaque seu trabalho com um portfólio profissional. Conecte-se com outros profissionais e expanda suas
            oportunidades.
          </p>
          <div className="flex space-x-4">
            <Link href="https://github.com" className="hover:text-purple-200 transition-colors">
              <Github size={24} />
            </Link>
            <Link href="https://instagram.com" className="hover:text-purple-200 transition-colors">
              <Instagram size={24} />
            </Link>
            <Link href="https://linkedin.com" className="hover:text-purple-200 transition-colors">
              <Linkedin size={24} />
            </Link>
          </div>
        </div>


        <div>
          <h3 className="text-2xl font-medium mb-4">Links Rápidos</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-purple-200 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/diferencial" className="hover:text-purple-200 transition-colors">
                Diferencial
              </Link>
            </li>
            <li>
              <Link href="/comunidade" className="hover:text-purple-200 transition-colors">
                Comunidade
              </Link>
            </li>
            <li>
              <Link href="/quem-somos" className="hover:text-purple-200 transition-colors">
                Quem somos
              </Link>
            </li>
            <li>
              <Link href="/duvidas" className="hover:text-purple-200 transition-colors">
                Dúvidas
              </Link>
            </li>
            <li>
              <Link href="/contato" className="hover:text-purple-200 transition-colors">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-medium mb-4">Recursos</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/blog" className="hover:text-purple-200 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/documentacao" className="hover:text-purple-200 transition-colors">
                Documentação
              </Link>
            </li>
            <li>
              <Link href="/exemplos" className="hover:text-purple-200 transition-colors">
                Exemplos de portifólios
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-purple-500 flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <p>© {new Date().getFullYear()} OpenIdeasTech. Todos os direitos reservados.</p>
        </div>
        <div className="flex flex-wrap gap-x-2">
          <Link href="/termos" className="hover:text-purple-200 transition-colors">
            Termos de Uso
          </Link>
          <span>|</span>
          <Link href="/privacidade" className="hover:text-purple-200 transition-colors">
            Política de privacidade
          </Link>
          <span>|</span>
          <Link href="/cookies" className="hover:text-purple-200 transition-colors">
            Cookies
          </Link>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default HomeFooter