import { useState } from "react";

// https://codesandbox.io/p/sandbox/exciting-elbakyan-wmdfgr?file=%2Fsrc%2FApp.js%3A23%2C9-23%2C53

const ListParents = ({ item }: any) => {
    const [itemOpen, setItemOpen] = useState(false);

    return (
        <div onClick={() => setItemOpen(!itemOpen)}>
            <h2>
                <span>{item.name}</span>
            </h2>
            {itemOpen && <ListChildren item={item} />}
        </div>
    )
}

const ListChildren = ({ item }: any) => {
    return item.submenu.map((submenu: any) => (
        <li key={submenu.name}>
            <span>{submenu.name}</span>
        </li>
    ));
};

export default ListParents;