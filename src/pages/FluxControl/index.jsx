import React from "react";

export function FluxControl() {
    const itens = [
        {
            id: '1',
            text: 'Object 1'
        },
        {
            id: '2',
            text: 'Object 2'
        },
    ];

    return (
        <>
            <div className="test">
                <section>
                    <p>Itens</p>
                    {itens.map((item, i) => {
                        return (<>
                            <p>Curent Object:</p>
                            <div key={i}>{item.text}</div>
                        </>)
                    }
                    )}
                    {itens.length > 0 &&
                        <p>Size: {itens.length}</p>
                    }
                </section>
            </div>
        </>
    );
}