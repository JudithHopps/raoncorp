<template>
    <nav class="navbar navbar-expand-lg header " style="background-color: #ff7f00;">
  <div class="container-fluid">
    <!-- <a class="navbar-brand ms-5" href="#" style="color:white; font-weight: bold;"> Raon</a> -->
    <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> -->
  
    <div class="d-flex flex-row-reverse collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-5 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/" style="color:white;">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/intro" style="color:white;">intro</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/article" style="color:white;">article</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/blockchain" style="color:white;">blockchain</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/raon" style="color:white;">raon</a>
        </li>
        
      </ul>

    </div>
  </div>
</nav>

</template>
  
<script setup />
<style scoped>

.header {
   position:fixed;
   left:0px;
   top:0px;
   z-index:6;
   width:100%;
   
}
a{
  font-size: 1.2em;
}
</style>
 
