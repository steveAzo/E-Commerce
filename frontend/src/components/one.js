function Item({ name, isPacked }) {
    let itemContent = name
    if (isPacked) {
        itemContent = name + " ✔"
    }
    return (
        <li className="item">
            {itemContent}
        </li>
    )
}

export default function PackingList() {
    return (
        <section>
            <h1>Stephen Ride's Packing List</h1>
            <ul>
                <Item
                    name='Space suit'
                    isPacked={true}
                />
                <Item 
                    isPacked={true} 
                    name="Helmet with a golden leaf" 
                />
                <Item 
                    isPacked={false} 
                    name="Photo of Tam" 
                />
            </ul>
        </section>
    )
}