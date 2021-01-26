import { h, withCtx } from 'vue'
import { icons } from "feather-icons";

export default {
  props: {
    name: String,
  },
  render(props: { name: string | number; }, ctx: { attrs: any; }) {
    const svg = icons[props.name].toSvg()
    return h('svg', {}, [svg.replace(/<svg([^>]+)>/, ``).replace(/<\/svg>/, ``)])
  },
}
