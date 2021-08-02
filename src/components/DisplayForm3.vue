<script>
import { getYear} from 'date-fns';
import ClickOutside from 'vue-click-outside';

export default {
  name: 'DisplayForm',
  props: {
    orgs: { type: Array, required: true },
    farmingFields: { type: Array, required: true },
    plants: { type: Array, required: true },
    years: { type: Array, required: true },
    tableData: { type: Array, required: true },
  },
  data () {
    return {
      selected: {
        org: -1,
        plant: -1,
        year: getYear(new Date()).toString(),
        farmingField: -1,
      },
      currentPage: 1
    };
  },
  directives: {
    ClickOutside,
  },
  computed: {
    fields() {
      let res = [];
      res.push({
        key: 'name',
        label: 'Культура',
        sortable: true
      });
      res.push({
        key: 'hi',
        label: 'Сбор, кг',
        sortable: true
      });
      res.push({
        key: 'ost',
        label: 'Остаток, кг',
        sortable: true
      });
      res.push({
        key: 'price',
        label: 'Цена,р / кг',
        sortable: true
      });
      res.push({
        key: 'price2',
        label: 'Прибыль,р ',
        sortable: true
      });
      res.push({
        key: 'price3',
        label: 'С продаж ',
        sortable: true
      });
      res.push({
        key: 'price3',
        label: 'Ожидаемая ',
        sortable: true
      });

      return res;
    },

    items() {
      // группируем данные по полям
      const temp = this.tableData.reduce((acc, item) => {
        if (acc[item.name]) {
          acc[item.name].push(item)
        } else {
          acc[item.name] = [item];
        }
        console.log(this.tableData)
        return acc
      }, {});

      // записываем в данные полей информацию о показываемых периодах
      let items = [];
      this.fields.forEach(field => {
        if (field.label !== 'Культура') {
          items.push({ key: field.key, label: field.label })
        }
      })

      // записываем в показываемые периоды данные по ним
      let res = [];
      for (const [key, values] of Object.entries(temp)) {
        let field = { name: key};

        items.forEach(({ key, label}) => {
          let newAr = [];
          newAr = values.filter(({ year }) => year === Number(label));
          field[key] = newAr.map(({ harvesting }) => harvesting) || [];
        });
        res.push(field);
      }


      // фильтруем по полю
      let filteredResult = [];


      if (this.selected.farmingField !== -1) {
        const ff = this.farmingFields.find(f => f.Id === this.selected.farmingField);
        filteredResult = res.filter(r => r.name === ff.Name);
      } else {
        filteredResult = res;
      }

      // фильтруем по культуре
      let tempResult = [];
      if (this.selected.plant !== -1) {
        const ff = this.plants.find(f => f.Id === this.selected.plant);
        tempResult = filteredResult.filter(fr => {
          for (let i in fr) {
            if (typeof fr[i] !== 'string') {
            const test = fr[i]?.find(plant => plant.name === ff.Name)
            if (test) {
              return fr
            }
            }
          }
        })

        filteredResult = tempResult.length > 0 ? tempResult : [];

      }
      return filteredResult;
    },
  },
  methods: {
    getTotalSquares(grades) {
      let factTotal = 0;
      let planTotal = 0;

      grades.forEach(({ square }) => {
        factTotal += square.fact;
        planTotal += square.plan;
      });
      return { fact : factTotal, plan: planTotal };
    },
    handleSelect(cell) {
      const year = this.fields.find(field => field.key === cell.label).label
      this.$emit('select-cell', {...cell, year: year });
    },
    handleEdit() {
      this.$emit('toggle-edit');
    },
    clearForm() {
      console.log('clear 1');
      this.$emit('clear-form');
    },
    handleSizeChange(val) {
      console.log(`${val} items per page`);
    },
    handleCurrentChange(val) {
      console.log(`current page: ${val}`);
    }
  },
};
</script>

<template>
  <div>
    <section class="df-controls--wrapper">

      <el-button
          class="control--edit-button"
          type="warning"
          size="small"
          @click="handleEdit"
      >
        Продажи
      </el-button>
       <el-button
           class="control--edit-button"
           type="warning"
           size="small"
           @click="handleEdit"
       >
         Урожай
       </el-button>

    </section>

    <section class="df-table">
      <b-table
          fixed
          :fields="fields"
          :items="items"
          class="mt-3"
          sort-by="name"
          v-click-outside="clearForm"
      >



      </b-table>
    </section>


    <div class="df-pagination">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-sizes="[10, 15, 20, 25]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length">
      </el-pagination>
    </div>


  </div>
</template>

<style lang="scss" scoped>
.df {
  &-pagination {
    display: flex;
  }
}

.control {
  &--edit-button {
    margin-top: auto;
    margin-left: auto;
    height: 40px;
    background-color: #06aa9f;
  }
}
</style>


<style lang="scss">

.df {
  &-controls--wrapper {
    display: flex;
    margin-top: 10px;
    font-family: DINPro, sans-serif;

    :nth-child(1) >.el-select {
      width: 175px;
    }
    :nth-child(2) >.el-select {
      width: 175px;
    }
    :nth-child(3) >.el-select {
      width: 77px;
    }
    :nth-child(4) >.el-select {
      width: 150px;
    }
  }

  &-controls--control {
    display: flex;
    flex-direction: column;
    margin-right: 6px;
  }

}

.control {
  &-title {
    margin: 0 auto 0 0;
    line-height: 1.42857143;
  }
}

.control--edit-button span {
  color: white;
}

.table-cell {
  &--data-wrapper {
    display: flex;
    justify-content: space-between;
  }
}

tbody {
  .el-button {
    padding: 5px 5px !important;
    min-width: 150px;
    min-height: 50px;
    border: none !important;

    .table-cell--title{
      color: rgb(6, 170, 159) !important;
    }

    .table-cell--title, p {
      margin-bottom: 5px;
    }
  }
}

.data-fact {
  color: #06aa9f;
}

.data-plan {
  color: #d8a331;
}

.sr-only {
  display: none;
 }

.table {
  color: inherit !important;
}

.df-table > .table > :not(caption) > * > * {
  padding-top: initial !important;
  padding-bottom: initial !important;
  padding-right: initial !important;
}

.table > thead > tr > th:not(:first-child) div {
  font-family: DINPro-Medium, sans-serif !important;
  padding: 5px;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: grey;
  font-size: 17px;
  font-weight: normal;
  text-align: center;
}

.el-pagination {
  margin-left: auto;
}

.el-button {
  border: none !important;
}
</style>
