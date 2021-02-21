import { h } from 'vue'
import { icons } from "feather-icons";

export default {
  props: {
    name: String,
  },
  render(props: { name: string | number; }) {
    const { attrs, contents } = icons[props.name]
    return h('svg', {...attrs, innerHTML: contents})
  },
}
