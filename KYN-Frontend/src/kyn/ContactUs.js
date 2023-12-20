function ContactUs (){
    return(
        <section class="container mt-5">

   <div class="row">
      <div class="col-sm-12 text-center mb-4">

     </div>

      <div class="col-sm-12 mb-4 col-md-5">
      
         <div class="card border-primary rounded-0">
            <div class="card-header p-0">
               <div class="bg-primary text-white text-center py-2">
                  <h3><i class="fa fa-envelope"></i> Write to us:</h3>
                  <p class="m-0">We’ll write rarely, but only the best content.</p>
               </div>
            </div>
            <div class="card-body p-3">
               
                  <div class="form-group">
                  <label> Your name </label>
                  <div class="input-group">
                     <input value="" type="text" name="data[name]" class="form-control" id="inlineFormInputGroupUsername" placeholder="Your name"/>
                  </div>
				</div>
                  <div class="form-group">
                     <label>Your email</label>
                     <div class="input-group mb-2 mb-sm-0">
                        <input type="email" value="" name="data[email]" class="form-control" id="inlineFormInputGroupUsername" placeholder="Email"/>
                     </div>
                  </div>
                  <div class="form-group">
                     <label>Subject</label>
                     <div class="input-group mb-2 mb-sm-0">
                        <input type="text" name="data[subject]" class="form-control" id="inlineFormInputGroupUsername" placeholder="Subject"/>
                     </div>
                  </div>
                  <div class="form-group">
                     <label>Message</label>
                     <div class="input-group mb-2 mb-sm-0">
                        <input type="text" class="form-control" name="mesg"/>
                     </div>
                  </div><br/>
                  <div class="text-center">
                     <input type="submit" name="submit" value="submit" class="btn btn-primary btn-block rounded-0 py-2"/>
                  </div>
             
			     </div>
				  
            </div>
         </div>
 
	  

      <div class="col-sm-12 col-md-7">

         <div class="mb-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24540.145433130085!2d97.75256042843615!3d22.937381307536366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smm!4v1700885253977!5m2!1sen!2smm" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" 
            width={"100%"} height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
         </div>

         <div class="row text-center">
            <div class="col-md-4">
               <a class="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"><i class="fa fa-map-marker"></i></a><br/>
               <p class="bg-danger px-3 py-2 rounded text-white mb-2 d-inline-block"> Myanmar, Mandalay </p>
            </div>
            <div class="col-md-4">
               <a class="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"><i class="fa fa-phone"></i></a><br/>
               <p class="bg-warning px-3 py-2 rounded text-white mb-2 d-inline-block">+95- 90000000</p>
            </div>
            <div class="col-md-4">
               <a class="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"><i class="fa fa-envelope"></i></a>
               <p class="bg-success px-3 py-2 rounded text-white mb-2 d-inline-block"> KYN-store@gmail.com</p>
            </div>
         </div>
      </div>

	    </div>
</section>
    );
}
export default ContactUs;