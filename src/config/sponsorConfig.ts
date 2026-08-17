import type { SponsorConfig } from "../types/config";

export const sponsorConfig: SponsorConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 赞助用途说明
	usage:
		"Your support helps us maintain the site and create more quality content. Thank you for your generosity!",

	// 是否显示赞助者列表

	showSponsorsList: true,

	// 是否在文章详情页底部显示赞助按钮
	showButtonInPost: true,

	// 赞助方式列表
	methods: [
		// {
		// 	name: "Alipay",
		// 	icon: "fa6-brands:alipay",
		// 	// 收款码图片路径（需要放在 public 目录下）
		// 	qrCode: "/assets/images/sponsor/alipay.png",
		// 	link: "",
		// 	description: "Support via Alipay QR code",
		// 	enabled: true,
		// },
		// {
		// 	name: "WeChat",
		// 	icon: "fa6-brands:weixin",
		// 	qrCode: "/assets/images/sponsor/wechat.png",
		// 	link: "",
		// 	description: "Support via WeChat QR code",
		// 	enabled: true,
		// },
		{
			name: "Afdian",
			icon: "simple-icons:afdian",
			qrCode: "",
			link: "https://afdian.com",
			description: "Support via Afdian",
			enabled: true,
		},
		{
			name: "Github",
			icon: "fa6-brands:github",
			qrCode: "",
			link: "https://github.com/Chaosnap",
			description: "Giving a star is the greatest support",
			enabled: true,
		},
	],

	// 赞助者列表（可选）
	sponsors: [
		// 示例：已实名赞助者
		{
			name: "Yuki",
			amount: "$50",
			date: "2025-10-01",
			message: "Thank you for your great content!",
		},

		// 示例：匿名赞助者
		{
			name: "Anonymous",
			amount: "$20",
			date: "2025-10-01",
		},
	],
};
