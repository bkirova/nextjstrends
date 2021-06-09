import Layout from '../components/layout'
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Blog({ allPostsData }) {
  return (
    <Layout home>
      <section>
          {allPostsData.map(({ id, date, title }) => (
            <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
              <div class="md:flex-shrink-0">
                <img class="h-48 w-full object-cover md:h-full md:w-48" src="/images/profile.jpg" alt="Man looking at item at a store"/>
              </div>
              <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                <a href={`/posts/${id}`} class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{title}</a>
                <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                <Date dateString={date} />
              </div>
            </div>
            </div>
          ))}
      </section>
    </Layout>
  )
}