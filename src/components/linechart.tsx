'use client';

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"



export default function LineChart({
    data = [
        { x: "January", price: 40 },
        { x: "February", price: 50 },
        { x: "March", price: 45 },
        { x: "April", price: 55 },
        { x: "May", price: 70 },
        { x: "June", price: 100 },
    ],
    label = 'Desktop',
    color = 'var(--chart-1)'
}: {
    data: {
        x: string;
        price: number;
    }[];
    label: string;
    color: string;
}) {
    const chartConfig = {
        desktop: {
            label,
            color,
        },
    } satisfies ChartConfig

    return (
        <div className="border-red-400 w-full -mt-1 -mb-4">
            <ChartContainer config={chartConfig}>
                <AreaChart
                    accessibilityLayer
                    data={data}
                    margin={{
                        left: 12,
                        right: 12,
                    }}
                >

                    <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                    <defs>
                        <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                            <stop
                                offset="5%"
                                stopColor="var(--color-desktop)"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="var(--color-desktop)"
                                stopOpacity={0.1}
                            />
                        </linearGradient>
                    </defs>

                    <Area
                        dataKey="price"
                        type="natural"
                        fill="url(#fillDesktop)"
                        fillOpacity={0.4}
                        stroke="var(--color-desktop)"
                        stackId="a"
                    />
                </AreaChart>
            </ChartContainer>

        </div>
    )
}