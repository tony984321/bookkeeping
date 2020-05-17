<template>
  <div class="keyBoard">
    <div class="output">
      {{output}}
    </div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="calendarToggle">
        <i :class="`iconfont icon-rili`"></i>
        {{formattedDate}}
      </button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent">.</button>
      <button @click="ok">OK</button>
    </div>
    <Calendar
      :calendarShow.sync="calendarShow"
      :defaultDate="date"
      @onContext="onContext"
      @calendarClose="calendarClose"
    />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import { format } from "date-fns";
  import Calendar from "../../Common/Calendar/index.vue";

  @Component({
    components: { Calendar }
  })

  export default class KeyBoard extends Vue {
    output = "0";
    date = new Date();
    calendarShow = false;

    get formattedDate() {
      return format(new Date(this.date), 'MMM do');
    }

    inputContent(event: MouseEvent) {
      const button = (event.target as HTMLButtonElement);
      const input = button.textContent!;

      if (this.output.length === 16) { return; }

      if (this.output === '0') {
        if ('0123456789'.indexOf(input) >= 0) {
          return this.output = input;
        }
        return this.output += input;
      }

      if (this.output.indexOf('.') >= 0 && input === '.') {return;}

      this.output += input;
    }

    remove() {
      if (this.output.length === 1) {
        this.output = '0';
      } else {
        this.output = this.output.slice(0, -1);
      }
    }

    clear() {
      this.output = '0';
    }

    ok() {
      const number = parseFloat(this.output);
      this.output = '0';
      if(number > 0) {
        this.$emit('createDetail', number, this.date);
        this.$emit('closeKeyboard');
      }else {
        alert('请输入金额')
      }
    }

    calendarToggle() {
      this.calendarShow = !this.calendarShow;
    }

    calendarClose() {
      this.calendarShow = false;
    }

    onContext(ctx: any) {
      this.date = ctx.selectedDate || new Date();
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/color.scss";

  %clearFix {
    &::after {
      content: '';
      clear: both;
      display: block;
    }
  }

  .keyBoard {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 58px;
    animation: fadeInDown 1s ease;
    @-webkit-keyframes fadeInDown
    {
      from {
        opacity:0;
        -webkit-transform: translate(0,1000px);
        transform: translate(0,1000px);
      }
      to {
        opacity:1;
        -webkit-transform: translate(0,0);
        transform: translate(0,0);
      }
    }

    .output {
      @extend %clearFix;
      background: #fff;
      font-size: 36px;
      padding: 0 16px;
      text-align: right;
      color: $success;
      position: relative;
      line-height: 60px;
      height: 60px;

      .date {
        position: absolute;
        padding: 0 10px;
        height: 60px;
        background: $main_color;
        left: 0;
        top: 0;
        font-size: 14px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .buttons {
      @extend %clearFix;
      > button {
        width: 25%;
        height: 64px;
        float: left;
        background: transparent;
        border: none;

        &:focus {
          outline:0;
        }

        &:active {
          background-color: $main_color !important;
          color: #fff;
        }

        &.zero {
          width: 25*2%;
        }

        $bg: #F2F2F2;

        &:nth-child(1) {
          background: $bg;
        }

        &:nth-child(2), &:nth-child(5) {
          background: darken($bg, 4%);
        }

        &:nth-child(3), &:nth-child(6), &:nth-child(9) {
          background: darken($bg, 4*2%);
        }

        &:nth-child(4), &:nth-child(7), &:nth-child(10) {
          background: darken($bg, 4*3%);
        }

        &:nth-child(8), &:nth-child(11), &:nth-child(13) {
          background: darken($bg, 4*4%);
        }

        &:nth-child(12), &:nth-child(14)  {
          background: darken($bg, 4*5%);
        }

        &:nth-child(15) {
          background: darken($bg, 4*6%);
        }
      }
    }
  }
</style>
