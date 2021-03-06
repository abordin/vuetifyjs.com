export default {
  header: 'Jumbotron',
  headerText: 'Jumbotron представляет собой гибкий вызов компонента действия. Поддержка фоновых изображений, наложения градиента и многое другое.',
  components: [
    'v-jumbotron'
  ],
  examples: [{
    usage: {
      header: 'Использование',
      desc: ''
    },
    color: {
      header: 'Пользовательский цвет',
      desc: 'Применение специального фонового цвета'
    },
    gradient: {
      header: 'Градиент',
      desc: 'Более подробную информацию о градиентах можно найти [здесь](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient)'
    },
    gradientWithImage: {
      header: 'Градиент с изображением',
      desc: 'Более подробную информацию о градиентах можно найти [здесь](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient)'
    }
  }],
  props: {
    gradient: 'Применение градиентного фона. Если используется с **src** prop, наложите его',
    src: 'Img src'
  }
}
