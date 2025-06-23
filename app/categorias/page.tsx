"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Play, Users, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const categorias = [
  {
    id: "beleza",
    nome: "Beleza",
    subcategorias: ["Depilação", "Estética", "Massagem", "Salões de Beleza"],
    cor: "from-pink-500 to-rose-500",
    icone: "💄",
    videoCount: 24,
  },
  {
    id: "comercios",
    nome: "Comércios",
    subcategorias: ["Calçados", "Construção", "Móveis e Eletros", "Vestuário"],
    cor: "from-blue-500 to-indigo-500",
    icone: "🏪",
    videoCount: 18,
  },
  {
    id: "gastronomia",
    nome: "Gastronomia",
    subcategorias: ["Bares", "Lanchonetes", "Padarias", "Pizzarias", "Restaurantes"],
    cor: "from-orange-500 to-red-500",
    icone: "🍽️",
    videoCount: 32,
  },
  {
    id: "hotelaria",
    nome: "Hotelaria",
    subcategorias: ["Camping", "Hotéis", "Motéis", "Pousadas"],
    cor: "from-teal-500 to-cyan-500",
    icone: "🏨",
    videoCount: 12,
  },
  {
    id: "lazer",
    nome: "Lazer",
    subcategorias: ["Academias", "Clubes", "Esportes", "Lan House"],
    cor: "from-green-500 to-emerald-500",
    icone: "🎯",
    videoCount: 15,
  },
  {
    id: "saude",
    nome: "Saúde",
    subcategorias: ["Clínicas", "Dentistas", "Farmácias", "Médicos", "Óticas"],
    cor: "from-purple-500 to-violet-500",
    icone: "🏥",
    videoCount: 21,
  },
]

export default function CategoriasPage() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string | null>(null)

  if (categoriaSelecionada) {
    const categoria = categorias.find((c) => c.id === categoriaSelecionada)
    return <PlaylistView categoria={categoria!} onVoltar={() => setCategoriaSelecionada(null)} />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/" className="flex items-center text-gray-600 hover:text-orange-600">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Voltar ao Início
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Categorias de Negócios</h1>
          <p className="text-xl text-gray-600">
            Explore nossos segmentos e descubra empresas incríveis com descontos exclusivos
          </p>
        </div>
      </div>

      {/* Categorias Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categorias.map((categoria) => (
            <Card
              key={categoria.id}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => setCategoriaSelecionada(categoria.id)}
            >
              <CardContent className="p-0">
                <div className={`h-48 bg-gradient-to-br ${categoria.cor} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">{categoria.icone}</div>
                      <Play className="h-12 w-12 mx-auto opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-sm font-medium flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {categoria.videoCount}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{categoria.nome}</h3>
                  <div className="flex flex-wrap gap-2">
                    {categoria.subcategorias.map((sub, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Sua empresa ainda não está aqui?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Cadastre seu negócio e comece a atrair novos clientes hoje mesmo!
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            <Link href="/cadastrar-negocio">Cadastrar Minha Empresa</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

function PlaylistView({ categoria, onVoltar }: { categoria: any; onVoltar: () => void }) {
  // Vídeos de exemplo para demonstração
  const videos = [
    {
      id: 1,
      titulo: "Salão Beleza Total",
      descricao: "Cortes modernos e tratamentos capilares",
      thumbnail: "/placeholder.svg?height=200&width=300",
      youtubeId: "dQw4w9WgXcQ",
      endereco: "Rua das Flores, 123",
      desconto: "20% OFF",
    },
    {
      id: 2,
      titulo: "Estética Renovar",
      descricao: "Tratamentos faciais e corporais",
      thumbnail: "/placeholder.svg?height=200&width=300",
      youtubeId: "dQw4w9WgXcQ",
      endereco: "Av. Principal, 456",
      desconto: "15% OFF",
    },
    {
      id: 3,
      titulo: "Spa Relaxar",
      descricao: "Massagens terapêuticas e relaxantes",
      thumbnail: "/placeholder.svg?height=200&width=300",
      youtubeId: "dQw4w9WgXcQ",
      endereco: "Rua do Bem-estar, 789",
      desconto: "30% OFF",
    },
    {
      id: 4,
      titulo: "Depilação Express",
      descricao: "Depilação a laser e tradicional",
      thumbnail: "/placeholder.svg?height=200&width=300",
      youtubeId: "dQw4w9WgXcQ",
      endereco: "Centro Comercial, Loja 12",
      desconto: "25% OFF",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-6">
            <button onClick={onVoltar} className="flex items-center text-gray-600 hover:text-orange-600">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Voltar às Categorias
            </button>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="text-4xl">{categoria.icone}</div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">{categoria.nome}</h1>
              <p className="text-gray-600 mt-2">{categoria.videoCount} empresas parceiras</p>
            </div>
          </div>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video) => (
            <Card key={video.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.titulo}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                    {video.desconto}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{video.titulo}</h3>
                  <p className="text-gray-600 text-sm mb-2">{video.descricao}</p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {video.endereco}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
