import { useEffect, useState } from "react";
import { show } from "./webapi";

export function FetchApi(props) {
    let id = props.params.id;
        
    useEffect(() => {
        const request = async () => {
            getData(id);
        };
        request();
    }, [id]);

    const [cities, setCities] = useState([]);
    const [ddd, setDdd] = useState(71);
    const [currentState, setCurrentState] = useState('');
    const [product, setProduct] = useState({name:'Smart Phone', year:2014});

    const handle = (event) => {
        const { name, value } = event.target;
        setProduct({
          ...product,
          [name]: value,
        });
    };

    const getData = async (id) => {
        let data = await show('https://brasilapi.com.br/api/ddd/v1', id);
        setCities(data.cities);
        setCurrentState(data.state);
        setDdd(id);
    };

    const findCities = (event) => {
        event.preventDefault();
        getData(ddd);
    }

    return (
        <>
            <div className="test">
                <section>
                    <p>{currentState} - {ddd}</p>
                    <p>cities</p>
                    {cities.map((c, i) => {
                        return (
                            <p key={i}>{c}</p>
                        )
                    }
                    )}
                    {cities.length > 0 &&
                        <p>Size: {cities.length}</p>
                    }
                </section>
                <form> 
                    <p>Form</p>
                    <p>{product.name}, {product.year}</p>
                    <input type="text" name="name" value={product.name} onChange={handle}/>
                    <input type="text" name="year" value={product.year} onChange={handle}/>
                    <input type="number" name="ddd" value={ddd} onChange={e => setDdd(e.target.value)}/>
                    <br />
                    <button onClick={findCities}>Find cities</button>
                </form>
            </div>
        </>
    );

}