<template>
  <div class="main-content">
    <h1>Ant-design playground</h1>
    <buttons-section />

    <colors-section />

    <exposition-card title="Inputs">
      <div class="section column">
        <input-section />
        <tag-section />
        <dropdown-section />
        <cascader-section />
        <auto-complete-section />
        <input-number-section />
        <select-section />
        <search-select-section />
        <date-picker-section />
      </div>
    </exposition-card>

    <exposition-card title="Options">
      <div class="section column">
        <checkbox-section />
        <switch-section />
        <radio-button-section />
      </div>
    </exposition-card>

    <exposition-card title="Navigation">
      <div class="section column">
        <bread-crumbs-section />
        <menu-section />
        <pagination-section />
        <steps-section />
      </div>
    </exposition-card>
    
    <exposition-card title="Sliding">
      <div class="section column">
        <rate-section />
        <slider-section />
      </div>
    </exposition-card>

    <exposition-card title="Structure">
      <div class="section column">
        <modal-section />
        <page-header-section />
        <divider-section />
        <table-section />
      </div>
    </exposition-card>

    <exposition-card title="Context">
      <div class="section column">
        <alert-section />
        <tooltip-section />
      </div>
    </exposition-card>

    <line-height-section />

    <icons-section />

    <compositions-default-section />
    
    <compositions-section />

    <floater-section />
  </div>
</template>

<script setup>
import ButtonsSection from '../components/sections/ButtonsSection.vue';
import DividerSection from '../components/sections/DividerSection.vue';
import BreadCrumbsSection from '../components/sections/BreadCrumbsSection.vue';
import DropdownSection from '../components/sections/DropdownSection.vue';
import MenuSection from '../components/sections/MenuSection.vue';
import PageHeaderSection from '../components/sections/PageHeaderSection.vue';
import PaginationSection from '../components/sections/PaginationSection.vue';
import StepsSection from '../components/sections/StepsSection.vue';
import AutoCompleteSection from '../components/sections/AutoCompleteSection.vue';
import CascaderSection from '../components/sections/CascaderSection.vue';
import CheckboxSection from '../components/sections/CheckboxSection.vue';
import DatePickerSection from '../components/sections/DatePickerSection.vue';
import InputSection from '../components/sections/InputSection.vue';
import InputNumberSection from '../components/sections/InputNumberSection.vue';
import RadioButtonSection from '../components/sections/RadioButtonSection.vue';
import RateSection from '../components/sections/RateSection.vue';
import SelectSection from '../components/sections/SelectSection.vue';
import SearchSelectSection from '../components/sections/SearchSelectSection.vue';
import SliderSection from '../components/sections/SliderSection.vue';
import SwitchSection from '../components/sections/SwitchSection.vue';
import ModalSection from '../components/sections/ModalSection.vue';
import TagSection from '../components/sections/TagSection.vue';
import TableSection from '../components/sections/TableSection.vue';
import AlertSection from '../components/sections/AlertSection.vue';
import TooltipSection from '../components/sections/TooltipSection.vue';
import ColorsSection from '../components/sections/ColorsSection.vue';
import LineHeightSection from '../components/sections/LineHeightSection.vue';
import IconsSection from '../components/sections/IconsSection.vue';
import CompositionsSection from '../components/sections/CompositionsSection.vue';
import CompositionsDefaultSection from '../components/sections/CompositionsDefaultSection.vue';
import FloaterSection from '../components/sections/FloaterSection.vue';

import ExpositionCard from '../components/ExpositionCard.vue';
</script>

<style scoped lang="scss">
.main-content {
  display: flex;
  flex-flow: column;
  width: 100%;
  gap: 50px;
}
</style>