import React from "react";
import { Input } from "../Input";
import { RSSelect } from "../Select";
import { useState } from "react";

export function TableRow() {
    const [fromNumber, setFromNumber] = useState();
    const [toNumber, setToNumber] = useState();
    const [rabet, setRabet] = useState();
    const [moragheb, setMoragheb] = useState();
    const [shomaresh, setShomaresh] = useState();
    const [tatbigh, setTatbigh] = useState();
    const [sarparast, setSarparast] = useState();

    const data ={
        fromNumber,
        toNumber,
        rabet,
        moragheb,
        shomaresh,
        tatbigh,
        sarparast
    }

    return (
        <tr>
            <td className="radif">1</td>
            <td className="mahal-azmoon-1">اتاق 1</td>
            <td className="mahal-azmoon-2">طبقه اول</td>

            <td className="parent-input-from-number">
                <Input
                    type="number"
                    onChange={(e) => {
                        setFromNumber(e.target.value);
                    }}
                />
            </td>

            <td className="parent-input-to-number">
                <Input
                    type="number"
                    onChange={(e) => {
                        setToNumber(e.target.value);
                    }}
                />
            </td>

            <td className="tedad">20</td>

            <td className="parent-select-rabet">
                <RSSelect
                    options={[
                        { value: "0", label: "امین حاجی زاده" },
                        { value: "1", label: "..." },
                    ]}
                    onChange={(e) => {
                        setRabet(e.value);
                    }}
                    defaultValue="امین حاجی زاده"
                    placeholder="امین حاجی زاده"
                />
            </td>

            <td  className="parent-select-moragheb">
                <RSSelect
                    options={[
                        { value: "0", label: "امین حاجی زاده" },
                        { value: "1", label: "..." },
                    ]}
                    onChange={(e) => {
                        setMoragheb(e.value);
                    }}
                    defaultValue="امین حاجی زاده"
                    placeholder="امین حاجی زاده"
                />
            </td>

            <td className="parent-select-shomaresh">
                <RSSelect
                    options={[
                        { value: "0", label: "امین حاجی زاده" },
                        { value: "1", label: "..." },
                    ]}
                    onChange={(e) => {
                        setShomaresh(e.value);
                    }}
                    defaultValue="امین حاجی زاده"
                    placeholder="امین حاجی زاده"
                />
            </td>

            <td className="parent-select-tatbigh">
                <RSSelect
                    options={[
                        { value: "0", label: "امین حاجی زاده" },
                        { value: "1", label: "..." },
                    ]}
                    onChange={(e) => {
                        setTatbigh(e.value);
                    }}
                    defaultValue="امین حاجی زاده"
                    placeholder="امین حاجی زاده"
                />
            </td>

            <td className="parent-select-sarparast">
                <RSSelect
                    options={[
                        { value: "0", label: "امین حاجی زاده" },
                        { value: "1", label: "..." },
                    ]}
                    onChange={(e) => {
                        setSarparast(e.value);
                    }}
                    defaultValue="امین حاجی زاده"
                    placeholder="امین حاجی زاده"
                />
            </td>
        </tr>
    );
}
