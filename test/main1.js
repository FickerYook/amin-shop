const app = Vue.createApp({
    data() {
        return {
            product: 'Mobile 5G',
            description: 'มือถือกาก',
            image: './assets/images/m1.jpg',
            url: 'https://www.google.com/search?q=mobile+png&sca_esv=573990738&authuser=3&tbm=isch&sxsrf=AM9HkKmaVAH0VMpbP2KgNxurAwylkm9HmA:1697513025084&source=lnms&sa=X&ved=2ahUKEwjngfLmkPyBAxVfd2wGHRE2CmIQ_AUoAXoECAMQAw&biw=1738&bih=865&dpr=1.1#imgrc=fR',
            Stock: true,
            onSale: true,
            details: ['RAM8 GB', 'ROM 256 GB', 'Screen 6 inch', 'Battery 5000 mAH'],
            price: ['2000', '3000', '400'],

            variants: [
                { id: 101, color: 'red', image: './assets/images/s1.png' },
                { id: 102, color: 'green', image: './assets/images/green.png' },
                { id: 103, color: 'yellow', image: './assets/images/yellow.png' }
            ],

            cart: 0,
            brand:"Nokia",
            selectedVariant:0,
            quatity:0,
        }
    },

    methods: {
        updateImage(variantImage) {
            this.image = variantImage
        },

        addToCart() {
            this.cart++;
        },

        removeCart() {
            if (this.cart >= 1) {
                this.cart -= 1
            }
        },

        updateVariants(index){
            this.selectedVariant = index
        }
    },


    // เปลียนแปลงสินค้า
    computed: {
        title(){
            return this.brand + " " + this.product
        },

        image(){
            return this.variants[this.selectedVariant].image
        },
        
        Stock(){
            return this.variants[this.selectedVariant].quatity
        },

        sale(){
            if(TouchList.onSale){
                return this.brand + " " + this.product + 'โปรโมชั้น'
            }
            return ' '
        }
    }



});

const mountedApp = app.mount('#app');