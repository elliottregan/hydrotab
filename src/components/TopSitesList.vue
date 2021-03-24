<template>
  <ul>
    <li v-for="site in topSites" :key="site.url">
      <a :href="site.url" class="topsite-link">
        <img v-if="site.favicon" :src="site.favicon" alt="asdf" class="topsite-link__icon favicon-img">
        <Icon name="link" v-else  class="topsite-link__icon favicon-fallback"/>
        <span class="topsite-link__title">{{ site.title }}</span>
        <span class="topsite-link__url">{{ getUrlOrigin(site.url) }}</span>
      </a>
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
      const faviconUrl = this.getUrlOrigin(site.url) + '/favicon.ico'
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
    },
    getUrlOrigin(url:string): string {
      return new URL(url).origin
    }
  },
  async created() {
    if (import.meta.env.MODE === 'browser') {
      this.topSites = await browser.topSites.get();
    }
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
  max-width: 100%;
}

.topsite-link {
  display: flex;
  align-items: center;
  margin: 0.75em 0;
  color: inherit;

  &__title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 1rem;
    min-width: 0;
  }

  &__url {
    opacity: 0.65;
    margin-left: auto;
  }

  &__icon {
    display: inline-block;
    flex-shrink: 0;
  }

}

.favicon-img {
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
