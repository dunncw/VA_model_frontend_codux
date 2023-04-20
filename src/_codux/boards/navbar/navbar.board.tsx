import { createBoard } from '@wixc3/react-board';
import Navbar from '../../../components/Navbar/Navbar';

export default createBoard({
    name: 'Navbar',
    Board: () => <Navbar />
});
