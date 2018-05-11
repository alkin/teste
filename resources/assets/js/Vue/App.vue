<template>
    <div class="flex-center position-ref full-height">
        <div class="top-right links">
            <a href="/">Home</a>
        </div>

        <div class="content">
            <div class="title m-b-md">
                Trelloas
            </div>

            <div class="links">

            </div>
        </div>
    </div>
</template>

<script>
import { boards } from "@/api.js";

export default {
  mounted() {
    boards.all().then(response => {
      console.log("Teste de API:");
      console.log(response.data);
    });
  }
};
</script>
