import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App key={null} />,
    environmentProps: {
        windowWidth: 1020,
        canvasWidth: 1400,
        windowHeight: 839,
        canvasHeight: 939,
    },
});
