
import { useContext } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { DataContext } from "../contexts/dataContext";

export function ShowPie() {

    const { data, loading } = useContext(DataContext);

    if (loading) { return "Loading..." };

    const AmountByCategory = {};

    {
        data.message.forEach(item => {
            if (!AmountByCategory[item.category]) { AmountByCategory[item.category] = 0 }

            AmountByCategory[item.category] += item.amount;
        })
    }
    //converting the object in array for Recharts

    // here Obejct.entries convert all the elements of object in arrays like [ [category: value], [category: value]....], then on each array we destructre and return them in form of object

    const AmountByCategory_Array = Object.entries(AmountByCategory).map(([category, value]) => {
        return { category: category, value: value }
    })
    console.log(AmountByCategory_Array);

    const colors = ["#8236d9db", "#22f822d9", "#5b44d1d9", "#fdf115cd", "#ff3737d1"]

    return <div style={{ height: "290px", width: "100%" }}>

        <ResponsiveContainer style={{ width: "100%", height: "100%" }}>
            <PieChart>
                <Pie
                    data={AmountByCategory_Array}
                    dataKey={"value"}
                    nameKey={"category"}
                    isAnimationActive={true}
                    cx={"50%"}
                    cy={"50%"}
                    outerRadius={90}
                    label
                >
                    {AmountByCategory_Array.map((a, index) => {
                        return <Cell key={index} fill={colors[index]} ></Cell>
                    })}
                </Pie>
                <Tooltip></Tooltip>
            </PieChart>
        </ResponsiveContainer>

    </div >


}
