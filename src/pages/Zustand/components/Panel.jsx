import {useBearStore} from './store'
export function Panel() {
    const bears = useBearStore((state) => state.bears)
    return (
        <>
            <p>State: </p>
            <h1>{bears} around here ...</h1>
        </>
    );
}

