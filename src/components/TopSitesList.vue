<template>
  <ul>
    <li v-for="site in topSites" :key="site.url">
      <img v-if="site.favicon" :src="site.favicon" alt="asdf" class="favicon-img">
      <Icon name="link" v-else  class="favicon-fallback"/>
      <a :href="site.url">{{ site.title }}</a>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Icon from "../components/Icon";

export default defineComponent({
  components: {
    Icon,
  },
  data() {
    return {
      topSites: [
        {
          title: "reddit: the front page of the internet",
          url: "https://old.reddit.com/",
        },
        { title: "Nautilus | Science Connected", url: "http://nautil.us/" },
        { title: "Hydrotab", url: "http://localhost:3000/#/" },
        {
          title: "Login Screen – behind the scenes | Hacker News",
          url: "http://news.ycombinator.com/item?id=4640986",
        },
        { title: "Google", url: "https://www.google.com/" },
        {
          title:
            "Owltastic • Freelance web design and development by Meagan Fisher Couldwell",
          url: "http://owltastic.com/",
        },
        {
          title:
            "Dribbble - Discover the World’s Top Designers & Creative Professionals",
          url: "http://dribbble.com/",
        },
        {
          title: "Buy domain name - Cheap domain names from $1.37 - Namecheap",
          url: "http://namecheap.com/",
        },
        { title: "Hacker News", url: "https://news.ycombinator.com/" },
        { title: "Hydrotab", url: "http://localhost:3000/settings" },
      ],
    };
  },
  methods: {
    fetchFavicon(site) {
      const faviconUrl = new URL(site.url).origin + '/favicon.ico'
      let fetchIcon = new Promise((resolve, reject) => {
        const preload = new Image();
        preload.addEventListener('load', () => {
          resolve(faviconUrl)
        });
        preload.addEventListener('error', () => {
          reject('')
        });
        preload.src = faviconUrl
      })

      fetchIcon
        .then(result => {
          return site.favicon = result
        })
        .catch(result => {
          return site.favicon = result
        })
    }
  },
  created() {
    this.topSites.forEach(site => {
      this.fetchFavicon(site)
    })
  },
  watch: {
    topSites(sites) {
      sites.forEach(site => this.fetchFavicon(site))
    }
  }
});
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  margin: 0.5em 0;

  a {
    color: inherit;
  }
}

.favicon-img {
  display: inline-block;
  height: 1.4em;
  width: 1.4em;
  margin-right: 0.5em;
  margin-left: -0.1em;
}

.favicon-fallback {
    height: 1.2em;
    width: 1.2em;
    margin-right: 0.6em;
  }
</style>
