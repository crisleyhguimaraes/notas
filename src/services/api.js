export function loadLists() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'terminar projeto DH',
          labels: ['#4B0082'],
          user: 'https://avatars.githubusercontent.com/u/43907168?v=4'
        },
        {
          id: 2,
          content: 'criar nova função para o projeto',
          labels: ['#4B0082'],
          user: 'https://avatars.githubusercontent.com/u/43907168?v=4'
        },
        {
          id: 3,
          content: 'Aprender React',
          labels: ['#4B0082'],
          user: 'https://avatars.githubusercontent.com/u/43907168?v=4'
        },
        {
          id: 4,
          content: 'inciar atividades do playground',
          labels: ['#4B0082'],
          user: 'https://avatars.githubusercontent.com/u/43907168?v=4' 
        },
       
      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Projeto js',
          labels: ['#1E90FF'],
          user: 'https://avatars.githubusercontent.com/u/43907168?v=4'
        }
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'node js',
          labels: ['#FF8C00'],
          user: 'https://avatars.githubusercontent.com/u/43907168?v=4'
        },
        {
          id: 8,
          content: 'curso TDD udemy',
          labels: ['#FF8C00'],
          user: 'https://avatars.githubusercontent.com/u/43907168?v=4'
        },
        {
          id: 9,
          content: 'teste do app',
          labels: ['#FF8C00'],
          user: 'https://avatars.githubusercontent.com/u/43907168?v=4'
        }
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'manutenção servidor',
          labels: ['#006400'],
        },
        {
          id: 12,
          content: 'testes de hardware',
          labels: ['#006400'],
        }
      ]
    },
  ];
}