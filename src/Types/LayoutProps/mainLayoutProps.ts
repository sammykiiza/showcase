import { ChildrenProps } from "./childrenProps"
import { SectionProps } from "./sectionProps"

export interface MainLayoutProps {
    children?: ChildrenProps['children'],
    section?: SectionProps['section'],
    component: string,
}