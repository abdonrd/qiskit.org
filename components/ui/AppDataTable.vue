<template>
  <cv-data-table
    class="app-data-table"
    :columns="columns"
  >
    <template slot="data">
      <cv-data-table-row v-for="(row, rowIndex) in elements" :key="`${rowIndex}`">
        <cv-data-table-cell v-for="({ component, styles, data}, elementIndex) in row" :key="`${elementIndex}`">
          <AppCta v-if="isAppCtaComponent(component)" kind="ghost" v-bind="data" :style="styles" />
          <component
            :is="component"
            v-else
            :style="styles"
          >
            {{ data }}
          </component>
        </cv-data-table-cell>
      </cv-data-table-row>
    </template>
  </cv-data-table>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { GeneralLink } from '~/constants/appLinks'

export interface TableRowElement {
  component: string,
  styles: string,
  data: string | GeneralLink,
}

@Component
export default class AppDataTable extends Vue {
  @Prop({ type: Array, default: () => [] }) elements!: TableRowElement[]
  @Prop({ type: Array, default: () => [] }) columns!: string[]

  isAppCtaComponent (component: string) : boolean {
    return component === 'AppCta'
  }
}
</script>

<style lang="scss" scoped>
.app-data-table {
  overflow-x: scroll;
}

</style>

<style lang="scss">
.bx--data-table th {
  color: $black-100;
  background-color: $cool-gray-20;
}

.bx--data-table tbody tr td, .bx--data-table tbody tr:hover td {
  color: $cool-gray-80;
  background-color: $white;
  border-top: none;
  border-bottom: 1px solid $cool-gray-20;
}
</style>
