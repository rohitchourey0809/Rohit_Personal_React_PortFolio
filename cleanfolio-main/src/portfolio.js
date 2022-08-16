const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rohit0809-portfolio.netlify.app/',
  title: 'Rohit Chourey',
}

const home = {
  // all the properties are optional - can be left empty or deleted
  Image:
    'https://cdn-images-1.medium.com/max/1000/1*Wn9-IGll5i1j71XdFgwNaw.png',

  name: 'Rohit Chourey',
  role: 'MERN Stack Web Developer',
  // description:
  //   'Hi, My name is Rohit Chourey,. I’m currently pursuing Full Stack WebDevelopment Course at Masai School I have completed my graduation B.E Mechanical Engineering from Technocrats Institue Of Technology, Bhopal (M.P)  and I have worked as a Internal Audit Officer in fusion Microfinance Pvt Ltd . I am a self-learner, curious and enthusiastic in learning new things. Curiosity is what makes a person think different. I think learning even a small thing as it seem can make a difference. Take a look at some projects I built on Github or check my resume.',

  resume:
    'https://docs.google.com/document/d/1rN5NiZ9R6XEDrLehWUq04lAyfGjKeggjVznhxvCMuVc/edit',
  social: {
    linkedin: 'https://www.linkedin.com/in/rohit-chourey/',
    github: 'https://github.com/rohitchourey0809',
  },
}

const aboutsummary = [
  'Hi, My name is Rohit Chourey, I have completed my graduation B.E Mechanical Engineering from Technocrats Institue Of Technology, Bhopal (M.P) and MBA (Finance+HR) from Bhabha University,Bhopal (M.P) and I have worked as a Internal Audit Officer in fusion Microfinance Pvt Ltd . I am a self-learner, curious and enthusiastic in learning new things. Curiosity is what makes a person think different. I think learning even a small thing as it seem can make a difference. Take a look at some projects I built on Github or check my resume.',
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'MeanBuyClone',
    Imgproject: 'https://miro.medium.com/max/875/0*O0kYHdJYMf-xLEm7.png',
    description: 'Meanbuy is the online shopping e-commerse website.',
    stack: ['Html', 'Css', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/rohitchourey0809/Meanbuy',
    livePreview: 'https://dapper-meanbuy-rohitchourey00809.netlify.app',
  },
  {
    name: 'CredoBeautyClone',
    Imgproject: 'https://miro.medium.com/max/875/0*oebBk9nq6yzO0k1F.png',
    description:
      'CredoBeauty is the online shopping beauty product e-commerse website.',
    stack: ['Html', 'Css', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/rohitchourey0809/CREADO_BEAUTY',
    livePreview: 'https://credo-beauty.netlify.app/',
  },

  {
    name: 'GoogleTranlatorClone',
    Imgproject: 'https://miro.medium.com/max/1400/1*VBXT67n-oKSuhfHbMiPQcQ.png',
    description:
      "Google's Translator free service instantly translates words, phrases, and web pages between English and over 100 other languages.",
    stack: ['Html', 'Css', 'JavaScript'],
    sourceCode:
      'https://github.com/rohitchourey0809/Unit3_Git_Assign/tree/main/google%20translator',
    livePreview:
      'https://googletranslater-nuh1bv627-rohitchourey0809.vercel.app/',
  },
  {
    name: 'ShoppingClone',
    Imgproject:
      'https://cdn-images-1.medium.com/max/1000/1*MKdmakTpuY_DULyVvDRGNw.png',
    description: 'Shopping is the online shopping product e-commerse website.',
    stack: ['Html', 'Css', 'JavaScript', 'React', 'Mongo', 'Json-server'],
    sourceCode: 'https://github.com/rohitchourey0809/FinalMernProject',
    livePreview: 'https://final-mern-app.netlify.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Express',
  'MongoDB',
  'Material UI',
  'Node',
  'Git',
  'Chakra',
  "Github",
  "Json-server",
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'rohit1995chourey@mail.com',
}

export { header, aboutsummary, home, projects, skills, contact }
