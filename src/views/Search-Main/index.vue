<template>
      <div class = "searchbox">
        <form action="/action_page.php">
            <fieldset>
             <legend>Search for facilities:</legend>
             <label for="fac_type">Facility type:</label>

             <select name="fac_type" id="fac_type">
                <option value="default">select an option</option>
                <option value="in_sports">indoor sports</option>
                <option value="out_sports">outdoor sports</option>
                <option value="meet_room">meeting room</option>
                <option value="func_room">function room</option>
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

            <label for="date">Select Date</label>
            <input type = "date" value = "date">
            <br><br>

          
            <label for="cost">Only show facilities that are free of charge?</label>
            <select name="cost" id="cost">
                <option value="free">yes</option>
                <option value="nfree">no</option>
            </select>
            <br><br>
            
            <input type="submit" value="Search">
    
            </fieldset>
           </form>
      </div>
</template>

<script>
export default {
  name: 'SearchMainPage'
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

</style>