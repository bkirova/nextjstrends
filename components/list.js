export default function Card(props) {

    return (
        <section class="text-gray-600 body-font overflow-hidden">
            {props.items.map(item => (
                <div class="divide-y-2 divide-gray-100">
                    <div class="py-8 flex flex-wrap md:flex-nowrap">
                        <div class="md:flex-grow">
                            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{item.title}</h2>
                            <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                            <p class="leading-relaxed">{item.text}</p>
                            <a class="text-indigo-500 inline-flex items-center mt-4">Learn More
                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </section>
      );
}