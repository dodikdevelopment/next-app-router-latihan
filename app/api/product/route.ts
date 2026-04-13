import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id: 1,
        title: 'sepatu nike alpha',
        price: 1000000,
        image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d6993249-3316-41ae-9f07-52a0fa1c1caf/NIKE+ACG+ULTRAFLY+TRAIL.png"
    },
    {
        id: 2,
        title: 'sepatu nike zoom',
        price: 2000000,
        image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f29ad5d5-c0a3-4601-a6d0-5511d3acfd59/NIKE+ACG+ULTRAFLY+TRAIL.png"
    },
    {
        id: 3,
        title: 'sepatu nike exclusive',
        price: 5000000,
        image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/017da3fb-e462-4a24-9d79-c4c1aa4ef1a2/NIKE+FREE+METCON+7.png"
    },
    {
        id: 4,
        title: 'sepatu nike air zoom max',
        price: 5000000,
        image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/017da3fb-e462-4a24-9d79-c4c1aa4ef1a2/NIKE+FREE+METCON+7.png"
    },
];

export async function GET(request: NextRequest) {
    console.log(request);
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
        const detailProduct = data.find((item) => item.id === Number(id));
        if (detailProduct) {
            return NextResponse.json({ status: 200, message: "Success", data: detailProduct, });
        }
        return NextResponse.json({ status: 404, message: "Not Found", data: {} });

    }

    return NextResponse.json({
        status: 200,
        message: "Success",
        data: data
    });
}