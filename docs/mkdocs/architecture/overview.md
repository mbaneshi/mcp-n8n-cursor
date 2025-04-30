# Architecture Overview

## System Architecture

The MCP N8N Cursor Project is built on a modular, scalable architecture that combines multiple technologies to create a powerful AI agent platform.

### Core Components

1. **Frontend Layer**
   - Next.js application
   - HuggingFace Open Chat UI
   - Real-time updates via WebSocket

2. **Backend Layer**
   - FastAPI application
   - Clean Architecture pattern
   - RESTful API endpoints
   - WebSocket support

3. **Workflow Layer**
   - N8N for automation
   - Custom workflow definitions
   - Integration with external services

4. **Data Layer**
   - Supabase for database
   - PostgreSQL with PGVector
   - Authentication and authorization
   - File storage

5. **AI Layer**
   - Ollama for LLM serving
   - Model Context Protocol (MCP)
   - Google's Agential Development Kit
   - LangChain/LangGraph integration

6. **Observability Layer**
   - Langfuse for LLM observability
   - Custom metrics and logging
   - Performance monitoring

### Data Flow

1. **User Interaction**
   - User inputs via Open Chat UI
   - Natural language processing
   - Intent recognition

2. **Agent Processing**
   - Context gathering
   - Tool selection
   - Action execution

3. **Workflow Execution**
   - N8N workflow triggers
   - External service integration
   - Result processing

4. **Response Generation**
   - LLM response generation
   - Context enrichment
   - User feedback

### Security

- JWT-based authentication
- Role-based access control
- API key management
- Secure communication

### Scalability

- Horizontal scaling of services
- Load balancing
- Caching strategies
- Database optimization

## Technology Stack

- **Frontend**: Next.js, TypeScript, Open Chat UI
- **Backend**: FastAPI, Python, Clean Architecture
- **Database**: Supabase, PostgreSQL, PGVector
- **Workflow**: N8N, Node.js
- **AI**: Ollama, LangChain, LangGraph
- **Observability**: Langfuse, Prometheus, Grafana
- **Infrastructure**: Docker, Caddy, GitHub Actions 