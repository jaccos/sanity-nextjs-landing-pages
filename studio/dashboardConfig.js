export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebe580533a14079b18c2381',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-unsuhwgf',
                  apiId: '0b61979b-cc13-4d57-88e4-3cad3dcc4c9a'
                },
                {
                  buildHookId: '5ebe580643a042418846c04f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-2oxsbtjh',
                  apiId: '5bc6562f-ef1b-40ec-af57-2c1e190db94e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jaccos/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-2oxsbtjh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
