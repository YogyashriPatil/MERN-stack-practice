import plugin from "eslint-plugin-react-hooks";

export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend:{
            colors:{
                blue: {
                    200: "#8094aa",
                    500:"#19406a",
                    700:"#002b5b",
                },
                green: {
                    400: "#36c6c0"
                },
            }
        },
    },
    plugins:[]
}