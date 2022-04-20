import { RouterView, RouterLink } from "vue-router";

const App = {
  components: { RouterView, RouterLink },

  template: `
    <nav>
      <ul>
        <li>
          <router-link to="/">App</router-link>
        </li>

        <li>
          <router-link to="/react">React App</router-link>
        </li>

        <li>
          <router-link to="/nested/react">Nested React App</router-link>
        </li>

        <li>
          <router-link to="/vue">Vue App</router-link>
        </li>

        <li>
          <router-link to="/nested/vue">Nested Vue App</router-link>
        </li>
      </ul>
    </nav>

    <div
      :style="{
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: 'cyan',
      }"
    >
      <h1>App ({{ $route.matched.at(-1)?.path }})</h1>
    </div>

    <router-view></router-view>
  `,
};

export default App;
