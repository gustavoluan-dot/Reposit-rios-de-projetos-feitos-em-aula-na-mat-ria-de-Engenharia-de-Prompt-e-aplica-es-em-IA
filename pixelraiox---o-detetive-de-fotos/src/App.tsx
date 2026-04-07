/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Camera, Shield, Zap, MapPin, Palette, Upload } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* 🔮 Blobs de Fundo (As "manchas" coloridas que flutuam) */}
      <div className="blob-container">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* 🧭 Navbar (A barra de cima que parece vidro) */}
      <nav className="glass-nav px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-2 rounded-xl shadow-lg">
              <Zap className="text-white" size={24} />
            </div>
            <span className="text-xl font-black tracking-tighter">
              PIXEL<span className="text-purple-400">RAIOX</span>
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium opacity-70">
            <a href="#" className="hover:text-purple-400 transition-colors">Como funciona</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Sobre</a>
          </div>
        </div>
      </nav>

      {/* 🚀 Hero Section (Onde a mágica começa) */}
      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none tracking-tight">
            Descubra os segredos <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              atrás de cada pixel.
            </span>
          </h1>
          <p className="text-lg md:text-xl opacity-60 max-w-2xl mx-auto">
            O detetive digital que revela onde, como e quando suas fotos foram tiradas, 
            enquanto protege sua identidade.
          </p>
        </div>

        {/* 📸 Card de Upload (O Cartão de Vidro) */}
        <div className="glass-card p-8 md:p-12">
          <div 
            className={`drop-zone ${isDragging ? 'active' : ''}`}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => { e.preventDefault(); setIsDragging(false); console.log('Foto recebida!'); }}
          >
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-4">
              <Upload className="text-purple-400" size={40} />
            </div>
            <h2 className="text-2xl font-bold">Arraste sua foto aqui</h2>
            <p className="opacity-50 text-sm">ou clique para procurar no computador</p>
            
            <div className="mt-6">
              <button className="btn-primary">
                Selecionar Imagem
              </button>
            </div>
          </div>

          {/* ✨ Miniaturas de Recursos (Dando um gostinho do que vem por aí) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <ResourcePreview icon={<MapPin size={18} />} label="Mapa GPS" />
            <ResourcePreview icon={<Shield size={18} />} label="Privacidade" />
            <ResourcePreview icon={<Palette size={18} />} label="Cores" />
            <ResourcePreview icon={<Camera size={18} />} label="Câmera" />
          </div>
        </div>
      </main>

      <footer className="text-center py-10 opacity-30 text-xs">
        <p>© 2026 PixelRaioX - O Detetive de Fotos</p>
      </footer>
    </div>
  );
}

function ResourcePreview({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
      <span className="text-purple-400">{icon}</span>
      <span className="text-xs font-bold uppercase tracking-wider">{label}</span>
    </div>
  );
}
