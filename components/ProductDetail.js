app.component(
    'product-detail',{
        props: {
            details:{
                type: Array,
                required: true
            }
        },
        template: //html
        `
        <ul>
            <li v-for="det in details">{{ det }}</li>
        </ul>

        `
    }
)