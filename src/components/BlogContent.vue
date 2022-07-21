<template>
  <div class="message-wrapper">
    <div class="message-content">
      <h1>{{blog.title}}</h1>
      <h3>author:{{blog.email}} ------ date: {{blog.date}} ------ location:{{blog.venue}}</h3>
      <br />
      <h4>Blog content:</h4>
      <p>
        <br />
        {{blog.content}}
        is very clean and nice.The equipments are quite new :)
        <br />
        As a resident I really like this place because I can enjoy the nice <br />
        view while doing things. Feels really great to work with a view. <br />
        The picture below is taken when I was at this place. <br />
        10/10 would recommend! <br />
        :)
      </p>
    </div>

    <div class="photo">
      <img :src="require(`../assets/blogCards/${blog.cover}.jpeg`)" alt=""/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogContent',
  props: ['blog'],
  Components: {},
};
</script>

<style lang="scss" scoped>
.message-wrapper {
  color: #271e05;
  display: flex;
  flex-direction: row;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: #fff5d1;
  @media (min-width: 600px) {
    min-height: 650px;
    max-height: 650px;
    flex-direction: column;
  }

  .message-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 4;
    order: 2;
    @media (min-width: 700px) {
      order: 1;
    }
    @media (min-width: 800px) {
      flex: 3;
    }

    h4 {
      position: relative;
      left: -160px;
      margin-bottom: 4px;
    }

    p {
      border: #135c97ae;
      border-style: double;

      position: relative;
      left: 1px;
      font-size: 14px;
    }

    h3 {
      color: #3a393781;
      position: relative;
      left: -50px;
      font-size: 12px;
      text-align: left;
    }

    .link {
      display: inline-flex;
      position: relative;
      font-size: 12px;
      left: -200px;
      margin-top: 100px;
      padding-bottom: 2px;
      border-bottom: 1px solid;
      &:hover {
        color: #135c97ae;
      }
    }
  }
}

.photo {
  order: 1;
  flex: 2;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  @media (min-width: 700px) {
    order: 2;
  }
  @media (min-width: 800px) {
    flex: 4;
  }

  img {
    height: 400px;
    width: 450px;
    position: relative;
    left: 500px;
    display: float;
    object-fit: cover;
  }
}
</style>