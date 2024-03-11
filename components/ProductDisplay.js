app.component(
    'product-display',{
        props:{
            premium:{
                type: Boolean,
                required: true    
            }
        },
        template: // html 
        `
        <div class="product-display">
            <div class="product-container">

                <div class="product-images">
                    <img v-bind:src="image">
                </div>

                <div class="product-info">
                    <h1>{{ title }}</h1>
            
                    <p v-if="Stock" class="c-green" >สินค้ามี {{Stock}} ชิ้น</p>
                    <p v-else class="c-red" >สินค้าหมด</p>
                    <p>ค่าส่งสินค้า  {{ shipping }}</p>

                    
                <p>Spec :</p>
                <div class="product-detail">
                    <product-detail :details="details" ></product-detail>
                </div> 

                <div class="box-circle">
                    <div
                        v-for="(vari, index) in variants"
                        :key="vari.id"
                        @mouseover="updateVariants(index)"
                        class="color-circle"
                        :style="{ backgroundColor: vari.color }">
                    </div>
                </div>

                <button       
                    class="button" 
                    :class="{ disabledButton: !Stock }"
                    :disabled="!Stock"
                    @click="addToCart">
                    ใส่ตะกร้า
                </button>

                <button 
                    class="button" 
                    @click="removeFromcart">
                        สินค้าออก
                    </button>
                </div>

            </div>
            <div class="container-review">
                <product-review 
                @review-submitted="addReview">
                </product-review>

                <review-list 
                v-if="reviews.length"  
                :reviews="reviews">
                </review-list>
            </div>
        </div>
        `,
        data(){
            return{
                product: 'Mobile 2G',
                brand: "Nokia",
                details: ['RAM 1 GB','ROM 5 GB','Screen 3 inch','Battery 2000mAH'],
                variants:[
                    {id: 101, color:'red', image: '../assets/images/red.png',quantity: 20},
                    {id: 102, color:'orange', image: '../assets/images/yellow.png',quantity: 10},
                    {id: 103, color:'green', image: '../assets/images/green.png',quantity: 0},
                ],
                selectedVariant: 0,
                reviews: []
            }
        },
        methods:{

            addReview(review){
                this.reviews.push(review)
            },
    
            addToCart(){
                this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
            },
    
            removeFromcart(){
                this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
    
            },
    
            updateVariants(index){
                this.selectedVariant = index
            }
    
        },
    
        computed:{
            title(){
                return this.brand  + " " + this.product
            },
            image(){
                return this.variants[this.selectedVariant].image
            },
    
            Stock(){
                return this.variants[this.selectedVariant].quantity
            },
            shipping(){
                if(this.premium){
                    return 'Free'
                }
                return 2.99
            }
    
        }
    }
)