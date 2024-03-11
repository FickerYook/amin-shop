app.component('review-list',{
     props:{
          reviews:{
               type: Array,
               required:true
          }
     },
     template:
     //html
     `
          <div class="review-container">
               <h3>ข้อมูลรีวิว</h3>
            
                    <ul>
                         <li v-for="(rev, index ) in reviews"  :key="index">
                              ชื่อผู้รีวิว: {{ rev.name }} 
                              <br>
                              ข้อความรีวิว :  "{{ rev.review }}"
                              <br>
                              ให้ดาว {{ rev.rating }} ดวง
                              <br>
                              ชวนลูกค้าอื่น : {{  rev.recommend }}
                              <hr color="green">
                         </li>
                    </ul>
          </div>

     `
})