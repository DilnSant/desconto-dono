import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BarChart3, Video, Users, Settings, TrendingUp, Eye, Play, Edit, Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CentralDoDonoPage() {
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
              href="/cadastrar-negocio"
              className="text-gray-700 hover:text-blue-500 transition-all duration-300 font-medium"
            >
              Cadastrar Negócio
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
              <BarChart3 className="w-5 h-5 mr-2" />
              Dashboard Empresarial
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Central do <span className="text-gold-400">Dono</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Gerencie seus vídeos de 30 segundos, acompanhe métricas de visualizações e maximize seus resultados com
              nossa plataforma profissional
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Painel de <span className="text-blue-500">Controle</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tudo que você precisa para gerenciar seu negócio na plataforma
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-50 via-white to-blue-50 group hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">1,247</div>
                <p className="text-gray-600 font-medium">Visualizações</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-gold-50 via-white to-gold-50 group hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gold-600 mb-2">89</div>
                <p className="text-gray-600 font-medium">Novos Clientes</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-green-50 via-white to-green-50 group hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">+32%</div>
                <p className="text-gray-600 font-medium">Crescimento</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-purple-50 via-white to-purple-50 group hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                <p className="text-gray-600 font-medium">Vídeos Ativos</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Recursos <span className="text-gold-600">Disponíveis</span>
            </h2>
            <p className="text-xl text-gray-600">Ferramentas poderosas para impulsionar seu negócio</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-blue-600">
                  <Video className="w-6 h-6 mr-3" />
                  Gerenciar Vídeos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Crie, edite e gerencie todos os seus vídeos promocionais em um só lugar.
                </p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Acessar</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-gold-600">
                  <BarChart3 className="w-6 h-6 mr-3" />
                  Relatórios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Acompanhe métricas detalhadas de visualizações, conversões e engajamento.
                </p>
                <Button className="w-full bg-gold-500 hover:bg-gold-600 text-white">Ver Relatórios</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-blue-600">
                  <Users className="w-6 h-6 mr-3" />
                  Base de Clientes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Veja quem são seus clientes e como eles interagem com suas ofertas.
                </p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Ver Clientes</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-gold-600">
                  <Settings className="w-6 h-6 mr-3" />
                  Configurações
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Personalize seu perfil, horários de funcionamento e informações do negócio.
                </p>
                <Button className="w-full bg-gold-500 hover:bg-gold-600 text-white">Configurar</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-blue-600">
                  <TrendingUp className="w-6 h-6 mr-3" />
                  Análise de Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Entenda quais ofertas performam melhor e otimize suas estratégias.
                </p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Analisar</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-gold-600">
                  <Plus className="w-6 h-6 mr-3" />
                  Criar Nova Oferta
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Lance novas promoções e atraia mais clientes para seu estabelecimento.
                </p>
                <Button className="w-full bg-gold-500 hover:bg-gold-600 text-white">Criar Oferta</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vídeos Ativos */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Seus <span className="text-blue-500">Vídeos Ativos</span>
            </h2>
            <p className="text-xl text-gray-600">Gerencie suas ofertas em tempo real</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/video-editing.jpg"
                    alt="Vídeo promocional"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-t-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <Badge className="absolute top-3 right-3 bg-green-500 text-white">Ativo</Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">20% OFF em Pizzas</h3>
                  <p className="text-gray-600 mb-4">Válido até 31/12/2024</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>👁 247 visualizações</span>
                    <span>✅ 23 resgates</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Edit className="w-4 h-4 mr-2" />
                      Editar
                    </Button>
                    <Button size="sm" className="flex-1 bg-blue-500 hover:bg-blue-600">
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/video-editing.jpg"
                    alt="Vídeo promocional"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-t-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <Badge className="absolute top-3 right-3 bg-green-500 text-white">Ativo</Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Combo Especial</h3>
                  <p className="text-gray-600 mb-4">Válido até 15/01/2025</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>👁 189 visualizações</span>
                    <span>✅ 31 resgates</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Edit className="w-4 h-4 mr-2" />
                      Editar
                    </Button>
                    <Button size="sm" className="flex-1 bg-blue-500 hover:bg-blue-600">
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/video-editing.jpg"
                    alt="Vídeo promocional"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-t-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <Badge className="absolute top-3 right-3 bg-yellow-500 text-white">Pausado</Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Happy Hour</h3>
                  <p className="text-gray-600 mb-4">Pausado temporariamente</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>👁 156 visualizações</span>
                    <span>✅ 18 resgates</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Edit className="w-4 h-4 mr-2" />
                      Editar
                    </Button>
                    <Button size="sm" className="flex-1 bg-green-500 hover:bg-green-600">
                      Reativar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-12 py-4 text-lg rounded-xl shadow-xl transition-all duration-300"
            >
              <Plus className="w-6 h-6 mr-3" />
              Criar Nova Oferta
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ainda não tem uma <span className="text-gold-400">Conta?</span>
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Cadastre seu negócio agora e comece a atrair mais clientes hoje mesmo
          </p>
          <Link href="/cadastrar-negocio">
            <Button
              size="lg"
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-blue-900 px-12 py-6 text-xl rounded-2xl shadow-2xl font-bold"
            >
              Cadastrar Meu Negócio
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <Image
                src="/logo-final.png"
                alt="Desconto do Dono"
                width={200}
                height={45}
                className="h-12 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-blue-200 leading-relaxed text-lg">
                Conectando consumidores a descontos reais através de vídeos autênticos.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-xl">Para Consumidores</h4>
              <ul className="space-y-3 text-blue-200">
                <li>
                  <Link href="/como-funciona" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Como Funciona
                  </Link>
                </li>
                <li>
                  <Link href="/baixar-app" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Baixar App
                  </Link>
                </li>
                <li>
                  <Link href="/suporte" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Suporte
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-xl">Para Donos</h4>
              <ul className="space-y-3 text-blue-200">
                <li>
                  <Link
                    href="/cadastrar-negocio"
                    className="hover:text-gold-400 transition-colors duration-300 text-lg"
                  >
                    Cadastrar Negócio
                  </Link>
                </li>
                <li>
                  <Link href="/central-do-dono" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Central do Dono
                  </Link>
                </li>
                <li>
                  <Link href="/dicas-de-video" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Dicas de Vídeo
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-xl">Empresa</h4>
              <ul className="space-y-3 text-blue-200">
                <li>
                  <Link href="/sobre" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="/termos" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link href="/privacidade" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Privacidade
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-12 pt-8 text-center">
            <p className="text-blue-300 text-lg">
              &copy; {new Date().getFullYear()} Desconto do Dono. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
