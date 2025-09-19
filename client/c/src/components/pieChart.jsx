
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

export function ShowPie() {


    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
    ];

    const colors = ["#000000ff", "#ffffffff", "#fd0000f2"]

    return <div style={{ height: "300px", width: "100%" }}>
        <ResponsiveContainer>
            <PieChart>
                <Pie
                    data={data01}
                    dataKey={"value"}
                    cx={"50%"}
                    cy={"50%"}
                    outerRadius={105}
                    label
                >
                    {data01.map((d, index) => {
                        return <Cell
                            key={`${index}`} fill={colors[index % colors.length]} />
                    })}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    </div >


}
