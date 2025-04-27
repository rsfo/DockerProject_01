#dockerfile
FROM docker:24.0.6-dind

# Instalar Python e Flask
RUN apk add --no-cache python3 py3-pip

# Copiar os arquivos da aplicação
WORKDIR /app
COPY . /app

# Instalar dependências do Python
RUN pip install --no-cache-dir -r requirements.txt

# Executar o app Flask
CMD ["python3", "app.py"]