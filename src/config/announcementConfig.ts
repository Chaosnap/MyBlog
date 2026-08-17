import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "Announcement",

	// 公告内容
	content: "Welcome to GuanHua's blog!",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "Learn More",
		// 链接 URL
		url: "https://Chaosnap.github.io/",
		// 内部链接
		external: false,
	},
};
