<template>
<div class="facmain">

    <div class="fac-card-wrap">
        <div class="container">
            <h3>All Facilities</h3>
            <div class="fac-cards">
                <FacCard :post="post" v-for="(post, index) in sampleFacCards" :key="index" />
            </div>
        </div>
    </div>
</div>


</template>

<script>
import FacCard from "../../components/FacCard.vue";
export default {
    name: 'AllFacPage',
    Component: {
        FacCard
    },
    data() {
        return {
            sampleFacCards: [
                { facName: "Raffles", blogCover: "1", facType: "indoor sports", facCharge: "no"},
                { facName: "RVRC", blogCover: "2", facType: "outdoor sports", facCharge: "yes"},
                { facName: "Sheares", blogCover: "3", facType: "meeting room", facCharge: "no"},
                { facName: "Tembusu", blogCover: "4", facType: "function room", facCharge: "no" },
            ]
        };
    },
}
</script>

<style lang="scss" scoped>
.fac-card-wrap {
  position: relative;
  padding: 80px 16px;
  background-color: #f1f1f1;
  @media (min-width: 500px) {
    padding: 100px 16px;
  }
  .container {
    .fac-cards {
        display: grid;
        gap: 32px;
        grid-template-columns: 1fr;
        @media (min-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
        }
        @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
        }
    }

  }

}
</style>