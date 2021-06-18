import Card from './card'

export default function TopList(props) {
    return (
    <div class="pt-20">
          
        <div class="min-w-full">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                {props.items.map(item => (
                    <Card item={item}></Card>
                ))}
            </div>
        </div>
        <br/><br/>

     </div>)
}