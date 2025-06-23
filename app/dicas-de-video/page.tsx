import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Video, Camera, CheckCircle, Mic, Sun, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DicasDeVideoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gold-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo-final.png" alt="Desconto do Dono" width={200} height={45} className="h-12 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-500 transition-all duration-300 font-medium">
              Início
            </Link>
            <Link
              href="/central-do-dono"
              className="text-gray-700 hover:text-blue-500 transition-all duration-300 font-medium"
            >
              Central do Dono
            </Link>
            <Button
              variant="outline"
              className="bg-white text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 font-semibold"
            >
              Entrar
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/"
              className="inline-flex items-center text-gold-300 hover:text-gold-400 transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar ao início
            </Link>

            <Badge className="bg-gold-500/20 text-gold-300 border-gold-400/30 mb-6 px-6 py-3 text-lg">
              <Video className="w-5 h-5 mr-2" />
              Guia Completo
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Dicas de <span className="text-gold-400">Vídeo</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Aprenda a criar vídeos autênticos que convertem visitantes em clientes fiéis
            </p>
          </div>
        </div>
      </section>

      {/* Dicas Essenciais */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Dicas <span className="text-blue-500">Essenciais</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fundamentos para criar vídeos que realmente funcionam
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-50 via-white to-blue-50 group hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-blue-600">
                  <Camera className="w-6 h-6 mr-3" />
                  Posicionamento da Câmera
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Mantenha a câmera na altura dos olhos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Use um tripé ou apoio estável</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Filme na horizontal (landscape)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Deixe espaço suficiente acima da cabeça</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-gold-50 via-white to-gold-50 group hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-gold-600">
                  <Sun className="w-6 h-6 mr-3" />
                  Iluminação Perfeita
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Use luz natural sempre que possível</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Evite luz direta do sol no rosto</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Posicione-se de frente para a janela</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Evite sombras no rosto</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-50 via-white to-blue-50 group hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-blue-600">
                  <Mic className="w-6 h-6 mr-3" />
                  Áudio Cristalino
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Grave em ambiente silencioso</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Fale claramente e devagar</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Mantenha distância adequada do microfone</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Teste o áudio antes de gravar</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-gold-50 via-white to-gold-50 group hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-gold-600">
                  <Users className="w-6 h-6 mr-3" />
                  Presença e Carisma
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Seja natural e autêntico</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Sorria e mantenha contato visual</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Use gestos naturais</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Demonstre paixão pelo seu negócio</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-50 via-white to-blue-50 group hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-blue-600">
                  <CheckCircle className="w-6 h-6 mr-3" />
                  Conteúdo Eficaz
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Apresente-se e sua empresa</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Explique claramente a oferta</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Mencione validade e condições</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Termine com call-to-action</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-gold-50 via-white to-gold-50 group hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-gold-600">
                  <Video className="w-6 h-6 mr-3" />
                  Duração Ideal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Máximo de 30 segundos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Vá direto ao ponto</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Mantenha o ritmo dinâmico</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Cada segundo conta</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roteiro Sugerido */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Roteiro <span className="text-gold-600">Sugerido</span>
            </h2>
            <p className="text-xl text-gray-600">Estrutura ideal para seu vídeo de 30 segundos</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Apresentação (5-7 segundos)</h3>
                      <p className="text-gray-600">
                        "Olá! Eu sou [Nome], dono do [Nome da Empresa], aqui na [Localização]."
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Oferta (15-18 segundos)</h3>
                      <p className="text-gray-600">
                        "Estou oferecendo [descrição da oferta] especialmente para os usuários do Desconto do Dono.
                        [Detalhes da promoção]."
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Call-to-Action (5-8 segundos)</h3>
                      <p className="text-gray-600">
                        "Venha nos visitar e apresente este vídeo para garantir seu desconto. Te esperamos!"
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Exemplos de Sucesso */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Exemplos de <span className="text-blue-500">Sucesso</span>
            </h2>
            <p className="text-xl text-gray-600">Veja como outras empresas estão se destacando</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/restaurant-owner.jpg"
                    alt="Exemplo de vídeo - Restaurante"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-t-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <Video className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Restaurante Sabor Caseiro</h3>
                  <p className="text-gray-600 mb-4">
                    "Olá! Sou a Maria, dona do Restaurante Sabor Caseiro. Estou oferecendo 20% de desconto no almoço
                    executivo para usuários do Desconto do Dono. Venha experimentar nossa comida caseira!"
                  </p>
                  <Badge className="bg-green-100 text-green-700">+60% de movimento</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/business-owner-video.jpg"
                    alt="Exemplo de vídeo - Loja"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-t-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <Video className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Loja Fashion Style</h3>
                  <p className="text-gray-600 mb-4">
                    "Oi! Eu sou o João, dono da Fashion Style. Temos 30% off em toda a coleção de inverno para quem
                    apresentar este vídeo. Não percam essa oportunidade!"
                  </p>
                  <Badge className="bg-blue-100 text-blue-700">+45% nas vendas</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
