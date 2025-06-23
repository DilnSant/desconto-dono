import { Logo } from "./logo"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function BrandShowcase() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Identidade Visual</h1>
          <p className="text-xl text-gray-600">Desconto do Dono - Apresentação da Marca</p>
        </div>

        {/* Logotipos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Logotipo Principal</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center py-8">
              <Logo variant="full" size="lg" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Versão Simplificada</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center py-8">
              <Logo variant="icon" size="lg" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Versão Monocromática</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center py-8">
              <Logo variant="monochrome" size="lg" />
            </CardContent>
          </Card>
        </div>

        {/* Paleta de Cores */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Paleta de Cores</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-500 rounded-lg mx-auto mb-4 shadow-lg"></div>
                <h3 className="font-bold text-gray-800">Azul Padrão</h3>
                <p className="text-sm text-gray-600">#004466</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gold-500 rounded-lg mx-auto mb-4 shadow-lg"></div>
                <h3 className="font-bold text-gray-800">Dourado</h3>
                <p className="text-sm text-gray-600">#E3B343</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-white border-2 border-gray-200 rounded-lg mx-auto mb-4 shadow-lg"></div>
                <h3 className="font-bold text-gray-800">Branco</h3>
                <p className="text-sm text-gray-600">#FFFFFF</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-800 rounded-lg mx-auto mb-4 shadow-lg"></div>
                <h3 className="font-bold text-gray-800">Cinza Escuro</h3>
                <p className="text-sm text-gray-600">#333333</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tipografia */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Tipografia</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-blue-500 mb-2">Poppins Bold</h2>
              <p className="text-gray-600">Utilizada para títulos e destaques</p>
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-800 mb-2">Poppins Regular</p>
              <p className="text-gray-600">Utilizada para textos corridos e descrições</p>
            </div>
          </CardContent>
        </Card>

        {/* Aplicações */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">Aplicações da Marca</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
                  <Logo variant="icon" size="md" className="mx-auto" />
                </div>
                <h3 className="font-bold text-gray-800">Favicon</h3>
                <p className="text-sm text-gray-600">16x16px, 32x32px</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-lg shadow-lg mb-4 text-white">
                  <Logo variant="full" size="sm" className="mx-auto" />
                  <div className="mt-4 text-xs">Capa de Vídeo</div>
                </div>
                <h3 className="font-bold text-gray-800">Capa de Vídeo</h3>
                <p className="text-sm text-gray-600">1280x720px</p>
              </div>

              <div className="text-center">
                <div className="bg-white border-2 border-gray-200 p-4 rounded-lg shadow-lg mb-4">
                  <div className="flex items-center justify-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
                    <Logo variant="icon" size="sm" />
                    <span className="text-sm font-bold">Download</span>
                  </div>
                </div>
                <h3 className="font-bold text-gray-800">Botão de App</h3>
                <p className="text-sm text-gray-600">App Store / Play Store</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
