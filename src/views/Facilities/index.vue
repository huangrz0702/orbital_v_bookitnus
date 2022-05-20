<template>
<div class="row"> 
  <div class="col"> 
    <img src="utown.jpeg" style="width:100%">
    <img src="UTRC.jpeg" style="width:100%">
    <img src="UTR.jpeg" style="width:100%">
  </div>
  <div class="col"> 
    <img src="Halls.jpeg" style="width:100%">
    <img src="rvrc.jpeg" style="width:100%">
    <img src="pgpr.jpeg" style="width:100%">
  </div>
</div>
</template>

<script>
export default {
  name: 'FacDisplay'
}
</script>

<style>
    * {
    box-sizing: border-box;
    }

    .row {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
    }


  .col {
    flex: 50%;
    padding: 0 4px;
  }
  
  .col img {
    margin-top: 8px;
    vertical-align: middle;
  }

</style>
