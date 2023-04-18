import React from "react";
import { Input } from "../Input";
import { RSSelect } from "../Select";

export function TableRow({onChangeFrom , onChangeTo , onChangeRabet , onChangeMoragheb , onChangeShomaresh , onChangeTatbigh , onChangeSarparast}) {

    return (
        <tr>
            <td className="radif">1</td>
            <td className="mahal-azmoon-1">اتاق 1</td>
            <td className="mahal-azmoon-2">طبقه اول</td>

            <td className="parent-input-from-number">
                <Input
                    type="number"
                    onChange={onChangeFrom}
                />
            </td>

            <td className="parent-input-to-number">
                <Input
                    type="number"
                    onChange={onChangeTo}
                />
            </td>

            <td className="tedad">20</td>

            <td className="parent-select-rabet">
                <RSSelect
                    options={[
                        { value: "0", label: "امین حاجی زاده" },
                        { value: "1", label: "..." },
                    ]}
                    onChange={onChangeRabet}
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
                    onChange={onChangeMoragheb}
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
                    onChange={onChangeShomaresh}
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
                    onChange={onChangeTatbigh}
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
                    onChange={onChangeSarparast}
                    defaultValue="امین حاجی زاده"
                    placeholder="امین حاجی زاده"
                />
            </td>
        </tr>
    );
}
