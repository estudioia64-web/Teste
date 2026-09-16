# 🚀 Guia de Deploy Automático — VetPet Clínica Veterinária

Este repositório está configurado com fluxos de **Integração e Entrega Contínua (CI/CD)** via **GitHub Actions**.

---

## 🌟 Opção 1: Deploy Automático Gratuito no GitHub Pages (Recomendado)

O fluxo `.github/workflows/deploy-pages.yml` já está criado e compila o projeto React + Vite automaticamente a cada `git push`.

### Como ativar no GitHub:
1. Abra seu repositório no navegador: [https://github.com/estudioia64-web/Servidor-site-](https://github.com/estudioia64-web/Servidor-site-)
2. Clique na aba **Settings** (Configurações do repositório).
3. No menu lateral esquerdo, clique em **Pages**.
4. Em **Build and deployment > Source**, selecione **GitHub Actions**.
5. Pronto! Faça o push dos arquivos para o branch `main`. O GitHub executará o build e seu site estará no ar em:
   👉 `https://estudioia64-web.github.io/Servidor-site-/`

---

## 🌐 Opção 2: Deploy Automático no seu Servidor Web (cPanel / Hostinger / VPS / Locaweb)

Se você possui uma hospedagem com cPanel ou servidor web com FTP:
1. Acesse seu repositório no GitHub > **Settings** > **Secrets and variables** > **Actions**.
2. Clique em **New repository secret** e adicione:
   - `FTP_SERVER`: Endereço FTP do seu servidor (ex: `ftp.seusite.com.br` ou IP)
   - `FTP_USERNAME`: Usuário FTP
   - `FTP_PASSWORD`: Senha do FTP
   - `FTP_SERVER_DIR`: Pasta de destino (ex: `public_html/` ou `public_html/vetpet/`)
3. Na aba **Variables**, adicione a variável `ENABLE_SERVER_DEPLOY` com valor `true`.
4. A cada `push` na branch `main`, os arquivos compilados serão enviados automaticamente para o seu servidor!

---

## ⚡ Opção 3: Deploy em 1 Clique na Vercel ou Netlify

1. Acesse [vercel.com](https://vercel.com) ou [netlify.com](https://netlify.com).
2. Conecte sua conta do GitHub e selecione o repositório `Servidor-site-`.
3. As configurações serão detectadas automaticamente (Vite / React).
4. Clique em **Deploy**. Cada novo commit atualizará o site instantaneamente com HTTPS e CDN global.

---

## 💻 Como Enviar o Projeto para o GitHub (Primeiro Push)

Execute os seguintes comandos no seu terminal:

```bash
# 1. Inicializar o repositório (já configurado neste ambiente)
git init
git add .
git commit -m "feat: site completo VetPet com fluxos de deploy automatico"

# 2. Definir o branch principal
git branch -M main

# 3. Adicionar o repositório remoto do GitHub
git remote add origin https://github.com/estudioia64-web/Servidor-site-.git

# 4. Enviar os arquivos para o GitHub
git push -u origin main
```
