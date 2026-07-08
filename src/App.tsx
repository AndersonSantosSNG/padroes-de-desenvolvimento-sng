import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

// Detecta AUTOMATICAMENTE todos os arquivos .md dentro de src/docs/
const rawDocuments = import.meta.glob('./docs/*.md', { query: '?raw', eager: true });

interface ParsedDoc {
  id: string;
  title: string;
  category: string;
  createdBy: string;
  createdAt: string;
  lastUpdatedBy: string;
  lastUpdatedAt: string;
  version: string;
  content: string;
}

export default function App() {
  const [documents, setDocuments] = useState<ParsedDoc[]>([]);
  const [activeDoc, setActiveDoc] = useState<ParsedDoc | null>(null);

  // Função interna para parsear o Front Matter (YAML simples)
  const parseMarkdown = (filePath: string, rawText: string): ParsedDoc => {
    const frontMatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
    const match = rawText.match(frontMatterRegex);

    const fallbackId = filePath.split('/').pop()?.replace('.md', '') || 'doc';

    const defaultDoc: ParsedDoc = {
      id: fallbackId,
      title: fallbackId,
      category: 'Geral',
      createdBy: 'Desconhecido',
      createdAt: '-',
      lastUpdatedBy: 'Desconhecido',
      lastUpdatedAt: '-',
      version: '1.0',
      content: rawText
    };

    if (match) {
      const yamlLines = match[1].split('\n');
      const content = match[2];
      const meta: Record<string, string> = {};

      yamlLines.forEach(line => {
        const parts = line.split(':');
        if (parts.length >= 2) {
          const key = parts[0].trim();
          const value = parts.slice(1).join(':').trim();
          meta[key] = value;
        }
      });

      return {
        id: meta.id || defaultDoc.id,
        title: meta.title || defaultDoc.title,
        category: meta.category || defaultDoc.category,
        createdBy: meta.createdBy || defaultDoc.createdBy,
        createdAt: meta.createdAt || defaultDoc.createdAt,
        lastUpdatedBy: meta.lastUpdatedBy || defaultDoc.lastUpdatedBy,
        lastUpdatedAt: meta.lastUpdatedAt || defaultDoc.lastUpdatedAt,
        version: meta.version || defaultDoc.version,
        content: content
      };
    }

    return defaultDoc;
  };

  useEffect(() => {
    const parsed = Object.entries(rawDocuments).map(([path, module]) => {
      const moduleContent = module as unknown as { default: string };
      const rawText = moduleContent.default;
      return parseMarkdown(path, rawText);
    });

    // Ordena os documentos pelo título numerado
    parsed.sort((a, b) => a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: 'base' }));

    setDocuments(parsed);
    if (parsed.length > 0) {
      setActiveDoc(parsed[0]);
    }
  }, []);

  if (!activeDoc) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50 font-sans text-gray-500">
        Carregando documentação...
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50 text-gray-900 font-sans antialiased">
      {/* 1. Header Superior Oficial SNG */}
      <header className="bg-white border-b border-gray-200 h-16 px-12 flex items-center justify-between shrink-0 shadow-sm z-10">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[19px] tracking-tight text-[#0056b3]">SNG</span>
          <span className="font-bold text-[19px] tracking-tight text-gray-900">Guidelines</span>
          <span className="text-blue-500 font-bold text-lg leading-none mb-0.5">📄</span>
          <span className="mx-3 text-gray-300">|</span>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Documentação Técnica</span>
        </div>
      </header>

      {/* Layout de Conteúdo Inferior */}
      <div className="flex-1 flex overflow-hidden p-8 gap-8 max-w-[1600px] w-full mx-auto">
        
        {/* 2. Menu Lateral Automatizado */}
        <aside className="w-80 bg-white rounded-2xl border border-gray-200 flex flex-col overflow-hidden shrink-0 shadow-sm">
          <div className="p-5 border-b border-gray-100 bg-gray-50/70">
            <h3 className="font-bold text-sm text-gray-800">Tópicos disponíveis</h3>
            <p className="text-xs text-gray-400 mt-0.5">Selecione uma diretriz técnica</p>
          </div>
          
          <nav className="flex-1 overflow-y-auto p-3 space-y-1 bg-white">
            {documents.map((doc) => {
              const isActive = activeDoc.id === doc.id;
              return (
                <button
                  key={doc.id}
                  onClick={() => setActiveDoc(doc)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-[14px] font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-[#007bff] text-white shadow-sm shadow-blue-500/10'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {doc.title}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* 3. Área de Leitura Principal */}
        <main className="flex-1 flex flex-col gap-6 overflow-hidden">
          
          {/* Card superior de Título */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 flex items-center justify-between shrink-0 shadow-sm">
            <div className="space-y-1.5">
              <span className="text-[10px] font-extrabold text-[#007bff] uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                {activeDoc.category}
              </span>
              <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight block">{activeDoc.title}</h2>
            </div>
          </div>

          {/* Card Principal do Conteúdo Interpretado */}
          <div className="flex-1 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-y-auto p-12">
            <article className="max-w-3xl mx-auto">
              
              {/* Metadados injetados de forma limpa */}
              <div className="mb-6 pb-6 border-b border-gray-100 text-sm text-gray-600 space-y-1">
                <p><strong>Autor:</strong> {activeDoc.createdBy} ({activeDoc.createdAt})</p>
                <p><strong>Última Modificação:</strong> {activeDoc.lastUpdatedBy} ({activeDoc.lastUpdatedAt})</p>
                <p><strong>Versão:</strong> <span className="font-mono font-bold text-[#007bff] bg-blue-50 px-1.5 py-0.5 rounded text-xs">{activeDoc.version}</span></p>
              </div>
              
              {/* INTERPRETADOR DE MARKDOWN COM CLASSES DE ESTILO PROPRIAS */}
              <div className="prose max-w-none text-gray-800 text-[15px] leading-relaxed space-y-4">
                <ReactMarkdown
                  components={{
                    p: ({ children }) => <p className="mb-4">{children}</p>,
                    ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
                    li: ({ children }) => <li className="text-gray-700">{children}</li>,
                    strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
                    h1: ({ children }) => <h1 className="text-2xl font-bold text-gray-900 mt-6 mb-3">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-xl font-bold text-gray-900 mt-5 mb-2">{children}</h2>,
                  }}
                >
                  {activeDoc.content.trim()}
                </ReactMarkdown>
              </div>

            </article>
          </div>

        </main>
      </div>
    </div>
  );
}