<template>
    <div class="principal-card">
        <div class="card-background"></div>
        <div class="icon-background">
            <Icon :name="props.iconName" class="w-10 h-10" style="color: #F8ADE2;" />
        </div>

        <div class="title">
            <h1 :style="props.style" class="font-dela text-xl">{{props.title}}</h1>
        </div>

        <div class="info">
            <div v-if="props.isInfo" class="text-info">{{props.total}}</div>
            <div v-else class="text-info">{{props.current}}/{{props.total}}</div>
        </div>
    </div>
</template>

<script setup>
  const props = defineProps({
        isInfo: false,
        iconName : '',
        title : '',
        current : '',
        total : '',
        style: ''
    })
</script>

<style scoped>
.principal-card,
.principal-card * {
  box-sizing: border-box;
}
.principal-card {
  width: 256px;
  height: 69px;
  position: relative;
}
.card-background {
  background: #de1e98;
  background-image: url('/card_bg.svg');
  background-repeat: no-repeat;
  background-position: right;
  border-radius: 10px;
  background-size: 190px;
  width: 256px;
  height: 69px;
  position: absolute;
  left: 0px;
  top: 0px;
}

.icon-background {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.17);
  border-radius: 14px;
  width: 51.36px;
  height: 52.64px;
  position: absolute;
  left: 10px;
  top: 8px;
  box-shadow: 0px 4px 4px 0px rgba(248, 173, 226, 0.08);
}

.title {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 172px;
  height: 20px;
  position: absolute;
  left: 71px;
  top: 7px;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 47px;
  height: 20px;
  position: absolute;
  left: 126px;
  top: 21px;
}
.text-info {
  color: #f8ade2;
  text-align: center;
  font: 500 21px/63px "Vibur";
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>