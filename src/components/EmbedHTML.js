import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `
<style>
body {
	background-color: #333;
	color: #fff;
}

hr {
	border-color: #fff;
}

.logo {
	width: 150px;
}

.gsap-btn {
	background-color: #73b102;
	color: #fff;
}

.gsap-btn:hover,
.gsap-btn:active,
.gsap-btn:focus {
	background-color: #88ce02;
}

.media-body {
	color: #333;
}

.card-element {
	opacity: 0;
	visibility: hidden;
}

</style>
<div id="root"></div>
`;

const EmbedHTML = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		ref.current.innerHTML = customHtml;
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedHTML)({
	name: "EmbedHTML",
	normalize: true,
	mixins: true
});