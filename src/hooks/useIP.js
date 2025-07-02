import { useState, useEffect } from "react";

const useIP = () => {
    const [ip, setIP] = useState();

    useEffect(() => {
        fetch("https://api.ipify.org?format=json")
            .then((response) => response.json())
            .then((data) => {
                setIP(data.ip);
            })
            .catch((error) => {
                console.error("Error fetching IP:", error);
            });
    }, []);

    return ip;
};

export default useIP;
