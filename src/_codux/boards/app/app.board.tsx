import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App key={null} />,
    environmentProps: {
        windowWidth: 1920,
        canvasWidth: 1794,
        windowHeight: 1080,
        canvasHeight: 1251,
    },
});
