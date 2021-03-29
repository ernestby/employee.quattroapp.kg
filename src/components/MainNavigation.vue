<template>
  <div>
    <ul>
      <li v-for="(link, id) in links" :key="id">
        <router-link :to="link.link"
          ><i :class="'fas ' + link.icon"></i>{{ link.title }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        title: "Дашборд",
        link: "/",
        icon: "fa-chart-bar",
      },
      {
        title: "Заказы",
        link: "/orders",
        icon: "fa-play-circle",
      },
      {
        title: "Боксы",
        link: "/bays",
        icon: "fa-car",
      },
      {
        title: "Клиенты",
        link: "/members",
        icon: "fa-id-card-alt",
      },
      {
        title: "Товары",
        link: "/inventories",
        icon: "fa-boxes",
      },
      {
        title: "Сотрудники",
        link: "/employers",
        icon: "fa-address-card",
      },
      {
        title: "Параметры",
        link: "/params",
        icon: "fa-sliders-h",
      },
    ],
  }),
};
</script>

<style lang="scss">
.navigation {
  width: 120px;
  display: table-cell;
  vertical-align: top;
  background: #1a1c21;
  top: 0;
  bottom: 0;

  ul {
    list-style: none;
    padding-left: 0px;

    a {
      position: relative;
      padding: 20px 0;
      display: block;
      font-size: 15px;
      color: #474c5a;
      text-decoration: none;
      text-align: center;
      -webkit-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;

      i {
        display: block;
        font-size: 40px;
        margin: auto;
        margin-bottom: 10px;
      }
    }

    .router-link-exact-active {
      background-color: #eb5635;
      color: #e0dede;
    }
  }
}
</style>
