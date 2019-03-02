import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import { addSchemaLevelResolveFunction } from 'graphql-tools';

const Nav = () => (
    <NavStyles>
        <Link href="/signup">
            <a>SignUp</a>
        </Link>
        <Link href="/items">
            <a>Items</a>
        </Link>
        <Link href="/orders">
            <a>Orders</a>
        </Link>
        <Link href="/sell">
            <a>Sell</a>
        </Link>
        <Link href="/me">
            <a>Accounts</a>
        </Link>
    </NavStyles>
); 

export default Nav;

