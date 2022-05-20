<template>
<div class = "greeting">
        <h2>Welcome to Bookit@NUS Admin Announcement</h2>
        <p>Please use the box below to post announcement</p>
      </div>

      <div class = "PAbox">
        <form action="/action_page.php">
            <fieldset>
             <legend>Post an announcement:</legend>
             <label for="announ_type">Announcement type:</label>

             <select name="announ_type" id="announ_type">
                <option value="default">select an option</option>
                <option value="closure">urgent closure</option>
                <option value="maintainence">maintainence</option>
                <option value="holiday">change of opening type during holiday</option>
                <option value="others">others</option>
              </select>
              <br><br>

             <label for="venue">Venue:</label>
             <select name="venue" id="venue">
                <option value="default">select an option</option>
                <option value="UT">Utown</option>
                <option value="UTR">Utown Residence</option>
                <option value="RC4">RC4</option>
                <option value="CAPT">CAPT</option>
                <option value="Tembu">Tembusu</option>
                <option value="PGP">PGP</option>
                <option value="KE">KE VII Hall</option>
                <option value="Temasek">Temasek Hall</option>
                <option value="Raffles">Raffles Hall</option>
                <option value="KR">Kent Ridge Hall</option>
                <option value="Sheares">Sheares Hall</option>
            </select>
             <br><br>

             <label for="facility">facility:</label>
             <select name="facility" id="facility">
                <option value="default">select an option</option>
                <option value="tennis">Tennis Court</option>
                <option value="squash">Squash Court</option>
                <option value="football">Football Court</option>
                <option value="swim">Swimming pool</option>
                <option value="function">Function room</option>
                <option value="music">music room</option>
            </select>
             <br><br>

            <label for="date">Select Date</label>
            <input type = "date" value = "date">
            <br><br>

            <label for = "message">Remarks</label>
            <input type = "text" value = "text">
            <br><br>
            
            <input type="post" value="Post Announcement">
    
            </fieldset>
           </form>
      </div>
</template>

<script>
export default {
  name: 'AdminPAPage'
}
</script>

<style>
 .searchbox {
    float: center;
    color: rgb(49, 64, 133);
    text-align: left;
    padding: 150px 0px;
    text-decoration: none;
    font-size: 17px;
 }