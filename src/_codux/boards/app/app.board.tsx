import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App key={null} />,
    environmentProps: {
        windowWidth: 1210,
        canvasWidth: 1254,
        windowHeight: 830,
        canvasHeight: 939,
    },
});
