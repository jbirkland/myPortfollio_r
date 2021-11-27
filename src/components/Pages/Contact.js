import React from 'react'


function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">Name</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Type Name Here"/>
        </div>

        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">Email</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Please Enter Valid Email Address"/>
        </div>

        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">Message</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Send me a message!"/>
        </div>

        <div class="col-auto">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      
    </div>
  )
}

export default Contact