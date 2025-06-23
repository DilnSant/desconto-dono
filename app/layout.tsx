import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Search } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white py-4 shadow-md">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-orange-500">
              Logo
            </Link>

            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Buscar empresas..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link href="/como-funciona" className="text-gray-700 hover:text-orange-600 transition-colors">
                Como Funciona
              </Link>
              <Link href="/categorias" className="text-gray-700 hover:text-orange-600 transition-colors">
                Categorias
              </Link>
              <Link href="/baixar-app" className="text-gray-700 hover:text-orange-600 transition-colors">
                Baixar App
              </Link>
              <Link href="/planos" className="text-gray-700 hover:text-orange-600 transition-colors">
                Planos
              </Link>
              <Link href="/suporte" className="text-gray-700 hover:text-orange-600 transition-colors">
                Suporte
              </Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="text-2xl font-bold text-orange-500 block mb-4">
                Logo
              </Link>
              <p className="text-gray-600">Sua plataforma para encontrar as melhores empresas.</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/sobre" className="text-gray-600 hover:text-orange-600">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="/como-funciona" className="text-gray-600 hover:text-orange-600">
                    Como Funciona
                  </Link>
                </li>
                <li>
                  <Link href="/planos" className="text-gray-600 hover:text-orange-600">
                    Planos
                  </Link>
                </li>
                <li>
                  <Link href="/suporte" className="text-gray-600 hover:text-orange-600">
                    Suporte
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-orange-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-600 hover:text-orange-600">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="text-gray-600 hover:text-orange-600">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="container mx-auto px-4 mt-8 text-center text-gray-500">
            &copy; {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.
          </div>
        </footer>
      </body>
    </html>
  )
}
