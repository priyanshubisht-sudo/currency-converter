import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(
            `https://v6.exchangerate-api.com/v6/70d79f4bc146bba4ed0378b9/latest/${currency}`
        )
            .then((res) => res.json())
            .then((res) => {
                setData(res.conversion_rates);
            })
            .catch((error) => {
                console.error("Error fetching currency data:", error);
                setData({});
            });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;