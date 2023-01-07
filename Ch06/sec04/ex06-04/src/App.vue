<template>
  <v-app>
    <v-content>
      <v-container>
        <v-card max-width="400">
          <v-img src="http://placeimg.com/400/300/tech?t=1672983155327" aspect-ratio="2.3"></v-img>
          <v-card-text>
            <div>
              <h2 class="title primary--text mb-2">시대정신 선도</h2>
              버추얼 컴퍼니에 관심을 가져 주셔서 감사합니다. 버추얼 컴퍼니는 오랜 역사를 지니며 그동안 크게 발전했습니다.
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="red white--text">확인</v-btn>
            <v-btn outlined color="red">취소</v-btn>
            <v-btn background-color="#9C27B0">취소</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
