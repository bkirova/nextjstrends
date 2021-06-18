
import Layout from '../components/layouts/home'
import TopList from '../components/topList'

let items = [
    {category: 'TWITTER', title: 'DogeCoin to the moon', text: 'Dogecoin is a cryptocurrency created by software engineers Billy Markus and Jackson Palmer, who decided to create a payment system as a joke.'},
    {category: 'MEDIUM', title: 'Next.js the next js framework', text: 'Next.js is an open-source React front-end development web framework created by Vercel that enables functionality such as server-side rendering.'},
    {category: 'MEDIUM', title: 'DogeCoin', text: 'Dogecoin is a cryptocurrency created by software engineers Billy Markus and Jackson Palmer, who decided to create a payment system as a joke. Dogecoin is a cryptocurrency created by software engineers Billy Markus and Jackson Palmer, who decided to create a payment system as a joke.Dogecoin is a cryptocurrency created by software engineers Billy Markus and Jackson Palmer, who decided to create a payment system as a joke.'},
    {category: 'MEDIUM', title: 'App Development', text: 'Dogecoin is a cryptocurrency created by software engineers Billy Markus and Jackson Palmer, who decided to create a payment system as a joke.'},
    {category: 'MEDIUM', title: 'DogeCoin', text: 'Dogecoin is a cryptocurrency created by software engineers Billy Markus and Jackson Palmer, who decided to create a payment system as a joke.'},
    {category: 'MEDIUM', title: 'DogeCoin', text: 'Dogecoin is a cryptocurrency created by software engineers Billy Markus and Jackson Palmer, who decided to create a payment system as a joke.'},
    {category: 'MEDIUM', title: 'DogeCoin', text: 'Dogecoin is a cryptocurrency created by software engineers Billy Markus and Jackson Palmer, who decided to create a payment system as a joke.'},
    {category: 'MEDIUM', title: 'DogeCoin', text: 'Dogecoin is a cryptocurrency created by software engineers Billy Markus and Jackson Palmer, who decided to create a payment system as a joke.'},
    {category: 'MEDIUM', title: 'DogeCoin', text: 'Dogecoin is a cryptocurrency created by software engineers Billy Markus and Jackson Palmer, who decided to create a payment system as a joke.'},
  ];

export default function Top() {
    return (
        <Layout>
            <div class="text-2xl font-bold text-gray-500 tracking-wide space-y-6 mb-6 mt-20">Worried about remembering all of these class <span class="font-extrabold text-purple-400">names</span>? The Tailwind CSS IntelliSense extension for VS Code has you covered.</div>

            <TopList items={items}></TopList>
        </Layout>
    ) 
}