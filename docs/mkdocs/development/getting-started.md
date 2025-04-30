# Getting Started

This guide will help you set up and run the MCP N8N Cursor Project locally.

## Prerequisites

- Docker and Docker Compose
- Git
- Node.js (v18 or later)
- Python (v3.8 or later)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mcp-n8n-cursor.git
   cd mcp-n8n-cursor
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. Start the services:
   ```bash
   docker compose up -d
   ```

## Accessing Services

- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- N8N: http://localhost:5678
- Documentation:
  - MkDocs: http://localhost:8000/docs
  - Docusaurus: http://localhost:3000/docs

## Development

1. Install development dependencies:
   ```bash
   # Backend
   cd backend
   pip install -r requirements.txt

   # Frontend
   cd frontend
   npm install
   ```

2. Start development servers:
   ```bash
   # Backend
   cd backend
   uvicorn main:app --reload

   # Frontend
   cd frontend
   npm run dev
   ```

## Documentation

The project uses two documentation systems:

1. **MkDocs** (Material theme):
   - Located in `docs/mkdocs/`
   - Run locally: `mkdocs serve`

2. **Docusaurus**:
   - Located in `docs/docusaurus/`
   - Run locally: `npm start`

## Next Steps

- Review the [Architecture Overview](architecture/overview.md)
- Check out the [API Reference](user-guide/api-reference.md)
- Read the [Contributing Guide](contributing.md) 