import { Link } from "react-router";

const ListParents = ({ item }: any) => {

    return (
        <div>
            <h1> {item.name} </h1>
            <ListChildren item={item} />
            <br />
        </div>
    )
}

const ListChildren = ({ item }: any) => {
    return item.submenu.map((submenu: any) => (
        <Link key={submenu.name} to={submenu.path} state={{ name: submenu.name }}>
            <h2> {submenu.name} </h2>
        </Link>
    ));
};

export default ListParents;