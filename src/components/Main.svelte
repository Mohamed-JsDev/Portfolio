<script>
  import Skill from "./Skill.svelte";
import Step from"./Step.svelte"
let steps=[
    {name:'Shopping-App ' , icon:'fa-solid fa-cart-shopping' ,src:'https://shopping-l5ysq9yap-mohameds-projects-e667b267.vercel.app/'},
    {name:'Dashboard ' , icon:'fa-solid fa-list-check' ,src:'https://github.com/Mohamed-JsDev/Next-Dashboard'},
    {name:'Memory-game ' , icon:'fa-solid fa-puzzle-piece' ,src:'https://memory-game-two-eta.vercel.app/'},
    {name:'Quiz-App ' , icon:'fa-solid fa-file-circle-question' ,src:'https://quiz-app-mauve-zeta.vercel.app/'},
    {name:'Slide-Animation' , icon:'fa-solid fa-feather-pointed' ,src:'https://animated-slider-sepia.vercel.app/'},
    {name:'Landing-Page' , icon:'fa-regular fa-newspaper' ,src:'https://bendi.vercel.app/'},
];
let skills=[
  {name:'html5',icon:'fa-brands fa-html5 '},
  {name:'css3',icon:'fa-brands fa-css3 '},
  {name:'java script',icon:'fa-brands fa-js'},
  {name:'react.js',icon:'fa-brands fa-react'},
  {name:'next.js',img:'images/next-js-logo.png'},
  {name:' Svelte',img:'images/Svelte.logo.png'},
  {name:'bootstrap',icon:'fa-brands fa-bootstrap'},
  {name:'scss',icon:'fa-brands fa-sass'},
  {name:'tailwind css',img:'images/tailwind.png'},
  {name:'git ',icon:'fa-brands fa-git'},
  {name:' github',icon:'fa-brands fa-github'},
  {name:'wordpress',icon:'fa-brands fa-wordpress'},
]
var  a = 5;
let benefits = [
        {
            metric: "10x",
            name: "a self taught developer",
            description:
                "I taught myself to code using free online resources and absolutely fell in love with the creativity and problem solving that is involved in developing and engineering innovative new online experiences. Starting of with JavaScript, HTML & CSS and evolving my knowledge base to include JavaScript frameworks, backend programming, design, cloud services and much much more.",
        },
        {
            name: "a product design & UX finatic",
            description:
                "Carefully crafting and designing amazing user experiences allows me to express and experiment with every morsel of creativity I have. I love the challenge of learning new design concepts and enabling users with amazing online experiences.",
        },
        {
            name: "an excellent communicator",
            description:
                "Communication is key and it's a paramount value of mine. I believe in transparency and constructive communication above all else. This helps me develop deep relationships and ensures my effectiveness and productivity in any work space with any team.",
        },
    ];

</script>

