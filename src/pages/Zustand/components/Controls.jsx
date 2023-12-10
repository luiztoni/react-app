import { useBearStore } from './store'

export function Controls() {
    const increasePopulation = useBearStore((state) => state.increasePopulation)
    const removeAllBears = useBearStore((state) => state.removeAllBears)
    return (
    <>
        <button onClick={() => increasePopulation(3)}>one up</button>
        <button onClick={removeAllBears}>remove all</button>
    </>
    )
}