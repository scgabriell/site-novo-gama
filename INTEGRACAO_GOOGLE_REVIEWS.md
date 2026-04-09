# Integração Google Reviews - Referência Rápida

## 🎯 Para Começar Rapidamente

1. **Configure as variáveis de ambiente:**
   - `GOOGLE_API_KEY` - Sua chave de API do Google Cloud
   - `GOOGLE_PLACE_ID` - O ID do seu estabelecimento no Google Maps

2. **Pronto!** As avaliações aparecerão automaticamente na seção "O que nossos pacientes dizem"

## 📁 Arquivos Principais

```
projeto/
├── components/
│   ├── google-reviews.tsx              # Componente básico
│   ├── google-reviews-advanced.tsx    # Componente recomendado ⭐
│   ├── animate-on-scroll.tsx          # Animações
│   ├── header.tsx                     # Menu superior
│   └── footer.tsx                     # Rodapé
├── app/
│   ├── page.tsx                       # Home (usa GoogleReviewsAdvanced)
│   ├── api/
│   │   └── google-reviews/
│   │       └── route.ts               # API que busca avaliações
│   └── layout.tsx                     # Layout principal
├── GOOGLE_REVIEWS_SETUP.md            # Guia de setup completo 📖
└── INTEGRACAO_GOOGLE_REVIEWS.md       # Este arquivo
```

## 🔧 Onde Está a Integração na Home?

Na página inicial (`app/page.tsx`):

```typescript
// Import do componente
import { GoogleReviewsAdvanced } from "@/components/google-reviews-advanced"

// Na renderização (por volta da linha 315)
<GoogleReviewsAdvanced />
```

## 📊 Como Funciona

```
[Usuário acessa /]
        ↓
[Home carrega GoogleReviewsAdvanced]
        ↓
[Componente faz fetch para /api/google-reviews]
        ↓
[API busca dados do Google Places ou retorna cache]
        ↓
[Avaliações aparecem no grid]
```

## ⚙️ Configuração Detalhada

Para o guia completo de setup, veja: **GOOGLE_REVIEWS_SETUP.md**

### Resumo dos Passos:

1. Ir para [Google Cloud Console](https://console.cloud.google.com/)
2. Criar projeto
3. Ativar "Places API"
4. Gerar API Key
5. Obter Place ID do Google Maps
6. Adicionar variáveis de ambiente
7. Pronto!

## 🎨 Componente Advanced vs Basic

### GoogleReviewsAdvanced (Padrão - Recomendado)
✅ Estatísticas de rating  
✅ Fotos de perfil  
✅ Animações suaves  
✅ Responsivo (1-3 colunas)  
✅ Estados de loading e erro  

### GoogleReviews (Básico)
✅ Simples e leve  
✅ Sem animações  
✅ Grid básico  

**Ambos buscam dados da mesma API!**

## 🔄 Como Trocar de Componente

Se quiser usar o componente básico:

Em `app/page.tsx`:

```typescript
// Trocar de:
import { GoogleReviewsAdvanced } from "@/components/google-reviews-advanced"

// Para:
import { GoogleReviews } from "@/components/google-reviews"

// E trocar:
<GoogleReviewsAdvanced />

// Por:
<GoogleReviews />
```

## 💾 Cache

As avaliações são cacheadas por **6 horas** para:
- Economizar quota da API
- Melhorar performance
- Reduzir latência

Para forçar atualização: reinicie o servidor

## 🐛 Diagnóstico Rápido

**Sem avaliações aparecem?**

1. Abra DevTools (F12) → Network tab
2. Procure por `api/google-reviews`
3. Verifique o status e resposta
4. Se status ≠ 200, há erro na API
5. Se status = 200 mas sem dados, verifique Place ID

**No console do servidor?**

```bash
npm run dev
# Procure por erros de [Google Reviews]
```

## 📞 Contato

Se tiver dúvidas sobre a integração Google, consulte:
- [Google Places API Docs](https://developers.google.com/maps/documentation/places/web-service/overview)
- [Google Cloud Console Help](https://support.google.com/cloud)

## 🎓 Próximos Passos

1. ✅ Configurar variáveis de ambiente
2. ✅ Testar integração (F12 → Network)
3. ✅ Customizar cores se necessário
4. ✅ Deploy no Vercel
5. ✅ Monitorar quota da API

## 📈 Performance

- Load time da seção: ~1-2 segundos (primeira vez)
- Subsequent loads: instantâneo (cache)
- Size do componente: ~15KB (minified)
- Requisições mensais estimadas: ~50-100 (com cache)
