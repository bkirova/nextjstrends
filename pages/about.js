import Layout from '../components/layouts/about'

export default function About() {
  return (
    <Layout home>
      <div className="pt-20">
        <div className="min-w-full">
          <p className="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-800 tracking-tight mb-8">World-className IDE integration.</p>
          <br/>
          <div className="text-2xl font-bold text-gray-500 tracking-wide space-y-6 mb-6">Worried about remembering all of these className <span className="font-extrabold text-purple-400">names</span>? The Tailwind CSS IntelliSense extension for VS Code has you covered.</div>
          <div className="text-xl text-gray-500 tracking-wide space-y-6 mb-6">Similar to the way that you can use the spacing utility classes, you can also use the divider classes to add dividers between your elements instead of using borders. Worried about remembering all of <span className="font-extrabold text-purple-400">these</span> className names? The Tailwind CSS IntelliSense extension for <span className="font-extrabold text-purple-400">VS Code</span> has you covered.</div>
          
          <div className="text-xl text-gray-500 tracking-wide space-y-6 mb-6">
            Not into component frameworks and like to keep it old school? Use Tailwind's @apply directive to extract repeated utility patterns into custom CSS classes just by copying and pasting the list of className names. Don’t want to be one of those websites that blinds people when they open it on their phone at 2am? Enable dark mode in your configuration file then throw dark: in front of any color utility to apply it when dark mode is active. Works for background colors, text colors, border colors, and even gradients.
          </div>
          <br/>
          <img src="https://miro.medium.com/max/3780/0*7oOoMUBbe9JW2ogM.png"></img>


          <div className="text-2xl font-bold text-gray-500 tracking-wide space-y-6 mb-6">Worried about remembering all of these className <span className="font-extrabold text-purple-400">names</span>? The Tailwind CSS IntelliSense extension for VS Code has you covered.</div>

          <div className="text-xl text-gray-500 tracking-wide space-y-6 mb-6">
            Not into component frameworks and like to keep it old school? Use Tailwind's @apply directive to extract repeated utility patterns into custom CSS classes just by copying and pasting the list of className names. Don’t want to be one of those websites that blinds people when they open it on their phone at 2am? Enable dark mode in your configuration file then throw dark: in front of any color utility to apply it when dark mode is active. Works for background colors, text colors, border colors, and even gradients.
          </div>

          <br/><br/><br/><br/><br/>
        </div>
      </div>
    </Layout>
  )
}