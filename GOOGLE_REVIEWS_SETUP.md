# Integração Google Reviews - Guia Completo

## 📋 Visão Geral

Este projeto está configurado para exibir as avaliações do Google Maps do Instituto Gama diretamente no site. As avaliações são sincronizadas em tempo real via API do Google Places, com cache inteligente de 6 horas.

## 🔄 Como Funciona

```
Frontend (React)
    ↓
API Route (/api/google-reviews)
    ↓
Google Places API
    ↓
Cache (6 horas)
    ↓
Display de Avaliações
```

1. **Frontend**: Componentes React que buscam e exibem as avaliações
2. **Backend**: Rota API que gerencia chamadas ao Google Places API com cache
3. **Cache**: Reduz chamadas desnecessárias e melhora performance

## 📚 Componentes Disponíveis

### `GoogleReviewsAdvanced` (Recomendado - Padrão)
- Estatísticas com classificação média
- Layout em grid responsivo (1, 2 ou 3 colunas)
- Fotos de perfil dos avaliadores
- Animações de scroll suavizadas
- Link para ver todas as avaliações
- Estado de carregamento com skeleton
- Tratamento de erros elegante

### `GoogleReviews` (Básico)
- Versão simplificada
- Grid básico de avaliações
- Menor overhead de recursos

## 🚀 Setup Passo a Passo

### 1️⃣ Criar um Projeto Google Cloud

1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Clique no dropdown do projeto no topo
3. Selecione "NEW PROJECT"
4. Nomeie como "Instituto Gama"
5. Clique "CREATE"

### 2️⃣ Ativar Google Places API

1. Vá para "APIs & Services" > "Library"
2. Procure por "Places API" 
3. Clique em "ENABLE"
4. Aguarde alguns segundos para ativar

### 3️⃣ Criar Chave de API (API Key)

1. Vá para "APIs & Services" > "Credentials"
2. Clique "CREATE CREDENTIALS" > "API Key"
3. Copie a chave exibida
4. **Importante**: Clique no ícone de lápis para editar e configure as restrições:
   - **Application restrictions**: Selecione "HTTP referrers (web sites)"
   - **Website restrictions**: Adicione seus domínios (exemplo: `institutogama.com`)
   - **API restrictions**: Selecione apenas "Places API"
5. Clique "SAVE"

### 4️⃣ Obter Google Place ID

**Método Rápido (Recomendado):**

1. Abra [Google Maps](https://maps.google.com)
2. Procure por "Instituto Gama" (ou seu endereço em São Paulo)
3. Clique no resultado da sua empresa
4. Procure na URL ou use o [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/overview)

**Método via API (Alternativo):**

1. Faça uma requisição para:
```
https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Instituto%20Gama%20São%20Paulo&inputtype=textquery&fields=place_id&key=YOUR_API_KEY
```

2. Substitua `YOUR_API_KEY` pela sua chave
3. No JSON retornado, procure por `place_id`

### 5️⃣ Adicionar Variáveis de Ambiente

Na v0, clique em **Settings** (canto superior direito) > **Vars** e adicione:

```
GOOGLE_API_KEY = sua_chave_aqui
GOOGLE_PLACE_ID = seu_place_id_aqui
```

**Ou em `.env.local` para desenvolvimento local:**

```env
GOOGLE_API_KEY=sua_chave_aqui
GOOGLE_PLACE_ID=seu_place_id_aqui
```

### 6️⃣ Teste a Integração

1. Reinicie o servidor: `npm run dev`
2. Acesse http://localhost:3000
3. Role até a seção "O que nossos pacientes dizem"
4. As avaliações reais devem aparecer em alguns segundos

## ✅ Verificando se Está Funcionando

### No Console do Navegador (F12):
- Abra a aba "Network"
- Procure por `api/google-reviews`
- Deve retornar status **200** com as avaliações

### No Console do Servidor (Terminal):
- Sem erros relacionados a reviews
- Se estiver funcionando: Avaliações carregadas com sucesso

## 🎨 Customização

### Alterar número de avaliações exibidas:

Em `components/google-reviews-advanced.tsx`, linha ~36:
```typescript
setReviews(data.reviews.slice(0, 6)) // Mude 6 para outro número
```

### Alterar cores e estilos:

Em `components/google-reviews-advanced.tsx`:
- `from-blue-50 to-indigo-50` - Gradiente de fundo
- `bg-blue-600 hover:bg-blue-700` - Botão CTA
- Altere conforme sua marca

### Alterar duração do cache:

Em `app/api/google-reviews/route.ts`, linha ~9:
```typescript
const CACHE_DURATION = 6 * 60 * 60 * 1000 // Mude 6 para horas desejadas
```

## 🐛 Troubleshooting

| Problema | Solução |
|----------|---------|
| **"Invalid API Key"** | Copie corretamente, aguarde 5 min para propagação |
| **"Invalid Place ID"** | Obtenha novamente via Google Maps ou API Places |
| **Reviews não atualizam** | Cache de 6h está ativo. Aguarde ou reinicie servidor |
| **Erro CORS** | Verifique HTTP referrers nas credenciais |
| **Sem avaliações visíveis** | Confirme se tem reviews públicos no Google Maps |
| **Erro 403** | Places API pode não estar ativada ou chave inválida |

## 📊 Dados de Demonstração

Se as credenciais não estiverem configuradas, o sistema exibe dados fictícios:

```javascript
{
  author_name: "Maria Silva",
  rating: 5,
  text: "Excelente atendimento! Fisioterapeutas muito profissionais...",
  relative_time_description: "há 1 semana"
}
```

Isso permite visualizar como aparecerão as avaliações reais.

## 💰 Custo

- Primeiros **200 requests/mês**: Gratuito
- Acima disso: ~$7 por 1000 requests
- O cache de 6 horas reduz drasticamente o uso
- [Consulte pricing oficial](https://cloud.google.com/maps-platform/pricing)

## 🔐 Segurança

✅ **Boas práticas implementadas:**
- Chave de API armazenada no servidor (`.env`)
- Chamadas feitas do backend, não frontend
- Restrições HTTP referrer ativas
- Restrição de API apenas para Places
- Sem exposição de dados sensíveis

## 📱 Responsividade

O componente é totalmente responsivo:
- **Mobile**: 1 coluna
- **Tablet**: 2 colunas  
- **Desktop**: 3 colunas

## 🔗 Links Úteis

- [Google Cloud Console](https://console.cloud.google.com/)
- [Google Places API Docs](https://developers.google.com/maps/documentation/places/web-service/overview)
- [Find Place ID](https://maps.google.com)
- [Pricing](https://cloud.google.com/maps-platform/pricing)

## 📝 Notas Finais

- Avaliações atualizam a cada 6 horas (cache)
- Fotos de perfil são otimizadas (10x10px)
- Componente é totalmente acessível (ARIA labels)
- Suporta múltiplos idiomas via Google Places
- O site funciona mesmo sem a integração (fallback para mock data)
