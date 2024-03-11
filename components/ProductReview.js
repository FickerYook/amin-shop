app.component('product-review',{
     template:
     //html
     `<form class="review-form" @submit.prevent="onSubmit">

     <h2>ข้อมูลการรีวิว</h2>
     <label>ชื่อผู้รีวิว</label>
     <input id="name" v-model="name">

     <label>ข้อมูลผู้รีวิว</label>
     <textarea id="review" v-model="review"> </textarea>
     
     <label>เรทติ้ง</label>
     <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
     </select>

     <label>คุณจะชักชวนคนอื่นมาซื้อหรือไม่</label>
     <select id="recommend" v-model="recommend">
          <option>ชวนแน่อนอ</option>
          <option>ไม่ชวน</option>
     </select>
          <br>
          <input class="button" type="submit" value="ส่งข้อมูล">
     </form>
     `,

     data(){
          return{
               name: '',
               review:'',
               rating:null,
               recommend:null
          }
     },

     methods:{
          onSubmit(){
               if(this.name === ' ' || this.review === ' ' || this.rating === null || this.recommend ===null){
                    alert('คุณใส่ข้อมูลในการรีวิว ไม่ครบถ้วน โปรดใส่ให้ครบด้วย');
                    return
               }

               let productReview = {
                    name: this.name,
                    review:this.review,
                    rating:this.rating,
                    recommend:this.recommend
               }
               this.$emit('review-submitted',productReview)

               this.name=' ',
               this.review= ' ',
               this.rating= null,
               this.recommend= null
          }
     }



})