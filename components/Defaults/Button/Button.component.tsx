//Types
import { ReactElement } from "react";
import {BUTTON_TYPES} from "@app-types/enum"

//Interface for Props
interface ButtonProps {
    children: string,
    type?: BUTTON_TYPES
}

export default function Button({children, type = BUTTON_TYPES.CONTAINED}:ButtonProps):ReactElement {
    return <div className={`flex items-center justify-center rounded px-6 py-3 ${type === BUTTON_TYPES.CONTAINED ? 'bg-light-background' : 'bg-transparent border border-light-background' } cursor-pointer active:opacity-80`}>
        <p className={`font-montserrat font-bold ${type === BUTTON_TYPES.CONTAINED ? 'text-white' : 'text-light-background'} select-none`}>{children}</p>
    </div>
}