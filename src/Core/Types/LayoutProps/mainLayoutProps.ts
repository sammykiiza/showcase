import { ChildrenProps } from "./childrenProps"
import { SectionProps } from "./sectionProps"

/**
 * @interface
 * @description The main layout props' interface. Only one of the properties required .i.e. component. 
 * This is the name of the component being used at the moment and it is where the word 'view will be appended.
 * The other properties are optional and they are used to show which section of the system is active at the moment e.g Road Network and
 * the content to display in the main area of the system.
 */
export interface MainLayoutProps {
    children?: ChildrenProps['children'],
    section?: SectionProps['section'],
    component: string,
}