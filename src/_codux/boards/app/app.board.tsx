import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App key={null} />,
    environmentProps: {
        windowWidth: 1592,
        canvasWidth: 1962,
        windowHeight: 768,
        canvasHeight: 1251,
    },
});
