export default (info) => {
    const icon = `
<input type="image"  src="./pages/elementos/icones/${info.name}-1.png"class="icon ${info.class}" id="icon${info.id}"> `;
    return icon
};