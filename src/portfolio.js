const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rohit-personal-react-port-folio.vercel.app/',
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
    'https://drive.google.com/file/d/1nVlyiBkmycX59oPNUwufNyRUUnVVBmri/view',
  social: {
    linkedin: 'https://www.linkedin.com/in/rohit-chourey/',
    github: 'https://github.com/rohitchourey0809',
  },
}

const aboutsummary = [
  'Dynamic and results-driven Associate Software Engineer with a commendable two-year tenure at Indus Net Technologies in Kolkata, specializing in React and Next.js development. My primary focus has been on the impactful "SBI Customer Portal Project", where I have played a pivotal role as a Frontend Developer. Through collaborative efforts and technical proficiency, I have contributed significantly to the success of the project, ensuring a seamless and user-friendly experience for channel partners and agents.',
]

const WorkExperience = [
  'Developed and maintained front-end components and user interfaces',
  'Implemented state management using React hooks to handle complex user interactions and dynamic data updates.',
  'Collaborated with backend teams to integrate React components with RESTful APIs, ensuring seamless data flow between the front end and the server.',
  'Utilized Next.js dynamic routes to create mutiple dynamic pages.',
  'Work on mutilangual pages and used file based routing in Next.js',
  'Worked closely with UX/UI designers, backend developers, and QA teams in an Agile environment, ensuring seamless integration and timely delivery of features',
  'Implemented Next.js and React.js framework to enhance the performance and scalability of web application',
  'Good exposure to HTML ,CSS ,JavaScript ,React ,Redux ,Next Js',
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'StudentEnrollmentApp',
    Imgproject:
      'https://github.com/rohitchourey0809/yellow-owl-frontend/assets/97465195/067d3886-8a39-4c71-ba04-91998753ae05',
    description:
      'The enrollment registration student form leverages these technologies to create a modern and efficient web application for registering students in an educational institution. It provides a user-friendly interface for entering student information and integrates with a backend server to store and manage enrollment data.',
    stack: ['React', 'ChakaUI', 'Typescript', 'Node', 'Express', 'MongoDB'],
    sourceCode: 'https://github.com/rohitchourey0809/yellow-owl-frontend',
    livePreview: 'https://yellow-owl-registrationform.vercel.app/',
  },
  {
    name: 'BookReviewApp',
    Imgproject:
      'https://miro.medium.com/v2/resize:fit:828/format:webp/1*dHJX-7tgmhTLu5bHrwzOBg.png',
    description:
      'A Book Review System is a web application that allows users to browse, review, and rate books. It is built using React for the frontend, Tailwind CSS for styling, Express.js for the backend, and MongoDB as the database.',
    stack: ['React', 'TailwindCss', 'Node', 'Express', 'MongoDB',"JsonWebToken"],
    sourceCode: 'https://github.com/rohitchourey0809/git-hush-frontend',
    livePreview: 'https://git-hush-frontend.vercel.app/',
  },
  {
    name: 'MealDbClone',
    Imgproject:
      'https://github.com/rohitchourey0809/huemn-clone/assets/97465195/68d4acb1-6c7b-4aa3-9992-2fd02122c04e',
    description:
      'A food recipes app to show your favorite recipes according to categories, areas and recipe name. Made with React. ',
    stack: ['React', 'Tailwindcss', 'Javascript', 'ReduxToolkit'],
    sourceCode: 'https://github.com/rohitchourey0809/huemn-clone',
    livePreview: 'https://huemn-clone.vercel.app/',
  },
  {
    name: 'CalenderTodoApp',
    Imgproject:
      'https://miro.medium.com/v2/resize:fit:828/format:webp/1*NnYShDqQicLzQKodhGz2Cg.png',
    description:
      'Calendar weekly to-do app built on Next.js and Tailwind CSS provides users with an intuitive interface to organize their tasks efficiently. Users can schedule tasks for each day of the week, easily view their agenda, and mark tasks as complete.',
    stack: ['Nextjs', 'JavaScript', 'Tailwindcss'],
    sourceCode: 'https://github.com/rohitchourey0809/Calender-NextJs',
    livePreview: 'https://calender-next-js.vercel.app/',
  },
  {
    name: 'CameraApp',
    Imgproject:
      'https://miro.medium.com/v2/resize:fit:828/format:webp/1*pBdqnnzHFjPauabxuWXp5A.png',
    description:
      'CaptureCam is your go-to camera app for effortless photo and video capture. With intuitive controls and dynamic feature it designed to enhance your photography experience.',
    stack: ['Html', 'Css', 'JavaScript', 'React', 'Grid-layout'],
    sourceCode: 'https://github.com/rohitchourey0809/my-camera-app',
    livePreview: 'https://my-camera-app.vercel.app/',
  },
  // {
  //   name: 'MeanBuyClone',
  //   Imgproject: 'https://miro.medium.com/max/875/0*O0kYHdJYMf-xLEm7.png',
  //   description:
  //     'Meanbuy: Your ultimate online shopping destination. Explore a world of products, from electronics to fashion, all in one place. Shop with ease and discover unbeatable deals today',
  //   stack: ['Html', 'Css', 'JavaScript', 'React'],
  //   sourceCode: 'https://github.com/rohitchourey0809/Meanbuy',
  //   livePreview: 'https://bvaishnavi123.github.io/mean.github.io/',
  // },
  // {
  //   name: 'CredoBeautyClone',
  //   Imgproject: 'https://miro.medium.com/max/875/0*oebBk9nq6yzO0k1F.png',
  //   description:
  //     'CredoBeauty is the online shopping beauty product e-commerse website.',
  //   stack: ['Html', 'Css', 'JavaScript', 'React'],
  //   sourceCode: 'https://github.com/rohitchourey0809/CREADO_BEAUTY',
  //   livePreview: 'https://courageous-seahorse-df76dc.netlify.app/',
  // },
  {
    name: 'FoodappClone',
    Imgproject:
      'https://miro.medium.com/v2/resize:fit:828/format:webp/1*r0TMDe3UKEw59QpmjkZsIw.png',
    description:
      'Mini Food app which create and share delectable recipes effortlessly with our user-friendly app',
    stack: ['Html', 'Css', 'JavaScript'],
    sourceCode: 'https://github.com/rohitchourey0809/Foodapp',
    livePreview: 'https://foodapp-plum.vercel.app/',
  },

  // {
  //   name: 'ShoppingClone',
  //   Imgproject:
  //     'https://cdn-images-1.medium.com/max/1000/1*MKdmakTpuY_DULyVvDRGNw.png',
  //   description: 'Shopping is the online shopping product e-commerse website.',
  //   stack: ['Html', 'Css', 'JavaScript', 'React', 'Mongo', 'Json-server'],
  //   sourceCode: 'https://github.com/rohitchourey0809/FinalMernProject',
  //   livePreview: 'https://final-mern-app.netlify.app/',
  // },
  // {
  //   name: 'ReduxShoppingClone',
  //   Imgproject: 'https://miro.medium.com/max/875/1*1ITscgooEwl5NTZz4i6zsw.png',
  //   description: 'Shopping is the online shopping product e-commerse website.',
  //   stack: [
  //     'Html',
  //     'Css',
  //     'JavaScript',
  //     'Redux',
  //     'Mongo',
  //     'Json-server',
  //     'Chakra-UI',
  //   ],
  //   sourceCode: 'https://github.com/rohitchourey0809/Ecommerce-Redux-1',
  //   livePreview: 'https://ecommerce-redux-1.netlify.app/',
  // },
  // {
  //   name: 'GoogleTranlatorClone',
  //   Imgproject: 'https://miro.medium.com/max/1400/1*VBXT67n-oKSuhfHbMiPQcQ.png',
  //   description:
  //     "Google's Translator free service instantly translates words, phrases, and web pages between English and over 100 other languages.",
  //   stack: ['Html', 'Css', 'JavaScript'],
  //   sourceCode:
  //     'https://github.com/rohitchourey0809/Unit3_Git_Assign/tree/main/google%20translator',
  //   livePreview:
  //     'https://googletranslater-nuh1bv627-rohitchourey0809.vercel.app/',
  // },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'ReactJS',
  'NextJS',
  'ReduxToolKit',
  'Express',
  'MongoDB',
  'Material UI',
  'Chakra UI',
  'TailwindCss',
  'Node',
  'Git',
  'Github',
  'Json-server',
  'Angular',
  'Sql',
  'MySql',
  'Redux-saga',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'tech.rohitchourey@gmail.com',
}

export { header, aboutsummary, WorkExperience, home, projects, skills, contact }
