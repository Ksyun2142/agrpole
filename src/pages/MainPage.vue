<template>


<div class="main-menu-bg">

            <img class="round" src="https://sun9-18.userapi.com/impg/dwSxj2OXVpwJA7p-dxH_Xl72UQS40OpAria8ow/9-bRqSCAaFA.jpg?size=212x212&quality=96&sign=11f3313fe760dc0eff70aae607dd14db&type=album" style="width:225px; height:225px;margin-top: -177px;margin-left: 19%;"/>

        <form class="login-form" name="form" ng-submit="login()" role="form">

            <div class="form-group" >
                <label for="username"></label>
                <i class="fa fa-key"></i>
                <!--<span ng-show="form.username.$dirty && form.username.$error.required" class="help-block">Введите логин</span>-->
                <input type="text" name="username" id="username" class="logus-login-input" placeholder="Имя сотрудника" ng-model="username" required />
            </div>
            <div class="form-group" style="padding-top: 15px;">
                <label for="password"></label>
                <i class="fa fa-lock"></i>
                <!--<span ng-show="form.password.$dirty && form.password.$error.required" class="help-block">Введите пароль</span>-->
                <input type="password" name="password" id="password" class="logus-login-input" placeholder="Пароль" ng-model="password" required />
            </div>
            <div class="form-actions" style="padding-top: 30px;">
                <button type="submit" @click="$router.push({ name: 'mainmenu' })" ng-show="typeButton=='1'"  ng-disabled="form.$invalid || dataLoading" class="logus-btn btn"
				style="height: 56px;width: 275px;margin-left: 43px; background-color: #5a87c0">ВОЙТИ</button>






            </div>

        </form>

</div>


</template>
<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>

#app{

}

.login-form {
        background-color: white;


    }
button.close {
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
}

.main-menu-bg {
       background-color: white;
        margin: auto;
   max-width: 400px;
  padding: 25px;
margin-top:15%;

    }
body
{
     background: url(https://sun9-41.userapi.com/impg/L3ogaFmhAJ3pvlHwrSfZ8bBLSfisIslpZlYRDw/Hv4uqkI0WLI.jpg?size=1280x720&quality=96&sign=9b82d2a825ed488d72742fc6da04902f&type=album) repeat-y;
    -moz-background-size: 100%; /* Firefox 3.6+ */
    -webkit-background-size: 100%; /* Safari 3.1+ и Chrome 4.0+ */
    -o-background-size: 100%; /* Opera 9.6+ */
    background-size: 100%; /* Современные браузеры */
}

.round{
 background-size: auto 300px;
  width: 300px; height: 300px;
  border-radius: 50%;
  border: 4px black;

}
.logus-login-input {
    padding-left: 10px;
    height: 45px;
    width: 269px;
    margin-left: 40px;
    border: 1px solid #5a87c0;
    color: #5a87c0;
    border-radius: 0;
}
.form-actions {
  margin-bottom: 20px;
}
</style>

