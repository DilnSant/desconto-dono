import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, AlertCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PrivacidadePage() {
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
            <Link href="/sobre" className="text-gray-700 hover:text-blue-500 transition-all duration-300 font-medium">
              Sobre Nós
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/"
              className="inline-flex items-center text-gold-300 hover:text-gold-400 transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar ao início
            </Link>

            <Badge className="bg-gold-500/20 text-gold-300 border-gold-400/30 mb-6 px-6 py-3 text-lg">
              <Shield className="w-5 h-5 mr-2" />
              Proteção de Dados
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Política de <span className="text-gold-400">Privacidade</span>
            </h1>

            <p className="text-xl text-blue-100 leading-relaxed">
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo da Política */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introdução */}
            <Card className="mb-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-blue-600">
                  <Shield className="w-6 h-6 mr-3" />
                  1. Introdução
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  A Desconto do Dono Ltda. ("nós", "nosso" ou "Empresa") está comprometida em proteger e respeitar sua
                  privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas
                  informações quando você usa nosso serviço.
                </p>
                <p>
                  Ao usar nosso serviço, você concorda com a coleta e uso de informações de acordo com esta política.
                  Esta Política de Privacidade se aplica ao nosso aplicativo móvel, website e serviços relacionados.
                </p>
              </CardContent>
            </Card>

            {/* Informações que Coletamos */}
            <Card className="mb-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-blue-600">
                  <Database className="w-6 h-6 mr-3" />
                  2. Informações que Coletamos
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed space-y-4">
                <h4 className="font-semibold text-lg">2.1 Informações Pessoais</h4>
                <p>Coletamos as seguintes informações pessoais quando você se registra ou usa nossos serviços:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Nome completo</li>
                  <li>Endereço de email</li>
                  <li>Número de telefone</li>
                  <li>Data de nascimento</li>
                  <li>Localização (cidade/estado)</li>
                  <li>Foto de perfil (opcional)</li>
                </ul>

                <h4 className="font-semibold text-lg">2.2 Informações de Uso</h4>
                <p>Coletamos automaticamente certas informações quando você usa nosso serviço:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Endereço IP</li>
                  <li>Tipo de dispositivo e sistema operacional</li>
                  <li>Navegador utilizado</li>
                  <li>Páginas visitadas e tempo gasto</li>
                  <li>Interações com vídeos e ofertas</li>
                  <li>Dados de localização (com sua permissão)</li>
                </ul>

                <h4 className="font-semibold text-lg">2.3 Informações de Donos de Negócio</h4>
                <p>Para donos de estabelecimentos, coletamos adicionalmente:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Informações da empresa (CNPJ, razão social)</li>
                  <li>Endereço do estabelecimento</li>
                  <li>Categoria do negócio</li>
                  <li>Vídeos e conteúdo promocional</li>
                  <li>Informações bancárias (para pagamentos)</li>
                </ul>
              </CardContent>
            </Card>

            {/* Como Usamos suas Informações */}
            <Card className="mb-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-blue-600">
                  <Eye className="w-6 h-6 mr-3" />
                  3. Como Usamos suas Informações
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed space-y-4">
                <p>Usamos suas informações para:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Fornecer, operar e manter nosso serviço</li>
                  <li>Processar transações e enviar confirmações</li>
                  <li>Personalizar sua experiência na plataforma</li>
                  <li>Enviar comunicações relacionadas ao serviço</li>
                  <li>Melhorar nossos serviços através de análises</li>
                  <li>Detectar e prevenir fraudes</li>
                  <li>Cumprir obrigações legais</li>
                  <li>Enviar ofertas e promoções (com seu consentimento)</li>
                </ul>
              </CardContent>
            </Card>

            {/* Compartilhamento de Informações */}
            <Card className="mb-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-blue-600">
                  <UserCheck className="w-6 h-6 mr-3" />
                  4. Compartilhamento de Informações
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  Não vendemos suas informações pessoais. Podemos compartilhar suas informações nas seguintes situações:
                </p>

                <h4 className="font-semibold text-lg">4.1 Com Estabelecimentos Parceiros</h4>
                <p>
                  Quando você utiliza uma oferta, compartilhamos informações básicas (nome, foto) com o estabelecimento
                  para validação da oferta.
                </p>

                <h4 className="font-semibold text-lg">4.2 Prestadores de Serviços</h4>
                <p>Compartilhamos informações com terceiros que nos ajudam a operar nosso serviço, como:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Provedores de hospedagem e armazenamento</li>
                  <li>Serviços de análise e métricas</li>
                  <li>Processadores de pagamento</li>
                  <li>Serviços de email e notificações</li>
                </ul>

                <h4 className="font-semibold text-lg">4.3 Exigências Legais</h4>
                <p>
                  Podemos divulgar suas informações se exigido por lei ou para proteger nossos direitos, propriedade ou
                  segurança.
                </p>
              </CardContent>
            </Card>

            {/* Segurança dos Dados */}
            <Card className="mb-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-blue-600">
                  <Lock className="w-6 h-6 mr-3" />
                  5. Segurança dos Dados
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas
                  informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
                </p>
                <p>Nossas medidas de segurança incluem:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Criptografia de dados em trânsito e em repouso</li>
                  <li>Controles de acesso rigorosos</li>
                  <li>Monitoramento contínuo de segurança</li>
                  <li>Auditorias regulares de segurança</li>
                  <li>Treinamento de funcionários sobre proteção de dados</li>
                </ul>
              </CardContent>
            </Card>

            {/* Seus Direitos */}
            <Card className="mb-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-blue-600">
                  <UserCheck className="w-6 h-6 mr-3" />
                  6. Seus Direitos (LGPD)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed space-y-4">
                <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Acesso:</strong> Solicitar informações sobre o tratamento de seus dados
                  </li>
                  <li>
                    <strong>Correção:</strong> Solicitar a correção de dados incompletos ou incorretos
                  </li>
                  <li>
                    <strong>Exclusão:</strong> Solicitar a exclusão de seus dados pessoais
                  </li>
                  <li>
                    <strong>Portabilidade:</strong> Solicitar a transferência de seus dados
                  </li>
                  <li>
                    <strong>Oposição:</strong> Opor-se ao tratamento de seus dados
                  </li>
                  <li>
                    <strong>Revogação:</strong> Revogar seu consentimento a qualquer momento
                  </li>
                </ul>
                <p>
                  Para exercer seus direitos, entre em contato conosco através dos canais fornecidos nesta política.
                </p>
              </CardContent>
            </Card>

            {/* Cookies e Tecnologias Similares */}
            <Card className="mb-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-blue-600">
                  <Database className="w-6 h-6 mr-3" />
                  7. Cookies e Tecnologias Similares
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  Usamos cookies e tecnologias similares para melhorar sua experiência, analisar o uso do serviço e
                  personalizar conteúdo.
                </p>
                <p>Tipos de cookies que usamos:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Essenciais:</strong> Necessários para o funcionamento básico do site
                  </li>
                  <li>
                    <strong>Funcionais:</strong> Lembram suas preferências e configurações
                  </li>
                  <li>
                    <strong>Analíticos:</strong> Nos ajudam a entender como você usa nosso serviço
                  </li>
                  <li>
                    <strong>Publicitários:</strong> Personalizam anúncios e ofertas (com seu consentimento)
                  </li>
                </ul>
                <p>Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.</p>
              </CardContent>
            </Card>

            {/* Retenção de Dados */}
            <Card className="mb-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-blue-600">
                  <AlertCircle className="w-6 h-6 mr-3" />
                  8. Retenção de Dados
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos descritos
                  nesta política, a menos que um período de retenção mais longo seja exigido ou permitido por lei.
                </p>
                <p>Períodos de retenção típicos:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Dados de conta: Enquanto sua conta estiver ativa</li>
                  <li>Dados de transação: 5 anos após a transação</li>
                  <li>Dados de marketing: Até você revogar o consentimento</li>
                  <li>Logs de sistema: 12 meses</li>
                </ul>
              </CardContent>
            </Card>

            {/* Alterações na Política */}
            <Card className="mb-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-blue-600">
                  <Eye className="w-6 h-6 mr-3" />
                  9. Alterações nesta Política
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre quaisquer
                  mudanças publicando a nova Política de Privacidade nesta página e atualizando a data de "última
                  atualização".
                </p>
                <p>Recomendamos que você revise esta Política de Privacidade periodicamente para quaisquer mudanças.</p>
              </CardContent>
            </Card>

            {/* Contato */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-gold-50">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-blue-600">
                  <UserCheck className="w-6 h-6 mr-3" />
                  10. Contato e Encarregado de Dados
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p>
                  Se você tiver alguma dúvida sobre esta Política de Privacidade ou quiser exercer seus direitos, entre
                  em contato conosco:
                </p>
                <div className="mt-4 space-y-2">
                  <p>
                    <strong>Encarregado de Dados (DPO):</strong> Maria Silva
                  </p>
                  <p>
                    <strong>Email:</strong> privacidade@descontododono.com.br
                  </p>
                  <p>
                    <strong>Telefone:</strong> (11) 1234-5678
                  </p>
                  <p>
                    <strong>Endereço:</strong> Rua das Empresas, 123 - São Paulo, SP - CEP: 01234-567
                  </p>
                </div>
                <p className="mt-4">
                  <strong>Autoridade Nacional de Proteção de Dados (ANPD):</strong>
                  <br />
                  Caso não esteja satisfeito com nossas respostas, você pode contatar a ANPD através do site:
                  www.gov.br/anpd
                </p>
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
                  <Link href="/#como-funciona" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Como Funciona
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Baixar App
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Suporte
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-xl">Para Donos</h4>
              <ul className="space-y-3 text-blue-200">
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Cadastrar Negócio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Central do Dono
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Dicas de Vídeo
                  </a>
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
