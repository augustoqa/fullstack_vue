<template>
  <div>
    <div class="weather container">
      <img src="../../public/favicon.ico" alt="" class="weather__image" />
      <h1 class="subtitle weather__city">Guatemala</h1>
      <p class="weather__description">Nublado</p>
      <p class="weather__temperature">30 grados</p>
    </div>
  </div>
</template>

<style scoped>
.weather__image {
  width: 150px;
  margin: 0 auto;
}

.weather__city {
  font-size: 2.5rem;
}

.weather__description {
  font-size: 1.5rem;
}

.weather__temperature {
  font-size: 2.5rem;
}

.loader {
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #53bf8e;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
