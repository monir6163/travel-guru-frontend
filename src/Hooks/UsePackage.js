import { useEffect } from 'react';
import { useState } from 'react';

const UsePackage = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return [packages]
};

export default UsePackage;