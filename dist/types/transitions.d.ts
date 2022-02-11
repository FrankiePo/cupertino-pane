import { CupertinoPane } from './cupertino-pane';
import { CupertinoSettings } from './models';
import { Breakpoints } from './breakpoints';
import { ZStack } from './z-stack';
export declare class Transitions {
    private instance;
    private settings;
    private breakpoints;
    private zStack;
    isPaneHidden: boolean;
    constructor(instance: CupertinoPane, settings: CupertinoSettings, breakpoints: Breakpoints, zStack: ZStack);
    /***********************************
    * Transitions handler
    */
    doTransition(params?: any): Promise<true>;
    buildTransitionValue(bounce: boolean): string;
}
