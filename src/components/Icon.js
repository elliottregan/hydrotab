import { h } from 'vue';
import { icons } from "feather-icons";
export default {
    props: {
        name: String,
    },
    render(props, ctx) {
        const svg = icons[props.name].toSvg();
        return h('svg', {}, [svg.replace(/<svg([^>]+)>/, ``).replace(/<\/svg>/, ``)]);
    },
};
//# sourceMappingURL=Icon.js.map