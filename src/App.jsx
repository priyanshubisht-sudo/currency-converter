import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);

    const options = Object.keys(currencyInfo);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    };

    const convert = () => {
        if (!amount || !currencyInfo[to]) {
            setConvertedAmount(0);
            return;
        }

        setConvertedAmount(amount * currencyInfo[to]);
    };

    return (
    <div
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat px-4"
        style={{
            backgroundImage:
                "url('https://images.pexels.com/photos/31340902/pexels-photo-31340902.jpeg')",
        }}
    >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-center justify-center">
            <div className="w-full max-w-md">

                <div className="rounded-2xl border border-white/30 bg-white/20 p-6 shadow-2xl backdrop-blur-xl">

                    {/* Heading */}
                    <div className="mb-6 text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-white">
                            Currency Converter
                        </h1>

                        <p className="mt-2 text-sm text-white/70">
                            Convert currencies quickly and easily
                        </p>
                    </div>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        {/* From */}
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) =>
                                    setFrom(currency)
                                }
                                onAmountChange={(amount) =>
                                    setAmount(amount)
                                }
                                selectCurrency={from}
                            />
                        </div>

                        {/* Swap */}
                        <div className="relative h-3">
                            <button
                                type="button"
                                className="absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-blue-700 active:scale-95"
                                onClick={swap}
                            >
                                Swap
                            </button>
                        </div>

                        {/* To */}
                        <div className="w-full mt-1 mb-5">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) =>
                                    setTo(currency)
                                }
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>

                        {/* Convert */}
                        <button
                            type="submit"
                            className="mt-2 w-full rounded-xl bg-blue-600 px-4 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-900/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl active:translate-y-0"
                        >
                            Convert {from.toUpperCase()} to{" "}
                            {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
);
}

export default App;