<main class="flex flex-col flex-1 p-4">
  
  <section  id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
    <div class="flex flex-col lg-justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl mt-5">
        Hi! I'm <span class="poppins text-violet-400 ">Mohamed</span> Alshafe  <br>  Front-end
        <span class="poppins text-violet-400 ">Developer</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        My <span class="poppins text-violet-400 ">Favorite tech</span> includes javascript(
          NEXT.JS , REACT.JS) , TailwindCSS ,
      </p>
      <a  class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins
      relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer "
      href="https://wa.me/01032721974" 
      target="_blank"
      >
        <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20
        group-hover:translate-x-full z-0 duration-200"/>
        <h4 class="relative z-9 "> Get in Touch &rarr;</h4>
      </a>
    </div>
    <div class="relative flex shadow-2xl grid place-items-center -mt-5">
      <img src={"images/profile3.png"} alt="profile" 
        class="object-cover  z-[2] max-h-[80vh]  w-100 rounded-full border p-1 border-white"/>
      </div>
  </section>
  <section id="Skills" class="py-20 lg:py-32  flex  flex-col gap-24" >
    <div class="flex flex-col gap-4 text-center mb-5">
      <h6 class="font-semibold text-xl sm:text-2xl md:text-3xl ">
          The   
          <span class="poppins text-violet-400 font-semibold text-3xl sm:text-4xl md:text-5xl ">  technologies </span>
          <br/>
          I have acquired in the technology field 
      </h6> 
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10 ">
      {#each skills as skill  }
      
      <Skill skill={skill}>
      </Skill>
      {/each}
    </div>    
  </section>
 
  <section id="about" class="py-20 pt-10 lg:pt-16 lg:py32 flex flex-col 
  gap-16 sm:gap-20 md:gap-24 relative "
  >
    <div   class=" flex flex-col gap-2 text-center py-4 relative before:absolute  before:top-0
    before:left-0 before:w-2/3 before:h-1.5  before:bg-violet-700  after:absolute  after:bottom-0
    after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 "  
    >
    <h6 class="text-lg sm:text-xl md:text-2xl ">Want to know more?</h6>
    <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl ">
      A bit <span class="poppins text-violet-400 ">about</span>me. 
    </h3>
  </div>
  <p class="mx-auto poppins font-semibold text-lg sm:text-2xl md:text-2xl ">I am ...</p>
  <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
    {#each benefits as benefit , index}
      <div class="flex gap-6 sm:gap-8 ">
        <p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 
        font-semibold ">
          0{index+1}
      </p>
      <div class="flex flex-col gap-6 sm:gap-8 ">
        <h3 class="text-2xl sm:text-3xl md:text-5xl ">
          {benefit.name}
        </h3>
        <p>{benefit.description}</p>
      </div>
      </div>
    {/each}
  </div>
  <h5 class="text-2xl sm:text-3xl font-semibold text-center poppins ">The <span class="text-violet-400 poppins ">Complete</span> Package</h5>
  <div class="flex flex-col overflow-x-scroll  gap-10 max-w-[800px] mx-auto w-full ">
    <table class="bg-white text-slate-700 rounded text-center ">
      <thead class="border-b border-solid border-slate-200 ">
        <tr class="">
          <th/>
          <th class="whitespace-nowrap p-2 px-4">Candidate #1 </th>
          <th class="whitespace-nowrap p-2 px-4">Candidate #2 </th>
          <th class="whitespace-nowrap p-2 px-4">Candidate #3 </th>
          <th class="whitespace-nowrap bg-violet-700 text-white  p-4 px-8">Me </th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b border-solid border-slate-200 ">
          <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold
          text-sm whitespace-nowrap ">Dedication </td>
          <td><i class="fa-solid fa-xmark text-slate-500 "></i></td>
          <td><i class="fa-solid fa-check text-slate-500 "></i></td>
          <td><i class="fa-solid fa-check text-slate-500 "></i></td>
          <td><i class="fa-solid fa-check text-green-500 "></i></td>
        </tr>
        <tr class="border-b border-solid border-slate-200 ">
          <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold
          text-sm  whitespace-nowrap">Critical Thought </td>
          <td><i class="fa-solid fa-check text-slate-500 "></i></td>
          <td><i class="fa-solid fa-xmark text-slate-500 "></i></td>
          <td><i class="fa-solid fa-xmark text-slate-500 "></i></td>
          <td><i class="fa-solid fa-check text-green-500 "></i></td>
        </tr>
        <tr class="border-b border-solid border-slate-200 ">
          <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold
          text-sm  whitespace-nowrap ">Interpersonal Skills </td>
          <td><i class="fa-solid fa-xmark text-slate-500 "></i></td>
          <td><i class="fa-solid fa-check text-slate-500 "></i></td>
          <td><i class="fa-solid fa-check text-slate-500 "></i></td>
          <td><i class="fa-solid fa-check text-green-500 "></i></td>
        </tr>
        <tr class="border-b border-solid border-slate-200 ">
          <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold
          text-sm  whitespace-nowrap">programming Ability </td>
          <td><i class="fa-solid fa-check text-slate-500 "></i></td>
          <td><i class="fa-solid fa-check text-slate-500 "></i></td>
          <td><i class="fa-solid fa-xmark text-slate-500 "></i></td>
          <td><i class="fa-solid fa-check text-green-500 "></i></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
    <p > scroll to see more &rarr;</p>
  </div>
  <p class="mx-auto "> So why not invest?</p>
</section>
<section id="projects" class="py-20 lg:py-32  flex  flex-col gap-24">
  <div class="flex flex-col gap-2 text-center">
    <h6 class="text-lg sm:text-xl md:text-2xl">
        a few of my creative endeavors 
    </h6> 
    <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl ">
      Curious to <span class="poppins text-violet-400  ">see</span> my work?
    </h3>
  </div>
  <!-- <a href="/"
    class="mx-auto px-4 py-2 rounded-md border
    border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0
    -mt-10 hover:border-violet-700 duration-200 ">
      <i class="fa-regular fa-circle-play"></i>
      <p> Watch the video</p>
    </a> -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10 ">
      <Step step={steps[0]}>
        <p>
          Shopping-App is a Shop store created with 
          <strong class="text-violet-400">React.js Redux Bootstrap </strong>
          It allows you to shop and view all product details. There is a shopping cart to see all the products you have purchased, and the design is responsive to all screens.
        </p>
      </Step>
      <Step step={steps[1]}>
        <p>
          Dashboard is a Full Stack 
          <strong class="text-violet-400">Next.js  + Mongodb + Mongoose + Bootstrap </strong>
          you can control in  all  products delete , edit , return  and show all  details in E-commerce
        </p>
      </Step>
      <Step step={steps[2]}>
        <p>
          memory-game A game designed with  
          <strong class="text-violet-400">JavaScript, CSS, and HTML. </strong>
          It depends on memory, memorizing similar images, and counts the number of errors
          . Responsive design on all pages.
        </p>
      </Step>
      <Step step={steps[3]}>
        <p>
          It is a quiz that contains questions about ReactJS, designed with  
          <strong class="text-violet-400">JavaScript, CSS, and HTML. </strong>
          An exciting, interesting, and difficult quiz.    </p>
      </Step>
      <Step step={steps[4]}>
        <p>
          User interface with professional animation and beautiful design   
          Created by <strong class="text-violet-400"> HTML,CSS  </strong>
        </p>
      </Step>
      <Step step={steps[5]}>
        <p>
          Bendi : landing-apge with professional website and Responsive design   
          Created by <strong class="text-violet-400"> HTML,CSS  </strong>Simple Design & clean code
        </p>
      </Step>
    </div>
    <a  class="blueShadow flex flex-col gap-2 text-center  lg:mr-auto lg:mx-auto text-base sm:text-lg md:text-xl poppins
  relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer "
  href="https://github.com/Mohamed-JsDev"
  target="_blank"
  >
    <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20
    group-hover:translate-x-full z-0 duration-200"/>
    <h4 class="relative z-9 "> See More &rarr;</h4>
  </a>
  </section>
  

</main>