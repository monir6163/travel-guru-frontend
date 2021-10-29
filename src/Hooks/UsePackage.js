import { useEffect } from 'react';
import { useState } from 'react';

const UsePackage = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allpackages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return [packages]
};

export default UsePackage;