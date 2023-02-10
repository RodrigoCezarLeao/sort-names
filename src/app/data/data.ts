import { Patch } from "../interfaces/patch";
import { People } from "../interfaces/people";

export const PEOPLE: People[] = [
      {
        "name": "Rodrigo",
        "checked": false,
        "id": "56794c5c-014f-4df9-b455-afb1a3b72f67"
      },
      {
        "name": "Pammela",
        "checked": false,
        "id": "d1f7ea33-37ae-4a1d-82d2-fe7feff06bbe"
      },
      {
        "name": "Marcelle",
        "checked": false,
        "id": "84b7ab3e-c2ad-461e-b8d5-df5b196787a2"
      },
      {
        "name": "Ian",
        "checked": false,
        "id": "7cb91f07-0e1d-4620-acbd-884268196ce4"
      },
      {
        "name": "Yanne",
        "checked": false,
        "id": "9dff608b-50b2-4ae0-a065-784e9cd6b4cf"
      },
      {
        "name": "Bárbara",
        "checked": false,
        "id": "d7fd8f42-9a93-4dc0-9ea9-a0809e095ce0"
      },
      {
        "name": "Samilly",
        "checked": false,
        "id": "d81c3d66-5f1e-4de4-bd43-2852e66aa2b7"
      },
      {
        "name": "Kevin",
        "checked": false,
        "id": "6f4b8b36-c40c-4092-8d73-b0ce59341f21"
      },
      {
        "name": "Camila",
        "checked": false,
        "id": "ad38b68e-ac21-47b0-95bc-4f3011c7301c"
      },
      {
        "name": "Bruno",
        "checked": false,
        "id": "b3c05624-cf3f-4d83-a584-68564e7c6a54"
      },
      {
        "name": "Hermann",
        "checked": false,
        "id": "d3f4f204-8a37-42ac-9f06-1a5ac88a25d7"
      },
      {
        "name": "Antônio",
        "checked": false,
        "id": "27318b27-6a1f-49a1-aa32-0c9ef15185c4"
      },
      {
        "name": "Luiza",
        "checked": false,
        "id": "c1255b03-54ec-41aa-b5ef-f6bcf56b74ed"
      },
      {
        "name": "Daniel",
        "checked": false,
        "id": "acdecc9d-1e4e-4ebc-9c99-664ab0d9c1e7"
      },
      {
        "name": "Franciani",
        "checked": false,
        "id": "aafd3a48-5acb-4091-844b-98e7c5144bf0"
      },
      {
        "name": "Fernanda",
        "checked": false,
        "id": "7d3a79fc-202e-4f9b-9679-176d38fef5d8"
      },
      {
        "name": "Tiago",
        "checked": false,
        "id": "eddb051f-9789-4dac-9e29-e2daf4e75059"
      },
      {
        "name": "Gustavo",
        "checked": false,
        "id": "cbb18019-f38d-4d18-a14f-bf173db8cb33"
      },
      {
        "name": "João",
        "checked": false,
        "id": "b0d3251d-8579-4dfa-8906-21903d6e47ea"
      },
      {
        "name": "Juliana",
        "checked": false,
        "id": "7e1c3887-d83c-40d4-ae63-24aa77af3b5b"
      },
      {
        "name": "Letícia",
        "checked": false,
        "id": "de8a53df-62ee-456d-95af-a1762a06b8dc"
      },
      {
        "name": "Paola",
        "checked": false,
        "id": "8237cce6-1ef8-434f-81d4-9dd4b1b106e5"
      },
      {
        "name": "Dayane",
        "checked": false,
        "id": "af49303a-29cf-4c78-b9ee-b040ae012f5f"
      },
      {
        "name": "Vitor",
        "checked": false,
        "id": "51c25333-6f4e-4094-aa1e-e2ca49900c36"
      },
      {
        "name": "Daniela",
        "checked": false,
        "id": "08016417-3f00-4f98-84ed-017ada16af5b"
      },
      {
        "name": "Eduardo Prudente",
        "checked": false,
        "id": "47803d84-0180-46d6-ba68-d56ed5781e12"
      }
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
    version: "1.3",
    release_date: new Date(2023, 1, 10),
    description: `
      - Implementar versionamento de notas de atualização do sistema;
      - Exibir versões e notas de atualização em tela;
      - Modal de abertura e histórico de notas de atualização.
    `,
  },    
];