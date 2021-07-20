import Layout from '../components/layouts/Standard'

export default function About() {
  return (
    <Layout>        
      <div className="pt-20">
        <div className="px-3 mx-auto max-w-7xl">
          <p className="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-800 tracking-tight mb-8">What is AI Stories?</p>
          <br/>
          {/* <span className="font-extrabold text-purple-400">names</span> */}
          <div className="text-2xl font-bold text-gray-500 tracking-wide space-y-6 mb-6">The images and the text is genrated completely by <span className="font-extrabold text-purple-400">ML models</span>. The models are trained on public domain data adn the produced content is for fun usage only.</div>
          <div className="text-xl text-gray-500 tracking-wide space-y-6 mb-6">
            A machine learning model is a <span className="font-extrabold text-purple-400">software</span> that learns how to do certain tasks based on big amount of data. 
            It is very similar to how humans <span className="font-extrabold text-purple-400">learn</span> new things.
            We get some input(read a lesson, watch tutorial, your mum tells you something), then you try to use the new knowlege, if you do it right then you <span className="font-extrabold text-purple-400">memorize</span> it, if not you mark it as a mistake and try again.
          </div>
          <div className="text-xl text-gray-500 tracking-wide space-y-6 mb-6">
            This process goes on and on untill you are finally sure that you've learned the new <span className="font-extrabold text-purple-400">skill</span>.
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