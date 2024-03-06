import { useEffect, useState } from "react";

const useMenu = () => {

    const [menu, setManu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                setManu(data)
                setLoading(false)
            })
    }, [])

    return [menu, loading]
};

export default useMenu;