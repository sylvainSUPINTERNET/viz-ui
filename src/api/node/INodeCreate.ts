import { INode } from "./INode";

/**
 * Parent mainNode
 * secondaryNodes, corresponding to children nodes with relation
 */
export interface INodeCreate {
    mainNode: INode; 
    secondaryNodes: INode[];
}