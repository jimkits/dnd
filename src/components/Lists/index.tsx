import { useState } from "react";

const ListParents = ({ item }: any) => {
    const [itemOpen, setItemOpen] = useState(false);

    return (
        <div onClick={() => setItemOpen(!itemOpen)}>
            <h1> {item.name} </h1>
            {itemOpen && <ListChildren item={item} />}
            <br />
        </div>
    )
}

const ListChildren = ({ item }: any) => {
    return item.submenu.map((submenu: any) => (
        <h2 key={submenu.name}> {submenu.name} </h2>
    ));
};

export default ListParents;