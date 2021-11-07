<template>
  <div
    @touchstart="touchStart"
    @touchmove.prevent="touchMove"
    @touchend="touchEnd"
    @click.prevent="imageClick(current)"
    :style="[swiperStyle]"
    class="k-swiper"
  >
    <img
      class="k-swiper-image"
      :style="[
        imageStyle,
        {
          left: use3D
            ? index == current
              ? 7 + moveX + paddingL + 100 * index + '%'
              : index > current
              ? 7 +
                moveX +
                paddingL +
                100 * index -
                12 * (index - current) +
                '%'
              : 7 +
                moveX +
                paddingL +
                100 * index -
                12 * (index - current) +
                '%'
            : moveX + paddingL + 100 * index + '%',
          width: use3D ? '86%' : '100%',
          height: use3D ? (index == current ? '90%' : '80%') : '100%',
          top: use3D ? (index == current ? '5%' : '10%') : '0%',
          borderRadius: radius + 'px',
          'pointer-events': 'none',
        },
      ]"
      :key="index"
      v-for="(item, index) in dataImages"
      :src="item.image"
    />
    <div
      :key="index + '-only'"
      v-for="(item, index) in dataImages"
      :style="{
        width: use3D ? '86%' : '100%',
        left: use3D
          ? index == current
            ? 7 + moveX + paddingL + 100 * index + '%'
            : index > current
            ? 7 + moveX + paddingL + 100 * index - 12 * (index - current) + '%'
            : 7 + moveX + paddingL + 100 * index - 12 * (index - current) + '%'
          : moveX + paddingL + 100 * index + '%',
        transitionDuration: transitionDuration + 'ms',
        top: index == current ? '65%' : '65%',
        height: use3D ? (index == current ? '25%' : '20%') : '35%',
        borderBottomLeftRadius: radius + 'px',
        borderBottomRightRadius: radius + 'px',
      }"
      v-show="showTitle"
      class="k-swiper-title-box"
    >
      <div>{{ images[index].title }}</div>
    </div>
    <div v-if="indicator != 'none' && indicator != 'num'" class="k-swiper-indicator-box">
      <div
        @touchmove.stop
        @touchstart.stop
        @touchend.stop
        @click.stop="switchDicator ? (current = i) : 0"
        class="normal"
        :style="[
          dicatorStyle,
          {
            backgroundColor: i == current ? 'white' : 'black',
            opacity: i == current ? '0.6' : '0.3',
            width:
              indicator == 'bar'
                ? i == current
                  ? '16px'
                  : '16px'
                : i == current
                ? '16px'
                : '5px',
            borderRadius:
              indicator == 'bar'
                ? i == current
                  ? '100px'
                  : '100px'
                : i == current
                ? '20px'
                : '100%',
          },
        ]"
        :key="i"
        v-for="i in dataImages.length ? dataImages.length - 2 : null"
      ></div>
    </div>
    <div
      @touchmove.stop
      @touchstart.stop
      @touchend.stop
      v-else-if="indicator != 'none'"
      class="k-swiper-indicator-box"
    >
      <div
        style="
          color: rgba(255, 255, 255, 0.6);
          backgroundcolor: rgba(0, 0, 0, 0.3);
          borderradius: 10px;
          fontsize: 13px;
          paddingleft: 10px;
          paddingright: 10px;
          paddingbottom: 2px;
        "
      >
        {{
        current == 0
        ? images.length - 2
        : current == dataImages.length - 1
        ? 1
        : current
        }}/{{ images.length - 2 }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "k-swiper",
  data() {
    return {
      //当前轮播位置
      current: 1,
      //过渡动画时间，单位ms
      transitionDuration: 500,
      //图片的left
      paddingL: -100,
      dataImages: [],
      //按下时X坐标
      startX: -1,
      ID: 0,
      moveX: 0,
      //手指按下数量
      finger: 0,
      //禁用触摸事件
      stop: false
    };
  },
  mounted() {
    //把父组件的数组赋值给data
    this.dataImages = this.images;
    this.dataImages.push(this.images[0]);
    this.dataImages.splice(0, 0, this.images[this.images.length - 2]);
    //挂载后启动自动播放
    if (this.play) {
      this.ID = setInterval(this.playLogic, this.duration);
    }
  },
  watch: {
    //观察current变量的变化来设置paddingL，互相绑定
    current() {
      this.paddingL = this.current * 100 * -1;
    },
    //观察播放时间间隔的变化
    duration(value) {
      clearInterval(this.ID);
      this.ID = setInterval(this.playLogic, value);
    },
    //观察是否自动播放的变化
    play(value) {
      if (value) {
        this.ID = setInterval(this.playLogic, this.duration);
      } else {
        clearInterval(this.ID);
      }
    }
  },
  methods: {
    //播放逻辑处理
    playLogic() {
      if (this.current == this.dataImages.length - 1) {
        this.current = 0;
      } else {
        this.current++;
      }
      setTimeout(this.check, this.transitionDuration);
    },
    //检查轮播状态
    check() {
      let emitData;
      if (this.current == 0) {
        emitData = this.images.length - 1;
        this.transitionDuration = 0;
        this.current = this.dataImages.length - 2;
        setTimeout(this.back, 20);
      } else if (this.current == this.dataImages.length - 1) {
        emitData = 0;
        this.transitionDuration = 0;
        this.current = 1;
        setTimeout(this.back, 20);
      } else {
        emitData = this.current - 1;
      }
      this.stop = false;
      //给父组件发射轮播图切换事件
      this.$emit("change", emitData);
    },
    //以顺雷不及掩耳之势调转位置
    back() {
      this.transitionDuration = 500;
    },
    //监听鼠标按下事件
    touchStart(event) {
      if (!this.touch) return;
      clearInterval(this.ID);
      this.finger++;
      if (this.stop) return;
      this.transitionDuration = 0;
      if (this.startX == -1) this.startX = event.touches[0].clientX;
    },
    //监听鼠标移动事件
    touchMove(event) {
      if (!this.touch) return;
      if (this.stop) return;
      if (this.startX == -1) return;
      this.moveX =
        ((event.touches[0].clientX - this.startX) / event.target.clientWidth) *
        80;
    },
    //监听鼠标抬起事件
    touchEnd() {
      if (!this.touch) return;
      this.finger--;
      if (this.finger == 0) {
        this.ID = setInterval(this.playLogic, this.duration);
      }
      if (this.stop) return;
      this.transitionDuration = 500;
      this.startX = -1;
      if (this.moveX > 15) {
        this.current--;
        this.stop = true;
        setTimeout(this.check, this.transitionDuration);
      } else if (this.moveX < -15) {
        this.stop = true;
        this.current++;
        setTimeout(this.check, this.transitionDuration);
      } else this.current = this.current;
      this.moveX = 0;
    },
    //图片被点击事件
    imageClick(index) {
      let indexT;
      if (index == 0) {
        indexT = this.images.length - 1;
      } else if (index == this.dataImages.length - 1) {
        indexT = 0;
      } else {
        indexT = index - 1;
      }
      //发射图片被点击事件
      this.$emit("imageClick", indexT);
      return false;
    }
  },
  computed: {
    //轮播图容器的样式
    swiperStyle() {
      const style = {};
      style.borderRadius = this.radius + "px";
      style.overflow = "hidden";
      style.position = "relative";
      return style;
    },
    //图片的样式
    imageStyle() {
      const style = {};
      style.width = "100%";
      style.position = "absolute";
      style.transitionDuration = this.transitionDuration + "ms";
      style.height = "100%";
      return style;
    },
    //指示器样式
    dicatorStyle() {
      const style = {};
      if (this.indicator == "circle") {
        style.height = "5px";
      } else if (this.indicator == "bar") {
        style.height = "5px";
      } else {
        style.borderRadius = "100%";
        style.width = "5px";
        style.height = "5px";
      }
      return style;
    }
  },
  props: {
    //轮播图片
    images: {
      type: Array,
      required: true
    },
    //指示器类型,circle原点，bar条形，num数字，none不显示
    indicator: {
      type: String,
      default: "circle"
    },
    //轮播图的圆角值,单位px
    radius: {
      type: Number,
      default: 10
    },
    //是否自动播放
    play: {
      type: Boolean,
      default: true
    },
    //播放时间间隔，单位ms
    duration: {
      type: Number,
      default: 3000
    },
    //是否开启指示器点击切换图片
    switchDicator: {
      type: Boolean,
      default: false
    },
    //是否允许滑动
    touch: {
      type: Boolean,
      default: true
    },
    //是否显示标题
    showTitle: {
      type: Boolean,
      default: true
    },
    //是否开启3D模式
    use3D: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style scoped>
@import "./swiper.css";
</style>
