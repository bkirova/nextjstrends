import Layout from '../components/layouts/about'

export default function About() {
  return (
    <Layout home>

      <div class="pt-20">
        <div class="min-w-full">
          <p class="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-800 tracking-tight mb-8">World-class IDE integration.</p>
          <br/>
          <div class="text-2xl font-bold text-gray-500 tracking-wide space-y-6 mb-6">Worried about remembering all of these class <span class="font-extrabold text-purple-400">names</span>? The Tailwind CSS IntelliSense extension for VS Code has you covered.</div>
          <div class="text-xl text-gray-500 tracking-wide space-y-6 mb-6">Similar to the way that you can use the spacing utility classes, you can also use the divider classes to add dividers between your elements instead of using borders. Worried about remembering all of <span class="font-extrabold text-purple-400">these</span> class names? The Tailwind CSS IntelliSense extension for <span class="font-extrabold text-purple-400">VS Code</span> has you covered.</div>
          
          <div class="text-xl text-gray-500 tracking-wide space-y-6 mb-6">
            Not into component frameworks and like to keep it old school? Use Tailwind's @apply directive to extract repeated utility patterns into custom CSS classes just by copying and pasting the list of class names. Don’t want to be one of those websites that blinds people when they open it on their phone at 2am? Enable dark mode in your configuration file then throw dark: in front of any color utility to apply it when dark mode is active. Works for background colors, text colors, border colors, and even gradients.
          </div>
          <br/>
          <img src="https://miro.medium.com/max/3780/0*7oOoMUBbe9JW2ogM.png"></img>


          <div class="text-2xl font-bold text-gray-500 tracking-wide space-y-6 mb-6">Worried about remembering all of these class <span class="font-extrabold text-purple-400">names</span>? The Tailwind CSS IntelliSense extension for VS Code has you covered.</div>

          <div class="text-xl text-gray-500 tracking-wide space-y-6 mb-6">
            Not into component frameworks and like to keep it old school? Use Tailwind's @apply directive to extract repeated utility patterns into custom CSS classes just by copying and pasting the list of class names. Don’t want to be one of those websites that blinds people when they open it on their phone at 2am? Enable dark mode in your configuration file then throw dark: in front of any color utility to apply it when dark mode is active. Works for background colors, text colors, border colors, and even gradients.
          </div>
        </div>
      </div>

    </Layout>
  )
}