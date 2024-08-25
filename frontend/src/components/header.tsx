import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const HeaderTitle = ({ children }: Props) => {
    return (
        <header className="box has-text-centered">
            <h1 className="title is-uppercase">{children}</h1>
        </header>
    )
}