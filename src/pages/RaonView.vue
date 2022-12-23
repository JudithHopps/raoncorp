<template>
    <hr class="featurette-divider"/>
    <div class="px-4 py-1 my-5 text-center">
    <img class="d-block mx-auto mb-4" src="@/assets/logo.png" alt="" width="150">
    <h1 class="display-3 fw-bold">왜 라온을 선택해야 하는가?</h1>
    <h1 class="display-5 fw-bold">국내 최초 DID 상용 서비스 구축</h1>
    <div class=" mx-auto">
      <p class="lead mt-4">국가 및 기업 주도의 신원 증명 서비스에 최적화되어 적용이 쉽고 안정적입니다.</p>
      <p class="lead mb-4" style="font-size:10px;"><img src="https://www.raonsecure.com/common/ko/img/content/subProd01_logo03.png" style="width:80px;">물품조달번호: 24109944(Package), 24109945(Node), 24109946(SDK Server Issuer), 24109947(SDK Server Verifier), 24109948(SDK Client(App)), 24109949(연동API모듈)</p>
      <a href="https://www.raonsecure.com/ko/solution/omnioneenterprise" style="text-decoration:none;"><ButtonComponent /></a>
    </div>
  </div>
    
 <hr class="featurette-divider"/>
    <img src="@/assets/raon_feature.jpg" style="width:100%;">
 <hr class="featurette-divider"/>

 <img src="@/assets/raon_effect.jpg">
 <hr class="featurette-divider"/>

 <img src="@/assets/raon_diagram.jpg" style="width:100%;">
 <hr class="featurette-divider"/>
 
 <h1 class="text-center fw-bold">대표 도입사례</h1>
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img src="@/assets/OmniOne_CaseStudy_병무청_v2.0.jpg" class="d-block w-100" alt="...">
        <!-- <h1>국내 최초 DID 상용 서비스 구축</h1>
        <p>국가 및 기업 주도의 신원 증명 서비스에 최적화되어 적용이 쉽고 안정적입니다.</p>
        <p>물품조달번호: 24109944(Package), 24109945(Node), 24109946(SDK Server Issuer),  <br/> 
            24109947(SDK Server Verifier),24109948(SDK Client(App)), 24109949(연동API모듈) </p> -->

       </div>
    <div class="carousel-item">
        <img src="@/assets/OmniOne_CaseStudy_행정안전부.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
        <img src="@/assets/OmniOne_CaseStudy_세종시자율주행차_Kor_20201113.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>
<script setup>
import ButtonComponent from '@/components/UtilityComponent/ButtonComponent.vue';


</script>

<style>
button{
    color:orange;
}
</style>