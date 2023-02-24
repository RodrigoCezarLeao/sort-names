import { Patch } from "../interfaces/patch";
import { Participant } from "../interfaces/participant";

export const PARTICIPANT: Participant[] = [
      {
        "id": "56794c5c-014f-4df9-b455-afb1a3b72f67",
        "name": "Rodrigo",
        "type": "member",
        "small_group_id": "cleddfnep8pi70blxonh3afml",
        "active": true,
        "checked": false,
      },
      {
        "id": "d1f7ea33-37ae-4a1d-82d2-fe7feff06bbe",
        "name": "Pammela",
        "type": "leader",
        "small_group_id": "cleddfnep8pi70blxonh3afml",
        "active": true,
        "checked": false,
      },
      {
        "id": "84b7ab3e-c2ad-461e-b8d5-df5b196787a2",
        "name": "Marcelle",
        "type": "member",
        "small_group_id": "cleddfnep8pi70blxonh3afml",
        "active": true,
        "checked": false,        
      },
      {
        "id": "7cb91f07-0e1d-4620-acbd-884268196ce4",
        "name": "Ian",
        "type": "leader",
        "small_group_id": "cleddfnep8pi70blxonh3afml",
        "active": true,
        "checked": false,
      },
      {
        "id": "f3a5b1e2-0264-4ffc-8b5a-69e799e0e408",
        "name": "Vinicius Rosa",
        "type": "guest",
        "small_group_id": "cleddfnep8pi70blxonh3afml",
        "active": true,
        "checked": false,
      },      
];


export const PATCHES: Patch[] = [
  {
    version: "1.1",
    release_date: new Date(2023, 1, 8),
    description: `
      - Lançar sistema básico de sortear nomes marcados (cadastro fixo via js);
      - Opção de cadastrar temporariamente novos participantes.
    `,
  },
  {
    version: "1.2",
    release_date: new Date(2023, 1, 8),
    description: `
      - Melhorar estilização do site (CSS);
      - Melhorar versão mobile.
    `,
  },
  {
    version: "1.3.1",
    release_date: new Date(2023, 1, 12),
    description: `
      - Implementar versionamento de notas de atualização do sistema;
      - Exibir versões e notas de atualização em tela;
      - Modal de abertura e histórico de notas de atualização.
      - Generalizar solução de modal para reutilização na plataforma.      
    `,
  },
  {
    version: "1.4",
    release_date: new Date(2023, 1, 24),
    description: `
      - Separação de membros e visitantes;
      - Melhoria de informações ao adicionar novos participantes;
      - Salvar e excluir novos participantes.
    `,
  }
// visitantes marcados na lista
// promover e rebaixar visitante/membro
// trocar nomes por apelidos (visualização)
// excluir participante só fazer adormecer
];