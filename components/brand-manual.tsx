import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, Palette, Type, MessageSquare, Target, Eye, Heart } from "lucide-react"
import Image from "next/image"

export function BrandManual() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Image src="/logo-final.png" alt="Desconto do Dono" width={300} height={80} className="mx-auto mb-8" />
          <h1 className="text-4xl font-bold text-blue-500 mb-4">Manual da Marca</h1>
          <p className="text-xl text-gray-600">Guia completo de identidade visual e comunicação</p>
        </div>

        {/* Missão, Visão e Valores */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-blue-50 to-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-500">
                <Target className="w-6 h-6 mr-2" />
                Missão
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Ser referência na apresentação personalizada e inovadora de serviços, conectando clientes e empresários
                por meio de vídeos autênticos que geram confiança e afinidade.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gold-50 to-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-gold-600">
                <Eye className="w-6 h-6 mr-2" />
                Visão
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Inspirar empresas locais a se tornarem mais visíveis e acessíveis ao público, através da vídeo produção
                de baixo custo e alto impacto.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-500">
                <Heart className="w-6 h-6 mr-2" />
                Valores
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline" className="bg-blue-100 text-blue-700">
                  Inovação
                </Badge>
                <Badge variant="outline" className="bg-gold-100 text-gold-700">
                  Confiabilidade
                </Badge>
                <Badge variant="outline" className="bg-blue-100 text-blue-700">
                  Acessibilidade
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Logo Principal */}
        <Card className="mb-16 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Logotipo Principal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-500 rounded-lg p-12 flex justify-center items-center mb-8">
              <Image
                src="/logo-final.png"
                alt="Logo Desconto do Dono"
                width={400}
                height={100}
                className="max-w-full h-auto"
              />
            </div>
            <p className="text-center text-gray-600 italic">
              O AZUL #0D243B permite que o Dourado #DFB160 "respire" um pouco mais e se destaque com maior clareza, o
              que é crucial para os elementos da logomarca.
            </p>
          </CardContent>
        </Card>

        {/* Paleta de Cores */}
        <Card className="mb-16 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Palette className="w-8 h-8 mr-3" />
              Paleta de Cores
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-500 rounded-lg mx-auto mb-4 shadow-lg border-4 border-white"></div>
                <h3 className="font-bold text-gray-800">Azul Escuro</h3>
                <p className="text-sm text-gray-600 font-mono">#0D243B</p>
                <Badge variant="outline" className="mt-2 text-xs">
                  Principal
                </Badge>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gold-500 rounded-lg mx-auto mb-4 shadow-lg border-4 border-white"></div>
                <h3 className="font-bold text-gray-800">Dourado</h3>
                <p className="text-sm text-gray-600 font-mono">#DFB160</p>
                <Badge variant="outline" className="mt-2 text-xs">
                  Destaque
                </Badge>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-white border-2 border-gray-200 rounded-lg mx-auto mb-4 shadow-lg"></div>
                <h3 className="font-bold text-gray-800">Branco</h3>
                <p className="text-sm text-gray-600 font-mono">#FFFFFF</p>
                <Badge variant="outline" className="mt-2 text-xs">
                  Neutro
                </Badge>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-800 rounded-lg mx-auto mb-4 shadow-lg border-4 border-white"></div>
                <h3 className="font-bold text-gray-800">Cinza Escuro</h3>
                <p className="text-sm text-gray-600 font-mono">#333333</p>
                <Badge variant="outline" className="mt-2 text-xs">
                  Texto
                </Badge>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-light rounded-lg mx-auto mb-4 shadow-lg border-4 border-white"></div>
                <h3 className="font-bold text-gray-800">Cinza Claro</h3>
                <p className="text-sm text-gray-600 font-mono">#ACACAC</p>
                <Badge variant="outline" className="mt-2 text-xs">
                  Secundário
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tipografia */}
        <Card className="mb-16 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Type className="w-8 h-8 mr-3" />
              Tipografia
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="text-center">
              <h2 className="text-5xl font-bold text-blue-500 mb-4">Poppins Bold</h2>
              <p className="text-gray-600">Utilizada para títulos e destaques principais</p>
            </div>
            <div className="text-center">
              <p className="text-2xl text-gray-800 mb-4">Poppins Regular</p>
              <p className="text-gray-600">Utilizada para textos corridos e descrições</p>
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-600 mb-4" style={{ fontFamily: "Lato, sans-serif" }}>
                Lato (Alternativa)
              </p>
              <p className="text-gray-600">Fonte alternativa para casos específicos</p>
            </div>
          </CardContent>
        </Card>

        {/* Tom de Comunicação */}
        <Card className="mb-16 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <MessageSquare className="w-8 h-8 mr-3" />
              Tom de Comunicação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-blue-800 mb-4">Características:</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <Badge className="bg-blue-100 text-blue-800 justify-center py-2">Direto</Badge>
                <Badge className="bg-gold-100 text-gold-800 justify-center py-2">Acessível</Badge>
                <Badge className="bg-blue-100 text-blue-800 justify-center py-2">Empático</Badge>
                <Badge className="bg-gold-100 text-gold-800 justify-center py-2">Humano</Badge>
              </div>
            </div>
            <div className="bg-gold-50 rounded-lg p-6">
              <h3 className="font-bold text-gold-800 mb-3">Exemplo de Comunicação:</h3>
              <blockquote className="text-lg italic text-gray-700 border-l-4 border-gold-500 pl-4">
                "Vídeos reais, descontos reais. Conexão direta com quem decide."
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Aplicações */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Diretrizes de Aplicação</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-green-600 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Permitido
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✔ Uso com fundo branco ou escuro</li>
                  <li>✔ Ícone simplificado em espaços reduzidos</li>
                  <li>✔ Manter proporções originais</li>
                  <li>✔ Usar cores da paleta oficial</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-red-600 mb-4 flex items-center">
                  <XCircle className="w-5 h-5 mr-2" />
                  Não Permitido
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✘ Não alterar cores da marca</li>
                  <li>✘ Não distorcer ou esticar o logo</li>
                  <li>✘ Não aplicar sobre fundos inadequados</li>
                  <li>✘ Não usar fontes diferentes</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
