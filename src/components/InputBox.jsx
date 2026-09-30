import React, { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId();

    return (
        <div
            className={`flex items-center gap-4 rounded-xl border border-gray-200/80 bg-white p-4 shadow-sm transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500/30 ${className}`}
        >
            {/* Amount */}
            <div className="w-1/2">
                <label
                    htmlFor={amountInputId}
                    className="mb-2 block text-xs font-medium uppercase tracking-wider text-gray-400"
                >
                    {label}
                </label>

                <input
                    id={amountInputId}
                    className="w-full bg-transparent text-lg font-semibold text-gray-800 outline-none placeholder:text-gray-300"
                    type="number"
                    placeholder="0.00"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) =>
                        onAmountChange &&
                        onAmountChange(Number(e.target.value))
                    }
                />
            </div>

            {/* Currency */}
            <div className="flex w-1/2 flex-wrap justify-end text-right">
                <p className="mb-2 w-full text-xs font-medium uppercase tracking-wider text-gray-400">
                    Currency
                </p>

                <select
                    className="cursor-pointer rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-700 outline-none transition hover:bg-gray-100 focus:ring-2 focus:ring-blue-500/30"
                    value={selectCurrency}
                    onChange={(e) =>
                        onCurrencyChange &&
                        onCurrencyChange(e.target.value)
                    }
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;