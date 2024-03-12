<script>
  export let skill;
</script>
<div
class="p-2  sm:p-6 md:p-8 flex flex-col 
gap-2 rounded-full border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200 ">
  <div class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl 
  -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200  ">
  {#if skill.icon} 
  <i class={skill.icon}/>
  {:else if skill.img}
  <img src={skill.img} alt={skill.name} class="max-h-[10vh]  w-100 z-[5] rounded-full" />
  {/if}
</div>    
  <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">{skill.name}</h3>
  <slot/>



</div>