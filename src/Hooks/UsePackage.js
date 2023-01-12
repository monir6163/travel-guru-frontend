import { useEffect, useState } from "react";

const UsePackage = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch(
            "https://travel-guru-backend-production.up.railway.app/allpackages"
        )
            .then((res) => res.json())
            .then((data) => setPackages(data));
    }, []);
    return [packages];
};

export default UsePackage;
