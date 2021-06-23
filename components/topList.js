import Card from './card'

export default function TopList(props) {
    return (
    <div className="">
          
        <div className="min-w-full">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                {props.items.map(item => (
                    <Card item={item}></Card>
                ))}
            </div>
        </div>
        <br/><br/>

     </div>)
}