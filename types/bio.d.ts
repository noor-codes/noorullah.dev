export interface bio_types {
  name: string
  lastname: string
  fullname: string
  description: string
  profile_picture: string
  about_author: string
  landing_bio: string
  blog_intro: string

  profiles: {
    website: {
      name: string
      url: string
      seo_banner: string
    }

    twitter: {
      name: string
      handler: string
      url: string
    }

    github: {
      name: string
      handler: string
      url: string
    }
  }
}
