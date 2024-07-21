import { FunctionComponent } from 'react';
import type { Engine } from './typings';
export interface ReactEngineProps {
    engine: Engine;
    pck: string;
    wasm?: string;
    width?: number;
    height?: number;
    params?: any;
    resize?: boolean;
    onExitFunc?: Function;
}
declare const ReactCanvas: FunctionComponent<ReactEngineProps>;
export default ReactCanvas;
