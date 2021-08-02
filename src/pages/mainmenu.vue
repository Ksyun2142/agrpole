<template>
<div>
<div class="center">
<table >
    <tr>
        <td align="center"> <a class="btn-planning main-menu-btn" href="http://192.168.1.81:8080/main"><img src="../assets/images/main/plan_factor_analis.png" width="200"  height="200"><br>ПЛАН-ФАКТНЫЙ АНАЛИЗ<br>ПРОИЗВОДСТВЕННЫХ ЗАТРАТ</a></td>
        <td align="center"><a href="http://192.168.1.81:8080/main"><img src="../assets/images/main/costs_kultures.png" width="200"  height="200"><br>ДЕТАЛИЗАЦИЯ <br>ЗАТРАТ ПО КУЛЬТУРАМ</a></td>
        <td align="center"><a href="http://192.168.1.81:8080/main"><img src="../assets/images/main/map.png" width="200"  height="200"><br>КАРТА</a></td>
    </tr>
    <tr>
        <td align="center"><a href="http://192.168.1.81:8080/two"><img src="../assets/images/main/tasks_productions.png" width="200"  height="200"> <br>ПРОИЗВОДСТВЕННЫЕ<br>ЗАДАЧИ</a></td>
        <td align="center"><a href="http://192.168.1.81:8080/one"><img src="../assets/images/main/planning.png" width="200"  height="200"><br>ПЛАНИРОВАНИЕ</a></td>
         <td align="center"><a href="http://192.168.1.81:8080/main"><img src="../assets/images/main/tr1.png" width="160"  height="160"><br>АГРОГАРАЖ</a></td>
    </tr>
    <tr>
        <td colspan="3" align="center"> <a href="http://192.168.1.81:8080/main"><img src="../assets/images/main/adminBig.png" width="75"  height="75"><br>АДМИНИСТРИРОВАНИЕ</a></td>
    </tr>
</table>

</div>
</div>
</template>

<style scoped>
.center{
   margin: auto;
   max-width:1000px;
   margin-top:5%;

}

td{
padding:30px;
}
.main-menu-btn {
    }
    a{
    width: 300px;
  /*  height: 300px; */
    height: 250px;
    display: inline-block;
    font-family: DINPro-Medium;
    padding: 10px 15px 0px 15px;
    background-color: transparent;
    font-size: 16px;
    text-align:center;
    color: #ffffff;
    border: 0;
    }
</style>
