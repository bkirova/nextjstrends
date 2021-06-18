
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
            <TopList items={items}></TopList>
        </Layout>
    ) 
}