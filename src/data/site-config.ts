import Logo from '../components/logo'
const baseUrl = 'https://github.com/kevdougful/scoutsite'

const siteConfig = {
  logo: Logo,
  copyright: `Copyright © ${new Date().getFullYear()} Kevin Coffey`,
  author: {
    name: 'Kevin Coffey',
    github: 'https://github.com/kevdougful',
    twitter: 'https://twitter.com/kevdougful',
    linkedin: 'https://linkedin.com/in/kevdougful',
    email: 'kevdougful@gmail.com',
  },
  repo: {
    url: baseUrl,
    editUrl: `${baseUrl}/edit/main/website/pages`,
    blobUrl: `${baseUrl}/blob/main`,
  },
  seo: {
    title: 'Pack 572 Creve Coeur, MO',
    description: 'BSA Cub Scout Pack 572 chartered at Craig Elementary School located in Creve Coeur, MO',
    siteUrl: 'https://saas-js.dev',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://saas-js.dev',
      title: 'Pack 572 Creve Coeur, MO',
      description: 'BSA Cub Scout Pack 572 chartered at Craig Elementary School located in Creve Coeur, MO',
      site_name: 'Pack 572',
      images: [
        {
          url: 'https://saas-js.dev/api/og',
          width: 1200,
          height: 630,
          alt: 'Pack 572',
        },
      ],
    },
  },
}

export default siteConfig
