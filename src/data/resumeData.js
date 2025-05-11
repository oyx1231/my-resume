// src/data/resumeData.js
export const profile = {
    name: "你的名字",
    title: "你的职称 (例如：前端工程师)",
    email: "your.email@example.com",
    phone: "+86 138 0013 8000",
    linkedin: "linkedin.com/in/yourprofile",
    github: "github.com/yourusername",
    website: "yourwebsite.com", // 可选
    avatar: "/profile.jpg" // 放在 public 目录下
  };
  
  export const about = `
    这里是关于你的一段简洁介绍。
    突出你的核心技能和职业目标。
    保持简短精炼。
  `;
  
  export const experiences = [
    {
      company: "公司名称 A",
      role: "职位名称",
      period: "2021年3月 - 至今",
      description: [
        "职责描述1：完成 XX 项目，使用 XX 技术栈。",
        "职责描述2：优化 XX 模块性能，提升 XX%。",
        "职责描述3：参与团队代码审查和知识分享。"
      ]
    },
    {
      company: "公司名称 B",
      role: "职位名称",
      period: "2019年7月 - 2021年2月",
      description: [
        "职责描述1...",
        "职责描述2..."
      ]
    }
  ];
  
  export const education = [
    {
      institution: "大学名称",
      degree: "学位 - 专业",
      period: "2015年9月 - 2019年6月"
    }
  ];
  
  export const skills = {
    languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3/Sass"],
    frameworks: ["React", "Vue.js", "Astro", "Node.js", "Express"],
    tools: ["Git", "Webpack", "Docker", "VS Code", "Figma"],
    others: ["敏捷开发", "团队协作", "问题解决"]
  };
  
  export const projects = [ // 可选
    {
      name: "项目名称 A",
      description: "项目简介，使用了什么技术，解决了什么问题。",
      link: "https://github.com/yourusername/project-a" // 可选
    }
  ];