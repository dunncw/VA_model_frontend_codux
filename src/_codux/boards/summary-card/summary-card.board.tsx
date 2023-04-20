import { createBoard } from '@wixc3/react-board';
import SummaryCard from '../../../components/SummaryCard/SummaryCard';

export default createBoard({
    name: 'SummaryCard',
    Board: () => <SummaryCard />
});
