import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, HelpCircle, MessageCircle, Phone, Mail, Clock, Search, Users, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SuportePage() {
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
              href="/como-funciona"
              className="text-gray-700 hover:text-blue-500 transition-all duration-300 font-medium"
            >
              Como Funciona
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
              <HelpCircle className="w-5 h-5 mr-2" />
              Central de Ajuda
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Como Podemos <span className="text-gold-400">Ajudar?</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Estamos aqui para resolver suas dúvidas e garantir a melhor experiência possível
            </p>
          </div>
        </div>
      </section>

      {/* Canais de Atendimento */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Canais de <span className="text-blue-500">Atendimento</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha a forma mais conveniente para entrar em contato conosco
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-50 via-white to-blue-50 group hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Chat Online</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Atendimento instantâneo através do nosso chat. Disponível 24/7.
                </p>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">Iniciar Chat</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-gold-50 via-white to-gold-50 group hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Email</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Envie sua dúvida por email. Respondemos em até 24 horas.
                </p>
                <Button className="bg-gold-500 hover:bg-gold-600 text-white">suporte@descontododono.com.br</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-50 via-white to-blue-50 group hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Telefone</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Ligue para nosso atendimento. Segunda a sexta, 8h às 18h.
                </p>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">(11) 1234-5678</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Perguntas <span className="text-gold-600">Frequentes</span>
            </h2>
            <p className="text-xl text-gray-600">Respostas para as dúvidas mais comuns</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-blue-600">
                  <Search className="w-6 h-6 mr-3" />
                  Como encontro ofertas na minha cidade?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p>
                  É muito simples! Ao abrir o app, permita o acesso à sua localização e automaticamente mostraremos as
                  ofertas disponíveis próximas a você. Você também pode usar os filtros para buscar por categoria
                  específica ou digitar o nome do estabelecimento.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-blue-600">
                  <Shield className="w-6 h-6 mr-3" />
                  As ofertas são realmente válidas?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p>
                  Sim! Todas as ofertas passam por um processo de verificação antes de serem publicadas. Além disso,
                  trabalhamos diretamente com os donos dos estabelecimentos, garantindo que todas as promoções sejam
                  honradas conforme apresentado no vídeo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-blue-600">
                  <Users className="w-6 h-6 mr-3" />
                  Preciso pagar para usar o app?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p>
                  Não! O Desconto do Dono é completamente gratuito para consumidores. Você pode baixar o app, criar sua
                  conta e aproveitar todas as ofertas sem pagar nada. Nossa receita vem dos estabelecimentos parceiros.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-blue-600">
                  <Clock className="w-6 h-6 mr-3" />
                  Como funciona a validade das ofertas?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p>
                  Cada oferta tem sua própria validade, que é claramente informada no vídeo e na descrição. Algumas são
                  por tempo limitado, outras por quantidade de usos. Sempre verifique os detalhes antes de se dirigir ao
                  estabelecimento.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-blue-600">
                  <MessageCircle className="w-6 h-6 mr-3" />E se tiver algum problema com uma oferta?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p>
                  Entre em contato conosco imediatamente através do chat, email ou telefone. Temos uma equipe dedicada
                  para resolver qualquer problema e garantir que sua experiência seja sempre positiva. Também mediamos
                  questões entre usuários e estabelecimentos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Não Encontrou sua <span className="text-blue-500">Resposta?</span>
              </h2>
              <p className="text-xl text-gray-600">Envie sua dúvida e nossa equipe entrará em contato em breve</p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo
                      </label>
                      <Input id="nome" type="text" placeholder="Seu nome completo" className="w-full" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="seu@email.com" className="w-full" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">
                      Assunto
                    </label>
                    <Input id="assunto" type="text" placeholder="Qual é sua dúvida?" className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      id="mensagem"
                      placeholder="Descreva sua dúvida ou problema em detalhes..."
                      rows={6}
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 text-lg rounded-xl shadow-xl transition-all duration-300"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
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
